<template>
  <div>
    <section id="our-services">
      <div class="container">
        <div class="d-flex justify-content-center align-items-center">
          <div>
            <h3 class="text-center get-started" style="font-weight: 500; color:#2D3448;">
              Our Services
            </h3>
            <hr class="blue-hr">
            <p class="heading-text text-center">
              Everything you need to collect payment and grow your business
            </p>
          </div>
        </div>
        <div>
          <div class="mt-5 our-services-four-section ">
            <div class="row d-flex justify-content-center">
              <div class="col-md-4 col-12">
                <div class="position-our-services-blue-background">
                  <div class="our-services-blue-background">
                    <i class="fa fa-money" style="color:#ffffff; font-size:25px;" />
                  </div>
                </div>
                <div class="text-center mt-4">
                  <h5 class="h6-bold get-started" style="font-weight: 400">
                    Track Payment     
                  </h5>
                  <p>
                    Get quick access to all your transactions. 
                    Check all payments received, see bank transfers and watch your business grow all within one app.
                  </p>
                </div>
              </div>
              <div class="col-md-4 col-12">
                <div class="position-our-services-blue-background">
                  <div class="our-services-blue-background">
                    <i class="fa fa-clock-o" style="color:#ffffff; font-size:30px;" />                            
                  </div>
                </div>
                <div class="text-center mt-4">
                  <h5 class="h6-bold get-started" style="font-weight: 400">
                    Cashless Experience
                  </h5>
                  <p>
                    Receive payment without having to handle cash. Get paid the cashless way and ensure maximum security.
                  </p>
                </div>
              </div>
              <div class="col-md-4 col-12">
                <div class="position-our-services-blue-background">
                  <div class="our-services-blue-background">
                    <i class="fa fa-mobile" style="color:#ffffff; font-size:35px;" />                                    
                  </div>
                </div>
                <div class="text-center mt-4">
                  <h5 class="h6-bold get-started" style="font-weight: 400">
                    Get Daily Payout
                  </h5>
                  <p>
                    You will love our next day payout feature.
                    Your money is automatically deposited into your bank account the next business day.
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
.our-services-blue-background {
  height: 100px;
  width: 100px;
  border-radius: 50%;
  background-color: #3e4353;
  display: flex;
  justify-content: center;
  align-items: center;
}
p {
  color: #aeb2bc !important;
  }
@media only screen and (max-width: 700px) {
  h5 {
    font-size: 1rem !important;
  }
  h3 {
    font-size: 1.2rem !important;
  }
  p {
    font-size: 0.9rem !important;
  }
}
</style>
