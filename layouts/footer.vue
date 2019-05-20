<template>
  <div>
    <section id="footer">
      <div class="container text-dark">
        <div class="row">
          <div class="col-md-3 col-sm-12 footer-jiggle">
            <router-link to="/"><img src="/logo.svg" height="25px"></router-link>
            <p class="py-2 pr-4 text-white footer-note">Jiggle is a meal budgeting platform where users pay once to eat whenever and wherever</p>
            <img src="/googleplay dark.svg" class="mb-3" alt="" height="40px;">
          </div>
          <div class="col-md-2 footer-jiggle">
            <h6 class="mb-1 last-footer-header-color" style="font-weight:550">
              <span class="last-border">Comp</span><span>any</span>
            </h6>
            <p class="mb-2 my-1">
              <router-link to ="/about" class="footer-text-link">About Us</router-link>
            </p>
            <!-- <p class="mb-3 footer-text">
              Blog
            </p> -->
            <p class="mb-3 footer-text">
              <router-link to ="/footer/faqs" class="footer-text-link">FAQ's</router-link>
            </p>
          </div>
          <div class="col-md-2 footer-jiggle">
            <h6 class="mb-2 last-footer-header-color" style="font-weight:550">
              <span class="last-border">Prod</span><span>ucts</span>
            </h6>
            <p class="mb-3 footer-text mt-2">
              Features
            </p>
            <!-- <p class="mb-3 footer-text">
              Client App
            </p>
            <p class="mb-3 footer-text">
              Vendor App
            </p> -->
          </div>
          <div class="col-md-3 footer-jiggle">
            <h6 class="mb-2 last-footer-header-color" style="font-weight:550">
              <span class="last-border">Lega</span><span>l</span>
            </h6>
            <p class="mb-3 mt-2 footer-text">
              Terms and conditions
            </p>
            <!-- <p class="mb-3 footer-text">
              Privacy Policy
            </p> -->
          </div>
          <div class="col-md-2 footer-jiggle">
            <h6 class="mb-2 last-footer-header-color" style="font-weight:550">
              <span class="last-border">Conn</span><span>ect with us</span>
            </h6>                    
            <p class="mb-3 footer-text">
              support@jiggle.ng
            </p>                    
            <p class="mb-3 footer-text">
              +234 000 0000 000
            </p>   
            <i class="fa fa-twitter text-white" />                 
            <i class="fa fa-instagram footer-fa-icon text-white" />                 
            <i class="fa fa-facebook footer-fa-icon text-white" />                
          </div>
        </div>
        <hr class="mt-3 footer-hr">
        <footer class="footer text-center">{{currentYear}} &copy; {{siteName}}. All rights reserved.</footer>
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
  background: #3e4353;
  color: #ffffff;
}
span {
  font-family: 'Circularmedium';
}
.footer-text-link {
  font-size: 1rem !important;
  color: white;
  font-family: 'Circularbook';
  line-height: 12px;
}
.footer-text-link:hover {
  text-decoration: none !important;
  color: #acacac;
}
.footer-fa-icon {
  margin-left: 20px;
}
.footer-header-color {
  color: #ffffff;
  font-weight: 650;
  font-size: 1.2rem;
  padding-bottom: 3px;
  border-bottom: 2px solid #2f6deb;;
  width: 20px;
}
.last-footer-header-color {
  color: #ffffff;
  font-weight: 650;
  font-size: 1.2rem;
  padding-bottom: 4px;
  width: 100%;
}
.last-border {
  border-bottom: 2px solid #2f6deb;;
  width: 50px;
}
.footer-hr {
  background-color: #acacac;
}
.footer-text {
  font-size: 1rem !important;
  color: white;
  font-family: 'Circularbook';
  line-height: 14px;
}
.footer-note {
  line-height: 20px !important;
}
.footer {
  color: #ffffff;
  font-size: 13px !important;
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
  .footer-header-color {
    text-align: center !important;
  }
}
</style>
