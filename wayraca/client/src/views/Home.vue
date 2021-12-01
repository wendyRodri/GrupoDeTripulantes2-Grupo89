<template>
  <header class="headWayraca">
    <div class="logo">
      <router-link class="item" to="/">
        <img class="ui image" src="../assets/logo.png" alt="Ecommerce" />
      </router-link>
    </div>
    <div class="menuWayraca ">
      <button class="ui left huge button buttonW">
        <router-link class="item" to="/login">Login</router-link>
      </button>
      <button class="ui left huge button buttonW">
        <router-link class="item" to="/Shop">Productos</router-link>
      </button>
    </div>
    <div class="slide">
      <ul class="slider">
        <li id="slide1">
          <img src="../assets/Banner1.jpg" />
        </li>
        <li id="slide2">
          <img src="../assets/Banner2.jpg" />
        </li>
        <li id="slide3">
          <img src="../assets/Banner3.jpg" />
        </li>
        <li id="slide4">
          <img src="../assets/Banner4.jpg" />
        </li>
      </ul>
      <ul class="menu">
        <li>
          <a href="#slide1">1</a>
        </li>
        <li>
          <a href="#slide2">2</a>
        </li>
        <li>
          <a href="#slide3">3</a>
        </li>
        <li>
          <a href="#slide4">4</a>
        </li>
      </ul>
    </div>
  </header>
  <div class="pusher">
    <div class="containerWayraca">
      <img class="imgWayuu" src="../assets/wayuu.jpg" />

      <div class="Presentation">
        <h1 class="ui header">Quienes somos</h1>
        <p>
          Wayraca Cali, es una empresa de comercialización de productos
          artesanales y ancestrales traídos directamente desde el caribe
          colombiano hacia el suroccidente de Colombia y con posibilidad de
          extenderse a todo el continente americano y posteriormente por todo el
          mundo.
        </p>
        <p>
          Cuenta directamente con proveedores de las etnias wayuu, aruhaca y
          artesanos de palma de iraca. Ofrecemos más de 40 productos artesanales
          caribeños; como bolsos o mochilas para damas caballeros y niños de
          todos los precios tamaños y colores, hamacas, jarrones, accesorios
          para damas y niñas (Diademas-Collares-Pulseras-Aretes-Anillos), además
          sandalias, correas, llaveros, suvenires entre otros.
        </p>
      </div>
    </div>
    <!--tarjetas de presentacion-->
    <br />
    <div class="Presentation">
      <div class="ui middle aligned stackable grid celled container">
        <h2 class="ui header">Equipo de Desarrollo</h2>
      </div>
      <div class="ui horizontal stripe quote segment">
        <div class="ui equal width stackable internally celled grid">
          <div class="center aligned row">
            <div class="ui link cards">
              <div class="card">
                <div class="imgArticle">
                  <img src="../assets/equipo/DianaDelgado.jpg" alt="Diana" />
                </div>
                <div class="content">
                  <div class="header">Diana Delgado Paz</div>
                  <div class="meta">
                    <a>Friends</a>
                  </div>
                  <div class="description">
                    Diana is an Informatic Engineer from cali, colombia. She
                    loves the software development and to learn new languages al
                    programming libraries.
                  </div>
                </div>
                <div class="extra content">
                  <span class="right floated">
                    Joined in 2013
                  </span>
                  <span>
                    <i class="user icon"></i>
                    Friends
                  </span>
                </div>
              </div>
              <div class="card">
                <div class="imgArticle">
                  <img src="../assets/equipo/MauricioRamirez.jpg" alt="Mauro" />
                </div>
                <div class="content">
                  <div class="header">Mauricio Ramirez</div>
                  <div class="meta">
                    <span class="date">Coworker</span>
                  </div>
                  <div class="description">
                    Mauricio Technologist in business administrator, Trade
                    Marketing market developer, data analyst and KPIs, Retail
                    commercial strategy and BTL.
                  </div>
                </div>
                <div class="extra content">
                  <span class="right floated">
                    Joined in 2011
                  </span>
                  <span>
                    <i class="user icon"></i>
                    35 Friends
                  </span>
                </div>
              </div>
              <div class="card">
                <div class="imgArticle">
                  <img src="../assets/equipo/JavPerez.jpg" alt="Jeisson" />
                </div>
                <div class="content">
                  <div class="header">Jeisson Javier Perez</div>
                  <div class="meta">
                    <a>Coworker</a>
                  </div>
                  <div class="description">
                    Elyse is a copywriter working in New York.
                  </div>
                </div>
                <div class="extra content">
                  <span class="right floated">
                    Joined in 2014
                  </span>
                  <span>
                    <i class="user icon"></i>
                    151 Friends
                  </span>
                </div>
              </div>
            </div>
          </div>
          <!--------------------Tarjeta 4-->
          <div class="ui link cards column card">
            <div class="ui centered medium image">
              <img src="../assets/equipo/matthew.png" />
            </div>
            <div class="content">
              <div class="header">Edilberto</div>
              <div class="meta">
                <a>Development Team</a>
              </div>
              <div class="description">EDilberto..........</div>
            </div>
            <div class="extra content">
              <span class="right floated"> Joined in 2021 </span>
              <span>
                <i class="user icon"></i>
                Desarrollo web...........
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <footer class="footer">
    <div class="item">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d995.6275202537167!2d-76.49427277077758!3d3.468436638490538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e30a7cf27b297d7%3A0xef67f3d4b53d134e!2sCl.%2059d%20%232564%2C%20Cali%2C%20Valle%20del%20Cauca!5e0!3m2!1ses!2sco!4v1634166380620!5m2!1ses!2sco"
        width="400"
        height="300"
        style="border:0;"
        allowfullscreen=""
        loading="lazy"
      ></iframe>
    </div>
    <div class="social">
      <a
        class="item"
        href="https://www.instagram.com/wayraca_cali/?hl=es"
        target="_blank"
      >
        <img class="ui avatar image" src="../assets/social/instagram.png" />
      </a>

      <a
        class="item"
        href="https://www.facebook.com/wayracacali/"
        target="_blank"
      >
        <img class="ui avatar image" src="../assets/social/facebook.png" />
      </a>

      <a
        class="item"
        href="https://web.whatsapp.com/send/?phone=+573113367194&text=Hola+Quiero+Cotizar+un+Producto+de+Wayraca+!&app_absent=0"
        target="_blank"
      >
        <img class="ui avatar image" src="../assets/social/whatsapp.png" />
      </a>
    </div>
  </footer>
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

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Raleway:ital@1&display=swap");

