<script setup lang="ts">
useHead({
  title: 'Rahale Travels — Your Trusted Kerala Travel Partner',
  meta: [
    { name: 'description', content: 'Explore Kerala with Rahale — your local travel partner in Kottakkal and Kochi. Customized itineraries, room bookings, and travel support across Kerala.' }
  ]
})

const whyChoose = [
  { icon: '🗺️', title: 'Personalized Itineraries', desc: 'Every trip is crafted around your preferences, pace, and budget — no cookie-cutter packages.' },
  { icon: '🏨', title: 'Verified Rooms', desc: 'From hillside homestays to beachfront resorts — handpicked and verified stays at the best rates.' },
  { icon: '🤝', title: 'Local Expertise', desc: 'Based in Kottakkal and Kochi, we know Kerala\'s hidden gems like no one else.' },
  { icon: '🚗', title: 'Reliable Transport', desc: 'Clean, comfortable vehicles with experienced drivers for seamless journeys across Kerala.' },
  { icon: '📞', title: 'Always Reachable', desc: 'WhatsApp, phone, or email — our team responds quickly and stays connected throughout your trip.' },
  { icon: '💰', title: 'Fair Pricing', desc: 'Transparent pricing with no hidden charges. We negotiate the best deals through our local network.' }
]

const destinations = [
  { name: 'Munnar', desc: 'Tea gardens & misty hills', img: 'https://images.unsplash.com/photo-1596327663273-2e06c747f480?q=80&w=800&auto=format&fit=crop' },
  { name: 'Alleppey', desc: 'Backwaters & houseboats', img: 'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?q=80&w=800&auto=format&fit=crop' },
  { name: 'Wayanad', desc: 'Wildlife & waterfalls', img: 'https://images.unsplash.com/photo-1583063852079-5e7e14d45809?q=80&w=800&auto=format&fit=crop' },
  { name: 'Kochi', desc: 'Culture & heritage', img: 'https://images.unsplash.com/photo-1625633671206-38d5e751859c?q=80&w=800&auto=format&fit=crop' }
]

const services = [
  { icon: '🏨', title: 'Room Booking', desc: 'Curated stays from budget homestays to luxury resorts across every Kerala destination.' },
  { icon: '🗺️', title: 'Trip Planning', desc: 'Complete itineraries tailored to your dates, group size, interests, and budget.' },
  { icon: '🚐', title: 'Transportation', desc: 'Cars, tempo travellers, and coaches with experienced local drivers.' }
]
</script>

