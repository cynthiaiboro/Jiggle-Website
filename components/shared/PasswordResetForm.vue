<template>
  <div class="sign-up container">
    <h4>Enter New Password</h4>
    <hr>
    <p class="text-muted">
      Please enter your new password to continue
    </p>
    <form @submit.prevent="submitForm" class="needs-validation" novalidate>
      <div class="form-group">
        <input
          id="new_password"
          v-model="user.password"
          class="form-control"
          placeholder="New Password"
          type="password"
          required
        >
      </div>
      <div class="form-group">
        <input
          id="password_confirmation"
          v-model="user.confirm_password"
          type="password"
          class="form-control"
          placeholder="Confirm Password"
          required
        >
      </div>

      <div>
        <button type="submit" class="btn" style="background-color:#2F6DEB; color: #ffffff;">
          <i v-if="loading" class="fa fa-spin fa-spinner" /> Reset Password
        </button>
      </div>
    </form>
  </div>
</template>


<script>

export default {
  name: 'PasswordResetForm',
  props: ['loading'],
  data: function() {
    return {
      user: {
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

<style>

  .password-reset-form{
    width: 20%;
  }

</style>