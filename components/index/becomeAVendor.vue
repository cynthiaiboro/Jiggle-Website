<template>
  <div>
    <section id="become-a-vendor">
      <div class="container">
        <div class="row">
          <div class="col-md-4 vendor-text mt-4">
            <h3 class="get-started pt-5 mt-5" style="font-weight: 400">
              Become a Vendor
            </h3>
            <p>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            </p>
            <button class="call-to-action" style="font-weight:400; font-size: 0.8rem;">
              READ MORE
            </button>
          </div>
          <div class="col-md-3" />
          <div class="col-md-5">
            <img src="/jiggle phone.svg" class="top-phones">
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
@font-face {
  font-family: 'Circularbook';
  src: url('../../assets/fonts/circularbook.ttf');
}
@font-face {
  font-family: 'Circularbold';
  src: url('../../assets/fonts/circularbold.ttf');
}
#become-a-vendor {
  background-color: #e5e5e5;
  padding: 3% 0;
}
.call-to-action {
  height: 45px;
  width: 50%;
  border-radius: 3px;
  background-color: #2f6deb;
  border: none;
  color: #ffffff;
  font-family: 'Circularbook' !important;
}
.get-started {
  font-family: 'Circularbold' !important;
}
</style>
