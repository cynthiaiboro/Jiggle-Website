<template>
  <div class="sign-up">
    <h4>Sign Up</h4>
    <hr>
    <p class="text-muted">
      Please sign up to continue
    </p>
    <form @submit.prevent="submitForm" class="needs-validation" novalidate>
      <div class="form-group">
        <input
          id="first-name"
          v-model="user.first_name"
          type="text"
          class="form-control"
          placeholder="First name"
          required
        >
      </div>
      <div class="form-group">
        <input
          id="last-name"
          v-model="user.last_name"
          type="text"
          class="form-control"
          placeholder="Last Name"
          required
        >
      </div>

      <div class="form-group">
        <input
          id="email"
          v-model="user.email"
          type="email"
          class="form-control"
          placeholder="Email"
          required
        >
      </div>

      <div class="form-group">
        <input
          id="password"
          v-model="user.password"
          type="password"
          class="form-control"
          placeholder="Password"
          required
        >
      </div>


      <div class="form-group">
        <input
          id="c-password"
          v-model="user.password_confirmation"
          type="password"
          class="form-control"
          placeholder="Confirm Password"
          required
        >
      </div>

      <div>
        <button type="submit" class="btn s-btn">
          <i v-if="loading" class="fa fa-spin fa-spinner" /> Sign Up
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'SignUpForm',
  props: ['loading'],
  data: function() {
    return {
      user: {
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        password_confirmation: ''
      }
    }
  },

  mounted() {
    this.initValidation()
  },
  methods: {
    submitForm() {
      this.$emit('formSubmitted', this.user)
    },

    initValidation() {
      const forms = document.getElementsByClassName('needs-validation')
      // Loop over them and prevent submission
      Array.prototype.filter.call(forms, function(form) {
        form.addEventListener(
          'submit',
          function(event) {
            if (form.checkValidity() === false) {
              event.preventDefault()
              event.stopPropagation()
            }
            form.classList.add('was-validated')
          },
          false
        )
      })
    }
  }
}
</script>

<style scoped>
.sign-up {
  box-shadow: 0 0 5px grey;
  padding: 20px;
}

.s-btn {
  background: #414255;
  color: white;
}
</style>
