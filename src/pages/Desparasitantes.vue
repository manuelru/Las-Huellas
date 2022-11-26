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



    #myDiv{
        height: 300px;
        border: 1px solid black;
    }
    .txtMyLaptop{
        margin-top: 10px;
        margin-bottom: 10px;
        text-align: center;
        font-size: 90px;
        
    }
    .txtVievenida{
        font-size: 50px;
        text-align: center;
        margin-top: 10px;
        margin-bottom: 5px;
    }
    .options{
        margin: auto;
        width: 80px;
        height: 80px;
        border: 1px solid black;
        padding-left: 20px;
        border-radius: 50%;
        padding-top: 20px;
        background-color: rgb(159, 231, 240);
    }
    </style>