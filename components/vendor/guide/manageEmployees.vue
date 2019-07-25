<template>
  <div id="manage-employees" class="mt-5">
      <div class="text-center mb-5">
      <h3 class="section-header">
        Manage Employees
      </h3>
      <hr class="blue-hr" />
      </div>
    <h5 class="sub-section-headers">Send employee invite</h5>
    <ul class="section-body">
      <li>Click on the menu icon at the top left of your homepage.</li>
      <li>Tap on <strong> Employee </strong> from the menu list.</li>
      <li>Click <strong> add employee </strong> icon  at the top right of the page</li>
      <li>Enter your employee’s email address and click on <strong> Send invite </strong> button.</li>
    </ul>
    <p class="section-body">
      <strong> Note - </strong> After accepting the invite, your employee now has access to your account and can
      receive payment on your behalf. However, this access is still controlled by you.
      Enable/disable employee
      Determine which employee has access to receive payment at any given point.
      When you enable an employee, he is granted access and can receive payment for
      your business. However, when you disable an employee, he is restricted.
    </p>
    <ul class="section-body">
      <li>Turn on <strong> Enable </strong> to enable an employee.</li>
      <li>Turn  on <strong> Disable </strong> to disable an employee.</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ManageEmployees'
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
</style>
