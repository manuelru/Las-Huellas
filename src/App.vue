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
  background-color: rgba(121,206,102,255);
}
@media screen and (max-width: 1228px) {
  .nav{
    height: 100px;
  }


}
@media screen and (max-width: 400px) {
  .nav{
    height: 350px;

  }

}
</style>
