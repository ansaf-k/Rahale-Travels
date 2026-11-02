<script setup lang="ts">
useHead({
  title: 'Contact Rahale — Plan Your Kerala Journey',
  meta: [
    { name: 'description', content: 'Get in touch with Rahale Travel Agency in Kottakkal and Kochi. Plan your dream Kerala trip — call, WhatsApp, or email us today.' }
  ]
})

const form = reactive({
  fullName: '',
  email: '',
  phone: '',
  travelDate: '',
  travelers: '',
  destination: '',
  message: ''
})

const isSubmitting = ref(false)
const isSubmitted = ref(false)

const handleSubmit = async () => {
  isSubmitting.value = true
  await new Promise(resolve => setTimeout(resolve, 1500))
  isSubmitting.value = false
  isSubmitted.value = true
  Object.assign(form, { fullName: '', email: '', phone: '', travelDate: '', travelers: '', destination: '', message: '' })
  setTimeout(() => { isSubmitted.value = false }, 5000)
}

const contactCards = [
  { icon: '📞', label: 'Call Us', value: '+91 90000 00000', href: 'tel:+919000000000', description: 'Mon – Sat, 9 AM – 7 PM' },
  { icon: '💬', label: 'WhatsApp', value: '+91 90000 00000', href: 'https://wa.me/919000000000', description: 'Quick replies, anytime' },
  { icon: '✉️', label: 'Email Us', value: 'hello@rahaletravels.com', href: 'mailto:hello@rahaletravels.com', description: 'We reply within 24 hours' },
  { icon: '📍', label: 'Kottakkal Office', value: 'Kottakkal, Malappuram', href: 'https://maps.google.com/?q=Kottakkal,Malappuram,Kerala', description: 'Kerala – 676503' },
  { icon: '📍', label: 'Kochi Operations', value: 'Kochi, Kerala', href: 'https://maps.google.com/?q=Kochi,Kerala', description: 'Airport & cruise support' }
]

const destinations = [
  'Munnar', 'Wayanad', 'Alleppey (Backwaters)', 'Thekkady', 'Vagamon',
  'Kovalam', 'Kochi City Tour', 'Kozhikode', 'Full Kerala Tour', 'Custom Package', 'Other'
]
</script>

