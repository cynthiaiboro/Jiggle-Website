<template>
  <div>
    <section id="footer">
      <div class="text-dark">
        <div class="row">
          <div class="col-md-4 col-sm-12 footer-jiggle-head mb-4">
            <router-link to="/"><img src="/jiggle logo blue.svg" height="25px"></router-link>
            <p class="py-2 pr-md-4 footer-note">Jiggle is a meal budgeting platform where users pay once to eat whenever and wherever</p>
            <img src="/googleplay dark.svg" class="mb-3" alt="" height="40px;">
          </div>
          <div class="col-md-5 col-xs-12 pb-4">
            <div class="row">
              <div class="col-xs-6 col-6 footer-jiggle">
                <h6 class="mb-1 last-footer-header-color" style="font-weight:550">
                  <span>Company</span>
                </h6>
                <p class="mb-3 my-1">
                  <router-link to ="/about" class="footer-text-link">About Us</router-link>
                </p>
                <p class="mb-3 footer-text">
                  Blog
                </p>
                <p class="mb-3 footer-text">
                  <router-link to ="/footer/faqs" class="footer-text-link">FAQ's</router-link>
                </p>
                <!-- <p class="mb-3 footer-text">
                  <router-link to ="/vendor/guide" class="footer-text-link">Vendor Guide</router-link>
                </p> -->
              </div>
              <div class="col-xs-6 col-6 footer-jiggle">
                  <h6 class="mb-2 last-footer-header-color" style="font-weight:550">
                    <span>Legal</span>
                  </h6>
                  <p class="mb-3 mt-2 footer-text">
                    Terms and conditions
                  </p>
                  <p class="mb-3 footer-text">
                    <router-link to ="/privacy" class="footer-text-link">Privacy Policy</router-link>
                  </p>
                </div>
            </div>
          </div>
            <div class="col-md-3 col-xs-12 mb-4">
              <div class="row">
                <!-- <div class="col-xs-6 col-6 footer-jiggle">
                  <h6 class="mb-2 last-footer-header-color" style="font-weight:550">
                    <span>Legal</span>
                  </h6>
                  <p class="mb-3 mt-2 footer-text">
                    Terms and conditions
                  </p>
                  <p class="mb-3 footer-text">
                    <router-link to ="/privacy" class="footer-text-link">Privacy Policy</router-link>
                  </p>
                </div> -->
                <div class="col-xs-6 col-12 footer-jiggle">
                  <h6 class="mb-2 last-footer-header-color" style="font-weight:550">
                    <span>Connect with us</span>
                  </h6>                    
                  <p class="mb-3 footer-text">
                    support@jiggle.ng
                  </p>                    
                  <p class="mb-3 footer-text">
                    +234 000 0000 000
                  </p>  
                    <i class="fa fa-twitter footer-icons" />                 
                    <i class="fa fa-instagram footer-fa-icon footer-icons" />                 
                    <i class="fa fa-facebook footer-fa-icon footer-icons" /> 
                </div>
              </div>
            </div>
        </div>
        <div>
        <hr class="mt-3 footer-hr">
        <footer class="footer text-center">{{currentYear}} &copy; {{siteName}}. All rights reserved.</footer>
        </div>
      </div>
    </section> 
  </div>
</template>

<script>
export default {
  data() {
    return{
      siteName: "Jiggle Limited"
    }
},
  computed: {
    currentYear()
    {
      let date = new Date();
      return date.getFullYear();
    }
  },
}
</script>

<style scoped>
body {
  background: #fafbff;
}
#footer {
  padding: 40px 0px 15px 0px;
  background: #fafbff;
  color: #ffffff;
  overflow-x: hidden;
}
span {
  font-family: 'Circularmedium';
}
.footer-text-link {
  font-size: 0.9rem !important;
  color: #35527F;
  font-family: 'Circularbook';
  line-height: 17px;
}
.footer-text-link:hover {
  text-decoration: none !important;
  color: #acacac;
}
.footer-fa-icon {
  margin-left: 20px;
}
.footer-icons {
  color: #35527F;
}
.footer-hr {
  background-color: #acacac;
}
.footer-text {
  font-size: 0.9rem !important;
  color: #35527F;
  font-family: 'Circularbook';
  line-height: 17px;
}
.footer-note {
  line-height: 20px !important;
  font-size: 0.9rem !important;
  color: #35527F;
}
.footer {
  color: #35527F;
  font-size: 13px !important;
  font-family: 'Circularbook';
}
/* @media only screen and (max-width: 800px) {
  #footer {
    padding-right: 30px;
  }
} */

@media only screen and (max-width: 600px) {
  #footer {
    margin: 0px 2rem !important
  }
  span {
    font-size: 1rem !important;
  }
  .footer-text {
    font-size: 0.9rem !important;
  }
  .footer-text-link {
    font-size: 0.9rem !important;
  }
  .footer {
    font-size: 0.8rem !important;
  }
  .footer-jiggle-head {
    text-align: center !important;
    padding: 0px 25px !important;
}
 .navbar-light .navbar-toggler-icon {
    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(255, 255, 255, 0.9)' stroke-width='3' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E") !important; 
  }
}
</style>
