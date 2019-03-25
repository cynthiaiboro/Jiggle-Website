<template>
  <div>
    <Header />
    <welcome />
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
import Welcome from '../components/vendor/Welcome'

export default {
  components: {
    Header,
    gettingPaid,
    ourServices,
    whyTrustUs,
    trustedBrands,
    Footer,
    Welcome
  }
}
</script>

<style scoped>
</style>