<template>
  <div>
    <!-- ═══ HERO ═══ -->
    <section class="home-hero">
      <div class="home-hero-overlay" />
      <div class="home-hero-content">
        <span class="hero-badge">Kerala Travel Experts</span>
        <h1>Discover Kerala with <span class="text-orange-hero">Rahale</span></h1>
        <p class="page-hero-subtitle">
          Your local travel partner in Kottakkal &amp; Kochi — crafting personalized
          journeys, room bookings, and unforgettable experiences across Kerala.
        </p>
        <div class="hero-buttons">
          <NuxtLink to="/contact" class="btn btn-primary btn-lg">Plan Your Trip</NuxtLink>
          <NuxtLink to="/services" class="btn btn-ghost btn-lg">View Packages</NuxtLink>
        </div>
      </div>
    </section>

    <!-- ═══ INTRO ═══ -->
    <section class="bg-white">
      <div class="container">
        <div class="intro-layout">
          <div class="intro-text">
            <span class="section-tag">Who We Are</span>
            <h2>Your Kerala Journey Starts with Rahale</h2>
            <p>
              Rahale is a trusted travel agency based in Kottakkal, Malappuram, with
              an operational presence in Kochi. We specialize in personalized travel
              planning, verified room bookings, and on-ground support across all of Kerala.
            </p>
            <p>
              Whether you're planning a family holiday to the hills, a romantic backwater
              cruise, or a spiritual temple circuit — we handle every detail so you can
              focus on making memories.
            </p>
            <NuxtLink to="/about" class="btn-link">Learn more about us →</NuxtLink>
          </div>
          <div class="intro-image">
            <img
              src="https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=800&auto=format&fit=crop"
              alt="Kerala backwaters at sunset"
              loading="lazy"
            >
          </div>
        </div>
      </div>
    </section>

    <!-- ═══ WHY CHOOSE ═══ -->
    <section class="bg-cream">
      <div class="container">
        <div class="section-header">
          <span class="section-tag">Why Rahale</span>
          <h2>What Makes Us Different</h2>
          <p class="section-desc">Local connections, personal attention, and a passion for showcasing Kerala.</p>
        </div>
        <div class="grid-3">
          <div v-for="item in whyChoose" :key="item.title" class="card text-center">
            <div class="icon-circle icon-circle-lg" style="margin: 0 auto 1.25rem;">{{ item.icon }}</div>
            <h4>{{ item.title }}</h4>
            <p class="text-muted" style="margin: 0; font-size: 0.9rem;">{{ item.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══ FEATURED DESTINATIONS ═══ -->
    <section class="bg-white">
      <div class="container">
        <div class="section-header">
          <span class="section-tag">Popular Destinations</span>
          <h2>Explore Kerala's Finest</h2>
          <p class="section-desc">Handpicked destinations curated by our local travel experts.</p>
        </div>
        <div class="grid-4 dest-grid">
          <NuxtLink
            v-for="dest in destinations"
            :key="dest.name"
            to="/destinations"
            class="dest-card"
          >
            <div class="dest-img-wrap">
              <img :src="dest.img" :alt="dest.name" loading="lazy">
            </div>
            <div class="dest-info">
              <h4>{{ dest.name }}</h4>
              <p>{{ dest.desc }}</p>
            </div>
          </NuxtLink>
        </div>
        <div class="text-center" style="margin-top: 2.5rem;">
          <NuxtLink to="/destinations" class="btn btn-outline">View All Destinations</NuxtLink>
        </div>
      </div>
    </section>

    <!-- ═══ SERVICES PREVIEW ═══ -->
    <section class="bg-cream">
      <div class="container">
        <div class="section-header">
          <span class="section-tag">Our Services</span>
          <h2>Everything You Need for a Kerala Trip</h2>
        </div>
        <div class="grid-3">
          <div v-for="s in services" :key="s.title" class="service-preview-card card">
            <div class="icon-circle" style="margin-bottom: 1.25rem;">{{ s.icon }}</div>
            <h4>{{ s.title }}</h4>
            <p style="font-size: 0.9rem; color: var(--text-muted); margin-bottom: 1rem;">{{ s.desc }}</p>
            <NuxtLink to="/services" class="btn-link" style="font-size: 0.85rem;">Learn more →</NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══ REVIEWS PREVIEW ═══ -->
    <section class="bg-white">
      <div class="container">
        <div class="reviews-preview">
          <div class="reviews-preview-left">
            <span class="section-tag">Google Reviews</span>
            <h2>Trusted by Travelers</h2>
            <div class="reviews-rating-row">
              <span class="reviews-big-score">4.8</span>
              <div>
                <div class="reviews-stars">
                  <span v-for="i in 5" :key="i" class="star star-filled">★</span>
                </div>
                <p style="margin: 0; font-size: 0.85rem; color: var(--text-muted);">Based on 124+ Google reviews</p>
              </div>
            </div>
            <NuxtLink to="/reviews" class="btn btn-outline" style="margin-top: 1.5rem;">Read All Reviews</NuxtLink>
          </div>
          <div class="reviews-preview-right">
            <div class="mini-review-card">
              <div class="mini-stars">
                <span v-for="i in 5" :key="i" class="star star-filled" style="font-size: 0.85rem;">★</span>
              </div>
              <p>"Rahale organized our complete Munnar–Thekkady trip and it was perfect. The rooms were exactly as promised."</p>
              <span class="mini-reviewer">— Anoop K.</span>
            </div>
            <div class="mini-review-card">
              <div class="mini-stars">
                <span v-for="i in 5" :key="i" class="star star-filled" style="font-size: 0.85rem;">★</span>
              </div>
              <p>"Best travel agency in Malappuram! They arranged our Wayanad trip at very short notice."</p>
              <span class="mini-reviewer">— Rajesh N.</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══ CTA ═══ -->
    <section class="cta-banner">
      <div class="container text-center">
        <h2>Ready to Explore Kerala?</h2>
        <p>Let us plan your perfect getaway — from hills to backwaters, we've got you covered.</p>
        <NuxtLink to="/contact" class="btn btn-white btn-lg">Get in Touch</NuxtLink>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* Hero */
.home-hero {
  position: relative;
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: url('https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=1920&auto=format&fit=crop') center/cover no-repeat;
}

.home-hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    160deg,
    rgba(30, 30, 30, 0.65) 0%,
    rgba(212, 98, 42, 0.45) 100%
  );
  z-index: 1;
}

