<template>
  <div>
    <!--<div v-if="loading">-->
    <!--<loading />-->
    <!--</div>-->
    <form
      @submit.prevent="submitForm"
      method="post"
      class="needs-validation"
    >
      <p style="color: #2D3448;" class="mb-2 bank-detail">
        Bank Details
      </p>
      <hr>
      <div class>
        <label class="col-form-label" for="formGroupExampleInput">
          <!-- <i class="fa fa-university" /> -->
          Bank
        </label>
        <select
          id="formGroupExampleInput"
          v-model="vendor.bank_id"
          v-validate="'required'"
          name="bank_id"
          class="form-control form-control2 mb-2"
          required
        >
          <option value="" class="text-dark" disabled>
            <span v-if="loading" class="spinner-border spinner-border-sm" role="status" aria-hidden="true" />
            Select Bank
          </option>
          <option
            v-for="(bank, key) in banks"
            :key="key"
            :value="bank.id"
          >
            {{ bank.name }}
          </option>
        </select>
      </div>

      <div class>
        <label class="col-form-label" for="formGroupExampleInput">
          <!-- <i class="fa fa-user" /> -->
          Account Number
        </label>
        <input
          id="formGroupExampleInput"
          v-model="vendor.account_no"
          v-validate="'required|numeric|length:10'"
          type="text"
          name="account_number"
          class="form-control form-control2 mb-2 text-dark"
          placeholder="0000000000"
        >
      </div>

      <div class>
        <label class="col-form-label" for="formGroupExampleInput">
          <!-- <i class="fa fa-envelope" />  -->
          BVN
        </label>
        <input
          id="formGroupExampleInput"
          v-model="vendor.bvn"
          v-validate="'required|numeric|length:11'"
          type="text"
          name="bvn"
          class="form-control form-control2 mb-2 text-dark"
          placeholder="0000000000"
          required
        >
      </div>


      <div class="pt-4 pb-1 d-flex justify-content-center">
        <button
          :disabled="hasErrors"
          type="submit"
          class="btn buttonS btn-primary text-center submit-button"
          value="Submit"
        >
          <span v-if="loading" class="spinner-border spinner-border-sm mr-2" role="status" aria-hidden="true" />
          Submit
        </button>
      </div>
      <p class="text-center">
        By registering you have chosen to accept the <span class="terms"> Terms of Service and Privacy policy </span>
      </p>
    </form>
  </div>
</template>

<script>
import axios from 'axios'
import Loading from '../shared/Loading'
const BASE_URL = 'https://api.jiggle.ng/'
export default {
  components: { Loading },
  props: ['currentRequestType', 'initialRequestType'],
  data() {
    return {
      banks: [],
      vendor: {
        first_name: '',
        last_name: '',
        email: '',
        account_name: 'Eyimenarolu Freedom',
        phone: '',
        password: '',
        password_confirmation: '',
        bank_id: '',
        account_no: '',
        bvn: '',
        reference: '',
        type: ''
      },
      loading: false
    }
  },
  computed: {
    hasErrors() {
      return this.errors.items.length !== 0
    }
  },
  mounted() {
    this.getBanks()
  },
  methods: {
    getBanks() {
      this.$axios
        .get('setting/banks/list')
        .then(response => {
          this.banks = response.data.data
          console.log('Getting bank details')
          console.log(response.data)
        })
        .catch(error => {
          console.log('Error getting banks')
          console.log(error.response.data)
        })
    },
    submitForm() {
      this.loading = true
      const vendorPersonalDetails = JSON.parse(
        localStorage.getItem('vendorPersonalDetails')
      )
      this.vendor.first_name = vendorPersonalDetails.first_name
      this.vendor.last_name = vendorPersonalDetails.last_name
      this.vendor.email = vendorPersonalDetails.email
      this.vendor.phone = vendorPersonalDetails.phone
      this.vendor.password = vendorPersonalDetails.password
      this.vendor.password_confirmation =
        vendorPersonalDetails.password_confirmation
      this.vendor.reference = this.$route.params.ref
      this.vendor.type = this.initialRequestType
      console.log(this.vendor)
      this.$axios
        .post('vendor/complete-registration', this.vendor)
        .then(response => {
          console.log('Registration form completed')
          this.loading = false
          swal('Success', 'Registration Form Completed Successfully', 'success')
          this.$toast.success('Your registration is complete', 'Success')
        })
        .catch(error => {
          console.log('There is an error')
          console.log(error.response.data)
          swal(
            'Error',
            'An error occured while trying to complete your registration',
            'error'
          )
        })
    }
  }
}
</script>

<style scoped>
.form-area {
  background-color: #ffffff;
  width: 80%;
  padding: 30px !important;
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
  color: black !important;
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
.bank-detail {
  font-size: 18px;
}
@media only screen and (max-width: 800px) {
  .form-area {
    width: 100%;
  }
}
</style>
