<template>
  <div>
    <section id="nav">
      <div class="container py-3">
        <b-navbar toggleable class="navbar-expand-lg px-0">
          <b-navbar-brand>
            <router-link to="/">
              <img src="/jiggle logo blue.svg" height="38px" width="127px">
            </router-link>
          </b-navbar-brand>
          <b-navbar-toggle target="nav_item_collapse"/>
          <b-collapse id="nav_item_collapse" is-nav>
            <b-navbar-nav class="ml-auto">
              <b-nav-item href="#our-services" class="nav-link">Budget</b-nav-item>
              <b-nav-item href="#become-a-vendor" class="nav-link">Payment</b-nav-item>
              <b-nav-item to="/about" class="nav-link">About</b-nav-item>
              <b-nav-item to="/vendor" class="nav-link">Vendors</b-nav-item>
              <b-nav-item to="/" class="nav-link">Blog</b-nav-item>
              <!-- <b-button class="get-started-button" href="#get-started-quickly">GET STARTED</b-button> -->
            </b-navbar-nav>
          </b-collapse>
        </b-navbar>
      </div>
    </section>

    <section id="after-nav">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <div class="after-nav-col-one">
              <div>
                <h1 class="great-app">
                  <br>Meal budgeting & payment
                </h1>
                <p class="great-app-text pb-4" style="font-size:1.1rem; color:#2d3448">
                  
                  Budget for your meals with ease and convenience.
                  Pay once to eat wherever and whenever.
                  <!-- Stay on top of your budget effortlessly with Jiggle. -->
                </p>
                <div class="d-sm-inline bounce">
                  <img src="/googleplay dark.svg" height="45px" class="google-play d-md-inline-block pr-2">
                  <b-button
                    href="#get-started-quickly"
                    class="call-to-action"
                    style="font-weight:400; font-size: 0.9rem;"
                  >GET STARTED</b-button>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 d-none d-md-block py-3">
            <div class="d-flex justify-content-center align-items-center">
              <img src="/top-phone.svg" height="450vh" class="top-phone">
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
@-webkit-keyframes bounceInRight {
  from,
  60%,
  75%,
  90%,
  to {
    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    -webkit-transform: translate3d(3000px, 0, 0);
    transform: translate3d(3000px, 0, 0);
  }

  60% {
    opacity: 1;
    -webkit-transform: translate3d(-25px, 0, 0);
    transform: translate3d(-25px, 0, 0);
  }

  75% {
    -webkit-transform: translate3d(10px, 0, 0);
    transform: translate3d(10px, 0, 0);
  }

  90% {
    -webkit-transform: translate3d(-5px, 0, 0);
    transform: translate3d(-5px, 0, 0);
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

@keyframes bounceInRight {
  from,
  60%,
  75%,
  90%,
  to {
    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    -webkit-transform: translate3d(3000px, 0, 0);
    transform: translate3d(3000px, 0, 0);
  }

  60% {
    opacity: 1;
    -webkit-transform: translate3d(-25px, 0, 0);
    transform: translate3d(-25px, 0, 0);
  }

  75% {
    -webkit-transform: translate3d(10px, 0, 0);
    transform: translate3d(10px, 0, 0);
  }

  90% {
    -webkit-transform: translate3d(-5px, 0, 0);
    transform: translate3d(-5px, 0, 0);
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

.bounceInRight {
  -webkit-animation-name: bounceInRight;
  animation-name: bounceInRight;
}
@font-face {
  font-family: 'Circularbook';
  src: url('../../assets/fonts/Regular.ttf');
}
@font-face {
  font-family: 'Circularbold';
  src: url('../../assets/fonts/Bold.ttf');
}
#nav {
  background-color: #ffffff;
}
#after-nav {
  padding: 20px 0 20px 0;
}
.nav-link {
  color: #32507e !important;
  padding: 4px 10px !important;
  font-size: 1rem !important;
  font-family: 'Circularbook' !important;
}
.top-phone {
  animation-name: bounceInRight;
  animation-duration: 6s;
}
.nav-link:hover {
  color: #2f6deb !important;
  padding: 4px 10px !important;
  transition: 1s;
  text-decoration: none !important;
}
.nav-item:last-of-type .nav-link {
  padding: 4px 30px 4px 10px !important;
}
.get-started-button {
  border-radius: 3px !important;
  font-family: 'Circularbook' !important;
  border: 2px solid #3e4353;
  width: 150px;
  height: 40px;
  background-color: #ffffff;
  color: #3e4353;
}
.get-started-button:hover {
  cursor: pointer;
  background: #3e4353;
  color: #ffffff;
  transition: ease-in 1s;
}
.great-app {
  width: 80%;
  font-family: 'Circularbold' !important;
  text-transform: capitalize;
  color : #1068F0 !important;
}
.great-app-text {
  color: #2d3448;
  font-size: 1.2rem !important;
}
.call-to-action {
  height: 45px;
  width: 150px;
  border-radius: 3px;
  background-color: #2f6deb;
  border: none;
  color: #ffffff;
  font-family: 'Circularbook' !important;
  padding: 12px 0px !important;
}
.call-to-action:hover {
  cursor: pointer;
  background: #ffffff;
  border: 2px solid #3e4353;
  color: #3e4353;
  transition: ease-in 1s;
}
.after-nav-col-one {
  display: flex;
  align-items: center;
  padding-top: 4rem !important;
  padding-bottom: 2rem !important;
}
.after-nav-col-one p {
  width: 70%;
  margin-top: 20px;
  font-size: 1.1rem !important;
  font-family: 'Circularbook' !important;
}

@media only screen and (max-width: 800px) {
  .great-app {
    width: 100%;
    text-align: center;
    font-size: 20px;
    padding-top: 50px !important;
  }
  .after-nav-col-one {
    text-align: center;
  }
  .after-nav-col-one p {
    font-size: 13px;
    width: 100%;
    margin-top: 20px;
    text-align: center;
  }
  .call-to-action {
    height: 50px;
    width: 100%;
    border: none;
    color: #ffffff;
    margin-top: 5px;
  }
  .google-play {
    width: 100%;
  }
}

@media only screen and (max-width: 700px) {
  #after-nav {
    text-align: center !important;
  }
  .great-app {
    width: 100%;
    text-align: center;
    font-size: 20px;
    padding-top: 0px !important;
  }
  .call-to-action {
    margin-bottom: 5px;
  }
}
</style>
