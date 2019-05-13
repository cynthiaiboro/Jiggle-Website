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
            <p class="text-center">All you need for an effective meal budgeting and payment now in one place.</p>
          </div>
        </div>
        <div>
          <div class="mt-5 our-services-four-section ">
            <div class="row d-flex justify-content-center">
              <div class="col-md-4 col-12">
                <div class="position-our-services-blue-background">
                  <img src="/budget.svg" style="height: 75px" class="flaticons"/>
                </div>
                <div class="text-center mt-4">
                  <h5 class="h6-bold get-started" style="font-weight: 400">
                    Meal Budgeting
                  </h5>
                  <p class="px-3">
                    Budget for your meal conveniently, utilize your money effectively and gain control over your spending.
                  </p>
                </div>
              </div>
              <div class="col-md-4 col-12">
                <div class="position-our-services-blue-background">
                  <img src="/payment.svg" style="height: 75px" class="flaticons"/>
                </div>
                <div class="text-center mt-4">
                  <h5 class="h6-bold get-started" style="font-weight: 400">
                    Easy Payment
                  </h5>
                  <p class="px-3">
                    Pay with a single click. Simply scan a QR code using your smartphone and voila you are good to go.
                  </p>
                </div>
              </div>
              <div class="col-md-4 col-12">
                <div class="position-our-services-blue-background">
                  <img src="/wallet.svg" style="height: 75px" class="flaticons"/>
                </div>
                <div class="text-center mt-4">
                  <h5 class="h6-bold get-started" style="font-weight: 400">
                    Accessible Wallet
                  </h5>
                  <p class="px-3">
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
@-webkit-keyframes flipInX {
  from {
    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }

  60% {
    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    opacity: 1;
  }

  80% {
    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
  }

  to {
    -webkit-transform: perspective(400px);
    transform: perspective(400px);
  }
}

@keyframes flipInX {
  from {
    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }

  60% {
    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    opacity: 1;
  }

  80% {
    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
  }

  to {
    -webkit-transform: perspective(400px);
    transform: perspective(400px);
  }
}

.flipInX {
  -webkit-backface-visibility: visible !important;
  backface-visibility: visible !important;
  -webkit-animation-name: flipInX;
  animation-name: flipInX;
}

@font-face {
  font-family: 'Circularmedium';
  src: url('../../assets/fonts/circularmedium.ttf');
}
.get-started {
  font-family: 'Circularmedium' !important;
  color: #2f6deb;
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
p {
  color: #aeb2bc;
}
.flaticons {
  animation-name: flipInX;
  animation-duration: 6s;
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
  padding: 40px 0 0 0;
}
}
</style>
