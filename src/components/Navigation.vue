<template>
    <section class="sectionNavegacion">
        <div class="divLogo">
            <img class="logo" src="../../public/logoproyectofina.jpeg" alt="">
            <p class="nameFarmacia">Las Huellas</p>

        </div>
        <nav class="navegacio">
        <div class="rutas"> <router-link to="/"> Home </router-link>  </div>
        <div class="rutas"> <router-link  to="/products">Farmacia Veterinaria</router-link> </div>
        <div class="rutas"> <router-link  to="/accesorios">Accesorios</router-link> </div>
        <div class="rutas"> <router-link   to="/contactanos">Contactanos</router-link> </div>
        <div class="rutas"> <router-link   to="/servicios">Servicios</router-link> </div>
        </nav>

    </section>

</template>
<style>
.rutas a{
    text-decoration: none;
    border: 0;
    padding: 0;
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
    width: 20%;
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