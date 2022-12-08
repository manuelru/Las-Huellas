<template>
    <div class="divMainHome">
        <div class="espacioimg">

        </div>
        <div class="espaciotextos">
            <div class="divHome">
                <button class="btnConoceNuestrosServicios"><router-link id="rutas"   to="/servicios">Conoce Nuestros Servicios</router-link></button>
                
            </div>
            <div class="divHome">

            </div>
            <div class="divHome">
                

            </div>

        </div>

    </div>
</template>


<style>
.divMainHome{
    background-image: url(/bienvenida.jpg);
    background-repeat: no-repeat;
    height: 500px;
    background-size: cover;
}
.espacioimg{
    height: 200px;
}
.espaciotextos{
    height: 200px;
}
.espaciotextos{
    display: flex;
}
.divHome{
    width: 25%;
    height: 150px;
    margin: auto;
}
.btnConoceNuestrosServicios{
    margin-left: 10%;
    margin-top: 70px;
    width: 80%;
    height: 40px;
    border-radius: 20px;
    font-weight: 800;
    background-color:#79ce66;
    border: 0;
    text-decoration: none;
}
.btnConoceNuestrosServicios:hover{
    box-shadow: 0 0 15px rgb(26, 129, 87);
}
#rutas{
    text-decoration: none;
}
#rutas:hover{
    color: aliceblue;
    
}

</style>