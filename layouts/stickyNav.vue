<template>
  <div id="stickyheader">
    <div class="shadow bg-white roundedtransbox navHeader">
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
              <b-nav-item to="/#our-services" class="nav-link">Budget</b-nav-item>
              <b-nav-item to="/#become-a-vendor" class="nav-link">Payment</b-nav-item>
              <b-nav-item to="/vendor" class="nav-link">Vendors</b-nav-item>
              <b-nav-item to="/" class="nav-link">Blog</b-nav-item>
              <!-- <img src="/googleplay dark.svg" height="40px"> -->
              <!-- <b-button class="get-started-button" href="#get-started-quickly">GET STARTED</b-button> -->
            </b-navbar-nav>
          </b-collapse>
        </b-navbar>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  }
}
</script>

<style scoped>
#stickyheader {
  position: fixed;
  top: 0px;
  /* margin-top: 200px; */
  width: 100%;
  z-index: 999;
  display: block;
}
.nav-link {
  color: #32507e !important;
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
.get-started-button {
  border-radius: 3px !important;
  font-family: 'Circularbook' !important;
  border: 2px solid #3c3d41;
  width: 140px;
  height: 40px;
  background-color: #ffffff;
  color: #3c3d41 !important;
  font-size: 1rem;
}
.get-started-button:hover {
  cursor: pointer;
  background: #ffffff;
  color: #3c3d41 !important;
  border: 2px solid #ffffff;
  transition: ease-in 1s;
}
.navHeader {
  background: #ffffff !important;
  box-shadow: #262627;
  color: #ffffff;
}
</style>
