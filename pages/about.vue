<template>
  <div>
    <Header />
    <aboutJiggle />
    <trustedBrands />
    <Footer />
  </div>
</template>

<script>
import Header from '../components/about/header'
import aboutJiggle from '../components/about/aboutJiggle'
import trustedBrands from '../layouts/trustedBrands'
import Footer from '../layouts/footer'

export default {
  components: {
    Header,
    aboutJiggle,
    trustedBrands,
    Footer
  }
}
</script>

<style scoped>
</style>
