<template>
  <div>
    <section id="our-services">
      <div class="container">
        <div class="d-flex justify-content-center align-items-center">
          <div>
            <h3 class="text-center get-started" style="font-weight: 500; color:#00255E;">
              Our Services
            </h3>
            <hr class="blue-hr">
            <p class="text-center">All you need for an effective meal budgeting and payment now in one place.</p>
          </div>
        </div>
        <div>
          <div class="mt-5 our-services-four-section ">
            <div class="row d-flex justify-content-center">
              <div class="col-md-3 col-12 services-card">
                <div class="pb-3">
                  <img src="/budget.svg" style="height: 75px" class="wow animated bounce delay-2s"/>
                </div>
                <div class="mt-4">
                  <h5 class="h6-bold get-started" style="font-weight: 400">
                    Meal Budgeting
                  </h5>
                  <p class="py-3">
                    Budget for your meal conveniently, utilize your money effectively and gain control over your spending.
                  </p>
                </div>
              </div>
              <div class="col-md-3 col-12 services-card">
                <div class="pb-3">
                  <img src="/payment.svg" style="height: 75px" class="wow animated bounce delay-2s"/>
                </div>
                <div class="mt-4">
                  <h5 class="h6-bold get-started" style="font-weight: 400">
                    Easy Payment
                  </h5>
                  <p class="py-3">
                    Pay with a single click. Simply scan a QR code using your smartphone and voila you are good to go.
                  </p>
                </div>
              </div>
              <div class="col-md-3 col-12 services-card">
                <div class="pb-3">
                  <img src="/wallet.svg" style="height: 75px" class="wow animated slower bounce delay-2s" />
                </div>
                <div class="mt-4">
                  <h5 class="h6-bold get-started" style="font-weight: 400">
                    Accessible Wallet
                  </h5>
                  <p class="py-3">
                    Make payment for your meals from any device. Pay seamlessly for meals anytime and at any jiggle-enabled food outlet.
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
.get-started {
  font-family: 'Circularmedium' !important;
  color: #00255E;
}
.h6-bold {
  font-weight: 650;
}
#our-services {
  padding: 5% 0;
  background-color: #FDFEFF;
}
.services-card {
  background-color: #ffffff;
  box-shadow: 0px 0px 24px rgba(6, 24, 51, 0.05);
  border-radius: 10px;
  padding: 70px 30px 30px 30px;
  margin: 20px;
}
.blue-hr {
  width: 100px;
  height: 1px;
  background-color: #2f6deb;
}
p {
  color: #35527F;
}
@media only screen and (max-width: 700px) {
h3 {
    font-size: 1.2rem !important;
  }
h5 {
    font-size: 1rem !important;
  }
p {
  font-size: 0.9rem !important;
}
#our-services {
  padding: 40px 0 40px 0;
}
.services-card {
  margin: 20px 50px;
  max-width: 15em;
}
}
</style>
