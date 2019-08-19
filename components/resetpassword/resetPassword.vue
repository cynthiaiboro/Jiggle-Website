<template>
    <div id="login" class="pt-md-5">
        <div class="text-center pt-4">
        <a href="">
            <img src="/logo.svg" />
        </a>
        <h4>New Password</h4>
        </div>
        <div class="d-flex justify-content-center align-items-center">
          <div class="logArea">
            <form class="form-app form-reset-password" @submit.prevent="reset">
                <div class="alert alert-info" v-if="notice">{{ notice }}</div>
                <div class="alert alert-danger" v-if="error">{{ error }}</div>
                <div class="form-group">
                <label for="password">New Password</label>
                <input v-model="password" type="password" class="form-control" id="password" placeholder="Password">
                </div>
                <div class="form-group">
                <label for="password">Password Confirmation</label>
                <input v-model="password_confirmation" type="password" class="form-control" id="password_confirmation" placeholder="Password Confirmation">
                </div>
                <button type="submit" class="btn mb-3 resetBtn">Reset password</button>
                <!-- <div>
                <router-link to="/">Sign in</router-link>
                </div> -->
            </form>
          </div>
      </div>
    </div>
</template>

<script>
import axios from 'axios'
import swal from 'sweetalert'
export default {
  name: 'ResetPassword',
  data () {
    return {
      password: '',
      password_confirmation: '',
      error: '',
      notice: ''
    }
  },
  created () {
    this.userId = this.$route.params.id
    this.checkPasswordToken(this.userId)
  },
  methods: {
    reset() {
      if ( this.password !== this.password_confirmation) {
        this.error='Passwords do not match'
      } else {
      this.$axios.
      post('account/reset-password', { password: this.password, password_confirmation: this.password_confirmation })
         .then(response => {
            console.log('Displaying password reset status')
       this.notice = 'Your password has been reset successfully! Please sign in with your new password.'
    })
     .catch(errors => {
          this.error = "Something went wrong"
            console.log(errors)
          })
  }
    },
    checkPasswordToken (userId) {
      this.$axios.get('account/forgot-password/' + userId)
        .catch(error => {
          this.error = 'Invalid link'
          this.$router.replace('/resetPassword')
        })
    },
  }
}
</script>
<style scoped>
.logArea {
    background-color: aliceblue;
    width: 35% !important;
    font-family: 'Circularbook' !important;
    border-radius: 3px !important;
    padding: 30px;
    margin-top: 40px !important;
}
#login {
    background-color: #2D3448 !important;
    height: 100vh;
}
h4 {
    color: #ffffff;
    font-family: 'Circularbook' !important;
     margin-top: 30px !important;
}
.email {
    width: 60% !important;
}
.resetBtn {
    border-radius: 3px !important;
    width: 100%;
    background-color: #1068ED !important;
    border: 1px solid #1068ED !important;
    font-family: 'Circularbook' !important;
    color: #ffffff !important;
}
@media only screen and (max-width: 1100px) {
.logArea {
    width: 70% !important;
}
}
@media only screen and (max-width: 700px) {
.logArea {
    width: 80% !important;
}
}
@media only screen and (max-width: 400px) {
.logArea {
    width: 85% !important;
}
}
</style>
