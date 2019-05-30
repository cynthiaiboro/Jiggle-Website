<template>
  <div>
    <Nav />
    <Header />
    <stickyNav v-if="enableStickyNav" />
    <ourTeam />
    <whyTrustUs />
    <trustedBrands />
    <Footer />
  </div>
</template>

<script>
import Nav from '../layouts/Nav'
import Header from '../components/about/header'
import ourTeam from '../components/about/ourTeam'
import stickyNav from '../layouts/stickyNav'
import whyTrustUs from '../components/about/whyTrustUs'
import trustedBrands from '../layouts/trustedBrands'
import Footer from '../layouts/footer'

export default {
  components: {
    Nav,
    Header,
    ourTeam,
    stickyNav,
    whyTrustUs,
    trustedBrands,
    Footer
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
