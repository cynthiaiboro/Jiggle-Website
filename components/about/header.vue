<template>
  <div>
    <section id="about-us-nav">
      <div class="container about-us">
        <h4 class="text-center best-solution">
          Simplyfing Meal <br> Budgeting and Payment
        </h4>
        <hr class="blue-hr">
        <p class="text-center ml-5 mr-5 pb-4">
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
  background-color: #FCFCFC;
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
  font-size: 37px;
}
@media only screen and (max-width: 700px) {
  .get-started {
    font-size: 1.3rem !important;
  }
  .hidden-text {
    display: none !important;
  }
  .about-us {
  padding-top: 60px;
}
}
</style>
