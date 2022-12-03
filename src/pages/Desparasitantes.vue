<template>

  <div class="container cont">

<div class="row">

  <div class="col-md-12">
  
    <h1>PRODUCTOS</h1> 
    
    <input type="text" v-model="buscar" class="form-control" placeholder="Buscar"/>              

  </div>

</div>

<div class="row mt-3">

  <div class="col-md-4" v-for="item in items" v-bind:key="item.id"> 

    <div class="card mb-3">
      <img id="imgProductVeterinaria" class="card-img-top" v-bind:src="item.img" v-bind:alt="item.nombre">
      <div class="card-body">
        <h3 class="card-title mb-3">{{ item.nombre }} <button class="btnAgregar">Agregar</button></h3>
        <p class="card-text">
          <router-link   to="/productosVeterinarios">{{ item.descripcion }}  </router-link>
        </p>

      </div>
    </div>

  </div>

</div>

</div>
</template>


<script>
  import Datos from "../datos/Datos.json"

  export default{
 data() {
   return {
     buscar: ''
   }
 },
 computed: {
   items() {
     return Datos.filter(item => {
       return item.nombre.toLowerCase().includes(this.buscar.toLowerCase());
     });
   },

 },
}

</script>
    
    
<style>
.btnAgregar{
  background-color: green;
  border-radius: 10px;
}
.card-body{
        border:1px solid;
        height:200px;
        overflow-y:scroll;
        overflow-x:hidden;
}
#imgProductVeterinaria{
  width: 40% !important;
  margin: auto;
}
.card mb-3{
  border: 1px solid black;
}
.imgProduct{
  width: 80%;
  margin-left: 10%;
}
.tituloDesparasitantes{
  text-align: center;
}


.divScroll{
    overflow-y: scroll;
    border: 1px solid blueviolet;
    display: flex;
    flex-wrap: wrap;
    height: 400px;
}
.product{
    border: 1px solid blueviolet;
    width: 25%;
    height: 350px;
    margin: auto;
}

@media screen and (max-width: 400px) {

.product{
  width: 100%;
}

}

</style>