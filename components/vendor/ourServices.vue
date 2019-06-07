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
              <div class="col-md-3 col-12 services-card shadow-sm">
                <div class="pb-3">
                  <img src="/location.svg" style="height: 65px" data-aos="flip-left"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="2000"/>
                </div>
                <div class="mt-4">
                  <h5 class="h6-bold get-started" style="font-weight: 400">
                    Track Payment
                  </h5>
                  <p class="py-3">
                    Get quick access to all your transactions. Check payments received, see bank transactions and watch your business grow all within one app.
                  </p>
                </div>
              </div>
              <div class="col-md-3 col-12 services-card shadow-sm">
                <div class="pb-3">
                  <img src="/cashless.svg" style="height: 65px" data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000"/>
                </div>
                <div class="mt-4">
                  <h5 class="h6-bold get-started" style="font-weight: 400">
                    Cashless Experience
                  </h5>
                  <p class="py-3">
                    Receive payment without having to handle cash. Get paid the cashless way and ensure maximum security with Jiggle app.
                  </p>
                </div>
              </div>
              <div class="col-md-3 col-12 services-card shadow-sm">
                <div class="pb-3">
                  <img src="/daily.svg" style="height: 65px" data-aos="flip-left"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="2000" />
                </div>
                <div class="mt-4">
                  <h5 class="h6-bold get-started" style="font-weight: 400">
                    Get Dialy Payout
                  </h5>
                  <p class="py-3">
                    You will love our next day payout feature. Your money is automatically deposited into your bank account the next business day.
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
  font-family: 'Circularheavy' !important;
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
  /* box-shadow: 0px 0px 24px rgba(6, 24, 51, 0.05); */
  border-radius: 10px;
  padding: 50px 30px 20px 30px;
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