.home-hero-content {
  position: relative;
  z-index: 2;
  text-align: center;
  padding: 2rem;
  max-width: 750px;
}

.home-hero h1 {
  font-size: 3.5rem;
  color: #fff;
  margin-bottom: 1rem;
}

.text-orange-hero { color: var(--primary-light); }

.hero-buttons {
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
}

/* Intro */
.intro-layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.intro-text h2 { margin-bottom: 1rem; }

.intro-image img {
  width: 100%;
  height: 420px;
  object-fit: cover;
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-lg);
}

/* Destination cards */
.dest-card {
  border-radius: var(--radius-lg);
  overflow: hidden;
  background: var(--bg-white);
  border: 1px solid var(--border-light);
  box-shadow: var(--shadow-sm);
  transition: var(--ease);
  display: block;
}

.dest-card:hover {
  transform: translateY(-6px);
  box-shadow: var(--shadow-lg);
}

.dest-card:hover .dest-img-wrap img {
  transform: scale(1.06);
}

.dest-img-wrap {
  height: 200px;
  overflow: hidden;
}

.dest-img-wrap img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.dest-info {
  padding: 1.25rem;
}

.dest-info h4 {
  margin-bottom: 0.25rem;
  font-size: 1.05rem;
}

.dest-info p {
  color: var(--text-muted);
  font-size: 0.85rem;
  margin: 0;
}

/* Reviews preview */
.reviews-preview {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 3rem;
  align-items: center;
}

.reviews-rating-row {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 1.25rem;
}

.reviews-big-score {
  font-size: 3.5rem;
  font-weight: 800;
  color: var(--text-heading);
  line-height: 1;
  letter-spacing: -2px;
}

.reviews-stars {
  display: flex;
  gap: 2px;
  margin-bottom: 0.25rem;
}

.reviews-stars .star { font-size: 1.2rem; }

.reviews-preview-right {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.mini-review-card {
  background: var(--bg-light);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-lg);
  padding: 1.5rem;
  transition: var(--ease);
}

.mini-review-card:hover {
  box-shadow: var(--shadow-md);
}

.mini-stars { margin-bottom: 0.5rem; }

.mini-review-card p {
  font-size: 0.9rem;
  font-style: italic;
  color: var(--text-body);
  margin-bottom: 0.5rem;
}

.mini-reviewer {
  font-size: 0.82rem;
  font-weight: 600;
  color: var(--text-muted);
}

/* Responsive */
@media (max-width: 768px) {
  .home-hero { min-height: 75vh; }
  .home-hero h1 { font-size: 2.4rem; }
  .intro-layout { grid-template-columns: 1fr; gap: 2rem; }
  .intro-image img { height: 280px; }
  .reviews-preview { grid-template-columns: 1fr; }
  .dest-grid { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 480px) {
  .home-hero h1 { font-size: 2rem; }
  .dest-grid { grid-template-columns: 1fr; }
}
</style>
