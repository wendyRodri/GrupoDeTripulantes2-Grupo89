<template>
  <BasicLayouts>
<<<<<<< HEAD
    <!--DESDE AQUI VAN MIS MODIFICACIONES - DDELGADO-->
    <div class="containerWayraca">
      <article class="LeftContent">
        <div>
          <img src="../assets/wayuu.jpg" class="tag" />
        </div>
        <div class="Presentation">
          <p>
            Wayraca Cali, es una empresa de comercialización de productos
            artesanales y ancestrales traídos directamente desde el caribe
            colombiano hacia el suroccidente de Colombia y con posibilidad de
            extenderse a todo el continente americano y posteriormente por todo
            el mundo.
          </p>
          <p>
            Cuenta directamente con proveedores de las etnias wayuu, aruhaca y
            artesanos de palma de iraca. Ofrecemos más de 40 productos
            artesanales caribeños; como bolsos o mochilas para damas caballeros
            y niños de todos los precios tamaños y colores, hamacas, jarrones,
            accesorios para damas y niñas
            (Diademas-Collares-Pulseras-Aretes-Anillos), además sandalias,
            correas, llaveros, suvenires entre otros.
          </p>
        </div>
      </article>
      <article>
        <h1>Nuevos Productos</h1>
        <div class="ui grid">
          <div
            class="
              sixten
              wide
              mobile
              eight
              wide
              tablet
              four
              wide
              computer
              column
            "
            v-for="product in products"
            :key="product.id"
          >
            <Product :product="product" />
          </div>
        </div>
      </article>
    </div>
    <!-----------------Tarjetas de presentacion del equipo de desarrollo------------------>
    <br />
    <h2 class="subtitle">Equipo de Desarrollo</h2>
    <div class="equipo">
      
      <div class="ui link cards">
        <!---------------Tarjeta de Diana-->
        <div class="card">
          <div class="image">
            <img src="../assets/equipo/DianaDelgado.jpg" />
          </div>
          <div class="content">
            <div class="header">Diana Delgado Paz</div>
            <div class="meta">
              <a>Product Owner</a>
            </div>
            <div class="description">
              Diana is an Professional that's love software development.
            </div>
          </div>
          <div class="extra content">
            <span class="right floated"> Joined in 2021 </span>
            <span>
              <i class="user icon"></i>
              Informatic Engineer
            </span>
          </div>
        </div>
        <!--------------------Tarjeta de mauricio-->
        <div class="card">
          <div class="image">
            <img src="../assets/equipo/MauricioRamirez.jpg" />
          </div>
          <div class="content">
            <div class="header">Mauricio Ramirez</div>
            <div class="meta">
              <a>Development Team</a>
            </div>
            <div class="description">
              Mauricio is ..........................
            </div>
          </div>
          <div class="extra content">
            <span class="right floated"> Joined in 2021 </span>
            <span>
              <i class="user icon"></i>
              Profession
            </span>
          </div>
        </div>

        <!--------------------Tarjeta de Javier-->
        <div class="card">
          <div class="image">
            <img src="../assets/equipo/matthew.png" />
          </div>
          <div class="content">
            <div class="header">Javier Pérez</div>
            <div class="meta">
              <a>Development Team</a>
            </div>
            <div class="description">Javier is ..........................</div>
          </div>
          <div class="extra content">
            <span class="right floated"> Joined in 2021 </span>
            <span>
              <i class="user icon"></i>
              Profession
            </span>
          </div>
        </div>
      </div>
    </div>

    <br />
    <!------------------ Footer de la pagina ------------------------->
    <footer class="footer">
      <div class="item">Texto de ubicacion de la tienda</div>
      <div class="social">
        <div class="item"><img class="ui avatar image" src="../assets/social/instagram.png" /></div>
        <div class="item"><img class="ui avatar image" src="../assets/social/facebook.png" /></div>
        <div class="item"><img class="ui avatar image" src="../assets/social/whatsapp.png" /></div>
      </div>
    </footer>
