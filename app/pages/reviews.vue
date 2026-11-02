<script setup lang="ts">
useHead({
  title: 'Google Reviews — Rahale Travel Agency',
  meta: [
    { name: 'description', content: 'Read real Google reviews from travelers who explored Kerala with Rahale. Trusted local travel agency in Kottakkal and Kochi.' }
  ]
})

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

const { data, status } = await useFetch<ReviewsResponse>('/api/reviews')

const isLoading = computed(() => status.value === 'pending')
const hasError = computed(() => status.value === 'error' || !data.value)

const reviews = computed(() => data.value?.reviews ?? [])
const overallRating = computed(() => data.value?.rating ?? 4.8)
const totalReviews = computed(() => data.value?.totalReviews ?? 0)

const starsFor = (rating: number) => {
  const full = Math.floor(rating)
  const half = rating % 1 >= 0.5 ? 1 : 0
  const empty = 5 - full - half
  return { full, half, empty }
}

const getInitials = (name: string) => {
  return name.split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 2)
}

const nameHue = (name: string) => {
  let hash = 0
  for (const ch of name) hash = ch.charCodeAt(0) + ((hash << 5) - hash)
  return Math.abs(hash) % 360
}

const googleReviewsUrl = 'https://www.google.com/maps/place/Kottakkal,+Malappuram,+Kerala'
const leaveReviewUrl = 'https://search.google.com/local/writereview?placeid=YOUR_PLACE_ID'
</script>

