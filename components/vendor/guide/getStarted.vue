<template>
  <div id="get-started" class="mt-5">
    <div class="text-center mb-5">
      <h3 class="section-header">
        Get Started
      </h3>
      <hr class="blue-hr" />
    </div>
    <h5 class="sub-section-headers">Step 1</h5>
    <p class="step">
      Register
    </p>
    <ul class="section-body">
      <li>Visit jiggle website <a href="https://jiggle.ng"> www.jiggle.ng </a></li>
      <li>Click on <strong> Become a vendor </strong></li>
      <li>Enter your business and personal details on the form that comes up</li>
    </ul>
    <h5 class="sub-section-headers">Step 2</h5>
    <p class="section-body">
      Download jiggle vendor app from playstore
    </p>
    <h5 class="sub-section-headers">Step 3</h5>
    <p class="section-body">
      Sign in and start receiving payment
    </p>
    <h5 class="sub-section-headers">Step 4</h5>
    <p class="section-body">
      Confirm payment - You receive a push notification whenever a user makes payment to you.
      Click on <strong> Confirm </strong> button on your homepage to confirm payment.
    </p>
  </div>
</template>

<script>
export default {
  name: 'GetStarted'
}
</script>

<style scoped>
.goto-list li {
  list-style: none;
  margin-top: 20px;
  font-weight: 600;
}
ul li a {
  text-decoration: none;
}
ul li {
  margin-top: 10px;
  color: #737373;
}
ul li:first-of-type {
  margin-top: 5px;
}
.section-header {
  color: #2d3448;
  font-weight: 500;
  font-family: "Circularmedium" !important;
}
.blue-hr {
  width: 100px;
  height: 3px;
  background-color: #2f6deb;
}
.section-body {
  font-size: 16px;
  color: #898989;
  line-height: 35px;
  padding-bottom: 20px;
  font-family: "Circularbook" !important;
}
.sub-section-headers {
  font-weight: 500;
  font-family: "Circularmedium" !important;
  color: #2d3448;
}
.goto-section {
  position: fixed;
  z-index: 999;
}
.navigation-bar {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 999;
}
.content-section {
  position: relative;
}
.step {
  font-family: "Circularbook" !important;
}
</style>
