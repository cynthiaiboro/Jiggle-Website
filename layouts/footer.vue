<template>
  <div>
    <section id="footer">
      <div class="container text-dark">
        <div class="row">
          <div class="col-md-3 col-sm-12 footer-jiggle-head">
            <router-link to="/"><img src="/jiggle logo blue.svg" height="25px"></router-link>
            <p class="py-2 pr-4 footer-note">Jiggle is a meal budgeting platform where users pay once to eat whenever and wherever</p>
            <img src="/googleplay dark.svg" class="mb-3" alt="" height="40px;">
          </div>
          <div class="col-md-4">
            <div class="row">
              <div class="col-md-6 col-sm-6 footer-jiggle">
                <h6 class="mb-1 last-footer-header-color" style="font-weight:550">
                  <span>Company</span>
                </h6>
                <p class="mb-2 my-1">
                  <router-link to ="/about" class="footer-text-link">About Us</router-link>
                </p>
                <p class="mb-3 footer-text">
                  Blog
                </p>
                <p class="mb-3 footer-text">
                  <router-link to ="/footer/faqs" class="footer-text-link">FAQ's</router-link>
                </p>
              </div>
              <div class="col-md-6 footer-jiggle">
                <h6 class="mb-2 last-footer-header-color" style="font-weight:550">
                  <span>Products</span>
                </h6>
                <p class="mb-3 footer-text mt-2">
                  Budget
                </p>
                <p class="mb-3 footer-text">
                  Payment
                </p>
                <p class="mb-3 footer-text">
                  Wallet
                </p>
              </div>
            </div>
          </div>
            <div class="col-md-5">
              <div class="row">
                <div class="col-md-6 footer-jiggle">
                  <h6 class="mb-2 last-footer-header-color" style="font-weight:550">
                    <span>Legal</span>
                  </h6>
                  <p class="mb-3 mt-2 footer-text">
                    Terms and conditions
                  </p>
                  <p class="mb-3 footer-text">
                    Privacy Policy
                  </p>
                </div>
                <div class="col-md-6 footer-jiggle">
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
#footer {
  padding: 40px 0px 15px 0px;
  background: #fafbff;
  color: #ffffff;
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

@media only screen and (max-width: 700px) {
  .footer-jiggle {
    text-align: center !important;
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
}
}
</style>
