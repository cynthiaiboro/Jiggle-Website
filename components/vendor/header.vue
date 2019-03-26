<template>
  <div>
    <section class="navHeader">
      <div class="container">
        <b-navbar toggleable class="navbar-expand-lg">
          <b-navbar-brand>
            <router-link to="/">   
              <img src="/logo.svg" height="38px" width="127px">
            </router-link>
          </b-navbar-brand>
          <b-navbar-toggle target="nav_item_collapse" class="bg-light" />
          <b-collapse id="nav_item_collapse" is-nav>
            <b-navbar-nav class="ml-auto">
              <b-nav-item to="/" class="nav-link">
                Products
              </b-nav-item>
              <b-nav-item to="/vendor" class="nav-link">
                Vendors
              </b-nav-item>
              <b-nav-item to="/about" class="nav-link">
                About Us
              </b-nav-item>
              <b-nav-item to="/" class="nav-link">
                Blog
              </b-nav-item>
              <b-button class="get-started-button" href="#get-payment">
                GET STARTED
              </b-button>
            </b-navbar-nav>
          </b-collapse>
        </b-navbar>
      </div>
    </section>

    <section class="navHeader pt-2 pb-5">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <div class="after-nav-col-one">
              <div>
                <h1 class="great-app pt-5" style="font-weight:500">
                  Best Way to Receive Payments
                </h1>
                <p>
                  Receive payment the fast and easy way, see transactions directly from your phone and keep track of your business on the go with Jiggle vendor app.
                  It makes getting paid easy and more convenient.
                </p>
                <div class="d-sm-inline">
                  <img src="/google play white.svg" alt="" height="45px" class="d-md-inline-block pr-2"> 
                  <button class="call-to-action btnStarted" style="font-weight:400; font-size: 0.9rem;">
                    BECOME A VENDOR
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 d-none d-md-block pb-3">
            <div class="d-flex justify-content-center align-items-center">
              <img src="/jiggle phone.svg" height="420vh" class="top-phones">
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
  font-family: 'Circularbold';
  src: url('../../assets/fonts/circularbold.ttf');
}
.nav-link {
  color: #ffffff !important;
  padding: 4px 10px !important;
  font-size: 1rem !important;
  font-family: 'Circularbook' !important;
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
.call-to-action {
  height: 45px;
  width: 35%;
  border-radius: 3px;
  background-color: #2f6deb;
  border: none;
  color: #ffffff;
  font-family: 'Circularbook' !important;
}
.call-to-action:hover {
  cursor: pointer;
  background: #ffffff;
  border: 2px solid #3e4353;
  color: #3e4353;
  transition: ease-in 1s;
}
.get-started-button {
  border-radius: 3px !important;
  font-family: 'Circularbook' !important;
  border: 2px solid #3e4353;
  width: 140px;
  height: 40px;
  background-color: #ffffff;
  color: #3e4353 !important;
  font-size: 1rem;
}
.get-started-button:hover {
  cursor: pointer;
  background: #3e4353;
  color: #ffffff !important;
  transition: ease-in 1s;
}
.navHeader {
  background: #3e4353 !important;
  color: #ffffff;
  padding: 3% 0;
}
.great-app {
  width: 80%;
  font-family: 'Circularbold' !important;
}
.after-nav-col-one {
  display: flex;
  align-items: center;
  padding-top: 3rem !important;
}
.after-nav-col-one p {
  width: 70%;
  margin-top: 20px;
  font-size: 1rem !important;
  font-family: 'Circularbook' !important;
}
@media only screen and (max-width: 800px) {
  .great-app {
    width: 100%;
    text-align: center;
    font-size: 20px;
    padding-top: 60px !important;
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
}

@media only screen and (max-width: 700px) {
  #after-nav {
    text-align: center !important;
  }
  .great-app {
    width: 100%;
    text-align: center;
    font-size: 20px;
    padding-top: 5px !important;
  }
  .call-to-action {
    margin-bottom: 5px;
  }
}
</style>
