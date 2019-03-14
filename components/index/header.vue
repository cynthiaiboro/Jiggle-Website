<template>
  <div>
    <section id="nav">
      <div class="container pb-4">
        <nav class="navbar navbar-expand-lg navbar-light pl-0 pr-0">
          <router-link to="/">   
            <img src="/jiggle logo blue.svg" height="38px" width="127px">
          </router-link>
          <button 
            class="navbar-toggler" 
            type="button" 
            data-toggle="collapse" 
            data-target="#navbarSupportedContent" 
            aria-controls="navbarSupportedContent" 
            aria-expanded="false" 
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon" />
          </button>
          <div 
            id="navbarSupportedContent"
            class="collapse navbar-collapse"
          >
            <ul class="navbar-nav ml-auto">
              <li class="nav-item">
                <router-link to="/" class="nav-link active">
                  Products
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/about" class="nav-link">
                  About Us
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/vendor" class="nav-link">
                  Vendors
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/vendor" class="nav-link">
                  Blog
                </router-link>
              </li>
            </ul>
            <button class="get-started-button navigation-link">
              GET STARTED
            </button>
          </div>
        </nav>
      </div>
    </section>

    <section id="after-nav">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <div class="after-nav-col-one">
              <div>
                <h1 class="great-app pt-3">
                  Great app for your food budgeting and payment.
                </h1>
                <p class="great-app-text pb-2" style="font-size:1.1rem; color:#2d3448">
                  Pay once to eat wherever and whenever. Budget your meals 
                  with an easy, convenient and secure platform, save money and
                  stay on top of your budget effortlessly with jiggle.
                </p>
                <div class="d-sm-inline">
                  <img src="/googleplay dark.svg" alt="" height="45px" class=" d-md-inline-block pr-2"> 
                  <button class="call-to-action btnStarted" style="font-weight:400; font-size: 0.9rem;">
                    GET STARTED
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 d-none d-md-block pb-3">
            <div class="d-flex justify-content-center align-items-center">
              <img src="/screenshot_top.png" height="450vh" class="top-phones">
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
#nav {
  background-color: #ffffff;
  padding: 20px 0;
}
.nav-link {
  color: #000000 !important;
  padding: 0 20px !important;
  font-size: 1rem !important;
  font-family: 'Circularbook' !important;
}
.nav-link:hover {
  color: #2f6deb !important;
  padding: 0 20px !important;
  transition: 1s;
  text-decoration: none !important;
}
.get-started-button {
  border-radius: 3px !important;
  font-family: 'Circularbook' !important;
  border: 2px solid #3e4353;
  width: 130px;
  height: 40px;
  background-color: #ffffff;
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
}
.call-to-action {
  height: 45px;
  width: 26%;
  border-radius: 3px;
  background-color: #2f6deb;
  border: none;
  color: #ffffff;
  font-family: 'Circularbook' !important;
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
    padding-top: 20px !important;
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
  #after-nav {
    display: flex;
    align-items: center;
    background-color: #ffffff;
    padding-top: 20px;
  }
}
</style>
