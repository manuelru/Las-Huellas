<template>

    <Navi/>
    <router-view></router-view>

        <div class="divScroll">
            <div class="product">
                <tr  v-for="datos in dato.datosDesparasitante"  >
              <td scope="row">{{datos}}</td>
                </tr>
                
            </div>
            <div class="product">
                <tr  v-for="datos in dato.datosDesparasitante"  >
              <td scope="row">{{datos}}</td>
                </tr>
                
            </div>
            <div class="product">
                <tr  v-for="datos in dato.datosDesparasitante"  >
              <td scope="row">{{datos}}</td>
                </tr>
                
            </div>
            <div class="product">
                <tr  v-for="datos in dato.datosDesparasitante"  >
              <td scope="row">{{datos}}</td>
                </tr>
                
            </div>
            <div class="product">
                <tr  v-for="datos in dato.datosDesparasitante"  >
              <td scope="row">{{datos}}</td>
                </tr>
                
            </div>
            <div class="product">
                <tr  v-for="datos in dato.datosDesparasitante"  >
              <td scope="row">{{datos}}</td>
                </tr>
                
            </div>
            <div class="product">
                <tr  v-for="datos in dato.datosDesparasitante"  >
              <td scope="row">{{datos}}</td>
                </tr>
                
            </div>
           
            <div class="product">
                <tr  v-for="datos in dato.datosDesparasitante"  >
              <td scope="row">{{datos}}</td>
                </tr>
                
            </div>
           
            <div class="product">
                <tr  v-for="datos in dato.datosDesparasitante"  >
              <td scope="row">{{datos}}</td>
                </tr>
                
            </div>
           
            <div class="product">
                <tr  v-for="datos in dato.datosDesparasitante"  >
              <td scope="row">{{datos}}</td>
                </tr>
                
            </div>
           
            <div class="product">
                <tr  v-for="datos in dato.datosDesparasitante"  >
              <td scope="row">{{datos}}</td>
                </tr>
                
            </div>
           
            <div class="product">
                <tr  v-for="datos in dato.datosDesparasitante"  >
              <td scope="row">{{datos}}</td>
                </tr>
                
            </div>
           
            <div class="product">
                <tr  v-for="datos in dato.datosDesparasitante"  >
              <td scope="row">{{datos}}</td>
                </tr>
                
            </div>
           

        </div>
    
        
        
        

    </template>
    <script setup>
    import Navi from "../components/NavegacionProductos.vue"
    import dato from '../datos/Datos.js' 
    </script>
    
    
<style>


.divScroll{
    overflow-y: scroll;
    border: 1px solid blueviolet;
    display: flex;
    flex-wrap: wrap;
    height: 400px;
}
.product{
    border: 1px solid blueviolet;
    width: 40%;
    margin: auto;
}

@media screen and (max-width: 400px) {

.product{
  width: 100%;
}

}

</style>