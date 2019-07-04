<template>
  <div id="transactions" class="mt-5">
      <div class="text-center mb-5">
      <span class="section-header">
        Transactions
      </span>
      </div>
    <span class="sub-section-headers">Track transactions on the go</span>
    <p class="section-body">
      View all payments made to you and track all payout made to your bank account.
    </p>
    <ul>
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
    border-bottom: 4px solid #1068F0;
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
