<template>
    <div>
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
              <b-nav-item to="/vendor" class="nav-link" active>Vendors</b-nav-item>
              <b-nav-item to="/" class="nav-link">Blog</b-nav-item>
            </b-navbar-nav>
          </b-collapse>
        </b-navbar>
      </div>
    </section>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.navHeader {
  background: #3e4353 !important;
  color: #ffffff;
}
.nav-link {
  color: #ffffff !important;
  padding: 4px 10px !important;
  font-size: 1rem !important;
  font-family: 'Circularbook' !important;
}
.active {
  color: #2f6deb !important;
}
.nav-link:hover , :active{
  color: #2f6deb !important;
  padding: 4px 10px !important;
  transition: 1s;
  text-decoration: none !important;
}
.nav-item:last-of-type .nav-link {
  padding: 4px 30px 4px 10px !important;
}
@media only screen and (max-width: 700px) {
  .navHeader {
    padding-left: 20px !important;
    padding-right: 20px !important;
  }
}
@media only screen and (max-width: 400px) {
  .navHeader {
    padding-left: 20px !important;
    padding-right: 20px !important;
  }
   .navbar-light .navbar-toggler-icon {
    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(255, 255, 255, 0.9)' stroke-width='3' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E") !important;
    color: white; 
  }
}
</style>
