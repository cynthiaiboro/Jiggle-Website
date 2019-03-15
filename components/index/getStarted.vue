<template>
  <div>
    <section id="get-started-quickly">
      <div class="container">
        <div class="d-flex justify-content-center align-items-center">
          <div>
            <h3 class="text-center get-started" style="font-weight: 500; color:#2D3448;">
              Get Started Quickly
            </h3>
            <hr class="blue-hr">
          </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <div class="container mt-md-3 mt-sm-3">
              <div class="row">
                <div class="col-sm-12 col-md-10 ml-sm-0 get-started-normal-background">
                  <div class="row">
                    <div class="col-md-2">
                      <div class="d-none d-md-flex justify-content-center align-items-center number-blue">
                        <p class="get-started-main-number">
                          1
                        </p>
                      </div>
                    </div>
                    <div class="col-sm-12 col-md-10">
                      <h5 class="get-started" style="font-weight: 400; color:#2f6deb">
                        Download from PlayStore
                      </h5>
                      <p>
                        Download jiggle mobile app from google play store.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="container mt-md-3 mt-sm-2">
              <div class="row">
                <div class="col-2 d-none d-md-flex justify-content-center align-items-center nothing" />
                <div class="col-sm-12 col-md-10 get-started-blue-background">
                  <div class="row">
                    <div class="col-sm-none col-md-2">
                      <div class="d-none d-md-flex justify-content-center align-items-center number-blue">
                        <p class="get-started-main-number">
                          2
                        </p>
                      </div>
                    </div>
                    <div class="col-sm-12 col-md-10">
                      <h5 class="get-started" style="font-weight: 400; color:#2f6deb">
                        Create Account
                      </h5>
                      <p>
                        Sign up with just your email, password and name.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="container mt-md-3 mt-sm-2">
              <div class="row">
                <div class="col-sm-12 col-md-10 ml-sm-0 get-started-normal-background">
                  <div class="row">
                    <div class="col-md-2">
                      <div class="d-none d-md-flex justify-content-center align-items-center number-blue">
                        <p class="get-started-main-number">
                          3
                        </p>
                      </div>
                    </div>
                    <div class="col-sm-12 col-md-10">
                      <h5 class="get-started" style="font-weight: 400; color:#2f6deb">
                        Create a Meal Plan
                      </h5>
                      <p class="">
                        Create a custom meal plan or choose  from a range of attractive plans.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="container mt-md-3 mt-sm-2">
              <div class="row">
                <div class="col-2 d-none d-md-flex justify-content-center align-items-center nothing" />
                <div class="col-sm-12 col-md-10 get-started-blue-background">
                  <div class="row">
                    <div class="col-sm-none col-md-2">
                      <div class="d-none d-md-flex justify-content-center align-items-center number-blue">
                        <p class="get-started-main-number">
                          4
                        </p>
                      </div>
                    </div>
                    <div class="col-sm-12 col-md-10">
                      <h5 class="get-started" style="font-weight: 400; color:#2f6deb">
                        Fund Wallet
                      </h5>
                      <p>
                        Fund your wallet and get your meals budgeted for you instantly.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="container mt-md-3 mt-sm-2">
              <div class="row">
                <div class="col-sm-12 col-md-10 ml-sm-0 get-started-normal-background">
                  <div class="row">
                    <div class="col-md-2">
                      <div class="d-none d-md-flex justify-content-center align-items-center number-blue">
                        <p class="get-started-main-number">
                          5
                        </p>
                      </div>
                    </div>
                    <div class="col-sm-12 col-md-10">
                      <h5 class="get-started" style="font-weight: 400; color:#2f6deb">
                        Pay with QR Code
                      </h5>
                      <p>
                        Simply scan a QR code to pay for your meals whenever and wherever.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="d-flex d-sm-block col-md-6">
            <div class="d-flex justify-content-center align-items-center" style="height:90%">
              <img src="/screenshot_top.png" alt="" class="top-phones">
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
  src: url('../../assets/fonts/circularbook.ttf');
}
@font-face {
  font-family: 'Circularmedium';
  src: url('../../assets/fonts/circularmedium.ttf');
}
#get-started-quickly {
  padding: 5% 0;
  background: #f2f2f2;
  color: #ffffff;
}
p {
  font-size: 1rem !important;
  line-height: 1.5rem;
  font-family: 'Circularbook';
}
.get-started {
  font-family: 'Circularmedium' !important;
}
.blue-hr {
  width: 100px;
  height: 3px;
  background-color: #2f6deb;
}
.number-blue {
  height: 40px;
  width: 40px;
  border-radius: 50%;
  border: 2px solid #2f6deb;
  color: #2f6deb;
  font-weight: 550;
}
.get-started-blue-background {
  background-color: #ffffff;
  color: #2d3448;
  padding: 30px 30px;
  box-shadow: 0px 0px 3px #eceef1;
  border-radius: 3px;
}
.get-started-normal-background {
  padding: 30px 30px;
  margin-left: auto;
  color: #2d3448;
}
.get-started-main-number {
  margin-bottom: 0px;
}
@media only screen and (max-width: 700px) {
  .get-started-normal-background {
    text-align: center;
  }
  .get-started-blue-background {
    text-align: center !important;
  }
  .top-phones {
    display: none;
  }
}
@media only screen and (max-width: 400px) {
  .top-phones {
    display: none;
  }
}
</style>
