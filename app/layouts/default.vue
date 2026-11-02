<script setup lang="ts">
const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}

const router = useRouter()
router.afterEach(() => {
  closeMenu()
})

const links = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Destinations', to: '/destinations' },
  { label: 'Reviews', to: '/reviews' },
  { label: 'Contact', to: '/contact' }
]
</script>

<template>
  <div>
    <!-- ═══ HEADER ═══ -->
    <header class="navbar">
      <div class="container nav-container">
        <NuxtLink to="/" class="logo" @click="closeMenu">
          <span class="logo-orange">RAHALE</span> TRAVELS
        </NuxtLink>

        <button class="mobile-menu-btn" aria-label="Toggle menu" @click="toggleMenu">
          <span v-if="!isMenuOpen">☰</span>
          <span v-else>✕</span>
        </button>

        <nav class="nav-links" :class="{ active: isMenuOpen }">
          <NuxtLink
            v-for="link in links"
            :key="link.to"
            :to="link.to"
            class="nav-link"
            active-class="router-link-active"
          >
            {{ link.label }}
          </NuxtLink>
          <div class="nav-cta">
            <NuxtLink to="/contact" class="btn btn-primary btn-sm">
              Plan Your Trip
            </NuxtLink>
          </div>
        </nav>
      </div>
    </header>

    <!-- ═══ MAIN ═══ -->
    <main style="padding-top: 72px; min-height: 80vh;">
      <slot />
    </main>

    <!-- ═══ FOOTER ═══ -->
    <footer>
      <div class="container">
        <div class="footer-grid">
          <!-- Brand -->
          <div class="footer-brand">
            <h3><span style="color: var(--primary-light);">RAHALE</span> TRAVELS</h3>
            <p>
              Your trusted Kerala travel partner, based in Kottakkal, Malappuram,
              with operational presence in Kochi. We arrange rooms, transport,
              and personalized travel experiences across all of Kerala.
            </p>
          </div>

          <!-- Quick Links -->
          <div class="footer-col">
            <h4>Explore</h4>
            <NuxtLink v-for="link in links" :key="link.to" :to="link.to">
              {{ link.label }}
            </NuxtLink>
          </div>

          <!-- Services -->
          <div class="footer-col">
            <h4>Services</h4>
            <NuxtLink to="/services">Room Booking</NuxtLink>
            <NuxtLink to="/services">Travel Planning</NuxtLink>
            <NuxtLink to="/services">Custom Itineraries</NuxtLink>
            <NuxtLink to="/services">Transportation</NuxtLink>
            <NuxtLink to="/destinations">Destinations</NuxtLink>
          </div>

          <!-- Contact -->
          <div class="footer-col">
            <h4>Contact</h4>
            <div class="footer-contact-item">
              <span class="footer-contact-icon">📍</span>
              <span>Kottakkal, Malappuram, Kerala</span>
            </div>
            <div class="footer-contact-item">
              <span class="footer-contact-icon">📍</span>
              <span>Kochi, Kerala (Operations)</span>
            </div>
            <div class="footer-contact-item">
              <span class="footer-contact-icon">📞</span>
              <a href="tel:+919000000000">+91 90000 00000</a>
            </div>
            <div class="footer-contact-item">
              <span class="footer-contact-icon">✉️</span>
              <a href="mailto:hello@rahaletravels.com">hello@rahaletravels.com</a>
            </div>
          </div>
        </div>

        <!-- Bottom bar -->
        <div class="footer-bottom">
          <p>© 2026 Rahale Travel Agency. All rights reserved.</p>
          <div class="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped>
/* Layout-specific overrides if ever needed */
</style>