<template>
  <div>
    <!-- ═══ HERO ═══ -->
    <section class="reviews-hero">
      <div class="hero-shapes">
        <div class="shape shape-1" />
        <div class="shape shape-2" />
        <div class="shape shape-3" />
      </div>
      <div class="container" style="position: relative; z-index: 2; text-align: center;">
        <span class="hero-badge" style="background: rgba(243,165,78,0.15); border-color: rgba(243,165,78,0.3); color: var(--primary-light);">★ Google Reviews</span>
        <h1 style="color: #fff; font-size: 3rem;">What Travelers Say About <span class="text-highlight">Rahale</span></h1>
        <p style="color: rgba(255,255,255,0.65) !important; max-width: 440px; margin: 0 auto;">Real feedback from our Google reviews.</p>
      </div>
    </section>

    <!-- ═══ RATING SUMMARY ═══ -->
    <section class="rating-section">
      <div class="container">
        <div class="rating-card card" style="max-width: 520px; margin: 0 auto; text-align: center; box-shadow: var(--shadow-xl); border-radius: var(--radius-xl);">
          <template v-if="isLoading">
            <div class="skel skel-score" />
            <div class="skel skel-stars" />
            <div class="skel skel-text" />
          </template>

          <template v-else-if="!hasError">
            <div class="big-score">{{ overallRating.toFixed(1) }}</div>
            <div class="stars-row">
              <span v-for="i in starsFor(overallRating).full" :key="'f'+i" class="star star-filled" style="font-size: 1.5rem;">★</span>
              <span v-for="i in starsFor(overallRating).half" :key="'h'+i" class="star star-half" style="font-size: 1.5rem;">★</span>
              <span v-for="i in starsFor(overallRating).empty" :key="'e'+i" class="star star-empty" style="font-size: 1.5rem;">★</span>
            </div>
            <p style="color: var(--text-muted); margin-bottom: 1rem;">Based on <strong>{{ totalReviews }}+</strong> Google reviews</p>
            <div class="google-badge">
              <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
              </svg>
              <span>Verified Google Reviews</span>
            </div>
          </template>

          <template v-else>
            <p style="font-size: 2rem; margin-bottom: 0.5rem;">⚠️</p>
            <p style="color: var(--text-muted); margin: 0;">Unable to load rating data right now.</p>
          </template>
        </div>
      </div>
    </section>

    <!-- ═══ REVIEWS GRID ═══ -->
    <section class="bg-cream">
      <div class="container">
        <div class="section-header">
          <span class="section-tag">Traveler Stories</span>
          <h2>Hear It From Our Guests</h2>
        </div>

        <!-- Loading -->
        <div v-if="isLoading" class="reviews-grid">
          <div v-for="n in 6" :key="n" class="card review-skel">
            <div class="skel-row">
              <div class="skel skel-circle" />
              <div class="skel-col"><div class="skel skel-name" /><div class="skel skel-date" /></div>
            </div>
            <div class="skel skel-line" />
            <div class="skel skel-line short" />
          </div>
        </div>

        <!-- Error -->
        <div v-else-if="hasError" class="reviews-empty card text-center" style="padding: 4rem 2rem;">
          <p style="font-size: 3rem; margin-bottom: 1rem;">📭</p>
          <h3>Couldn't Load Reviews</h3>
          <p style="color: var(--text-muted); max-width: 440px; margin: 0 auto 1.5rem;">We're having trouble connecting right now. Please try again later.</p>
          <a :href="googleReviewsUrl" target="_blank" rel="noopener noreferrer" class="btn btn-primary">View on Google Maps</a>
        </div>

        <!-- Reviews -->
        <div v-else class="reviews-grid">
          <article
            v-for="(review, idx) in reviews"
            :key="idx"
            class="review-card card"
            :style="{ animationDelay: `${idx * 0.08}s` }"
          >
            <div class="review-header">
              <div
                v-if="!review.profilePhoto"
                class="review-avatar"
                :style="{ background: `hsl(${nameHue(review.name)}, 55%, 50%)` }"
              >{{ getInitials(review.name) }}</div>
              <img v-else :src="review.profilePhoto" :alt="review.name" class="review-avatar-img">
              <div class="review-meta">
                <span class="review-name">{{ review.name }}</span>
                <span class="review-date">{{ review.date }}</span>
              </div>
            </div>
            <div style="margin-bottom: 0.75rem;">
              <span v-for="s in 5" :key="s" class="star" :class="s <= review.rating ? 'star-filled' : 'star-empty'">★</span>
            </div>
            <p class="review-text">{{ review.text }}</p>
          </article>
        </div>
      </div>
    </section>

    <!-- ═══ ACTION BUTTONS ═══ -->
    <section class="bg-white" style="padding-bottom: 5rem;">
      <div class="container">
        <div class="actions-card card" style="border-radius: var(--radius-xl); display: flex; align-items: center; justify-content: space-between; gap: 2rem;">
          <div>
            <h3 style="margin-bottom: 0.35rem;">Join Our Happy Travelers</h3>
            <p style="color: var(--text-muted); margin: 0; font-size: 0.92rem;">Your review helps fellow travelers plan their Kerala dream trip.</p>
          </div>
          <div class="actions-btns">
            <a :href="googleReviewsUrl" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-sm">Read More on Google</a>
            <a :href="leaveReviewUrl" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">★ Leave a Review</a>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══ TRUST ═══ -->
    <section class="bg-cream">
      <div class="container">
        <div class="section-header">
          <span class="section-tag">Why Trust Rahale</span>
          <h2>Backed by Real Experiences</h2>
        </div>
        <div class="grid-3">
          <div class="card text-center">
            <div class="icon-circle icon-circle-lg" style="margin: 0 auto 1.25rem;">💬</div>
            <h4>Real Customer Feedback</h4>
            <p style="font-size: 0.9rem; color: var(--text-muted); margin: 0;">Every review comes from actual travelers. No fakes, no inflated ratings — just honest experiences.</p>
          </div>
          <div class="card text-center">
            <div class="icon-circle icon-circle-lg" style="margin: 0 auto 1.25rem;">🤝</div>
            <h4>Trusted Kerala Travel Support</h4>
            <p style="font-size: 0.9rem; color: var(--text-muted); margin: 0;">End-to-end support from initial planning to on-ground assistance via our deep local network.</p>
          </div>
          <div class="card text-center">
            <div class="icon-circle icon-circle-lg" style="margin: 0 auto 1.25rem;">📍</div>
            <h4>Local Agency, Statewide Reach</h4>
            <p style="font-size: 0.9rem; color: var(--text-muted); margin: 0;">Based in Kottakkal &amp; Kochi, with travel and room connections spanning all of Kerala.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══ CTA ═══ -->
    <section class="cta-banner">
      <div class="container text-center">
        <h2>Ready to Create Your Own Story?</h2>
        <p>Let us plan your perfect Kerala getaway.</p>
        <NuxtLink to="/contact" class="btn btn-white btn-lg">Plan Your Trip</NuxtLink>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* Hero */
