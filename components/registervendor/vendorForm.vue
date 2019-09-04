<template>
  <form
    @click="selectedComponent= 'bankForm'"
    method="post"
    class="needs-validation"
  >
    <!-- @submit.prevent="submitForm" -->
    <p style="color: #2D3448;" class="mb-2 admin-contact">
      Admin Contact
    </p>
    <hr>
    <div class="row">
      <div class="col-lg-6 col-md-6 col-sm-12 col-12 pr-lg-2 pr-md-2 pr-sm-3 pr-3">
        <label class="col-form-label" for="formGroupExampleInput">
          First Name
        </label>
        <input
          id="first-name"
          v-model="vendor.first_name"
          v-validate="'required'"
          @keyup="checkInputs"
          name="first_name"
          type="text"
          class="form-control form-control2 mb-2"
          placeholder="Enter First Name"
          required
        >
      </div>
      <div class="col-lg-6 col-md-6 col-sm-12 col-12 pl-lg-2 pl-md-2 pl-sm-3 pl-3">
        <label class="col-form-label" for="formGroupExampleInput">
          Last Name
        </label>
        <input
          id="formGroupExampleInput"
          v-model="vendor.last_name"
          v-validate="'required'"
          @keyup="checkInputs"
          type="text"
          name="last_name"
          class="form-control form-control2 mb-2"
          placeholder="Enter Last Name"
          required
        >
      </div>
    </div>

    <label class="col-form-label" for="formGroupExampleInput">
      Phone Number
    </label>
    <div class="input-group input-group-default">
      <div class="input-group-prepend">
        <span id="inputGroup-sizing-default" class="input-group-text">+234</span>
      </div>
      <input
        id="formGroupExampleInput"
        v-model="vendor.phone"
        v-validate="'required|numeric|'"
        @keyup="checkInputs"
        type="text"
        name="phone"
        class="form-control form-control2"
        aria-label="default"
        aria-describedby="inputGroup-sizing-default"
        required
      >
    </div>
    <div class="row">
      <div class="col-lg-6 col-md-6 col-sm-12 col-12 pr-lg-2 pr-md-2 pr-sm-3 pr-3">
        <label class="col-form-label" for="formGroupExampleInput">
          Password
        </label>
        <input
          id="formGroupExampleInput"
          v-model="vendor.password"
          v-validate="'required'"
          @keyup="checkInputs"
          name="password"
          type="password"
          class="form-control form-control2 mb-2"
          placeholder="******"
          required
        >
      </div>
      <div class="col-lg-6 col-md-6 col-sm-12 col-12 pl-lg-2 pl-md-2 pl-sm-3 pl-3">
        <label class="col-form-label" for="formGroupExampleInput">
          Confirm Password
        </label>
        <input
          id="formGroupExampleInput"
          v-model="vendor.password_confirmation"
          v-validate="'required'"
          @keyup="checkInputs"
          type="password"
          name="password_confirmation"
          class="form-control form-control2 mb-2"
          placeholder="******"
          required
        >
      </div>
    </div>

    <div class="pt-4 pb-1 d-flex justify-content-center">
      <input
        @click.prevent.default="nextForm"
        :disabled="hasErrors"
        :class="{'button-is-inactive': disableButton}"
        type="submit"
        class="btn buttonS btn-primary text-center submit-button"
        value="Continue"
      >
    </div>
    <p class="text-center">
      By registrating you have chosen to accept the <span class="terms"> Terms of Service and Privacy policy </span>
    </p>
  </form>
</template>
<script>
export default {
  name: 'Vendorform',
  components: {},
  props: ['vendorDetails', 'disableButton'],
  data() {
    return {
      vendor: {
        first_name: '',
        last_name: '',
        email: '',
        phone: '',
        password: '',
        password_confirmation: ''
      }
    }
  },
  computed: {
    hasErrors() {
      return this.errors.items.length !== 0
    }
  },
  created() {
    // this.watchInputs()
  },
  methods: {
    nextForm() {
      console.log('I am called')
      if (
        this.vendor.first_name &&
        this.vendor.last_name &&
        this.vendor.phone &&
        this.vendor.password &&
        this.vendor.password_confirmation
      ) {
        if (this.vendor.password === this.vendor.password_confirmation) {
          localStorage.setItem(
            'vendorPersonalDetails',
            JSON.stringify(this.vendor)
          )
          this.$emit('changeRequestType',this.vendor)
        } else {
            swal('Error!', 'Passwords do not match')
        }
      } else {
          swal('Error', 'All fields are required')
      }
    },
    checkInputs() {
      if (
        this.vendor.first_name &&
        this.vendor.last_name &&
        this.vendor.phone &&
        this.vendor.password &&
        this.vendor.password_confirmation
      ) {
        if (this.vendor.password === this.vendor.password_confirmation) {
          this.disableButton = false
        }
      }
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
label {
  color: #4f5259 !important;
  font-size: 12px !important;
  font-family: 'Circularbold' !important;
}
button.close {
  padding: 0 16px 16px 11px !important;
}

button.close:hover {
  background-color: blue !important;
}
h4 {
  font-family: 'Circularmedium' !important;
}

.submit-button {
  width: 100% !important;
  background-color: #2f6deb !important;
  border: none !important;
  box-shadow: none !important;
  font-size: 15px !important;
  height: 40px;
  color: #ffffff !important;
  font-family: 'Circularbook' !important;
}
.btnS {
  background-color: #1068ed !important;
  border-color: #1068ed !important;
}
.form-control2 {
  height: 40px;
  border: 1px solid #abb4bd;
}
input {
  color: #abb4bd !important;
  font-family: 'Circularbook' !important;
}
p {
  color: #828282 !important;
  font-size: 12px;
  font-family: 'Circularbook' !important;
}
.terms {
  color: #2f6deb !important;
}
.admin-contact {
  font-size: 18px;
}
.form-control2 {
  color: black !important;
}
.button-is-inactive {
  pointer-events: none;
  background-color: #2f6deb !important;
  opacity: 0.5;
}
@media only screen and (max-width: 800px) {
  .form-area {
    width: 100%;
  }
}
</style>
