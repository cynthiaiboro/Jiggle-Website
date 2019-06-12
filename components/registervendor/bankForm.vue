<template>
    <div class="form-area">
        <form
            method="post"
            class="needs-validation"
            @submit.prevent="submitForm"
          >
            <h4 style="color: #2D3448;">Complete your Registration</h4>
            <div class>
              <label class="col-form-label" for="formGroupExampleInput">
                <!-- <i class="fa fa-university" /> -->
                Bank
              </label>
              <select
                id="formGroupExampleInput"
                name="bank_id"
                value= 'Select Bank'
                class="form-control form-control2 mb-2"
                required
              >
                <option
                  v-for="(bank, key) in banks"
                  :key="key"
                  :value="bank.id"
                  >{{ bank.name }}
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
                type="email"
                name="email"
                class="form-control form-control2 mb-2"
                placeholder="0000000000"
                required
              />
            </div>

            <div class>
              <label class="col-form-label" for="formGroupExampleInput">
                <!-- <i class="fa fa-envelope" />  -->
                BVN
              </label>
              <input
                id="formGroupExampleInput"
                type="email"
                name="email"
                class="form-control form-control2 mb-2"
                placeholder="0000000000"
                required
              />
            </div>


            <div class="pt-4 pb-1 d-flex justify-content-center">
              <input
                type="submit"
                class="btn buttonS btn-primary text-center submit-button"
                value="Submit"
              />
            </div>
            <p class="text-center">By registrating you have chosen to accept the <span class="terms"> Terms of Service and Privacy policy </span></p>
          </form>
    </div>
</template>

<script>
import axios from 'axios'
const BASE_URL = 'https://api.jiggle.ng/'
export default {
data() {
    return {
        banks: ''
    }
  },
  mounted() {
    this.getBanks()
  },
  methods: {
  getBanks() {
      const BASE_URL = 'https://api.jiggle.ng/'
      axios.get(BASE_URL + 'setting/banks/list')
      .then(response => {
        this.banks = response.data.data
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
    color: #4F5259 !important;
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
  background-color:#2F6DEB !important;
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
border: 1px solid #ABB4BD;
}
input {
color: #ABB4BD !important;
font-family: 'Circularbook' !important;
}
p {
color: #828282 !important;
font-size: 12px;
font-family: 'Circularbook' !important;
}
.terms {
    color: #2F6DEB !important;
}
@media only screen and (max-width: 800px) {
.form-area {
    width: 100%;
}
}
</style>
