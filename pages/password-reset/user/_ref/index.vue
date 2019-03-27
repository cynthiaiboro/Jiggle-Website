<template>
  <div>
    <!-- <Header /> -->
    <stickyNav />

    <div class="main">
      <div class="row mt-5">
        <div class="col-md-5 mx-auto mt-5">
          <div v-if="showErrorMsg" class="error mt-3">
            <div class="alert alert-danger">
              <h5 v-if="error.title" class="alert-heading">
                {{ error.title }}
              </h5>
              <p>
                {{ error.body }}
              </p>
            </div>
          </div>

          <div v-if="loading" class="loading mt-5">
            <Loading />
            <p class="text-center">
              Please Wait...
            </p>
          </div>

          <div v-if="showPasswordReset" class="form mt-4">
            <password-reset-form :loading="formLoading" @formSubmitted="resetPassword" />
          </div>


          <div v-if="passwordResetSuccessful" class="success mt-5">
            <h3 class="text-center">
              Success
            </h3>
            <p class="text-center">
              Your password reset request was successful
            </p>
            <p class="text-center">
              Proceed to sign into the  jiggle user mobile app or download download it from google play store to continue
            </p>

            <div class="text-center">
              <img alt="play store" src="/googleplay%20dark.svg">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import StickyNav from '../../../../layouts/stickyNav'
import Loading from '../../../../components/shared/Loading'
import PasswordResetForm from '../../../../components/shared/PasswordResetForm'

const baseURl = 'https://api.jiggle.ng/'
// const baseURl = 'http://jiggle.test/api/v1/'

export default {
  name: 'Index',
  components: {
    StickyNav,
    Loading,
    PasswordResetForm
  },
  data: function() {
    return {
      loading: false,
      showPasswordReset: false,
      passwordResetSuccessful: false,
      showErrorMsg: false,
      formLoading: false,
      referenceValid: false,
      reference: '',
      error: {
        title: '',
        body: ''
      }
    }
  },
  mounted(reference) {
    this.reference = this.$route.params.ref
    this.validateReference()
  },
  methods: {
    showError(title, message) {
      this.error.title = title
      this.error.body = message
      this.showErrorMsg = true
    },
    showForm() {
      this.showPasswordReset = true
    },
    validateReference: function() {
      this.loading = true
    //   this.showPasswordReset = false
      this.$axios
        .$get(baseURl + 'account/forgot-password/' + this.reference)
        .then(res => {
          console.log(res)
          this.showForm()
        })
        .catch(err => {
          const data = err.response.data

          switch (data.message) {
            case 'invalid_link':
              this.showError(
                'Invalid Link',
                "Sorry, the reference link is invalid"
              )
              break
            case 'link_has_expired':
              this.showError(
                'Link has expired',
                'Sorry, the reference link has expired'
              )
              break
            default:
              this.showError(
                'Oops something went wrong',
                "Sorry we can't process your request at the moment"
              )
          }
        })
        .finally(() => {
          this.loading = false
        })
    },


    resetPassword(user) {
      this.formLoading = true
      console.log(user)
      if(user.password.length < 6)
      {
          this.showError('', 'Your password cannot be less than 6 characters. Please check and try again')
          this.formLoading = false
      }
      else if(user.password !== user.confirm_password) {
        this.showError('', 'Your password do not match')
        this.formLoading = false
      } else {
        this.showErrorMsg = false
        this.formLoading = true

        this.$axios
          .post(baseURl + 'account/reset-password/' + this.reference, user)
          .then(res => {
            this.validateReference(this.$route.params.ref)
            this.passwordResetSuccessful = true
          })
          .catch(() => {
            this.showError(
              'Oops something went wrong',
              "Sorry we can't process your request at the moment"
            )
          })
          .finally(() => {
            this.formLoading = false
          })
      }
    }
  }
}
</script>

<style scoped>
</style>
