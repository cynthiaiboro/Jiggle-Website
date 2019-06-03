<template>
  <div>
    <section id="about-us-nav">
      <div class="container about-us py-md-5 mt-md-5">
        <h4 class="text-center best-solution pt-md-5">
          Simplifying Meal <br> Budgeting and Payment
        </h4>
        <hr class="blue-hr">
        <p class="text-center ml-md-5 mr-md-5 pb-md-5 pb-sm-2">
          Jiggle is a meal budgeting platform where users pay once to eat whenever and wherever.
          It simplifies your budgeting for meals and makes you gain control over your spending.
          <span class='hidden-text'>
         Our mission is to boost your productivity and efficiency through the excellent services
        provided via our platform.</span>
          </p>
      </div>
    </section>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.blue-hr {
  width: 100px;
  height: 2px;
  background-color: #2f6deb;
}
#about-us-nav {
  background-color:  #ffffff;
}
.about-us {
  padding-top: 100px;
}
p {
  color: #00255E;
  font-family: 'Circularmedium';
  padding: 5px 40px;
}
.best-solution {
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Circularheavy';
  color: #00255E;
  font-size: 45px;
}
@media only screen and (max-width: 700px) {
  .get-started {
    font-size: 1.3rem !important;
  }
  .hidden-text {
    display: none !important;
  }
  .about-us {
  padding-top: 50px;
  padding-bottom: 20px;
}
  .best-solution {
    font-size: 25px !important;
  }
  #about-us-nav {
 padding: 0px 13px !important;
}
}
</style>
