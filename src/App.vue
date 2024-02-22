
<template>
  <div class="app">
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">Globe Immigration</router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item mx-3">
            <router-link class="nav-link" aria-current="page" to="/"><p class="nav-text">Home</p></router-link>
          </li>
          <li class="nav-item mx-3">
            <router-link class="nav-link" to="/services"><p class="nav-text">Our Services</p></router-link>
          </li>
          <li class="nav-item mx-3">
            <router-link class="nav-link" to="/free-assessment"><p class="nav-text">Free Assessment</p></router-link>
          </li>
          <li class="nav-item mx-3">
            <router-link class="nav-link" to="/faq"><p class="nav-text">FAQ</p></router-link>
          </li>
          <li class="nav-item mx-3">
            <router-link class="nav-link" to="/contact-us"><p class="nav-text">Contact Us</p></router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <router-view></router-view>
</div>
</template>

<script>

export default {
  name: 'App',
  components: {
    
  }
}
</script>

<style>


  .nav-link:focus {
    color: red !important; /* Change the text color to red */
    text-decoration: underline !important; /* Underline the active nav link */
  }


  .nav-text {
    font-size: 20px;
  }

  /* .navbar-nav > li {
  float: left;
  position: relative;
}
.navbar-light .navbar-nav .active p::after {
  border-bottom: 5px solid #5bc0eb;
  bottom: -10px;
  content: " ";
  left: 0;
  position: absolute;
  right: 0;
} */

  .app {
  font-family: "Kaisei HarunoUmi", serif;
  font-weight: 400;
  font-style: normal;
}

</style>