<template>
  <div>
    <!-- ═══ HERO ═══ -->
    <section class="page-hero" style="background: url('/contact-hero.png') center/cover no-repeat;">
      <div class="page-hero-overlay" />
      <div class="page-hero-content">
        <span class="hero-badge">Get In Touch</span>
        <h1>Contact <span class="text-orange-hero">Rahale</span></h1>
        <p class="page-hero-subtitle">
          Plan your Kerala journey with our team in Kottakkal &amp; Kochi.
        </p>
      </div>
    </section>

    <!-- ═══ CONTACT CARDS ═══ -->
    <section class="bg-white">
      <div class="container">
        <div class="section-header">
          <span class="section-tag">Reach Out</span>
          <h2>We're Here to Help</h2>
          <p class="section-desc">Choose the way that's most convenient for you.</p>
        </div>
        <div class="contact-cards-grid">
          <a
            v-for="card in contactCards"
            :key="card.label"
            :href="card.href"
            target="_blank"
            rel="noopener noreferrer"
            class="contact-card card"
          >
            <div class="contact-card-icon icon-circle">{{ card.icon }}</div>
            <div class="contact-card-body">
              <span class="contact-card-label">{{ card.label }}</span>
              <span class="contact-card-value">{{ card.value }}</span>
              <span class="contact-card-desc">{{ card.description }}</span>
            </div>
            <div class="contact-card-arrow">→</div>
          </a>
        </div>
      </div>
    </section>

    <!-- ═══ INQUIRY FORM ═══ -->
    <section class="bg-cream">
      <div class="container">
        <div class="inquiry-layout">
          <div class="inquiry-info">
            <span class="section-tag">Plan Your Trip</span>
            <h2>Send Us an Inquiry</h2>
            <p>
              Tell us about your dream Kerala destination and we'll craft a personalized
              itinerary just for you. Whether it's a honeymoon, family vacation, or
              solo adventure — we've got you covered.
            </p>
            <div class="inquiry-features">
              <div v-for="f in ['Free trip consultation', 'Personalized itineraries', 'Best price guarantee', '24/7 travel support']" :key="f" class="inquiry-feature">
                <span class="feature-icon">✓</span>
                <span>{{ f }}</span>
              </div>
            </div>
          </div>

          <div class="inquiry-form-wrapper">
            <div v-if="isSubmitted" class="form-success">
              <div class="success-icon">✓</div>
              <h3>Inquiry Sent!</h3>
              <p>Thank you! We'll get back to you shortly with a personalized plan.</p>
            </div>

            <form v-else class="inquiry-form" @submit.prevent="handleSubmit">
              <div class="form-group">
                <label for="fullName">Full Name <span class="required">*</span></label>
                <input id="fullName" v-model="form.fullName" type="text" placeholder="Your full name" required autocomplete="name">
              </div>

              <div class="form-row">
                <div class="form-group">
                  <label for="email">Email <span class="required">*</span></label>
                  <input id="email" v-model="form.email" type="email" placeholder="your@email.com" required autocomplete="email">
                </div>
                <div class="form-group">
                  <label for="phone">Phone Number</label>
                  <input id="phone" v-model="form.phone" type="tel" placeholder="+91 XXXXX XXXXX" autocomplete="tel">
                </div>
              </div>

              <div class="form-row">
                <div class="form-group">
                  <label for="travelDate">Travel Date</label>
                  <input id="travelDate" v-model="form.travelDate" type="date">
                </div>
                <div class="form-group">
                  <label for="travelers">Number of Travelers</label>
                  <select id="travelers" v-model="form.travelers">
                    <option value="" disabled>Select</option>
                    <option value="1">1 Person</option>
                    <option value="2">2 People</option>
                    <option value="3-5">3 – 5 People</option>
                    <option value="6-10">6 – 10 People</option>
                    <option value="10+">10+ People</option>
                  </select>
                </div>
              </div>

              <div class="form-group">
                <label for="destination">Destination / Package Interest</label>
                <select id="destination" v-model="form.destination">
                  <option value="" disabled>Choose a destination</option>
                  <option v-for="dest in destinations" :key="dest" :value="dest">{{ dest }}</option>
                </select>
              </div>

              <div class="form-group">
                <label for="message">Message</label>
                <textarea id="message" v-model="form.message" rows="4" placeholder="Tell us about your trip preferences, special requests, or anything else..." />
              </div>

              <button type="submit" class="btn btn-primary btn-lg" style="width: 100%;" :disabled="isSubmitting">
                <span v-if="isSubmitting" class="spinner" />
                <span v-else>Send Inquiry</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══ MAP ═══ -->
    <section class="bg-white">
      <div class="container">
        <div class="section-header">
          <span class="section-tag">Our Location</span>
          <h2>Visit or Locate Us</h2>
          <p class="section-desc">Find us in the heart of Kottakkal, Malappuram, Kerala.</p>
        </div>
        <div class="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31303.16484817295!2d75.97!3d11.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7b3e0a0a0a0a1%3A0x1234567890abcdef!2sKottakkal%2C%20Malappuram%2C%20Kerala!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style="border: 0;"
            allowfullscreen
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            title="Rahale Travels — Kottakkal, Malappuram"
          />
        </div>
      </div>
    </section>

    <!-- ═══ QUICK STRIP ═══ -->
    <section class="cta-banner" style="padding: 3.5rem 0;">
      <div class="container">
        <div class="strip-content">
          <div class="strip-text">
            <h3 style="color: #fff; margin-bottom: 0.25rem;">Need quick help?</h3>
            <p style="color: rgba(255,255,255,0.8); margin: 0; font-size: 0.92rem;">Our team is just a click away — reach out instantly.</p>
          </div>
          <div class="strip-actions">
            <a href="tel:+919000000000" class="btn btn-ghost">📞 Call Now</a>
            <a href="https://wa.me/919000000000" target="_blank" rel="noopener noreferrer" class="strip-btn-wa">💬 WhatsApp Us</a>
            <a href="mailto:hello@rahaletravels.com" class="btn btn-white btn-sm">✉️ Email Us</a>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══ RESPONSE NOTE ═══ -->
    <section class="bg-cream" style="padding: 3rem 0 5rem;">
      <div class="container">
        <div class="response-note card" style="max-width: 700px; margin: 0 auto; display: flex; align-items: center; gap: 1.25rem; border-left: 4px solid var(--primary-orange);">
          <div style="font-size: 1.8rem; flex-shrink: 0;">⚡</div>
          <p style="margin: 0; font-size: 0.92rem; line-height: 1.65; color: var(--text-muted);">
            We usually respond <strong style="color: var(--text-heading);">as quickly as possible</strong> for trip planning and room booking inquiries. Your dream Kerala vacation is just a message away!
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* Contact cards */
.contact-cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.25rem;
}

