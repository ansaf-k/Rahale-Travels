<script setup lang="ts">
useHead({
  title: 'About Rahale — Our Story & Mission',
  meta: [
    { name: 'description', content: 'Learn about Rahale Travel Agency — a trusted Kerala travel partner based in Kottakkal and Kochi, offering personalized travel planning and room bookings across Kerala.' }
  ]
})

const values = [
  { icon: '🎯', title: 'Our Mission', text: 'To make Kerala accessible and unforgettable for every traveler through personalized support and reliable local connections.' },
  { icon: '🔭', title: 'Our Vision', text: 'To become Kerala\'s most trusted local travel brand — known for integrity, warmth, and creating meaningful travel experiences.' },
  { icon: '💎', title: 'Our Values', text: 'Honesty, local expertise, personal attention, fair pricing, and a genuine love for showcasing the beauty of Kerala.' }
]

const trustPoints = [
  { icon: '📍', title: 'Deep Local Knowledge', desc: 'Based in Kottakkal with operations in Kochi, we know every corner of Kerala — the hidden gems, the best seasons, and the most reliable partners.' },
  { icon: '🤝', title: 'Personalized Support', desc: 'No generic packages here. Every trip is built around your preferences, group size, budget, and timeline. We listen first, plan second.' },
  { icon: '🏨', title: 'Verified Room Network', desc: 'We\'ve personally vetted our accommodation partners — from budget homestays in Wayanad to premium resorts in Munnar and houseboats in Alleppey.' },
  { icon: '🗺️', title: 'Full Kerala Coverage', desc: 'From Kasaragod in the north to Thiruvananthapuram in the south — our network spans the entire state. One agency, complete Kerala access.' }
]

const milestones = [
  { year: '2020', title: 'The Beginning', desc: 'Started as a group of travel enthusiasts in Kottakkal helping friends and family find reliable stays and transport.' },
  { year: '2022', title: 'Growing Network', desc: 'Partnered with 50+ verified properties across Munnar, Wayanad, Alleppey, and Kovalam. Expanded into full trip planning.' },
  { year: '2024', title: 'Kochi Operations', desc: 'Established operational presence in Kochi to serve travelers arriving through the international airport and cruise terminal.' },
  { year: '2026', title: 'Rahale Today', desc: 'A full-service travel agency trusted by hundreds of families, couples, and groups for their Kerala experiences.' }
]
</script>

