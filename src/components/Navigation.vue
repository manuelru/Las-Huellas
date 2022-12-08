<template>
    <section class="sectionNavegacion">
        <div class="divLogo">
            <div class="rutas"> <router-link to="/"> <img class="logo" src="/logoproyectofina.jpeg" alt=""> </router-link>  </div>
            <router-link class="rutaName" to="/"> <p class="nameFarmacia">Las Huellas</p> </router-link>
            

        </div>
        <NavegacionPrincipalVue/>

    </section>

</template>
<script setup>
import NavegacionPrincipalVue from '../pages/Navegacion/NavegacionPrincipal.vue';
</script>
<style>
.rutas a{
    text-decoration: none;
    border: 0;
    padding: 0;
    color: black;
}
.rutaName{
    text-decoration: none;
}
.rutas :hover{
  color: white;
}


.logo{
    margin-left: 20px;
    width: 60px;
    height: 60px;
    border-radius: 50%;
}
.sectionNavegacion{
    display: flex;
    position: sticky;
    top: 0;
    z-index: 10; 
}
.divLogo{
    width: 40%;
    height: 50px;
    display: flex;
    padding-left: 10%;
}
.nameFarmacia{
    margin-top: 13px;
    margin-left: 0px;
    font-weight: 600;
    font-size: 20px;
}
.rutas{
    width: 20%;
    text-decoration: none;
    margin-left: 0%;
    color: black;
    font-size: 15px;
    font-weight: 600;
}
#rutas{
    width: 20%;
    text-decoration: none;
    margin-left: 10%;
    color: black;
    font-size: 15px;
    font-weight: 600;
}

img{
    width: 50px;
}
.navegacio{
    width: 60%;
    height: 10vh;
    padding-top: 20px;
    display: flex;
}


@media screen and (max-width: 1228px) {
    .navegacio{
        display: flex;
        flex-wrap: wrap;  
    }
    .rutas{
        width: 33%;
    }
    .sectionNavegacion{
        height: 100px;
    }



}
@media screen and (max-width: 400px) {
    .navegacio{
        display: flex;
        flex-wrap: wrap;  
        height: 400px;
    }
    .rutas{
        width: 100%;
        padding: 0;
        margin: 0;
        margin-left: 0;
        margin-bottom: 0;
    }
    .sectionNavegacion{
        height: 400px;
    }
    .divLogo{
        display: flex;
        flex-wrap: wrap;
    }

}
</style>