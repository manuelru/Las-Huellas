<template>
    <Navi/>
    <router-vue></router-vue>
  
    <div class="container cont">
  
  <div class="row">
  
    <div class="col-md-12">
    
      <h1>ACCESORIOS</h1> 
      
      <input type="text" v-model="buscar" class="form-control" placeholder="Buscar"/>              
  
    </div>
  
  </div>
  
  <div class="row mt-3">
  
    <div class="col-md-4" v-for="item in items" v-bind:key="item.id"> 
  
      <div class="card mb-3">
        <img class="card-img-top" v-bind:src="item.img" v-bind:alt="item.nombre">
        <div class="card-body">
          <div class="div1">
          <div class="div2">
          <h3 class="card-title mb-3">{{ item.nombre }}</h3>


          </div>
         <div class="div3">
            <button class="btnAgregar">Agregar a <br> la lista</button>

          </div>

 
        </div><h3 class="card-title mb-3">{{ item.nombre }}</h3>

          <p class="card-text">
            <strong>Categoria:</strong> {{ item.categoria }} 
          </p>
          <p class="card-text">
            <strong>Descripcion</strong> {{ item.descripcion }} 
          </p>
  
        </div>
      </div>
  
    </div>
  
  </div>
  
  </div>
  </template>
<style>
.card-img-top{
  width: 60% !important;
  margin: auto;
}

</style>
  
  
  <script>
    import Datos from "../datos/DatosAccasorios.json"
  
    export default{
      name: 'Pokemones',
   props: {
     msg: String
   },
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
  
   }
  }
  
  </script>