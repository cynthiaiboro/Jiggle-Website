<template>
  <div>
    <section id="become-a-vendor">
      <div class="container">
        <div class="row text-center">
          <div class="col-sm-12 vendor-text">
            <h3 class="get-started pb-2 text-white" style="font-weight: 400">
              Receive payment with Jiggle
            </h3>
            <p>
              Spur your business to a whole new level <br>
              Let’s take care of payments so you can focus on running your business.
            </p>
            <b-button to="/vendor" class="call-to-action" style="font-weight:400; font-size: 0.8rem;">
              BECOME A VENDOR
            </b-button>
          </div>
          <!-- <div class="col-md-3" />
          <div class="col-md-5">
            <img src="/vendor-phone.svg" class="top-phone">
          </div> -->
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
  src: url('../../assets/fonts/Regular.ttf');
}
@font-face {
  font-family: 'Circularbold';
  src: url('../../assets/fonts/Bold.ttf');
}
#become-a-vendor {
  background: url(/vendor-background.svg);
  background-attachment: fixed;
  padding: 3% 0;
}
.call-to-action {
  height: 45px;
  width: 22%;
  border-radius: 3px;
  background-color: #2f6deb;
  border: none;
  color: #ffffff;
  font-family: 'Circularbook' !important;
  padding: 12px 0px;
}
.call-to-action:hover{
  cursor: pointer;
  background: #ffffff;
  border: 2px solid #3e4353;
  color: #3e4353;
  transition: ease-in 1s;
}
.get-started {
  font-family: 'Circularbold' !important;
}
p {
  font-family: 'Circularbook' !important;
  color: #aeb2bc;
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
    padding: 7% 0 !important;
  }
  h3 {
    font-size: 1.2rem !important;
  }
  .call-to-action {
    width: 160px;
  }
}
</style>
