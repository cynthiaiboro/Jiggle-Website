<template>
  <div>
    <section id="trusted-brands">
      <div class="container">
        <div class="d-flex justify-content-center align-items-center">
          <div>
            <h3 class="text-center get-started" style="font-weight: 500; color:#00255E;">
              We work with a Trusted Brand
            </h3>
            <hr class="blue-hr">
            <p class="text-center">
              Our global partner
            </p>
          </div>
        </div>
        <div class="brand-logo my-2">
          <div class="row">
            <div class="col-12 d-flex justify-content-center">
              <img src="/paystack.svg" alt="Paystack Logo" class="main-brand-logo">
            </div>
            <!-- <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <img src="/flutterwave.svg" alt="Paystack Logo" class="main-brand-logo">
            </div>
            <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <img src="/mastercard.svg" alt="Paystack Logo" class="main-brand-logo">
            </div> -->
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
.blue-hr {
  width: 100px;
  height: 1px;
  background-color: #2f6deb;
}
#trusted-brands {
  background-color: #ffffff;
  padding: 4% 0;
}
.main-brand-logo {
  width: 100%;
  height: 40px;
}
h3 {
  font-family: 'Circularmedium';
  color: #2d3448;
}
p {
  font-family: 'Circularbook';
  color : #aeb2bc;
}
@media only screen and (max-width: 700px) {
  h3 {
    font-size: 1.2rem !important;
  }
  #trusted-brands {
  padding: 40px 0px 20px 0px;
}
}
</style>
