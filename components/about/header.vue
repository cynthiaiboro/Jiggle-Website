<template>
  <div>
    <section id="about-us-nav">
      <div class="container">
        <nav class="navbar navbar-expand-lg navbar-light pl-0 pr-0">
          <router-link to="/">   
            <img src="/logo.svg" height="38px" width="127px">
          </router-link>
          <button 
            class="navbar-toggler bg-light" 
            type="button" 
            data-toggle="collapse"
            data-target="#navbarSupportedContent" 
            aria-controls="navbarSupportedContent" 
            aria-expanded="false" 
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon" />
          </button>
            
          <div id="navbarSupportedContent" class="collapse navbar-collapse">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item">
                <router-link to="/" class="about-nav-link">
                  Products
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/about" class="about-nav-link active">
                  About Us
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/vendor" class="about-nav-link">
                  Vendors
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/" class="about-nav-link">
                  Blog
                </router-link>
              </li>
            </ul>
            <button class="about-get-started-button">
              GET STARTED
            </button>
          </div>
        </nav>
        <div class="best-solution">
          <h3 class="text-center get-started">
            Best solution for your food <br> budgeting
          </h3>
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
  font-family: 'Circularmedium';
  src: url('../../assets/fonts/circularmedium.ttf');
}
.about-nav-link {
  color: #ffffff !important;
  padding: 0 20px !important;
  text-decoration: none !important;
  font-family: 'Circularbook';
}
.about-nav-link:hover {
  color: #2f6deb !important;
  padding: 0 20px !important;
  transition: 1s;
  text-decoration: none !important;
}
#about-us-nav {
  background: url(/Frame.svg);
  padding: 20px 0;
}
.about-get-started-button {
  border: 2px solid #ffffff;
  width: 130px;
  height: 40px;
  background-color: #ffffff;
  color: #2f6deb;
  border-radius: 3px;
  font-family: 'Circularbook';
}
.about-get-started-button:hover {
  border: 2px solid #3e4353;
  width: 130px;
  height: 40px;
  background-color: #3e4353;
  color: #ffffff;
  transition: 1s;
}
.best-solution {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 15em;
  font-family: 'Circularbook';
  color: #ffffff;
}
</style>
