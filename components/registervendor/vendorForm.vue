<template>
    <div class="form-area">
        <form
            method="post"
            class="needs-validation"
            @click="selectedComponent= 'bankForm'"
          >
          <!-- @submit.prevent="submitForm" -->
            <h4 style="color: #2D3448;">Complete your Registration</h4>
            <div class>
              <label class="col-form-label" for="formGroupExampleInput">
                <i class="fa fa-user" />
                First Name
              </label>
              <input
                id="formGroupExampleInput"
                name="business_name"
                type="text"
                v-model="firstname"
                class="form-control form-control2 mb-2"
                placeholder="Enter First Name"
                required
              />
            </div>

            <div class>
              <label class="col-form-label" for="formGroupExampleInput">
                <i class="fa fa-user" /> Last Name
              </label>
              <input
                id="formGroupExampleInput"
                type="text"
                name="lastname"
                v-model="lastname"
                class="form-control form-control2 mb-2"
                placeholder="Enter Last Name"
                required
              />
            </div>

            <div class>
              <label class="col-form-label" for="formGroupExampleInput">
                <i class="fa fa-envelope" /> Email Address
              </label>
              <input
                id="formGroupExampleInput"
                type="email"
                name="email"
                v-model="email"
                class="form-control form-control2 mb-2"
                placeholder="email@gmail.com"
                required
              />
            </div>

            <div class>
              <label class="col-form-label" for="formGroupExampleInput">
                <i class="fa fa-phone" /> Phone Number
              </label>
              <input
                id="formGroupExampleInput"
                type="text"
                name="location"
                v-model="phone"
                class="form-control form-control2"
                placeholder="234 | "
                required
              />
            </div>

            <div class>
              <label class="col-form-label" for="formGroupExampleInput">
                <i class="fa fa-key" /> Password
              </label>
              <input
                id="formGroupExampleInput"
                type="password"
                name="city"
                v-model="password"
                class="form-control form-control2"
                placeholder="**********"
                required
              />
            </div>

            <div class>
              <label class="col-form-label" for="formGroupExampleInput">
                <i class="fa fa-lock" /> Confirm Password
              </label>
              <input
                id="formGroupExampleInput"
                type="password"
                name="city"
                v-model="confirmpassword"
                class="form-control form-control2"
                placeholder="**********"
                required
              />
            </div>

            <div class="pt-4 pb-1 d-flex justify-content-center">
              <input
                type="submit"
                class="btn buttonS btn-primary text-center submit-button"
                value="Next"
                @click="nextForm"
              />
            </div>
            <p class="text-center">By registrating you have chosen to accept the <span class="terms"> Terms of Service and Privacy policy </span></p>
          </form>
    </div>
</template>
<script>
import bankForm from './bankForm'
export default {
    data() {
        return {
            firstname: '',
            lastname: '',
            email: '',
            phone: '',
            password: '',
            confirmpassword: '',
        }
    },
    components: {
        bankForm
    },
    methods: {
        nextForm(){
            if ( this.firstname === '' || this.lastname === '' || this.email === '' || this.phone === ''
             || this.password === '' || this.confirmpassword === '' ) {
        alert('Please enter all fields!')
      } else {
          this.$router.push('/')
        }
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
