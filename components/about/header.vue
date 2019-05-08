<template>
  <div>
    <section id="about-us-nav">
      <div class="container py-3">
        <b-navbar toggleable class="navbar-expand-lg px-0">
          <b-navbar-brand>
            <router-link to="/">   
              <img src="/logo.svg" height="38px" width="127px">
            </router-link>
          </b-navbar-brand>
          <b-navbar-toggle target="nav_item_collapse" class="bg-light" />
          <b-collapse id="nav_item_collapse" is-nav>
            <b-navbar-nav class="ml-auto">
              <b-nav-item to="/about" class="nav-link">
                About
              </b-nav-item>
              <b-nav-item to="/vendor" class="nav-link">
                Vendors
              </b-nav-item>
              <!-- <b-nav-item to="/" class="nav-link">
                Blog
              </b-nav-item> -->
              <b-button class="get-started-button" href="#about-jiggle">
                GET STARTED
              </b-button>
            </b-navbar-nav>
          </b-collapse>
        </b-navbar>
      </div>
      <div class="best-solution">
        <h3 class="get-started text-center">
          Best solution for your food <br> budgeting
        </h3>
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
  font-family: 'Circularmedium';
  src: url('../../assets/fonts/circularmedium.ttf');
}
.nav-link {
  color: #ffffff !important;
  padding: 4px 10px !important;
  text-decoration: none !important;
  font-family: 'Circularbook';
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
#about-us-nav {
  background: url(/Frame.svg);
  background-attachment: fixed;
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
.best-solution {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 15em;
  font-family: 'Circularbook';
  color: #ffffff;
}
@media only screen and (max-width: 700px) {
  .get-started {
    font-size: 1.3rem !important;
  }
}
</style>
