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
                  Quick pay
                </h5>
                <p class="text-white">
                  Jiggle makes ordering and paying for food and drinks 
                  faster than ever – get what you want when you’re ready to order, and pay when you’re done.
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
                      Cashless experience
                    </h5>
                    <p class="text-white">
                      No need to fumble with cash or card. Jiggle provides you
                      with an amazing cashless mobile payment experience.
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
                  Mobile
                </h5>
                <p class="text-white">
                  Pay more conveniently and securely and at anywhere and anytime with your mobile phone.
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
                    <p class="text-white">
                      Safety is our top priority and so we are committed to providing safe and reliable transaction.
                      Your account details are protected and stored on servers in secure locations.
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
  src: url('../../assets/fonts/circularbook.ttf');
}
@font-face {
  font-family: 'Circularmedium';
  src: url('../../assets/fonts/circularmedium.ttf');
}
#why-us {
  background: linear-gradient(180deg, #2f6deb 0%, #0657cd 100%);
  padding: 5% 0;
}
.get-started {
  font-family: 'Circularmedium' !important;
}
.white-hr {
  width: 100px;
  height: 3px;
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
  font-family: 'Circularbook';
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
}
</style>
