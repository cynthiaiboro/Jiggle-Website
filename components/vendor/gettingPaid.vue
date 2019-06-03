<template>
  <div>
    <section id="get-started-quickly">
      <div class="container">
        <div class="d-flex justify-content-center align-items-center">
          <div class="">
            <h3 class="text-center get-started" style="font-weight:400">
              Getting Payments Made Easy - Get Started Today.
            </h3>
            <hr class="blue-hr">
            <p class="heading-text text-center mb-5">
              Power your business with our simple payment processing and watch your business grow.
            </p>
          </div>
        </div>
        <div class="2">
          <div class="row">
            <div class="col-md-6">
              <div class="container mt-md-4 mt-0">
                <div class="row">
                  <div class="col-sm-12 col-md-10 ml-sm-0 get-started-normal-background">
                    <div class="row">
                      <div class="col-md-2">
                        <div class="d-none d-md-flex justify-content-center align-items-center number-grey">
                          <p class="get-started-main-number">
                            1
                          </p>
                        </div>
                      </div>
                      <div class="col-sm-12 col-md-10">
                        <h5 class="get-started" style="font-weight:400">
                          Download from Playstore
                        </h5>
                        <p>
                           Download the Jiggle vendor app to your mobile device.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="container mt-md-5 mt-sm-2">
                <div class="row">
                  <div class="col-2 d-none d-md-flex justify-content-center align-items-center" />
                  <div class="col-sm-12 col-md-10 get-started-black-background">
                    <div class="row">
                      <div class="col-sm-none col-md-2">
                        <div class="d-none d-md-flex justify-content-center align-items-center number-white">
                          <p class="get-started-main-number">
                            2
                          </p>
                        </div>
                      </div>
                      <div class="col-sm-12 col-md-10">
                        <h5 class="get-started" style="font-weight:400">
                          Login
                        </h5>
                        <p>
                          Sign in to your account.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="container mt-md-5 mt-sm-2">
                <div class="row">
                  <div class="col-sm-12 col-md-10 ml-sm-0 get-started-normal-background">
                    <div class="row">
                      <div class="col-md-2">
                        <div class="d-none d-md-flex justify-content-center align-items-center number-grey">
                          <p class="get-started-main-number">
                            3
                          </p>
                        </div>
                      </div>
                      <div class="col-sm-12 col-md-10">
                        <h5 class="get-started" style="font-weight:400">
                          Receive Payment
                        </h5>
                        <p>
                          Start receiving payments right away. You receive money
                          in your jiggle wallet which is deposited into your bank account the next business day.
                        </p> 
                      </div>
                    </div>
                  </div>
                </div>
              </div>                
            </div>
            <div class="d-none d-sm-block col-md-6">
              <div class="d-flex justify-content-center align-items-center" style="height:90%;">
                <img src="jiggle phone.svg" alt="" class="top-phones">
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
  src: url('../../assets/fonts/Regular.ttf');
}
@font-face {
  font-family: 'Circularmedium';
  src: url('../../assets/fonts/Medium.ttf');
}
#get-started-quickly {
  background-color: #e5e5e5;
  padding: 5% 0 !important;
}
p {
  font-size: 1.1rem !important;
  line-height: 1.5rem;
  font-family: 'Circularbook';
}
 h5 {
    font-size: 21px !important;
  }
.heading-text {
  color: #aeb2bc;
}
.get-started {
  font-family: 'Circularmedium' !important;
}
.blue-hr {
  width: 100px;
  height: 3px;
  background-color: #2f6deb;;
}
.number-grey {
  height: 40px;
  width: 40px;
  border-radius: 50%;
  border: 2px solid #3e4353;
  color: #3e4353;
  font-weight: 550;
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
.get-started-black-background {
  background-color: #2d3448;
  color: #ffffff;
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
  #get-started-quickly {
  padding: 40px 0 0 0 !important;
}
  .get-started-black-background {
    text-align: center !important;
  }
  .top-phones {
    display: none;
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
}
@media only screen and (max-width: 400px) {
  .top-phones {
    display: none;
  }
}
</style>
