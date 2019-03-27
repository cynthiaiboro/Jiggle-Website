<template>
  <div>
    <section id="our-services">
      <div class="container">
        <div class="d-flex justify-content-center align-items-center">
          <div>
            <h3 class="text-center get-started" style="font-weight: 500; color:#2D3448;">
              Our Services
            </h3>
            <p>All you need for a trouble-free meal budgeting and payment now in one place</p>
            <hr class="blue-hr">
          </div>
        </div>
        <div>
          <div class="mt-5 our-services-four-section ">
            <div class="row d-flex justify-content-center">
              <div class="col-md-4 col-12">
                <div class="position-our-services-blue-background">
                  <img src="/budget.svg" />
                </div>
                <div class="text-center mt-4">
                  <h5 class="h6-bold get-started" style="font-weight: 400">
                    Meal Budgeting
                  </h5>
                  <p class="px-3">
                    Budget your meals conveniently, utilize your money effectively and gain control over your spending.
                  </p>
                </div>
              </div>
              <div class="col-md-4 col-12">
                <div class="position-our-services-blue-background">
                  <img src="/payment.svg" />
                </div>
                <div class="text-center mt-4">
                  <h5 class="h6-bold get-started" style="font-weight: 400">
                    Easy Payment
                  </h5>
                  <p class="px-3">
                    Pay with a single click. Simply scan a QR code using your smartphone and you are good to go.
                  </p>
                </div>
              </div>
              <div class="col-md-4 col-12">
                <div class="position-our-services-blue-background">
                  <img src="/wallet.svg" />
                </div>
                <div class="text-center mt-4">
                  <h5 class="h6-bold get-started" style="font-weight: 400">
                    Accessible Wallet
                  </h5>
                  <p class="px-3">
                    Make payment for your meals from any device. Pay instantly for meals anytime and anywhere.
                  </p>
                </div>
              </div>
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
  font-family: 'Circularmedium';
  src: url('../../assets/fonts/circularmedium.ttf');
}
.get-started {
  font-family: 'Circularmedium' !important;
}
.position-our-services-blue-background {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}
.h6-bold {
  font-weight: 650;
}
#our-services {
  padding: 5% 0;
  background-color: #ffffff;
}
.blue-hr {
  width: 100px;
  height: 3px;
  background-color: #2f6deb;
}
</style>
