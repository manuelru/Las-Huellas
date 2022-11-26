<script setup>
import Nav from "./components/Navigation.vue"
import Footer from "./pages/Footer.vue"

</script>

<template>
  <div>
    <Nav class="nav" />
    <router-view></router-view>
  </div>
  <Footer/>
</template>
<style>
.nav{
  background-color: rgb(94, 159, 215);
}
</style>
