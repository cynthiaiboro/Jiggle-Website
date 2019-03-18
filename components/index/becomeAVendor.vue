<template>
  <div>
    <section id="become-a-vendor">
      <div class="container">
        <div class="row">
          <div class="col-md-4 vendor-text">
            <h3 class="get-started" style="font-weight: 400">
              Become a Vendor
            </h3>
            <p>
              "Lorem ipsum dolor sit amt, consectetur adipiscing elit, sed do eiusmod tempor 
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            </p>
            <button class="call-to-action" style="font-weight:400; font-size: 0.8rem;">
              READ MORE
            </button>
          </div>
          <div class="col-md-3" />
          <div class="col-md-5">
            <img src="/jiggle phone.svg" class="top-phone">
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
  margin-top: 40%;
}
@media only screen and (max-width: 800px) {
  .top-phone {
    width: 35vw;
  }
  .vendor-text {
    padding-right: 30px;
  }
}
@media only screen and (max-width: 700px) {
  .top-phone {
    display: none;
  }
  .vendor-text {
    text-align: center;
  }
  .get-started {
    margin-top: 2% !important;
  }
  #become-a-vendor {
    padding: 5% 0 !important;
  }
}
</style>
