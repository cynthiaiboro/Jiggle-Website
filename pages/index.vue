<template>
  <div>
    <indexHeader />
    <stickyNav v-if="enableStickyNav" />
    <ourServices />
    <getStarted />
    <becomeAVendor />
    <whyUseJiggle />
    <trustedBrands />
    <Footer />
  </div>
</template>

<script>
import indexHeader from '../components/index/header'
import stickyNav from '../components/index/stickyNav'
import getStarted from '../components/index/getStarted'
import becomeAVendor from '../components/index/becomeAVendor'
import ourServices from '../components/index/ourServices'
import whyUseJiggle from '../components/index/whyUseJiggle'
import trustedBrands from '../layouts/trustedBrands'
import Footer from '../layouts/footer'
export default {
  components: {
    indexHeader,
    stickyNav,
    getStarted,
    becomeAVendor,
    ourServices,
    whyUseJiggle,
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
