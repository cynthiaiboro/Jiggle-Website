<template>
  <div>
    <indexHeader />
    <getStarted />
    <becomeAVendor />
    <ourServices />
    <whyTrustUs />
    <trustedBrands />
    <Footer />
  </div>
</template>

<script>
import indexHeader from '../components/index/header'
import getStarted from '../components/index/getStarted'
import becomeAVendor from '../components/index/becomeAVendor'
import ourServices from '../components/index/ourServices'
import whyTrustUs from '../components/index/whyTrustUs'
import trustedBrands from '../layouts/trustedBrands'
import Footer from '../layouts/footer'
export default {
  components: {
    indexHeader,
    getStarted,
    becomeAVendor,
    ourServices,
    whyTrustUs,
    trustedBrands,
    Footer
  }
}
</script>

<style scoped>
</style>
