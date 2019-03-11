<template>
  <div>
    <nav class="navbar navbar-expand-sm navbar-light bg-light">
      <div class="container">
        <a class="navbar-brand" href="#">
          <img src="/logo.png" class="brand-logo">
        </a>
        <button
          class="navbar-toggler d-lg-none"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavId"
          aria-controls="collapsibleNavId"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <router-link class="nav-link" to="/">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/about">About</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/vendor">Vendor</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/dashboard/home">Dashboard</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/dashboard/pricing">Pricing</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.brand-logo {
  height: 30px !important;
}
</style>
