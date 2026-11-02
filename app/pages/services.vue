<script setup lang="ts">
useHead({
  title: 'Services & Packages — Rahale Travel Agency',
  meta: [
    { name: 'description', content: 'Explore Rahale\'s travel services — room booking, trip planning, customized itineraries, and transportation across Kerala. Based in Kottakkal & Kochi.' }
  ]
})

const services = [
  {
    icon: '🏨',
    title: 'Room Booking',
    desc: 'From hillside homestays to luxury backwater resorts — we arrange verified, comfortable stays at the best rates across Kerala.',
    features: ['Budget to luxury options', 'Personally verified properties', 'Best rate guarantee', 'Instant booking confirmation']
  },
  {
    icon: '🗺️',
    title: 'Custom Trip Planning',
    desc: 'Tell us your dates, interests, and budget — we\'ll design a complete itinerary with stays, transport, and experiences tailored to you.',
    features: ['Personalized itineraries', 'Family, couple & group plans', 'Flexible scheduling', 'Local insider recommendations']
  },
  {
    icon: '🚐',
    title: 'Transportation',
    desc: 'Reliable vehicles with experienced local drivers who know every route in Kerala — from winding hill roads to coastal highways.',
    features: ['Cars, SUVs & tempo travellers', 'Airport pickup & drop', 'Experienced local drivers', 'Clean, well-maintained vehicles']
  },
  {
    icon: '🧭',
    title: 'Travel Assistance',
    desc: 'From your first inquiry to your last day in Kerala — our team provides continuous support, recommendations, and coordination.',
    features: ['24/7 WhatsApp support', 'On-ground coordination', 'Restaurant & activity tips', 'Emergency assistance']
  }
]

const packages = [
  {
    title: 'Romantic Backwater Getaway',
    duration: '3 Days / 2 Nights',
    desc: 'Alleppey & Kumarakom with premium houseboat stay, candlelight dinner, and backwater cruise.',
    img: 'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?q=80&w=800&auto=format&fit=crop',
    tag: 'Couples'
  },
  {
    title: 'Hill Station & Waterfalls',
    duration: '4 Days / 3 Nights',
    desc: 'Explore the misty tea gardens of Munnar and the majestic waterfalls of Thekkady.',
    img: 'https://images.unsplash.com/photo-1596327663273-2e06c747f480?q=80&w=800&auto=format&fit=crop',
    tag: 'Nature'
  },
  {
    title: 'Family Kerala Explorer',
    duration: '5 Days / 4 Nights',
    desc: 'A perfect mix of hills, backwaters, and beaches — designed for families with kids and elders.',
    img: 'https://images.unsplash.com/photo-1583063852079-5e7e14d45809?q=80&w=800&auto=format&fit=crop',
    tag: 'Families'
  },
  {
    title: 'Spiritual Temple Circuit',
    duration: '3 Days / 2 Nights',
    desc: 'Visit sacred temples including Guruvayur, Sabarimala route, and Padmanabhaswamy.',
    img: 'https://images.unsplash.com/photo-1625633671206-38d5e751859c?q=80&w=800&auto=format&fit=crop',
    tag: 'Spiritual'
  },
  {
    title: 'Beach & Coastal Drive',
    duration: '4 Days / 3 Nights',
    desc: 'Relax on the pristine beaches of Varkala, Kovalam, and Bekal with seaside stays.',
    img: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?q=80&w=800&auto=format&fit=crop',
    tag: 'Beaches'
  },
  {
    title: 'Wayanad Wildlife Escape',
    duration: '3 Days / 2 Nights',
    desc: 'Trek through misty forests, visit Edakkal Caves, and spot wildlife in Wayanad.',
    img: 'https://images.unsplash.com/photo-1583063852079-5e7e14d45809?q=80&w=800&auto=format&fit=crop',
    tag: 'Adventure'
  }
]

