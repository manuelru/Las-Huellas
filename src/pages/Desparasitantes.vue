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
        <div class="div1">
          <div class="div2">
          <h3 class="card-title mb-3">{{ item.nombre }}</h3>


          </div>
         <div class="div3">
            <button class="btnAgregar">Agregar a <br> la lista</button>

          </div>

 
        </div>
        <p class="card-text">
          <strong>Categoria: </strong>{{ item.categoria }}
        </p>
        <p class="card-text">
          <strong>Tipo: </strong> {{ item.tipo }}
        </p>
        <p class="card-text">
          <strong>Tamaño: </strong> {{ item.tamaño }}
        </p>
        <p class="card-text">
          {{ item.descripcion }}
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
.div1{
  display: flex;
}
.div2{
  width: 60%;
}
.div3{
  width: 40%;
  display: flex;
}
.btnAgregar{
  background-color: green;
  border-radius: 10px;
  font-size: 15px;
  color: white;
  font-weight: 600;
  margin-left: 10%;
  margin: auto;
}
.btnAgregar:hover{
  box-shadow: 0 0 15px rgb(101, 154, 215);
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