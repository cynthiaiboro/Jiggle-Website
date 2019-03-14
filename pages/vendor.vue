<template>
  <div>
    <Header />
    <gettingPaid />
    <ourServices />
    <whyTrustUs />
    <trustedBrands />
    <Footer />
  </div>
</template>

<script>
import Header from '../components/vendor/header'
import gettingPaid from '../components/vendor/gettingPaid'
import ourServices from '../components/vendor/ourServices'
import whyTrustUs from '../components/vendor/whyTrustUs'
import trustedBrands from '../layouts/trustedBrands'
import Footer from '../layouts/footer'

export default {
  components: {
    Header,
    gettingPaid,
    ourServices,
    whyTrustUs,
    trustedBrands,
    Footer
  }
}
</script>

<style scoped>
</style>
