<template>
    <div>
    <section id="nav">
      <div class="container py-1">
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
              <b-nav-item to="/#our-services" class="nav-link" active>Budget</b-nav-item>
              <b-nav-item to="/#become-a-vendor" class="nav-link">Payment</b-nav-item>
              <b-nav-item to="/vendor" class="nav-link">Vendors</b-nav-item>
              <b-nav-item to="/" class="nav-link">Blog</b-nav-item>
              <!-- <b-button class="get-started-button" href="#get-started-quickly">GET STARTED</b-button> -->
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
#nav {
  background-color: #ffffff;
}
.nav-link {
  color: #2d3448 !important;
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
@media only screen and (max-width: 700px) {
  #nav {
    padding: 0px 20px !important;
  }
}
</style>