=======
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

    <!--DESDE AQUI VAN MIS MODIFICACIONES - DDELGADO-->
    <div class="containerWayraca">
      <div class="Menu">
        <div>
          <img src="images/Logo.jpg" class="Logo" />
        </div>
        <div class="Presentation">
          <p>
            Wayraca Cali, es una empresa de comercialización de productos
            artesanales y ancestrales traídos directamente desde el caribe
            colombiano hacia el suroccidente de Colombia y con posibilidad de
            extenderse a todo el continente americano y posteriormente por todo
            el mundo.
          </p>
          <p>
            Cuenta directamente con proveedores de las etnias wayuu, aruhaca y
            artesanos de palma de iraca. Ofrecemos más de 40 productos
            artesanales caribeños; como bolsos o mochilas para damas caballeros
            y niños de todos los precios tamaños y colores, hamacas, jarrones,
            accesorios para damas y niñas
            (Diademas-Collares-Pulseras-Aretes-Anillos), además sandalias,
            correas, llaveros, suvenires entre otros.
          </p>
        </div>
      </div>
      <div id="slideshow">
        <div><img class="mySlides" src="../assets/Banner1.jpg" /></div>
        <div><img class="mySlides" src="../assets/Banner2.jpg" /></div>
        <div><img class="mySlides" src="../assets/Banner3.jpg" /></div>
        <div><img class="mySlides" src="../assets/Banner4.jpg" /></div>
        <div><img class="mySlides" src="../assets/Banner5.jpg" /></div>
      </div>
    </div>

    <footer>
      <div class="content">
        <div class="logo"></div>
        <nav>
          <ul>
            <li>instagran</li>
            <li>facebook</li>
            <li>twitter</li>
          </ul>
        </nav>
      </div>
    </footer>
    <!--HASTA AQUI VAN MIS MODIFICACIONES - DDELGADO-->
>>>>>>> 4635132c019b024e2c325e1730654abbb6e07515
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

<!--Desde aqui van mis modificacion de estilos -  Ddelgado-->
<<<<<<< HEAD
<style>
@import url("https://fonts.googleapis.com/css2?family=Raleway:ital@1&display=swap");

.containerWayraca  {
  display: grid;
  grid-template-columns: 30% 70%;
  padding: 10px;
  font-family: "Raleway", sans-serif;
}
.subtitle{font-family: "Raleway", sans-serif;}
.LeftContent {
=======
<style >
.containerWayraca {
  display: grid;
  grid-template-columns: 20% 80%;
  grid-template-rows: 50% 50%;
  background: #154360;
}
#slideshow {
  width: 100%;
  position: relative;
  padding: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.4);
}

#slideshow > div {
  position: absolute;
  top: 10px;
  left: 10px;
  right: 10px;
  bottom: 10px;
}
.mySlides {
  width: 100%;
}

.Menu {
>>>>>>> 4635132c019b024e2c325e1730654abbb6e07515
  grid-template-columns: 100%;
  grid-template-rows: 20% 30% 50%;
  text-align: center;
  vertical-align: middle;
<<<<<<< HEAD
 
}
.tag {
  height: 200px;
  vertical-align: middle;
=======

  margin: 10% auto;
}
.Logo {
  width: 200px;
  height: 200px;
  vertical-align: middle;
  padding: 20px 20px;
>>>>>>> 4635132c019b024e2c325e1730654abbb6e07515
}

.Presentation {
  padding: 20px 20px 20px 20px;
  font-size: 10;
<<<<<<< HEAD
  color: rgb(11, 7, 44);
  text-align: justify;
}
.equipo{
  display: flexbox;
  flex-direction: row;
}
.card {
  font-family: "Raleway", sans-serif;
  width: 250px !important;
}
.footer {
  display: grid;
  grid-template-columns: 30% 30% 30%;
  grid-template-rows: 100%;
  z-index: -2;
  height: 180px;
  background-image: url("../assets/footer2.png");
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);;
  align-content:center;
  text-align: center;
}
.footer .social {
 display: grid;
 grid-template-columns: 33% 33% 33%;
 grid-template-rows: 100%;
 
 align-items: center;
}
.item img{
=======
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  color: azure;
}
footer {
  position: relative;
  z-index: -2;
  height: 80px;
  background: darkgray;
}
footer .content {
  position: fixed;
  z-index: 1;
  left: 50%;
  bottom: 110px;
  width: 100%;
  max-width: 960px;
  padding: 0 50px;
>>>>>>> 4635132c019b024e2c325e1730654abbb6e07515
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
}
</style>
