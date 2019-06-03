<template>
  <div>
    <section id="nav">
      <div class="container">
        <b-navbar toggleable class="navbar-expand-lg px-0">
          <b-navbar-brand>
            <router-link to="/">
              <img src="/jiggle logo blue.svg" height="38px" width="127px">
            </router-link>
          </b-navbar-brand>
          <b-navbar-toggle target="nav_item_collapse"/>
          <b-collapse id="nav_item_collapse" is-nav>
            <b-navbar-nav class="ml-auto">
              <b-nav-item to="/about" class="nav-link">About</b-nav-item>
              <b-nav-item href="#our-services" class="nav-link">Budget</b-nav-item>
              <b-nav-item href="#become-a-vendor" class="nav-link">Payment</b-nav-item>
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
            <div class="after-nav-col-one py-md-5 mt-md-5">
              <div>
                <h1 class="great-app" >
                  Meal <br class="hide desktop-show"> budgeting & payment
                </h1>
                <p class="great-app-text pb-4" style="font-size:1.1rem; color:#2d3448">
                  
                  Budget for your meals with ease and convenience.
                  Pay once to eat wherever and whenever.
                  <!-- Stay on top of your budget effortlessly with Jiggle. -->
                </p>
                <div class="d-md-inline d-flex justify-content-center">
                  <img src="/googleplay dark.svg" height="45px" class="google-play d-sm-inline pr-2">
                  <b-button
                    href="#get-started-quickly"
                    class="call-to-action"
                    style="font-weight:400; font-size: 0.9rem;"
                  >GET STARTED</b-button>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 d-md-block py-3">
            <div class="d-flex justify-content-center align-items-center">
              <img src="/top-phone.svg" height="450vh" class="phone">
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
.phone {
  animation-name: slideInUp;
  animation-duration: 2s;
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
.hide {
    display: none;
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
  font-family: 'Circularheavy' !important;
  text-transform: capitalize;
  color : #1068F0 !important;
  font-size: 45px;
  animation-name: bounceInLeft;
  animation-duration: 2s;
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
  padding-bottom: 2rem !important;
}
.after-nav-col-one p {
  width: 70%;
  margin-top: 20px;
  font-size: 1.1rem !important;
  font-family: 'Circularbook' !important;
}
.navbar-light .navbar-toggler {
  color: rgba(20, 18, 18, 0.5);
  border: none;
}
@media only screen and (max-width: 800px) {
  .great-app {
    width: 100%;
    font-size: 30px;
    padding-top: 30px !important;
  }
  .after-nav-col-one p {
    font-size: 13px;
    width: 100%;
    margin-top: 20px;
  }
  .call-to-action {
    height: 50px;
    width: 100%;
    border: none;
    color: #ffffff;
    margin: 0px 5px !important
    /* margin-top: 5px; */
  }
}

@media only screen and (max-width: 700px) {
  .great-app {
    width: 100%;
    font-size: 35px;
    padding-top: 20px !important;
    padding-right: 30px;
  }
  .after-nav-col-one p {
    padding-right: 30px !important;
  }
  .call-to-action {
    /* margin-bottom: 5px; */
    width: 140px;
    height: 46px;
  }
  .desktop-show {
        display: initial;
    }
  #after-nav {
  padding: 0px 0px !important;
}
}
</style>
