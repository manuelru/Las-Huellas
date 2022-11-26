

<template>
    <nav class="navegacionCategorias">
     
                <router-link  class="rutasCat" to="/desparasitantes"> Desparasitantes </router-link>
                <router-link  class="rutasCat" to="/vitaminas">Vitaminas</router-link>
    </nav>

</template>

<style>
.navegacionCategorias{
    height: 30px;
    width: 50%;
    margin: auto;
    border-radius: 20px;
    margin-top: 5px;
    text-align: center;
    background-color: aqua;
}
.rutasCat{
    font-size: 15px;
    text-decoration: none;
    color: blueviolet;
    margin-left: 20%;

}
</style>