const steps = [
  { num: '01', title: 'Reach Out', desc: 'Contact us via WhatsApp, phone, or the inquiry form with your travel dates and interests.' },
  { num: '02', title: 'We Plan', desc: 'Our team creates a personalized itinerary with stays, transport, and experiences tailored to you.' },
  { num: '03', title: 'Confirm & Go', desc: 'Review your plan, confirm the booking, and set off on your Kerala adventure with full support.' }
]
</script>

<template>
  <div>
    <!-- ═══ HERO ═══ -->
    <section class="page-hero" style="background: url('https://images.unsplash.com/photo-1596327663273-2e06c747f480?q=80&w=1920&auto=format&fit=crop') center/cover no-repeat;">
      <div class="page-hero-overlay" />
      <div class="page-hero-content">
        <span class="hero-badge">What We Offer</span>
        <h1>Services & <span class="text-orange-hero">Packages</span></h1>
        <p class="page-hero-subtitle">
          Comprehensive travel support from Kottakkal &amp; Kochi — rooms, transport, itineraries, and more.
        </p>
      </div>
    </section>

    <!-- ═══ CORE SERVICES ═══ -->
    <section class="bg-white">
      <div class="container">
        <div class="section-header">
          <span class="section-tag">Our Services</span>
          <h2>What We Do Best</h2>
          <p class="section-desc">End-to-end travel support from planning to on-ground assistance.</p>
        </div>
        <div class="services-grid">
          <div v-for="s in services" :key="s.title" class="service-card card">
            <div class="service-card-top">
              <div class="icon-circle icon-circle-lg">{{ s.icon }}</div>
              <h3>{{ s.title }}</h3>
              <p>{{ s.desc }}</p>
            </div>
            <ul class="service-features">
              <li v-for="f in s.features" :key="f">
                <span class="feature-check">✓</span>
                {{ f }}
              </li>
            </ul>
            <NuxtLink to="/contact" class="btn btn-outline btn-sm" style="width: 100%;">Inquire Now</NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══ PACKAGES ═══ -->
    <section class="bg-cream">
      <div class="container">
        <div class="section-header">
          <span class="section-tag">Popular Packages</span>
          <h2>Curated Kerala Experiences</h2>
          <p class="section-desc">Hand-crafted itineraries for every kind of traveler.</p>
        </div>
        <div class="grid-3">
          <div v-for="pkg in packages" :key="pkg.title" class="package-card">
            <div class="package-img-wrap">
              <img :src="pkg.img" :alt="pkg.title" loading="lazy">
              <span class="package-tag">{{ pkg.tag }}</span>
            </div>
            <div class="package-body">
              <span class="package-duration">{{ pkg.duration }}</span>
              <h4>{{ pkg.title }}</h4>
              <p>{{ pkg.desc }}</p>
              <NuxtLink to="/contact" class="btn btn-outline btn-sm" style="width: 100%;">Ask About This</NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══ HOW IT WORKS ═══ -->
    <section class="bg-white">
      <div class="container">
        <div class="section-header">
          <span class="section-tag">How It Works</span>
          <h2>Book in 3 Simple Steps</h2>
        </div>
        <div class="steps-row">
          <div v-for="(step, idx) in steps" :key="step.num" class="step-item">
            <div class="step-number">{{ step.num }}</div>
            <h4>{{ step.title }}</h4>
            <p>{{ step.desc }}</p>
          </div>
          <div v-if="steps.length > 1" class="steps-connector" />
        </div>
        <div class="text-center" style="margin-top: 2.5rem;">
          <NuxtLink to="/contact" class="btn btn-primary btn-lg">Get a Custom Quote</NuxtLink>
        </div>
      </div>
    </section>

    <!-- ═══ COVERAGE NOTE ═══ -->
    <section class="bg-cream">
      <div class="container">
        <div class="coverage-card card" style="max-width: 750px; margin: 0 auto; text-align: center;">
          <div class="icon-circle icon-circle-lg" style="margin: 0 auto 1.25rem;">🌴</div>
          <h3>Kerala-Wide Coverage</h3>
          <p style="color: var(--text-muted); max-width: 560px; margin: 0 auto;">
            Whether you're heading to the hills of Munnar, the backwaters of Alleppey,
            or the beaches of Kovalam — Rahale has the rooms, transport, and local connections
            to make your trip seamless. With bases in Kottakkal and Kochi, we cover all of Kerala.
          </p>
        </div>
      </div>
    </section>

    <!-- ═══ CTA ═══ -->
    <section class="cta-banner">
      <div class="container text-center">
        <h2>Ready to Plan Your Kerala Trip?</h2>
        <p>Send us an inquiry and we'll craft a personalized experience just for you.</p>
        <NuxtLink to="/contact" class="btn btn-white btn-lg">Start Planning</NuxtLink>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* Services grid */
