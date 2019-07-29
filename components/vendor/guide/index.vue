<template>
  <div>
    <Nav class="navigation-bar" />
    <div class="my-5">
      <div class="container mt-5">
        <div class="row">
          <div class="col-lg-3 col-md-3 col-sm-3 col-3 sub-nav position-fixed">
   
            <nav class="mt-4 sub-nav-background">
              <div id="sub-nav">
                <ul class="mr-auto goto-list">
                  <li class="nav-item active">
                    <a @click="viewGetStarted" class="nav-link" href="#">Get started <span class="sr-only">(current)</span></a>
                  </li>
                  <li class="nav-item">
                    <a @click="viewManageEmployees" class="nav-link" href="#">Manage Employees</a>
                  </li>
                  <li class="nav-item">
                    <a @click="viewTransactions" class="nav-link" href="#">Track Transaction</a>
                  </li>
                </ul>
              </div>
            </nav>
            <ul v-if="subNavToggler" class="mr-auto goto-list pl-0 bg-white">
              <li class="nav-item active">
                <a @click="viewGetStarted" class="nav-link" href="#">Get started <span class="sr-only">(current)</span></a>
              </li>
              <li class="nav-item">
                <a @click="viewManageEmployees" class="nav-link" href="#">Manage Employees</a>
              </li>
              <li class="nav-item">
                <a @click="viewTransactions" class="nav-link" href="#">Track Transaction</a>
              </li>
            </ul>
          </div>
          <div class="col-lg-9 col-md-9 col-sm-9 col-9 bg-light py-4 px-lg-5 px-md-5 px-sm-0 px-0 ml-auto content-section">
            <div class="container pt-2">
              <div v-if="ourServices">
                <our-services />
              </div>

              <div v-if="getStarted">
                <get-started />
              </div>

              <div v-if="manageEmployees">
                <manage-employees />
              </div>

              <div v-if="transactions">
                <transactions />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <guideFooter />
    </div>
  </div>
</template>

<script>
import Nav from '../../../layouts/Nav'
import ourServices from '../guide/ourServices'
import getStarted from '../guide/getStarted'
import manageEmployees from '../guide/manageEmployees'
import transactions from '../guide/transactions'
import guideFooter from '../../../layouts/footer'
export default {
  name: 'Guide',
  components: {
    Nav,
    ourServices,
    getStarted,
    manageEmployees,
    transactions,
    guideFooter
  },
  data: () => ({
    ourServices: false,
    getStarted: false,
    manageEmployees: false,
    transactions: false,
    subNavToggler: false
  }),
  created() {
    this.viewGetStarted()
  },
  methods: {
    viewOurServices() {
      this.ourServices = true
      this.getStarted = false
      this.manageEmployees = false
      this.transactions = false
    },
    viewGetStarted() {
      this.getStarted = true
      this.ourServices = false
      this.manageEmployees = false
      this.transactions = false
    },
    viewManageEmployees() {
      this.manageEmployees = true
      this.ourServices = false
      this.getStarted = false
      this.transactions = false
    },
    viewTransactions() {
      this.transactions = true
      this.ourServices = false
      this.getStarted = false
      this.manageEmployees = false
    },
    showToggle() {
      this.subNavToggler = !this.subNavToggler
    }
  }
}
</script>

<style scoped>
.goto-list li {
  list-style: none;
  margin-top: 1px;
  font-weight: 500;
  font-family: "Circularmedium" !important;
}
ul li a {
  text-decoration: none;
}
ul li {
  margin-top: 10px;
  color: #737373;
}
ul li:first-of-type {
  margin-top: 5px;
}
.section-header {
  color: #5c5c5c;
}
.section-body {
  font-size: 17px;
  color: #737373;
  line-height: 35px;
}
.sub-section-headers {
  font-size: 20px;
  color: #5c5c5c;
  font-weight: 600;
}
.goto-section {
  position: fixed;
  z-index: 999;
}
.navigation-bar {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 999;
}
.content-section {
  position: relative;
  background: #F9FBFF !important;
}
.sub-nav {
  z-index: 800;
}
.sub-nav-background {
  background-color: transparent;
}


  @media only screen and (max-width: 700px) {
    .sub-nav-background {
      background-color: #ffffff;
    }
     a {
      padding-left: 0px !important;
    }
    .goto-list {
      padding-left: 0px !important;
    }
  }
</style>
