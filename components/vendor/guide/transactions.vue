<template>
  <div id="transactions" class="mt-5">
      <div class="text-center mb-5">
      <h3 class="section-header">
        Transactions
      </h3>
      <hr class="blue-hr" />
      </div>
    <h5 class="sub-section-headers">Track transactions on the go</h5>
    <p class="section-body">
      View all payments made to you and track all payout made to your bank account.
    </p>
    <ul class="section-body">
      <li>Click the menu icon at the top left of your homepage and tap ‘My wallet’ button from the menu list.</li>
      <li>Click on <strong> transaction history </strong> tab to view all payments you have received.</li>
      <li>Click on <strong> Payout history </strong>  tab to view all payout made to your bank account.</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Transactions'
}
</script>

<style scoped>
.goto-list li {
  list-style: none;
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
</style>