.reviews-hero {
  position: relative;
  padding: 7rem 0 5rem;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
  overflow: hidden;
}

.hero-shapes .shape {
  position: absolute;
  border-radius: 50%;
  opacity: 0.07;
  background: var(--primary-orange);
}
.shape-1 { width: 500px; height: 500px; top: -200px; right: -100px; }
.shape-2 { width: 300px; height: 300px; bottom: -120px; left: -80px; }
.shape-3 { width: 180px; height: 180px; top: 30%; left: 60%; opacity: 0.04; }

.text-highlight {
  background: linear-gradient(135deg, var(--primary-orange), var(--primary-light));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Rating */
.rating-section {
  padding: 0;
  margin-top: -2.5rem;
  position: relative;
  z-index: 3;
}

.big-score {
  font-size: 3.5rem;
  font-weight: 800;
  color: var(--text-heading);
  line-height: 1;
  margin-bottom: 0.5rem;
  letter-spacing: -2px;
}

.stars-row {
  display: flex;
  justify-content: center;
  gap: 3px;
  margin-bottom: 0.75rem;
}

.google-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  font-size: 0.78rem;
  font-weight: 500;
  color: var(--text-muted);
  background: var(--bg-light);
  padding: 0.35rem 0.9rem;
  border-radius: var(--radius-full);
}

/* Skeletons */
.skel {
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
  border-radius: var(--radius-sm);
}

@keyframes shimmer { 0% { background-position: 200% 0; } 100% { background-position: -200% 0; } }

.skel-score { width: 80px; height: 48px; margin: 0 auto 1rem; }
.skel-stars { width: 150px; height: 22px; margin: 0 auto 1rem; }
.skel-text { width: 180px; height: 14px; margin: 0 auto; }
.skel-row { display: flex; gap: 0.75rem; align-items: center; margin-bottom: 1rem; }
.skel-circle { width: 40px; height: 40px; border-radius: 50%; flex-shrink: 0; }
.skel-col { flex: 1; }
.skel-name { width: 110px; height: 13px; margin-bottom: 5px; }
.skel-date { width: 70px; height: 11px; }
.skel-line { width: 100%; height: 11px; margin-bottom: 7px; }
.skel-line.short { width: 65%; }

/* Reviews grid */
.reviews-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
  gap: 1.5rem;
}

.review-card {
  display: flex;
  flex-direction: column;
  animation: fadeInUp 0.5s ease both;
}

.review-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 0.65rem;
}

.review-avatar {
  width: 42px;
  height: 42px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-weight: 700;
  font-size: 0.82rem;
  flex-shrink: 0;
}

.review-avatar-img {
  width: 42px;
  height: 42px;
  border-radius: 50%;
  object-fit: cover;
}

.review-meta { display: flex; flex-direction: column; }
.review-name { font-weight: 600; font-size: 0.92rem; color: var(--text-heading); }
.review-date { font-size: 0.76rem; color: var(--text-muted); }

.review-text {
  font-size: 0.88rem;
  line-height: 1.65;
  color: var(--text-body);
  flex: 1;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  line-clamp: 5;
  -webkit-box-orient: vertical;
  overflow: hidden;
  margin: 0;
}

/* Actions */
.actions-btns {
  display: flex;
  gap: 0.75rem;
  flex-shrink: 0;
}

/* Responsive */
@media (max-width: 768px) {
  .reviews-hero { padding: 5rem 0 4rem; }
  .reviews-hero h1 { font-size: 2.2rem !important; }
  .big-score { font-size: 3rem; }
  .reviews-grid { grid-template-columns: 1fr; }
  .actions-card { flex-direction: column !important; text-align: center; }
  .actions-btns { flex-direction: column; width: 100%; }
  .actions-btns .btn { width: 100%; }
}
</style>