.contact-card {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.25rem 1.5rem;
  text-decoration: none;
}

.contact-card-body {
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
  flex: 1;
  min-width: 0;
}

.contact-card-label {
  font-size: 0.72rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: var(--primary-orange);
}

.contact-card-value {
  font-size: 0.92rem;
  font-weight: 600;
  color: var(--text-heading);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.contact-card-desc {
  font-size: 0.78rem;
  color: var(--text-muted);
}

.contact-card-arrow {
  font-size: 1.1rem;
  color: var(--text-light);
  transition: var(--ease);
  flex-shrink: 0;
}

.contact-card:hover .contact-card-arrow {
  color: var(--primary-orange);
  transform: translateX(4px);
}

/* Inquiry form */
.inquiry-layout {
  display: grid;
  grid-template-columns: 1fr 1.3fr;
  gap: 4rem;
  align-items: start;
}

.inquiry-info h2 { margin-bottom: 1rem; }

.inquiry-features {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-top: 1.5rem;
}

.inquiry-feature {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 0.92rem;
  color: var(--text-heading);
}

.feature-icon {
  width: 26px;
  height: 26px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: var(--orange-glow);
  color: var(--primary-orange);
  border-radius: 50%;
  font-size: 0.75rem;
  font-weight: 700;
  flex-shrink: 0;
}

.inquiry-form-wrapper {
  background: var(--bg-white);
  border-radius: var(--radius-xl);
  padding: 2.5rem;
  box-shadow: var(--shadow-lg);
  border: 1px solid var(--border-light);
}

.inquiry-form {
  display: flex;
  flex-direction: column;
  gap: 1.15rem;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.15rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}

.form-group label {
  font-size: 0.82rem;
  font-weight: 500;
  color: var(--text-heading);
}

.required { color: var(--primary-orange); }

.form-group input,
.form-group select,
.form-group textarea {
  font-family: 'Poppins', sans-serif;
  font-size: 0.88rem;
  padding: 0.75rem 1rem;
  border: 1.5px solid var(--border-light);
  border-radius: var(--radius-md);
  background: var(--bg-light);
  color: var(--text-heading);
  transition: var(--ease);
  outline: none;
  width: 100%;
}

.form-group input::placeholder,
.form-group textarea::placeholder { color: var(--text-light); }

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  border-color: var(--primary-orange);
  box-shadow: 0 0 0 3px var(--orange-glow);
  background: var(--bg-white);
}

.form-group textarea { resize: vertical; min-height: 100px; }

.form-group select {
  appearance: none;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23888' stroke-width='2'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right 1rem center;
  background-size: 1rem;
  padding-right: 2.5rem;
}

/* Success */
.form-success { text-align: center; padding: 3rem 1rem; }

.success-icon {
  width: 60px;
  height: 60px;
  margin: 0 auto 1.25rem;
  background: var(--orange-glow);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.4rem;
  font-weight: 700;
  color: var(--primary-orange);
  animation: scaleIn 0.4s ease;
}

@keyframes scaleIn { from { transform: scale(0); } to { transform: scale(1); } }

.spinner {
  width: 20px;
  height: 20px;
  border: 2px solid rgba(255,255,255,0.3);
  border-top-color: #fff;
  border-radius: 50%;
  animation: spin 0.6s linear infinite;
}

@keyframes spin { to { transform: rotate(360deg); } }

/* Map */
.map-container {
  width: 100%;
  height: 380px;
  border-radius: var(--radius-xl);
  overflow: hidden;
  border: 2px solid var(--border-light);
  box-shadow: var(--shadow-lg);
}

/* Strip */
.strip-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  position: relative;
  z-index: 1;
}

.strip-actions {
  display: flex;
  gap: 0.75rem;
  flex-shrink: 0;
}

.strip-btn-wa {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.55rem 1.1rem;
  border-radius: var(--radius-md);
  font-weight: 600;
  font-size: 0.8rem;
  background: #25D366;
  color: #fff;
  border: none;
  transition: var(--ease);
}

.strip-btn-wa:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
}

/* Responsive */
@media (max-width: 768px) {
  .inquiry-layout { grid-template-columns: 1fr; gap: 2.5rem; }
  .form-row { grid-template-columns: 1fr; }
  .inquiry-form-wrapper { padding: 1.5rem; }
  .map-container { height: 280px; }
  .strip-content { flex-direction: column; text-align: center; }
  .strip-actions { flex-wrap: wrap; justify-content: center; }
  .response-note { flex-direction: column; text-align: center; }
}
</style>
