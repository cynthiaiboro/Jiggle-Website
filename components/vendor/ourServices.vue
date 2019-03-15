<template>
  <div>
    <section id="our-services">
      <div class="container">
        <div class="d-flex justify-content-center align-items-center">
          <div>
            <h3 class="text-center get-started" style="font-weight: 500; color:#2D3448;">
              Our Services
            </h3>
            <hr class="blue-hr">
          </div>
        </div>
        <div>
          <div class="mt-5 our-services-four-section ">
            <div class="row d-flex justify-content-center">
              <div class="col-md-3 col-12">
                <div class="position-our-services-blue-background">
                  <div class="our-services-blue-background">
                    <i class="fa fa-briefcase" style="color:#ffffff; font-size:25px;" />
                  </div>
                </div>
                <div class="text-center mt-4">
                  <h5 class="h6-bold get-started" style="font-weight: 400">
                    Fast payment     
                  </h5>
                </div>
              </div>
              <div class="col-md-3 col-12">
                <div class="position-our-services-blue-background">
                  <div class="our-services-blue-background">
                    <i class="fa fa-money" style="color:#ffffff; font-size:25px;" />                            
                  </div>
                </div>
                <div class="text-center mt-4">
                  <h5 class="h6-bold get-started" style="font-weight: 400">
                    Quick payout
                  </h5>
                </div>
              </div>
              <div class="col-md-3 col-12">
                <div class="position-our-services-blue-background">
                  <div class="our-services-blue-background">
                    <i class="fa fa-google-wallet" style="color:#ffffff; font-size:25px;" />                                    
                  </div>
                </div>
                <div class="text-center mt-4">
                  <h5 class="h6-bold get-started" style="font-weight: 400">
                    Mobile friendly
                  </h5>
                </div>
              </div>            
            </div>
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
  font-family: 'Circularmedium';
  src: url('../../assets/fonts/circularmedium.ttf');
}
.get-started {
  font-family: 'Circularmedium' !important;
}
.position-our-services-blue-background {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}
.h6-bold {
  font-weight: 650;
}
#our-services {
  padding: 5% 0;
  background-color: #ffffff;
}
.blue-hr {
  width: 100px;
  height: 3px;
  background-color: #2f6deb;
}
.our-services-blue-background {
  height: 100px;
  width: 100px;
  border-radius: 50%;
  background-color: #3e4353;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
