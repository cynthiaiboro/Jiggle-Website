<template>
  <div>
        <!-- Modal Component -->
        <b-modal id="modal-prevent" ref="modal" title="Become a Vendor">
          <form
            method="post"
            class="needs-validation"
            @submit.prevent
          >
            <label class="col-form-label" for="formGroupExampleInput">
              <i class="fa fa-user-o pr-2" />Full name
            </label>
            <input
              id="formGroupExampleInput"
              type="text"
              name="business_name"
              class="form-control form-control2 mb-2"
              placeholder
              required
            />
            <label class="col-form-label" for="formGroupExampleInput">
              <i class="fa fa-empire pr-2" />Business Name
            </label>
            <input
              id="formGroupExampleInput"
              type="text"
              name="description"
              class="form-control form-control2 mb-2"
              placeholder
              required
            />
            <div>
                <label class="col-form-label" for="formGroupExampleInput">
                <i class="fa fa-envelope pr-2" />Email
                </label>
                <input
                id="formGroupExampleInput"
                type="text"
                name="description"
                class="form-control form-control2 mb-2"
                placeholder
                required
                />
            </div>

            <div class>
              <label class="col-form-label" for="formGroupExampleInput">
                <i class="fa fa-phone pr-2" />
                Phone
              </label>
              <input
                id="formGroupExampleInput"
                name="location"
                type="text"
                class="form-control form-control2 mb-2"
                placeholder
                required
              />
            </div>
            <div class="modal-footer d-flex justify-content-center">
              <input
                type="submit"
                class="btn mr-4 ml-4 buttonS btn-primary text-center submit-button">
            </div>
          </form>
        </b-modal>
      </div>
</template>

<script>
export default {
  methods: {
    hideModal() {
      this.$refs.modal.hide()
    },
    showModal() {
      this.$refs.modal.show()
    },
    inviteVendorModal() {
    this.formAction = 'update'
    this.$refs.modal.show()
    },
    }
}
</script>

<style>
.modal-footer {
  display: none;
}
button.close {
    padding: 4px 9px 6px !important;
    border: 2px solid #000;
    border-radius: 50px !important;
    margin: 0.1px 2px -1rem auto !important;
    text-shadow: none;
    text-align: center !important;
    display: flex;
    justify-content: center;
}
button.close:hover {
  background-color: #0000ff !important;
  border: 2px solid #ffffff;
  color: #ffffff;
}

.submit-button {
  width: 100% !important;
  background-color: blue !important;
  border: none !important;
  box-shadow: none !important;
}
.btnS {
  background-color: #1068ed !important;
  border-color: #1068ed !important;
}
</style>
