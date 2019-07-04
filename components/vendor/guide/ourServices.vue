<template>
  <div id="our-services" class="mt-5">
    <div class="text-center mb-5">
      <span class="section-header">
        Our Services
      </span>
    </div>
    <p class="section-body">
      Jiggle vendor is everything you need to collect payment and grow your business
      Jiggle provides a  meal budgeting platform and a payment solution where your
      customers can pay for your services from a pre-funded wallet and eat with you
      whenever. It seeks to simplify your customer’s budgeting for meals as well as
      provide the opportunity for you to efficiently meet their feeding needs and boost
      your productivity.
    </p>
    <span class="sub-section-headers">Best way to receive payments</span>
    <p class="section-body">
      Receive payment the fast and easy way, see transactions directly from your phone
      and keep track of your business on the go with Jiggle vendor app.
    </p>
    <span class="sub-section-headers">Track payments</span>
    <p class="section-body">
      Get quick access to all your transactions. Check all payments
      received, see bank transfers and watch your business grow all within one app!
    </p>
    <span class="sub-section-headers">Cashless experience</span>
    <p class="section-body">
      Receive payment without having to handle cash. Get paid the cashless way and
      ensure maximum security.
    </p>
    <span class="sub-section-headers">Get flexible Payout (with our daily payout option)</span>
    <p class="section-body">
      You will love our next day payout feature. Your money is automatically deposited
      into your bank account the next business day.
    </p>
    <span class="sub-section-headers">Improved customer experience</span>
    <p class="section-body">
      Give your customers a simple, secure and convenient way to pay. Paying with jiggle mean easy
      transactions and happy customers.
    </p>
    <span class="sub-section-headers">Great tracking tool</span>
    <p class="section-body">
      Use one platform to track sales volume, payment status, number of unique customers. Gain a better
      understanding of your business and make more informed decisions.
    </p>
    <span class="sub-section-headers">Maximum security</span>
    <p class="section-body">
      Safety is our top priority. We use the latest innovative technologies in IT
      security and your account details are protected and stored in servers in a
      secure location
    </p>
  </div>
</template>

<script>
export default {
  name: 'OurServices'
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
