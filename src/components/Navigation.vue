<template>
    <section class="sectionNavegacion">
        <div class="divLogo">
            <img class="logo" src="../../public/logoproyectofina.jpeg" alt="">
            <p class="nameFarmacia">Las Huellas</p>

        </div>
        <nav class="navegacio">
 
            <router-link  class="rutas" to="/"> Home </router-link>
            <router-link  class="rutas" to="/products">Farmacia Veterinaria</router-link>
            <router-link  class="rutas" to="/accesorios">Accesorios</router-link>
            <router-link  class="rutas" to="/contactanos">Contactanos</router-link>
            <router-link  class="rutas" to="/servicios">Servicios</router-link>
        </nav>

    </section>

</template>
<style>
.logo{
    margin-left: 20px;
    width: 60px;
    height: 60px;
    border-radius: 50%;
}
.sectionNavegacion{
    display: flex;
}
.divLogo{
    width: 40%;
    height: 60px;
    display: flex;
}
.nameFarmacia{
    margin-left: 10px;
    font-weight: 600;
    font-size: 20px;
}
.rutas{
    text-decoration: none;
    margin-left: 10%;
    color: black;
    font-size: 15px;
}
img{
    width: 50px;
}
.navegacio{
    width: 60%;
    height: 40px;
    padding-top: 20px;
}
</style>