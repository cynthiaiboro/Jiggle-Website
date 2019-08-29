<template>
  <div>
    <!-- <Header /> -->
<navbar />
    <div class="main">
      <div class="row">
        <div class="col-md-5 mx-auto">
          <div v-if="showErrorMsg" class="error m-3">
            <div class="alert alert-danger">
              <h5 v-if="error.title" class="alert-heading">{{ error.title }}</h5>
              <p>{{ error.body }}</p>
            </div>
          </div>

          <div v-if="loading" class="loading mt-5">
            <Loading />
            <p class="text-center">Please Wait...</p>
          </div>

          <div v-if="showSignUp" class="form mt-4">
            <sign-up-form :loading="formLoading" @formSubmitted="createAccount" />
          </div>

          <div v-if="invitationAccepted" class="success mt-5">
            <h3 class="text-center">Invitation Accepted</h3>
            <p class="text-center">
              You have successfully accepted
              <b>{{ vendor }}'s</b> employee invitation
            </p>
            <p
              class="text-center"
            >Proceed to sign into the jiggle vendor mobile app or download download it from google play store</p>

            <div class="text-center">
              <img alt="play store" src="/googleplay%20dark.svg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import navbar from '../../../../components/navbar'
import Header from '../../../../components/vendor/header'
import Loading from '../../../../components/shared/Loading'
import SignUpForm from '../../../../components/shared/SignUpForm'

const baseURl = 'https://api.jiggle.ng/'
export default {
  name: 'Index',
  components: {
    navbar,
    Header,
    Loading,
    SignUpForm
  },
  data: function() {
    return {
      loading: false,
      showSignUp: false,
      showErrorMsg: false,
      formLoading: false,
      invitationAccepted: false,
      vendor: '',
      error: {
        title: '',
        body: ''
      }
    }
  },
  mounted() {
    this.acceptInvite(this.$route.params.ref)
  },
  methods: {
    showError(title, message) {
      this.error.title = title
      this.error.body = message
      this.showErrorMsg = true
    },
    showForm() {
      this.showSignUp = true
    },
    acceptInvite: function(reference) {
      this.loading = true
      this.showSignUp = false
      this.$axios
        .post(baseURl + 'account/vendor/employee-invite/' + reference)
        .then(res => {
          console.log(res)
          this.invitationAccepted = true
          this.vendor = res.data.vendor.name
        })
        .catch(err => {
          const data = err.response.data

          switch (data.message) {
            case 'user_not_found':
              this.showForm()
              break
            case 'invalid_invitation':
              this.showError(
                'Invalid Invitation',
                "Sorry we can't find your invitation"
              )
              break
            case 'invitation_already_accepted':
              this.showError(
                'Already Accepted',
                'Invitation had  already been accepted proceed to login on the app'
              )
              break
            case 'invitation_expired':
              this.showError(
                'Link has expired',
                'Invitation link has expired request for another invitation'
              )

              break
            default:
              this.showError(
                'Oops something went wrong',
                "Sorry we can't process your  invitation at the moment"
              )
          }
        })
        .finally(() => {
          this.loading = false
        })
    },

    async emailExist(email) {
      const response = await this.$axios.$get(
        baseURl + 'vendor/user/exists?email=' + email
      )

      return response.status === 'success'
    },

    async createAccount(user) {
      const emailExist = await this.emailExist(user.email)
      this.formLoading = true
      if (user.password !== user.password_confirmation) {
        this.showError('', 'Your password did not match')
        this.formLoading = false
      } else if (emailExist) {
        this.showError(
          'Email already exist',
          'You already have an account with jiggle please sign in on the mobile app'
        )
        this.formLoading = false
      } else {
        this.showErrorMsg = false
        this.formLoading = true

        this.$axios
          .post(baseURl + 'account/signup', user)
          .then(res => {
            this.acceptInvite(this.$route.params.ref)
          })
          .catch(() => {
            this.showError(
              'Oops something went wrong',
              "Sorry we can't process your registration at the moment"
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
