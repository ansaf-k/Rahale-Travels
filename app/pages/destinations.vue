<script setup lang="ts">
useHead({
  title: 'Destinations — Explore Kerala with Rahale',
  meta: [
    { name: 'description', content: 'Discover Kerala\'s most beautiful destinations — Munnar, Wayanad, Alleppey, Kovalam, Kochi, and more. Plan your trip with Rahale Travel Agency.' }
  ]
})

const destinations = [
  {
    name: 'Munnar',
    tagline: 'Tea Gardens & Misty Hills',
    desc: 'Cool hill station famous for sprawling tea estates, winding roads through the Western Ghats, and views that stretch forever.',
    highlights: ['Tea plantations', 'Eravikulam National Park', 'Top Station viewpoint'],
    img: 'https://images.unsplash.com/photo-1596327663273-2e06c747f480?q=80&w=800&auto=format&fit=crop'
  },
  {
    name: 'Alleppey',
    tagline: 'Backwaters & Houseboats',
    desc: 'Float through palm-fringed canals on a traditional houseboat. Alleppey is the heart of Kerala\'s legendary backwater experience.',
    highlights: ['Houseboat cruises', 'Alappuzha Beach', 'Village backwater tours'],
    img: 'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?q=80&w=800&auto=format&fit=crop'
  },
  {
    name: 'Wayanad',
    tagline: 'Wildlife & Waterfalls',
    desc: 'Misty forests, ancient caves, cascading waterfalls, and one of the richest wildlife corridors in South India.',
    highlights: ['Edakkal Caves', 'Banasura Sagar Dam', 'Chembra Peak trek'],
    img: 'https://images.unsplash.com/photo-1583063852079-5e7e14d45809?q=80&w=800&auto=format&fit=crop'
  },
  {
    name: 'Kochi',
    tagline: 'Culture & Heritage',
    desc: 'A vibrant port city where colonial heritage meets modern Kerala. Explore Fort Kochi, Chinese fishing nets, and thriving art scenes.',
    highlights: ['Fort Kochi heritage walk', 'Chinese fishing nets', 'Mattancherry Palace'],
    img: 'https://images.unsplash.com/photo-1625633671206-38d5e751859c?q=80&w=800&auto=format&fit=crop'
  },
  {
    name: 'Kovalam',
    tagline: 'Sun, Sand & Surf',
    desc: 'One of Kerala\'s most iconic beach destinations — golden sands, lighthouse views, and Ayurvedic wellness by the sea.',
    highlights: ['Lighthouse Beach', 'Ayurvedic resorts', 'Sunset views'],
    img: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?q=80&w=800&auto=format&fit=crop'
  },
  {
    name: 'Thekkady',
    tagline: 'Spice Gardens & Tigers',
    desc: 'Gateway to the Periyar Tiger Reserve. Explore spice plantations, bamboo rafting, and jungle trails in the Western Ghats.',
    highlights: ['Periyar Wildlife Sanctuary', 'Spice garden tours', 'Bamboo rafting'],
    img: 'https://images.unsplash.com/photo-1596327663273-2e06c747f480?q=80&w=800&auto=format&fit=crop'
  },
  {
    name: 'Kozhikode',
    tagline: 'Food, Culture & Shores',
    desc: 'The historic Malabar capital — famous for its incredible cuisine, Kappad Beach where Vasco da Gama landed, and warm hospitality.',
    highlights: ['Kappad Beach', 'Malabar cuisine trail', 'Mananchira Square'],
    img: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=800&auto=format&fit=crop'
  },
  {
    name: 'Vagamon',
    tagline: 'Pine Forests & Meadows',
    desc: 'A quiet hill station with rolling green meadows, pine forests, and paragliding spots — perfect for those seeking peace.',
    highlights: ['Pine Valley', 'Paragliding', 'Kurisumala trek'],
    img: 'https://images.unsplash.com/photo-1583063852079-5e7e14d45809?q=80&w=800&auto=format&fit=crop'
  }
]
</script>

