<template>
  <div>
    <page-nav />
    <section class="mt-5 mb-5">
      <div class="container">
        <div class="row">
          <div class="col-md-6 offset-md-3">
            <div class="error" v-show="!loading && errorOccurred">
              <div class="card shadow text-center" style="width: auto;height:auto;">
                <div class="card-body">
                  <img src="../../static/warning.png" class="icon m-4" alt />
                  <h4 class="card-title mt-3 mb-3">Unverified!</h4>
                  <p class="card-text m-4">{{errorMessage}}</p>
                </div>
              </div>
            </div>

            <div
              class="card shadow text-center"
              style="width: auto;height:auto;"
              v-show="!loading && !errorOccurred"
            >
              <div class="card-body">
                <img src="../../static/verifedimg.webp" class="icon m-4" alt />
                <h4 class="card-title mt-3 mb-3">Verified!</h4>
                <p class="card-text m-4">You have successfully verified your account.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <page-footer />
  </div>
</template>

<script>
import axios from 'axios'
import Footer from '../../layouts/footer'
import Nav from '../../layouts/Nav'
export default {
  name: 'emailTemplete',
  components: {
    'page-footer': Footer,
    'page-nav': Nav
  },
  data: () => ({
    loading: false,
    errorOccurred: false,
    errorMessage: ''
  }),
  methods: {
    validateVerificationLink() {
      const expires = this.$route.query.expires
      const signature = this.$route.query.signature
      const user_id = this.$route.query.user_id
      if (!expires && !signature && !user_id) {
        this.errorOccurred = true
        this.errorMessage = 'Link Expired'
      } else {
        axios
          .get(
            `https://api.jiggle.ng/account/verify-email?expires=${
              expires
            }&user_id=${user_id}&signature=${signature}`
          )
          .then(res => {
            return { title: res.data.title }
          })
          .catch(e => {
            this.errorOccurred = true
            this.errorMessage =
              'Email verification link has expired,Try resnding Email again'
          })
      }
    }
  },
  mounted() {
    this.validateVerificationLink()
  }
}
</script>

<style scoped>
.icon {
  width: 100px;
  height: 100px;
  color: white !important;
}
</style>