.services-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
}

.service-card {
  display: flex;
  flex-direction: column;
}

.service-card-top {
  margin-bottom: 1.25rem;
}

.service-card-top h3 {
  margin: 1rem 0 0.5rem;
}

.service-card-top p {
  font-size: 0.9rem;
  color: var(--text-muted);
  margin: 0;
}

.service-features {
  flex: 1;
  margin-bottom: 1.5rem;
}

.service-features li {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  font-size: 0.88rem;
  color: var(--text-body);
  padding: 0.4rem 0;
}

.feature-check {
  color: var(--primary-orange);
  font-weight: 700;
  font-size: 0.8rem;
  flex-shrink: 0;
}

/* Package cards */
.package-card {
  background: var(--bg-white);
  border-radius: var(--radius-lg);
  border: 1px solid var(--border-light);
  box-shadow: var(--shadow-sm);
  overflow: hidden;
  transition: var(--ease);
  display: flex;
  flex-direction: column;
}

.package-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
}

.package-card:hover .package-img-wrap img {
  transform: scale(1.05);
}

.package-img-wrap {
  height: 200px;
  overflow: hidden;
  position: relative;
}

.package-img-wrap img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.package-tag {
  position: absolute;
  top: 1rem;
  left: 1rem;
  background: rgba(255,255,255,0.9);
  backdrop-filter: blur(8px);
  padding: 0.3rem 0.8rem;
  border-radius: var(--radius-full);
  font-size: 0.72rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: var(--primary-orange);
}

.package-body {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  flex: 1;
}

.package-duration {
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--primary-orange);
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 0.35rem;
}

.package-body h4 {
  margin-bottom: 0.5rem;
}

.package-body p {
  font-size: 0.88rem;
  color: var(--text-muted);
  flex: 1;
  margin-bottom: 1.25rem;
}

/* Steps */
.steps-row {
  display: flex;
  justify-content: center;
  gap: 3rem;
  position: relative;
  max-width: 800px;
  margin: 0 auto;
}

.steps-connector {
  position: absolute;
  top: 32px;
  left: 15%;
  right: 15%;
  height: 2px;
  background: var(--border-light);
  z-index: 0;
}

.step-item {
  text-align: center;
  max-width: 220px;
  position: relative;
  z-index: 1;
}

.step-number {
  width: 64px;
  height: 64px;
  background: linear-gradient(135deg, var(--primary-orange), var(--primary-light));
  color: #fff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  font-weight: 800;
  margin: 0 auto 1.25rem;
  box-shadow: var(--shadow-orange);
}

.step-item h4 { margin-bottom: 0.35rem; }
.step-item p { font-size: 0.88rem; color: var(--text-muted); margin: 0; }

/* Responsive */
@media (max-width: 768px) {
  .services-grid { grid-template-columns: 1fr; }
  .steps-row { flex-direction: column; align-items: center; gap: 2rem; }
  .steps-connector { display: none; }
}
</style>
