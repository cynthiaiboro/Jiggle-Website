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
                  Improved Customer Experience
                </h5>
                <p class="text-white">
                  Give your customers a simple, secure and convenient way to pay.
                  Paying with Jiggle mean easy transactions and happy customers.
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
                      Great Tracking Tool
                    </h5>
                    <p class="text-white">
                      Use one platform to track sales volume, payment status, number of unique customers.
                      Gain a better understanding of your business and make more informed decisions.
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
                  Safe Payment
                </h5>
                <p class="text-white">
                  Reduce the risk associated with accepting cash.
                  Our cashless payment platform ensures maximum safety for your money.
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
                      Maximum Security
                    </h5>
                    <p class="text-white">
                      Safety is our top priority.
                      Your account details are protected and stored in servers in a secure location
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
  background: #3e4353;
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
}
h5 {
  font-family: 'Circularmedium';
}
p {
  font-family: 'Circularbook';
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
.get-started-main-number {
  margin-bottom: 0px;
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
