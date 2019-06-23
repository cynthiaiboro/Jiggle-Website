<template>
  <div id="header">
    <navbar />
    <section class="mt-5 pt-2 pb-5">
      <div class="container">
        <div v-if="loading" class="text-center d-flex align-items-center justify-content-center" style="height: 80vh">
          <div>
            <loading />
            <p class="loading">
              Loading...
            </p>
          </div>
        </div>
        <div v-else-if="showSuccess">
          <div class="row">
            <div class="col-lg-3 col-md-3 col-sm-none col-none" />
            <div class="col-lg-6 col-md-6 col-sm-12 col-12 bg-white mt-5 shadow-sm text-dark bg-white shadow-sm d-flex align-items-center justify-content-center" style="height: 82vh">
              <div>
                <div class="text-center mb-2"><img src="../../assets/gifs/great_job.gif" alt="" style="height: 150px;"></div>
                <h4 class="text-center">
                  {{ successMessage.title }}
                </h4>
                <p class="text-center">
                  {{ successMessage.body }}
                </p>
              </div>
            </div>
            <div class="col-lg-3 col-md-3 col-sm-none col-none" />
          </div>
        </div>
        <div v-else-if="showError" class="">
          <div class="row">
            <div class="col-lg-3 col-md-3 col-sm-none col-none" />
            <div class="col-lg-6 col-md-6 col-sm-12 col-12 text-danger d-flex align-items-center justify-content-center" style="height: 80vh">
              <div>
                <h4 class="text-center">
                  {{ errorMessage.title }}
                </h4>
                <p class="text-center">
                  {{ errorMessage.body }}
                </p>
              </div>
            </div>
            <div class="col-lg-3 col-md-3 col-sm-none col-none" />
          </div>
        </div>
        <div v-else class="row">
          <div class="col-lg-3 col-md-3 col-sm-none col-none" />
          <div class="col-md-6 col-12 d-md-block pb-3 form">
            <div class="d-flex justify-content-center align-items-center mt-md-5">
              <div class="form-area shadow w-100">
                <p class="welcome mb-3">
                  Welcome!
                </p>
                <div class="row">
                  <div class="col-lg-3 col-md-3 col-sm-3 col-12">
                    <img src="https://res.cloudinary.com/dv0n2umcd/image/upload/v1556011070/restaurant-cutlery-circular-symbol-of-a-spoon-and-a-fork-in-a-circle_rfuxk9.svg" alt="Vendor Logo" style="height: 90%; width: 90%; border-radius: 50%;">
                  </div>
                  <div class="col-lg-9 col-md-9 col-sm-9 col-9">
                    <h5 class="mb-1">
                      {{ vendorDetails.vendor }}
                    </h5>
                    <p class="mb-1 vendor-email">
                      {{ vendorDetails.email }}
                    </p>
                    <span class="badge badge-danger">Unverified</span>
                  </div>
                </div>
                <div class="row">
                  <div class="col-12">
                    <div class="alert alert-warning">
                      <h6 class="warning-message text-center">
                        Kindly Complete the Jiggle Vendor Registration Form Bellow
                      </h6>
                    </div>
                  </div>
                </div>
                <div v-if="currentRequestType === 'bank_details'">
                  <bank-form @submitForm="submitForm" :disable-button="disableButton" :initial-request-type="initialRequestType" :reference-type="currentRequestType" />
                </div>
                <div v-else>
                  <personal-form :vendor-details="vendorDetails" :disable-button="disableButton" @changeRequestType="changeRequestType" />
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-3 col-sm-none col-none" />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import swal from 'sweetalert'
import navbar from '../../components/registervendor/navbar'
import personalForm from '../../components/registervendor/vendorForm'
import bankForm from '../../components/registervendor/bankForm'
import Loading from '../shared/Loading'
export default {
  components: {
    Loading,
    personalForm,
    bankForm,
    navbar
  },
  data() {
    return {
      currentRequestType: '',
      initialRequestType: '',
      vendorDetails: '',
      errorMessage: {
        title: '',
        body: ''
      },
      successMessage: {
        title: '',
        body: ''
      },
      showError: false,
      showSuccess: false,
      loading: false,
      disableButton: false
    }
  },
  created() {
    const reference = this.$route.params.ref
    this.checkReference(reference)
  },
  methods: {
    checkReference(reference) {
      this.disableButton = true
      this.loading = true
      this.$axios
        .get('vendor/invitation-details/' + reference)
        .then(response => {
          this.currentRequestType = response.data.data.type
          this.initialRequestType = response.data.data.type
          console.log(response.data)
          console.log(this.currentRequestType)
          this.vendorDetails = response.data.data
          this.loading = false
        })
        .catch(error => {
          console.log(error)
          this.error(
            'Oops! An Error Occured',
            'Please check that your internet connection is good and that you have not already completed your registration'
          )
            this.loading = false
        })
    },
    changeRequestType() {
      return (this.currentRequestType = 'bank_details')
    },
    error(title, body) {
      this.errorMessage.title = title
      this.errorMessage.body = body
      this.showError = true
      this.loading = false
    },
    successResponse(title, body) {
      console.log('success message called')
      this.successMessage.title = title
      this.successMessage.body = body
      this.showSuccess = true
      this.loading = false
      console.log(this.successMessage.title)
      console.log(this.successMessage.body)
    },
    submitForm(vendor) {
      console.log('axios submit form method is called')
      this.$axios
        .post('vendor/complete-registration', vendor)
        .then(response => {
          console.log('Registration form completed')
          swal('Success', 'Registration Form Completed Successfully', 'success')
          this.successResponse(
            'Congratulations ' + this.vendorDetails.vendor,
            "Your registration was successfully completed. You'll receive an email once your account is activated"
          )
        })
        .catch(error => {
          console.log('There is an error')
          console.log(error.response.data)
          swal(
            'Error',
            'An error occured while trying to complete your registration',
            'error'
          )
          this.loading = false
        })
    }
  }
}
</script>

