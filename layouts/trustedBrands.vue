<template>
  <div>
    <section id="trusted-brands">
      <div class="container">
        <div class="d-flex justify-content-center align-items-center">
          <div>
            <h3 class="text-center get-started" style="font-weight: 500; color:#2D3448;">
              We work with Trusted Brands
            </h3>
            <hr class="blue-hr">
            <p class="text-center">
              We work with a number of global partners
            </p>
          </div>
        </div>
        <div class="brand-logo mt-5">
          <div class="row">
            <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <img src="/paystack.svg" alt="Paystack Logo" class="main-brand-logo">
            </div>
            <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <img src="/flutterwave.svg" alt="Paystack Logo" class="main-brand-logo">
            </div>
            <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <img src="/mastercard.svg" alt="Paystack Logo" class="main-brand-logo">
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
@font-face {
  font-family: 'Circularbook';
  src: url('..//assets/fonts/circularbook.ttf');
}
@font-face {
  font-family: 'Circularmedium';
  src: url('..//assets/fonts/circularmedium.ttf');
}
.blue-hr {
  width: 100px;
  height: 3px;
  background-color: #2f6deb;
}
#trusted-brands {
  background-color: #ffffff;
  padding: 5% 0;
}
.main-brand-logo {
  width: 100%;
  height: 40px;
}
</style>
