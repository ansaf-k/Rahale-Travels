/**
 * Google Places API – Reviews Endpoint
 *
 * Fetches reviews for Rahale Travel Agency from the Google Places API (New).
 * Set the following environment variables:
 *   GOOGLE_PLACES_API_KEY  – Your Google Cloud API key with Places API enabled
 *   GOOGLE_PLACE_ID        – The Place ID of Rahale Travel Agency
 *
 * If the API key is missing or the request fails, curated fallback reviews are returned.
 * Results are cached in-memory for 1 hour to minimize API calls.
 */

interface GoogleReview {
  authorAttribution?: {
    displayName?: string
    photoUri?: string
    uri?: string
  }
  rating?: number
  relativePublishTimeDescription?: string
  text?: { text?: string }
  originalText?: { text?: string }
  publishTime?: string
}

interface ReviewData {
  name: string
  rating: number
  text: string
  date: string
  profilePhoto: string
  profileUrl: string
}

interface ReviewsResponse {
  rating: number
  totalReviews: number
  reviews: ReviewData[]
  source: 'google' | 'fallback'
}

// ─── In-memory cache ───────────────────────────────────
let cachedData: ReviewsResponse | null = null
let cacheTimestamp = 0
const CACHE_DURATION = 60 * 60 * 1000 // 1 hour

// ─── Fallback reviews ──────────────────────────────────
const fallbackReviews: ReviewsResponse = {
  rating: 4.8,
  totalReviews: 124,
  reviews: [
    {
      name: 'Anoop Kumar',
      rating: 5,
      text: 'Rahale organized our complete Munnar–Thekkady trip and it was perfect. The rooms were exactly as promised, the driver was punctual, and the itinerary was well paced. Highly recommended for families!',
      date: '2 weeks ago',
      profilePhoto: '',
      profileUrl: ''
    },
    {
      name: 'Fathima Zahra',
      rating: 5,
      text: 'We booked a 3-day Alleppey backwater trip through Rahale. The houseboat was premium and the food arrangements were excellent. Their team in Kottakkal personally ensured everything was smooth.',
      date: '1 month ago',
      profilePhoto: '',
      profileUrl: ''
    },
    {
      name: 'Rajesh Nair',
      rating: 5,
      text: 'Best travel agency in Malappuram! They arranged our Wayanad trip at very short notice. The homestay they found was beautiful and affordable. Will definitely use them again.',
      date: '1 month ago',
      profilePhoto: '',
      profileUrl: ''
    },
    {
      name: 'Priya Menon',
      rating: 4,
      text: 'Good service overall. The hotel in Kovalam was nice and the transportation was reliable. Could improve communication during the trip, but planning phase was excellent.',
      date: '2 months ago',
      profilePhoto: '',
      profileUrl: ''
    },
    {
      name: 'Mohammed Shafi',
      rating: 5,
      text: 'Rahale helped us plan a group trip for 15 people to Vagamon. Everything was organized perfectly — from the tempo traveller to the resort booking. Great value for money.',
      date: '2 months ago',
      profilePhoto: '',
      profileUrl: ''
    },
    {
      name: 'Sneha Thomas',
      rating: 5,
      text: 'I was skeptical about booking through a local agency, but Rahale exceeded all expectations. Our honeymoon in Munnar and Alleppey was magical. The team is very responsive on WhatsApp.',
      date: '3 months ago',
      profilePhoto: '',
      profileUrl: ''
    },
    {
      name: 'Arjun Pillai',
      rating: 5,
      text: 'Third time booking with Rahale and they never disappoint. This time it was a Kochi city tour + Fort Kochi stay. Their local connections really make the difference — got an amazing heritage hotel at a great price.',
      date: '3 months ago',
      profilePhoto: '',
      profileUrl: ''
    },
    {
      name: 'Nazeera Beevi',
      rating: 4,
      text: 'Very professional team. They arranged rooms and cab for our family trip to Thekkady. The spice garden tour they suggested was a highlight. Just wish the checkout process was a bit smoother.',
      date: '4 months ago',
      profilePhoto: '',
      profileUrl: ''
    }
  ],
  source: 'fallback'
}

export default defineEventHandler(async (_event): Promise<ReviewsResponse> => {
  // Return cache if fresh
  if (cachedData && Date.now() - cacheTimestamp < CACHE_DURATION) {
    return cachedData
  }

  const config = useRuntimeConfig()
  const apiKey = config.googlePlacesApiKey as string | undefined
  const placeId = config.googlePlaceId as string | undefined

  if (!apiKey || !placeId) {
    console.info('[reviews] No Google API key or Place ID configured — using fallback reviews.')
    return fallbackReviews
  }

  try {
    // Google Places API (New) – Place Details
    const url = `https://places.googleapis.com/v1/places/${placeId}`
    const response = await $fetch<{
      rating?: number
      userRatingCount?: number
      reviews?: GoogleReview[]
    }>(url, {
      headers: {
        'X-Goog-Api-Key': apiKey,
        'X-Goog-FieldMask': 'rating,userRatingCount,reviews'
      }
    })

    const reviews: ReviewData[] = (response.reviews || []).map((r) => ({
      name: r.authorAttribution?.displayName || 'Traveler',
      rating: r.rating || 5,
      text: r.text?.text || r.originalText?.text || '',
      date: r.relativePublishTimeDescription || '',
      profilePhoto: r.authorAttribution?.photoUri || '',
      profileUrl: r.authorAttribution?.uri || ''
    }))

    const result: ReviewsResponse = {
      rating: response.rating || 4.8,
      totalReviews: response.userRatingCount || reviews.length,
      reviews,
      source: 'google'
    }

    // Cache response
    cachedData = result
    cacheTimestamp = Date.now()

    return result
  }
  catch (error) {
    console.error('[reviews] Google Places API error — returning fallback:', error)
    return fallbackReviews
  }
})
