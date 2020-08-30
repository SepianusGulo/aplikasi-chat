<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-primary fixed-top">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Codingku</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">
              <router-link :to="{ name :'Index' }">
                <span class="nav-link">Home</span>
              </router-link>
            </a>
          </li>

          <li class="nav-item"></li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  name: "Navbar",
  data() {
    return {};
  },
};
</script>

<style>
.navbar {
  width: 100%;
}
.navbar-nav li a span {
  text-decoration: none;
}
</style>
