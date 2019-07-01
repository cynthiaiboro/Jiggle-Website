<template>
  <div id="get-started" class="mt-5">
    <div class="text-center mb-5">
      <span class="section-header">
        Get Started
      </span>
    </div>
    <span class="sub-section-headers">Step 1</span>
    <p class="section-body">
      Register
    </p>
    <ul>
      <li>Visit jiggle website <a href="https://jiggle.ng"> www.jiggle.ng </a></li>
      <li>Click on <strong> Become a vendor </strong></li>
      <li>Enter your business and personal details on the form that comes up</li>
    </ul>
    <span class="sub-section-headers">Step 2</span>
    <p class="section-body">
      Download jiggle vendor app from playstore
    </p>
    <span class="sub-section-headers">Step 3</span>
    <p class="section-body">
      Sign in and start receiving payment
    </p>
    <span class="sub-section-headers">Step 4</span>
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
  color: #5c5c5c;
  border-bottom: 4px solid #1068f0;
  font-size: 22px;
  font-weight: bold;
  padding-bottom: 8px;
}
.section-body {
  font-size: 16px;
  color: #898989;
  line-height: 35px;
}
.sub-section-headers {
  font-size: 20px;
  color: #787878;
  font-weight: 600;
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
</style>
