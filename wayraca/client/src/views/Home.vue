<template >
  <BasicLayouts>

<!--DESDE AQUI VAN MIS MODIFICACIONES - DDELGADO-->
        <div class=containerWayraca>
            <div class="Menu">
                <div>
                    <img src="images/Logo.jpg" class="Logo">
                </div>
                <div class= "Presentation">
                   <p>Wayraca Cali, es una empresa de comercialización de productos artesanales y ancestrales traídos 
                   directamente desde el caribe colombiano hacia el suroccidente de Colombia y con posibilidad de 
                   extenderse a todo el continente americano y posteriormente por todo el mundo.</p>
                  <p> Cuenta directamente con proveedores de las etnias wayuu, aruhaca y artesanos de palma de iraca. 
                    Ofrecemos más de 40 productos artesanales caribeños; como bolsos o mochilas para damas caballeros y 
                    niños de todos los precios tamaños y colores, hamacas, jarrones, accesorios para damas y niñas 
                    (Diademas-Collares-Pulseras-Aretes-Anillos), además sandalias, correas, llaveros, suvenires entre otros.</p>
                </div>
            </div>
            <div id="slideshow">
                <div><img class="mySlides" src="../assets/Banner1.jpg"></div>
                <div><img class="mySlides" src="../assets/Banner2.jpg"></div>
                <div><img class="mySlides" src="../assets/Banner3.jpg"></div>
                <div><img class="mySlides" src="../assets/Banner4.jpg"></div>
                <div><img class="mySlides" src="../assets/Banner5.jpg"></div>
            </div>
        </div>
        <!--HASTA AQUI VAN MIS MODIFICACIONES - DDELGADO-->



    <h1>Nuevos Productos</h1>
    <div class="ui grid">
      <div
        class="sixten wide mobile eight wide tablet four wide computer column"
        v-for="product in products"
        :key="product.id"
      >
        <Product :product="product" />
        
      </div>
    </div>
  </BasicLayouts>




</template>

<script>
import { ref, onMounted } from "vue";
import BasicLayouts from "../layouts/BasicLayouts.vue";
import { getProducts } from "../api/product";
import Product from "../components/Product.vue";

export default {
  name: "Home",
  components: {
    BasicLayouts,
    Product,
  },

  setup() {
    let products = ref(null);

    onMounted(async () => {
      const response = await getProducts(20);
      products.value = response;
    });

    return {
      products,
    };
  },
};
</script>
<!--Desde aqui van mis modificacion -  Ddelgado-->
<style >

.containerWayraca{
  display: grid;
    grid-template-columns: 20% 80%;
    grid-template-rows: 50% 50%;
    background: #154360;
}
#slideshow {  
    width: 100%;     
    position: relative; 
    padding: 10px; 
    box-shadow: 0 0 20px rgba(0,0,0,0.4); 
  }
  
#slideshow > div { 
    position: absolute;
    top: 10px; 
    left: 10px; 
    right: 10px; 
    bottom: 10px; 
  }
.mySlides{
    width: 100%;
  }

.Menu{
    grid-template-columns: 100%;
    grid-template-rows: 20% 30% 50%;
    text-align: center;
    vertical-align: middle;
    
    margin: 10% auto;
}
.Logo{
    
    width: 200px; 
    height: 200px;
    vertical-align: middle;
    padding: 20px 20px;
}

.Presentation{
    padding: 20px 20px 20px 20px;
    font-size: 10;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    color: azure;
}
footer{
  position: relative;
  z-index: -2;
  height: 80px;
  background: darkgray;
  
}
footer .content{
    position: fixed;
    z-index: 1;
    left: 50%;
    bottom: 110px;
    width: 100%;
    max-width: 960px;
    padding: 0 50px;
    box-shadow: 0 0 20px rgba(0,0,0,0.5);
}
</style>
<!--Esta es mi modificacion de estilos -  Ddelgado -->