<template>
  <div>
    <Header />
    <stickyNav v-if="enableStickyNav" />
    <ourServices />
    <gettingPaid />
    <whyTrustUs />
    <trustedBrands />
    <Footer />
  </div>
</template>

<script>
import Header from '../components/vendor/header'
import stickyNav from '../layouts/stickyNav'
import gettingPaid from '../components/vendor/gettingPaid'
import ourServices from '../components/vendor/ourServices'
import whyTrustUs from '../components/vendor/whyTrustUs'
import trustedBrands from '../layouts/trustedBrands'
import Footer from '../layouts/footer'

export default {
  components: {
    Header,
    stickyNav,
    gettingPaid,
    ourServices,
    whyTrustUs,
    trustedBrands,
    Footer,
  },
  data() {
    return {
      enableStickyNav: null
    }
  },
  mounted() {
    // console.log('Index page created')
    // console.log('Sticky Nav mounted')
    window.addEventListener('scroll', this.handleNavDisplay)
  },
  // created() {},
  destroyed() {
    window.addEventListener('scroll', this.handleNavDisplay)
  },
  methods: {
    handleNavDisplay() {
      var y = window.scrollY
      if (y > 100 && !this.enableStickyNav) {
        // console.log ('Display New Menu')
        this.enableStickyNav = true
      } else if (y < 100 && this.enableStickyNav) {
        // console.log('Hide sticky Nav')
        this.enableStickyNav = false
      }
    }
  }
}
</script>

<style scoped>
</style>