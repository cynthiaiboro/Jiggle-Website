<template>
  <div id="stickyheader">
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
  </div>
</template>

<script>
export default {
  mounted() {
    onscroll = function() {
      scrollFunction()
    }

    function scrollFunction() {
      if (
        document.body.scrollTop > 180 ||
        document.documentElement.scrollTop > 180
      ) {
        document.getElementById('stickyheader').style.top = '0'
        alert(9)
      } else {
        document.getElementById('stickyheader').style.top = '200px'
        document.getElementById('stickyheader').style.display = 'none'
      }
    }
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
  top: -50px;
  width: 100%;
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
</style>
