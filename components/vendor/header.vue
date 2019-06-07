<template>
  <div>
      <vendorModal
      ref="vendorModal"
    />
  <section class="navHeader">
      <div class="container py-1">
        <b-navbar toggleable class="navbar-expand-lg px-0">
          <b-navbar-brand>
            <router-link to="/">
              <img src="/logo.svg" height="38px" width="127px">
            </router-link>
          </b-navbar-brand>
          <b-navbar-toggle target="nav_item_collapse" class="toggle"/>
          <b-collapse id="nav_item_collapse" is-nav>
            <b-navbar-nav class="ml-auto">
              <b-nav-item to="/about" class="nav-link">About</b-nav-item>
              <b-nav-item to="/#our-services" class="nav-link">Budget</b-nav-item>
              <b-nav-item to="/#become-a-vendor" class="nav-link">Payment</b-nav-item>
              <b-nav-item to="/vendor" class="nav-link">Vendors</b-nav-item>
              <b-nav-item to="/" class="nav-link">Blog</b-nav-item>
            </b-navbar-nav>
          </b-collapse>
        </b-navbar>
      </div>
    </section>

    <section class="navHeader pt-2 pb-5">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <div class="after-nav-col-one mt-md-4">
              <div>
                <h1 class="great-app pt-5" style="font-weight:500">Best Way to <br class="hide desktop-show"> Receive Payments</h1>
                <p class="pb-2">
                  Receive payment the fast and easy way, see transactions directly from your phone and keep
                  track of your business on the go with Jiggle vendor app.
                </p>
                <div class="d-md-inline d-flex justify-content-center">
                  <img
                    src="/google play white.svg"
                    alt
                    height="45px"
                    class="d-md-inline-block pr-2"
                  >
                  <button
                    to="/vendor"
                    class="call-to-action btnStarted"
                    style="font-weight:400; font-size: 0.9rem;"
                    @click="inviteVendor"
                  >BECOME A VENDOR</button>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 d-none d-md-block pb-3">
            <div class="d-flex justify-content-center align-items-center mt-md-5">
              <img src="/jiggle phone.svg" height="420vh" class="top-phones">
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
// Display modal to update vendor details
import vendorModal from './/vendorModal'
export default {
  components: {
    vendorModal
  },
  methods: {
     inviteVendor() {
      this.$refs.vendorModal.inviteVendorModal()
    }
  }
}
</script>

<style scoped>
.nav-link {
  color: #ffffff !important;
  padding: 4px 10px !important;
  font-size: 1rem !important;
  font-family: 'Circularbook' !important;
}
.nav-link:active {
  color: #2f6deb !important;
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
.hide {
    display: none;
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
}
.great-app {
  width: 80%;
  font-family: 'Circularheavy' !important;
  animation-name: bounceInLeft;
  animation-duration: 2s;
}
.after-nav-col-one {
  display: flex;
  align-items: center;
  padding-top: 2rem !important;
}
.after-nav-col-one p {
  width: 70%;
  margin-top: 20px;
  font-size: 1.1rem !important;
  font-family: 'Circularbook' !important;
}
.navbar-light .navbar-toggler {
  color: rgba(0, 0, 0, 0.5);
  border: none;
}
@media only screen and (max-width: 800px) {
  .great-app {
    width: 100%;
    font-size: 30px;
    padding-top: 0px !important
  }
  .after-nav-col-one p {
    font-size: 13px;
    width: 100%;
    margin-top: 20px;
  }
  .call-to-action {
    height: 45px;
    width: 160px;
    border: none;
    color: #ffffff;
  }
  .desktop-show {
    display: initial;
}
}

@media only screen and (max-width: 700px) {
  .call-to-action {
    margin-bottom: 5px;
    width: 160px;
    height: 46px;
  }
  .navHeader {
    padding-left: 20px !important;
    padding-right: 20px !important;
  }
}
</style>
