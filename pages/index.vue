<template>
  <div>
    <div class="jumbotron">
      <div class="container">
        <logo/>
        <h1 class="display-3">Offical Jiggle website repository</h1>
        <p class="lead">Pay once, eat whenever and wherever</p>
        <h2>My name is Emmanuel Michael, I like to smoke cigarratte when I am coding.</h2>
        <p class="lead">
          <a class="btn btn-primary btn-lg" href="Jumbo action link" role="button">Get Started</a>
        </p>
      </div>
    </div>
    <section class="container"></section>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>

<style>
/* .container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
} */

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
