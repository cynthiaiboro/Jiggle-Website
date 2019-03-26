<template>
  <div id="stickyheader">
    <section class="navHeader py-2">
      <div class="container">
        <b-navbar toggleable class="navbar-expand-lg px-0">
          <b-navbar-brand>
            <router-link to="/">
              <img src="/logo.svg" height="38px" width="127px">
            </router-link>
          </b-navbar-brand>
          <b-navbar-toggle target="nav_item_collapse" class="bg-light" />
          <b-collapse id="nav_item_collapse" is-nav>
            <b-navbar-nav class="ml-auto">
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
@font-face {
  font-family: 'Circularbook';
  src: url('..//assets/fonts/circularbook.ttf');
}
#stickyheader {
  position: fixed;
  top: 0px;
  /* margin-top: 200px; */
  width: 100%;
  z-index: 999;
  display: block;
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
.get-started-button {
  border-radius: 3px !important;
  font-family: 'Circularbook' !important;
  border: 2px solid #2f6deb;
  width: 140px;
  height: 40px;
  background-color: #ffffff;
  color: #2f6deb !important;
  font-size: 1rem;
}
.get-started-button:hover {
  cursor: pointer;
  background: #ffffff;
  color: #2f6deb !important;
  border: 2px solid #ffffff;
  transition: ease-in 1s;
}
.navHeader {
  background: #2f6deb !important;
  color: #ffffff;
}
</style>