.pusher {
  display: grid;
  grid-template-rows: 25%;
  align-items: center;
}
.headWayraca {
  display: block;
}
.buttonW {
  color: 1px solid #000;
  font-family: "Raleway", sans-serif;
  text-align: center;
  font-size: 2.6rem;
}
.logo {
  margin: auto;
  width: 272px;
  display: block;
  position: absolute;
  z-index: 4;
  margin: 25px;
}
.menuWayraca {
  font-family: "Raleway", sans-serif;
  position: absolute;
  text-align: center;
  margin: 20px;
  z-index: 5;

  right: 20px;
}
/*********************************************************************************************** */
.slide {
  margin: auto;
  background-color: white;
  width: 100%;
}

ul,
li {
  padding: 0;
  margin: 0;
  list-style: none;
}

ul.slider {
  position: relative;
  width: 100%;
  /*position: relative;
  width: 800px;*/
  height: 300px;
}

ul.slider li {
  position: absolute;
  left: 0px;
  top: 0px;
  opacity: 0;
  width: inherit;
  height: inherit;
  transition: opacity 0.5s;
  background: #fff;
}

ul.slider li img {
  width: 100%;
  height: 300px;
  object-fit: cover;
}

ul.slider li:first-child {
  opacity: 1; /*Mostramos el primer <li>*/
}

ul.slider li:target {
  opacity: 1; /*Mostramos el <li> del enlace que pulsemos*/
}

.menu {
  text-align: center;
  margin: 20px;
}

.menu li {
  display: inline-block;
  text-align: center;
}

.menu li a {
  display: inline-block;
  color: white;
  text-decoration: none;
  background-color: grey;
  padding: 10px;
  width: 40px;
  height: 40px;
  font-size: 20px;
  border-radius: 100%;
}

/**********************************************************/

.containerWayraca {
  display: grid;
  grid-template-columns: 40% 70%;
  grid-template-rows: 100%;
  margin: auto;
  font-family: "Raleway", sans-serif;
  text-align: justify;
  font-size: 2.6rem;
}
.subtitle {
  font-family: "Raleway", sans-serif;
}

.tag {
  height: 200px;
  vertical-align: middle;
  margin: 10% auto;
}
.imgWayuu {
  border-radius: 500rem;
  padding: 8px;
  min-width: 250px;
  margin: auto;

  border-radius: 80%;
  display: flex;
}
.Presentation {
  padding: 20px 90px 20px 0px;
  font-size: 2rem;
  min-width: 1000px;
  color: rgb(11, 7, 44);
  text-align: justify;
  margin: auto;
  max-width: min-content;
}

.Presentation h1 {
  font-family: "Raleway", sans-serif;
  font-size: 4rem !important;
}

.imgArticle img {
  padding: 8px;
  max-width: 250px;
  margin: auto;
  border-radius: 10%;
  display: flex;
}
.equipo {
  position: relative;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: inherit;
  align-items: center;
  width: 100%;
  margin-bottom: 12px;
  padding-bottom: 1em;
  font-family: "Raleway", sans-serif;
}
.equipo h1 {
  font-family: "Raleway", sans-serif;
  font-size: 4rem;
}
.equipo h2 {
  font-family: "Raleway", sans-serif;
  font-size: 2rem;
}
.card {
  font-family: "Raleway", sans-serif;
  width: 350px !important;
}

.subir {
  position: absolute;
  top: 10px;
  left: 10px;
}

.item avatar {
  color: #ffffff;
  width: 2em;
  height: 2em;
}
.footer {
  display: grid;
  grid-template-columns: 45% 10%;
  grid-template-rows: 100%;
  z-index: -2;

  background-image: url("../assets/footer2.png");
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
  align-content: center;
  text-align: center;
}
.footer .social {
  display: grid;
  grid-template-columns: 33% 33% 33%;
  grid-template-rows: 100%;
  align-items: center;
}
.item img {
  font-family: "Raleway", sans-serif;
  min-width: 3em !important;
  min-height: 3em !important;
  border-radius: 0 !important;
}
.avatar {
}
</style>