<template>
  <div>
    <!-- ═══ HERO ═══ -->
    <section class="page-hero" style="background: url('https://images.unsplash.com/photo-1593693397690-362cb9666fc2?q=80&w=1920&auto=format&fit=crop') center/cover no-repeat;">
      <div class="page-hero-overlay" />
      <div class="page-hero-content">
        <span class="hero-badge">Our Story</span>
        <h1>About <span class="text-orange-hero">Rahale</span></h1>
        <p class="page-hero-subtitle">
          A trusted Kerala travel partner serving travelers from Kottakkal, Malappuram and Kochi.
        </p>
      </div>
    </section>

    <!-- ═══ WHO WE ARE ═══ -->
    <section class="bg-white">
      <div class="container">
        <div class="about-intro">
          <div class="about-intro-text">
            <span class="section-tag">Who We Are</span>
            <h2>Travel Planning, the Kerala Way</h2>
            <p>
              Rahale was born from a simple idea — that travel in Kerala should be personal,
              reliable, and genuinely enjoyable. Based in Kottakkal, Malappuram, with an operational
              presence in Kochi, we combine deep local knowledge with a network of verified stays
              and transport partners to create seamless travel experiences.
            </p>
            <p>
              We're not a faceless booking platform. We're real people who know Kerala's roads,
              its hidden viewpoints, its best-value homestays, and its most welcoming communities.
              When you travel with Rahale, you travel with a friend who knows the way.
            </p>
            <div class="about-stats">
              <div class="about-stat">
                <span class="stat-number">500+</span>
                <span class="stat-label">Happy Travelers</span>
              </div>
              <div class="about-stat">
                <span class="stat-number">100+</span>
                <span class="stat-label">Verified Properties</span>
              </div>
              <div class="about-stat">
                <span class="stat-number">4.8</span>
                <span class="stat-label">Google Rating</span>
              </div>
            </div>
          </div>
          <div class="about-intro-image">
            <img
              src="https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?q=80&w=800&auto=format&fit=crop"
              alt="Kerala coastal view"
              loading="lazy"
            >
            <div class="about-image-badge">
              <span>Est. 2020</span>
              <span>Kottakkal & Kochi</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══ MISSION / VISION / VALUES ═══ -->
    <section class="bg-cream">
      <div class="container">
        <div class="section-header">
          <span class="section-tag">What Drives Us</span>
          <h2>Mission, Vision & Values</h2>
        </div>
        <div class="grid-3">
          <div v-for="v in values" :key="v.title" class="card text-center">
            <div class="icon-circle icon-circle-lg" style="margin: 0 auto 1.25rem;">{{ v.icon }}</div>
            <h4>{{ v.title }}</h4>
            <p style="font-size: 0.9rem; color: var(--text-muted); margin: 0;">{{ v.text }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══ OUR JOURNEY ═══ -->
    <section class="bg-white">
      <div class="container">
        <div class="section-header">
          <span class="section-tag">Our Journey</span>
          <h2>From Kottakkal to All of Kerala</h2>
        </div>
        <div class="timeline">
          <div v-for="(m, idx) in milestones" :key="m.year" class="timeline-item" :class="{ 'timeline-right': idx % 2 !== 0 }">
            <div class="timeline-dot" />
            <div class="timeline-card card">
              <span class="timeline-year">{{ m.year }}</span>
              <h4>{{ m.title }}</h4>
              <p style="margin: 0; font-size: 0.9rem;">{{ m.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══ WHY TRUST US ═══ -->
    <section class="bg-cream">
      <div class="container">
        <div class="section-header">
          <span class="section-tag">Why Travelers Trust Us</span>
          <h2>Built on Real Expertise</h2>
          <p class="section-desc">Our strength lies in being genuinely local, personally invested, and deeply connected.</p>
        </div>
        <div class="grid-2">
          <div v-for="tp in trustPoints" :key="tp.title" class="trust-point-card card">
            <div class="trust-point-header">
              <div class="icon-circle">{{ tp.icon }}</div>
              <h4 style="margin: 0;">{{ tp.title }}</h4>
            </div>
            <p style="font-size: 0.9rem; color: var(--text-muted); margin: 0;">{{ tp.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══ TEAM PERSONALITY ═══ -->
    <section class="bg-white">
      <div class="container text-center">
        <span class="section-tag">The People Behind Rahale</span>
        <h2 style="margin-bottom: 1rem;">A Small Team, a Big Heart</h2>
        <p style="max-width: 600px; margin: 0 auto 2.5rem; color: var(--text-muted);">
          We're a close-knit team of local travel enthusiasts who genuinely care about every traveler's experience.
          From first inquiry to final farewell, you'll always talk to someone who knows your trip inside out.
        </p>
        <div class="team-grid">
          <div class="team-card card text-center">
            <div class="team-avatar" style="background: hsl(25, 55%, 50%);">RH</div>
            <h4 style="margin-bottom: 0.15rem;">Travel Planning</h4>
            <p style="margin: 0; font-size: 0.82rem; color: var(--text-muted);">Itinerary Design & Coordination</p>
          </div>
          <div class="team-card card text-center">
            <div class="team-avatar" style="background: hsl(150, 45%, 45%);">OP</div>
            <h4 style="margin-bottom: 0.15rem;">Operations</h4>
            <p style="margin: 0; font-size: 0.82rem; color: var(--text-muted);">Bookings, Logistics & Support</p>
          </div>
          <div class="team-card card text-center">
            <div class="team-avatar" style="background: hsl(210, 50%, 50%);">GD</div>
            <h4 style="margin-bottom: 0.15rem;">Local Guides</h4>
            <p style="margin: 0; font-size: 0.82rem; color: var(--text-muted);">On-Ground Travel Assistance</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══ CTA ═══ -->
    <section class="cta-banner">
      <div class="container text-center">
        <h2>Let's Plan Your Kerala Story</h2>
        <p>Reach out today — we'd love to help you explore God's Own Country.</p>
        <NuxtLink to="/contact" class="btn btn-white btn-lg">Contact Rahale</NuxtLink>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* About intro */
.about-intro {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 4rem;
  align-items: center;
}

.about-intro-text h2 { margin-bottom: 1rem; }

.about-stats {
  display: flex;
  gap: 2.5rem;
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid var(--border-light);
}

.about-stat {
  display: flex;
  flex-direction: column;
}

.stat-number {
  font-size: 2rem;
  font-weight: 800;
  color: var(--primary-orange);
  line-height: 1;
}

.stat-label {
  font-size: 0.8rem;
  color: var(--text-muted);
  margin-top: 0.25rem;
}

.about-intro-image {
  position: relative;
}

.about-intro-image img {
  width: 100%;
  height: 450px;
  object-fit: cover;
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-lg);
}

.about-image-badge {
  position: absolute;
  bottom: 1.5rem;
  left: 1.5rem;
  background: rgba(255,255,255,0.92);
  backdrop-filter: blur(10px);
  padding: 0.75rem 1.25rem;
  border-radius: var(--radius-md);
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
  box-shadow: var(--shadow-md);
}

.about-image-badge span:first-child {
  font-weight: 700;
  font-size: 0.9rem;
  color: var(--primary-orange);
}

.about-image-badge span:last-child {
  font-size: 0.78rem;
  color: var(--text-muted);
}

/* Timeline */
.timeline {
  max-width: 800px;
  margin: 0 auto;
  position: relative;
  padding: 1rem 0;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 2px;
  height: 100%;
  background: var(--border-light);
}

.timeline-item {
  display: flex;
  justify-content: flex-start;
  position: relative;
  width: 50%;
  padding-right: 3rem;
  margin-bottom: 2rem;
}

.timeline-item.timeline-right {
  margin-left: 50%;
  padding-right: 0;
  padding-left: 3rem;
}

.timeline-dot {
  position: absolute;
  right: -8px;
  top: 1.5rem;
  width: 16px;
  height: 16px;
  background: var(--primary-orange);
  border: 3px solid var(--bg-white);
  border-radius: 50%;
  z-index: 2;
  box-shadow: var(--shadow-sm);
}

.timeline-item.timeline-right .timeline-dot {
  left: -8px;
  right: auto;
}

.timeline-card {
  width: 100%;
}

.timeline-card:hover {
  transform: translateY(-2px);
}

.timeline-year {
  font-size: 0.75rem;
  font-weight: 700;
  color: var(--primary-orange);
  text-transform: uppercase;
  letter-spacing: 1px;
}

/* Trust points */
.trust-point-card {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.trust-point-header {
  display: flex;
  align-items: center;
  gap: 1rem;
}

/* Team */
.team-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  max-width: 800px;
  margin: 0 auto;
}

.team-avatar {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-weight: 700;
  font-size: 1.2rem;
  margin: 0 auto 1rem;
  letter-spacing: 1px;
}

/* Responsive */
@media (max-width: 768px) {
  .about-intro { grid-template-columns: 1fr; gap: 2rem; }
  .about-intro-image img { height: 300px; }
  .about-stats { gap: 1.5rem; }

  .timeline::before { left: 16px; }
  .timeline-item {
    width: 100%;
    padding-left: 3rem;
    padding-right: 0;
  }
  .timeline-item.timeline-right {
    margin-left: 0;
    padding-left: 3rem;
  }
  .timeline-dot {
    left: 8px !important;
    right: auto !important;
  }

  .team-grid { grid-template-columns: 1fr; max-width: 300px; }
}
</style>
