<template>
    <h2 class="titulo">NUESTROS <br> SERVICIOS <br> VETERINARIOS</h2>
    <section class="main">

        <div id="primerDiv" class="divSevicio">

            <p class="descripcion"> Brindamos consultas hasta <br>  la puerta de tu casa </p>

        </div>
        <div id="cirugia" class="divSevicio">
            <p class="descripcion">CIRUGIA GENERAL ESPECIALIZADA</p>

        </div>

        <div id="ultrasonido" class="divSevicio">
            <p class="descripcion" id="general">ULTRASONIDOS</p>

        </div>

        <div id="analisis" class="divSevicio">
            <p class="descripcion" id="general">LABORATORIO CLINICO</p>

        </div>

    </section>
    
</template>

<style scoped>
.main{
    display: flex;
    flex-wrap: wrap;
    padding-left: 6%;
}
.divSevicio{
    width: 45%;
    height: 250px;
    color: black;
    font-weight: 800;
    margin-left: 2%;
    margin-top: 20px;
    
}
#primerDiv{
    background-image: url(https://t1.ea.ltmcdn.com/es/articles/1/8/0/los_mejores_veterinarios_a_domicilio_en_madrid_81_600.jpg);
    background-repeat: no-repeat;

}
#cirugia{
    background-image: url(https://veterinariadelmar.com/wp-content/uploads/2020/02/cirugia3.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    color: white !important;

}
.descripcionCirugia{
    color: white ;
}

#ultrasonido{
    background-image: url(http://www.hospitalveterinariok-lev.com/wp-content/uploads/2017/03/ultrasonido.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    color: black;

}

#analisis{
    background-image: url(https://hospitalveterinarioceylan.com/wp-content/uploads/2019/03/Laboratorio.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    color: black;

}
#general{
    color:aliceblue;
    color: black;
}
.descripcion{
    font-size: 30px;
    text-align: center;
    margin-top: 70px;
}
.titulo{
    text-align: center;
}

</style>