<template>
  <div>
    <!-- ═══ HERO ═══ -->
    <section class="page-hero" style="background: url('https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=1920&auto=format&fit=crop') center/cover no-repeat;">
      <div class="page-hero-overlay" />
      <div class="page-hero-content">
        <span class="hero-badge">God's Own Country</span>
        <h1>Kerala <span class="text-orange-hero">Destinations</span></h1>
        <p class="page-hero-subtitle">
          From misty hills to tropical backwaters — explore the places that make Kerala unforgettable.
        </p>
      </div>
    </section>

    <!-- ═══ DESTINATIONS GRID ═══ -->
    <section class="bg-white">
      <div class="container">
        <div class="section-header">
          <span class="section-tag">Where to Go</span>
          <h2>Explore Our Curated Destinations</h2>
          <p class="section-desc">Each destination handpicked and backed by our local knowledge and room network.</p>
        </div>
        <div class="dest-list">
          <article
            v-for="(dest, idx) in destinations"
            :key="dest.name"
            class="dest-row"
            :class="{ 'dest-row-reverse': idx % 2 !== 0 }"
          >
            <div class="dest-row-image">
              <img :src="dest.img" :alt="dest.name" loading="lazy">
            </div>
            <div class="dest-row-content">
              <span class="section-tag" style="margin-bottom: 0.75rem;">{{ dest.tagline }}</span>
              <h3>{{ dest.name }}</h3>
              <p>{{ dest.desc }}</p>
              <div class="dest-highlights">
                <span v-for="h in dest.highlights" :key="h" class="dest-highlight-chip">{{ h }}</span>
              </div>
              <NuxtLink to="/contact" class="btn btn-primary btn-sm" style="margin-top: 1.25rem;">
                Plan This Trip
              </NuxtLink>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- ═══ MAP OVERVIEW ═══ -->
    <section class="bg-cream">
      <div class="container text-center">
        <span class="section-tag">Full Kerala Coverage</span>
        <h2 style="margin-bottom: 1rem;">We Cover the Entire State</h2>
        <p style="max-width: 540px; margin: 0 auto 2.5rem; color: var(--text-muted);">
          From Kasaragod in the north to Thiruvananthapuram in the south — with bases
          in Kottakkal and Kochi, Rahale arranges stays, transport, and local guidance
          at every corner of Kerala.
        </p>
        <div class="map-embed">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1998375.7631498638!2d74.72844!3d10.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0812fceaa1e4d3%3A0x70e15e8e9e2c40e!2sKerala!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style="border: 0;"
            allowfullscreen
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            title="Kerala Map — Rahale Travel Coverage"
          />
        </div>
      </div>
    </section>

    <!-- ═══ CTA ═══ -->
    <section class="cta-banner">
      <div class="container text-center">
        <h2>Can't Decide? Let Us Help</h2>
        <p>Tell us your interests and we'll recommend the perfect Kerala destination for you.</p>
        <NuxtLink to="/contact" class="btn btn-white btn-lg">Ask Rahale</NuxtLink>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* Destination list */
.dest-list {
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

.dest-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
  background: var(--bg-light);
  border-radius: var(--radius-xl);
  overflow: hidden;
  border: 1px solid var(--border-subtle);
  transition: var(--ease);
}

.dest-row:hover {
  box-shadow: var(--shadow-lg);
}

.dest-row-reverse {
  direction: rtl;
}

.dest-row-reverse > * {
  direction: ltr;
}

.dest-row-image {
  height: 100%;
  min-height: 320px;
}

.dest-row-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.dest-row:hover .dest-row-image img {
  transform: scale(1.04);
}

.dest-row-content {
  padding: 2.5rem;
}

.dest-row-content h3 {
  font-size: 1.6rem;
  margin-bottom: 0.5rem;
}

.dest-row-content p {
  font-size: 0.92rem;
  color: var(--text-muted);
  margin-bottom: 1rem;
}

.dest-highlights {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.dest-highlight-chip {
  display: inline-block;
  background: var(--bg-white);
  border: 1px solid var(--border-light);
  padding: 0.3rem 0.85rem;
  border-radius: var(--radius-full);
  font-size: 0.78rem;
  font-weight: 500;
  color: var(--text-body);
}

/* Map */
.map-embed {
  width: 100%;
  height: 400px;
  border-radius: var(--radius-xl);
  overflow: hidden;
  border: 2px solid var(--border-light);
  box-shadow: var(--shadow-lg);
}

/* Responsive */
@media (max-width: 768px) {
  .dest-row {
    grid-template-columns: 1fr;
  }

  .dest-row-reverse {
    direction: ltr;
  }

  .dest-row-image {
    min-height: 220px;
  }

  .dest-row-content {
    padding: 1.5rem;
  }

  .map-embed {
    height: 300px;
  }
}
</style>
