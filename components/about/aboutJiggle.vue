<template>
  <div>
    <section id="about-jiggle">
      <div class="container">
        <h3 class="text-center get-started">
          About Jiggle
        </h3>
        <hr class="blue-hr">
        <div class="about-jiggle-text">
          <p class="text-center ml-5 mr-5">
            Jiggle is a meal budgeting platform where users pay once to eat whenever and wherever. 
            It is a fun and new way of ensuring that you eat throughout the month while giving your very best at life. 
            <span class="about-jiggle-hidden-text">It  seeks to  simplify your budgeting and make you gain control over your spending. Jiggle provides a mobile 
              payment method that gives you the convenience to make and receive payment for meals without having to handle cash or cards.
              Our mission is to boost your productivity  and efficiency through the excellent services provided via our platform.</span>
          </p>
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
  font-family: 'Circularmedium';
  src: url('../../assets/fonts/circularmedium.ttf');
}
#about-jiggle {
  padding: 70px 0;
  background: #fcfcfc;
}
.get-started {
  font-family: 'Circularmedium' !important;
}
.about-jiggle-text {
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Circularbook' !important;
}
.blue-hr {
  width: 100px;
  height: 3px;
  background-color: #2f6deb;
}
</style>
