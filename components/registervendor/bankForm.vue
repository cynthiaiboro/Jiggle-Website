<template>
  <div class="form-area">
    <form
      @submit.prevent="submitForm"
      method="post"
      class="needs-validation"
    >
      <h4 style="color: #2D3448;">
        Complete your Registration
      </h4>
      <div class>
        <label class="col-form-label" for="formGroupExampleInput">
          <!-- <i class="fa fa-university" /> -->
          Bank
        </label>
        <select
          id="formGroupExampleInput"
          name="bank_id"
          value="Select Bank"
          class="form-control form-control2 mb-2"
          required
        >
          <option
            v-for="(bank, key) in vendor.banks"
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
          v-model="vendor.account_number"
          type="email"
          name="email"
          class="form-control form-control2 mb-2"
          placeholder="0000000000"
          required
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
          type="email"
          name="email"
          class="form-control form-control2 mb-2"
          placeholder="0000000000"
          required
        >
      </div>


      <div class="pt-4 pb-1 d-flex justify-content-center">
        <input
          type="submit"
          class="btn buttonS btn-primary text-center submit-button"
          value="Submit"
        >
      </div>
      <p class="text-center">
        By registrating you have chosen to accept the <span class="terms"> Terms of Service and Privacy policy </span>
      </p>
    </form>
  </div>
</template>

<script>
import axios from 'axios'
const BASE_URL = 'https://api.jiggle.ng/'
export default {
  data() {
    return {
      banks: '',
      vendor: {
        first_name: '',
        last_name: '',
        email: '',
        phone: '',
        password: '',
        confirm_password: '',
        banks: [{ id: 'jfldksfjl', name: 'First' }],
        account_number: '',
        bvn: ''
      }
    }
  },
  mounted() {
    // this.getBanks()
  },
  methods: {
    getBanks() {
      this.$axios
        .get('setting/banks/list')
        .then(response => {
          this.vendor.banks = response.data.data
          console.log('Getting bank details')
          console.log(response.data)
        })
        .catch(error => {
          console.log('Error getting banks')
        })
    },
    submitForm() {
      const vendorPersonalDetails = JSON.parse(
        localStorage.getItem('vendorPersonalDetails')
      )
      this.vendor.first_name = vendorPersonalDetails.first_name
      this.vendor.last_name = vendorPersonalDetails.last_name
      this.vendor.email = vendorPersonalDetails.email
      this.vendor.phone = vendorPersonalDetails.phone
      this.vendor.password = vendorPersonalDetails.password
      this.vendor.confirm_password = vendorPersonalDetails.confirm_password
      console.log(this.vendor)
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
@media only screen and (max-width: 800px) {
  .form-area {
    width: 100%;
  }
}
</style>
