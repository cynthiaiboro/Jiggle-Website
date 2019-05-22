<template>
  <div>
    <section id="why-us" class="text-white">
      <div class="container">
        <div class="d-flex justify-content-center align-items-center">
          <div>
            <h3 class="text-center get-started" style="font-weight: 500;">
              Why Trust Us
            </h3>
            <hr class="white-hr">
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 col-sm-6 col-12  ml-sm-0 get-started-normal-background">
            <div class="row">
              <div class="col-md-2">
                <div class="d-none d-md-flex justify-content-center align-items-center number-white">
                  <p class="get-started-main-number">
                    <i class="fa fa-check" aria-hidden="true" />
                  </p>
                </div>
              </div>
              <div class="col-sm-12 col-md-10">
                <h5 class="text-white get-started">
                  Great Budget Tool
                </h5>
                <p>
                  Get your meals budgeted automatically when you fund your wallet.
                  Keep track of your spending and get a well-rounded picture of your meal expenses.
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-sm-6 col-12  ml-sm-0 get-started-normal-background">
            <div class="row">
              <div class="col-sm-12 col-md-12">
                <div class="row">
                  <div class="col-md-2">
                    <div class="d-none d-md-flex justify-content-center align-items-center number-white">
                      <p class="get-started-main-number">
                        <i class="fa fa-check" aria-hidden="true" />
                      </p>
                    </div>
                  </div>
                  <div class="col-sm-12 col-md-10">
                    <h5 class="text-white get-started">
                      Quick pay
                    </h5>
                    <p>
                      Our payment process is quick, simple and stress-free. 
                      Order when you are ready and pay with a click. Avail yourself this seamless  experience.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 col-sm-6 col-12  ml-sm-0 get-started-normal-background">
            <div class="row">
              <div class="col-md-2">
                <div class="d-none d-md-flex justify-content-center align-items-center number-white">
                  <p class="get-started-main-number">
                    <i class="fa fa-check" aria-hidden="true" />
                  </p>
                </div>
              </div>
              <div class="col-sm-12 col-md-10">
                <h5 class="text-white get-started">
                  Accessible
                </h5>
                <p>
                  Fund your wallet whenever you choose. Make payment for your meals whenever at any jiggle
                  enabled restaurant.
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-sm-6 col-12 ml-sm-0 get-started-normal-background">
            <div class="row">
              <div class="col-sm-12 col-md-12">
                <div class="row">
                  <div class="col-md-2">
                    <div class="d-none d-md-flex justify-content-center align-items-center number-white">
                      <p class="get-started-main-number">
                        <i class="fa fa-check" aria-hidden="true" />
                      </p>
                    </div>
                  </div>
                  <div class="col-sm-12 col-md-10">
                    <h5 class="text-white get-started">
                      Secure purchase
                    </h5>
                    <p>
                      Safety is our top priority and so we are committed to providing safe
                      and reliable transaction. We use the latest innovative technologies in IT security.
                    </p>
                  </div>
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
  font-family: 'Circularbook';
  src: url('../../assets/fonts/Bold.ttf');
}
@font-face {
  font-family: 'Circularmedium';
  src: url('../../assets/fonts/Medium.ttf');
}
@font-face {
  font-family: 'Circularlight';
  src: url('../../assets/fonts/Light.ttf');
}
#why-us {
  background-color: #2f6deb;
  padding: 5% 0;
}
.get-started {
  font-family: 'Circularmedium' !important;
}
.white-hr {
  width: 100px;
  height: 1px;
  background-color: rgb(255, 255, 255);
}
.our-services-position-column-two {
  display: flex;
  justify-content: flex-end;
}
.get-started-normal-background {
  padding: 30px 30px;
  margin-left: auto;
  color: #2d3448;
}
h5 {
  font-family: 'Circularmedium';
}
p {
  font-family: 'Circularlight';
  font-size: 1.1rem !important;
  color: #e7F0Fe;
}
.get-started-main-number {
  margin-bottom: 0px;
}
.number-white {
  height: 40px;
  width: 40px;
  border-radius: 50%;
  border: 2px solid rgb(255, 255, 255);
  color: rgb(255, 255, 255);
  display: flex;
  align-items: center;
  justify-content: center;
}

@media only screen and (max-width: 700px) {
  .get-started-normal-background {
    padding: 15px 30px;
    text-align: center !important;
  }
  h3 {
    font-size: 1.2rem !important;
  }
  h5 {
    font-size: 1rem !important;
  }
  p {
    font-size: 0.9rem !important;
  }
  #why-us {
  padding: 40px 0 0 0;
}
}
</style>
