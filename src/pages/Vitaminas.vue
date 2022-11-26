<template>

<Navi/>
<router-view></router-view>

   



</template>
<script setup>
import Navi from "../components/NavegacionProductos.vue"
</script>


<style>
#myDiv{
    height: 300px;
    border: 1px solid black;
}
.txtMyLaptop{
    margin-top: 10px;
    margin-bottom: 10px;
    text-align: center;
    font-size: 90px;
    
}
.txtVievenida{
    font-size: 50px;
    text-align: center;
    margin-top: 10px;
    margin-bottom: 5px;
}
.options{
    margin: auto;
    width: 80px;
    height: 80px;
    border: 1px solid black;
    padding-left: 20px;
    border-radius: 50%;
    padding-top: 20px;
    background-color: rgb(159, 231, 240);
}
</style>