<style scoped>
.form-area {
  background-color: #ffffff;
  padding: 30px 30px 10px 30px !important;
  border-radius: 5px;
}
#header {
  background: #e5e5e5 !important;
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
.nav-link:hover,
:active {
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
.hide {
  display: none;
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
}
.great-app {
  width: 80%;
  font-family: 'Circularheavy' !important;
  animation-name: bounceInLeft;
  animation-duration: 2s;
}
.after-nav-col-one {
  display: flex;
  align-items: center;
  padding-top: 2rem !important;
}
.after-nav-col-one p {
  width: 70%;
  margin-top: 20px;
  font-size: 1rem !important;
  font-family: 'Circularbook' !important;
}
.navbar-light .navbar-toggler {
  color: #ffffff;
}
.welcome {
  color: #343647;
  /*font-style: italic;*/
  font-size: 28px;
}
.vendor-email {
  color: #a6a6a6;
}
.warning-message {
  font-size: 15px;
}
.loading {
  color: #404447;
}
@media only screen and (max-width: 800px) {
  .great-app {
    width: 100%;
    font-size: 30px;
    padding-top: 0px !important;
  }
  .after-nav-col-one p {
    font-size: 13px;
    width: 100%;
    margin-top: 20px;
  }
  .call-to-action {
    height: 45px;
    width: 160px;
    border: none;
    color: #ffffff;
  }
  .desktop-show {
    display: initial;
  }
}

@media only screen and (max-width: 700px) {
  .call-to-action {
    margin-bottom: 5px;
    width: 160px;
    height: 46px;
  }
  .navHeader {
    padding-left: 20px !important;
    padding-right: 20px !important;
  }
  .form {
    padding-top: 20px;
  }
}
@media only screen and (max-width: 400px) {
  .call-to-action {
    margin-bottom: 5px;
    width: 160px;
    height: 46px;
  }
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
