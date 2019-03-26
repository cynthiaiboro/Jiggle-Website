<template>
  <div>
    <Header />
    <stickyNav v-if="enableStickyNav" />
    <aboutJiggle />
    <trustedBrands />
    <Footer />
  </div>
</template>

<script>
import Header from '../components/about/header'
import stickyNav from '../layouts/stickyNav'
import aboutJiggle from '../components/about/aboutJiggle'
import trustedBrands from '../layouts/trustedBrands'
import Footer from '../layouts/footer'

export default {
  components: {
    Header,
    stickyNav,
    aboutJiggle,
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
