<template>
  <div class="pusher">
    <div class="ui fluid image container">
      <img
        class="ui inverted header"
        src="../assets/pajaros.jpg"
        alt="Ecommerce"
      />
    </div>
    <div class="ui secondary menu subir">
      <router-link class="item" to="/Shop">Productos</router-link>
    </div>
    <!-- <div class="ui fluid image">
      <img src="../assets/wayuu.jpg" alt="Ecommerce" />
    </div>-->

    <div class="ui vertical stripe segment">
      <div class="ui middle aligned stackable grid container">
        <div class="row">
          <div class="eight wide column">
            <h2 class="ui header">Quienes somos</h2>
            <p>
              Wayraca Cali, es una empresa de comercialización de productos
              artesanales y ancestrales traídos directamente desde el caribe
              colombiano hacia el suroccidente de Colombia y con posibilidad de
              extenderse a todo el continente americano y posteriormente por
              todo el mundo.
            </p>
            <p>
              Cuenta directamente con proveedores de las etnias wayuu, aruhaca y
              artesanos de palma de iraca. Ofrecemos más de 40 productos
              artesanales caribeños; como bolsos o mochilas para damas
              caballeros y niños de todos los precios tamaños y colores,
              hamacas, jarrones, accesorios para damas y niñas
              (Diademas-Collares-Pulseras-Aretes-Anillos), además sandalias,
              correas, llaveros, suvenires entre otros.
            </p>
          </div>
          <div class="six wide right floated column">
            <img
              src="../assets/wayuu.jpg"
              class="ui large bordered rounded image"
            />
          </div>
        </div>
      </div>
    </div>

    <!--tarjetas de presentacion-->
    <br />
    <div class="ui middle aligned stackable grid container">
      <h2 class="ui header">Equipo de Desarrollo</h2>
      <br />
    </div>
    <div class="ui vertical stripe quote segment">
      <div class="ui equal width stackable internally celled grid">
        <div class="center aligned row">
          <!--Tarjeta 1-->
          <div class="ui link cards column card">
            <div class="ui centered medium image">
              <img src="../assets/equipo/DianaDelgado.jpg" />
            </div>
            <div class="content">
              <div class="header">Diana Delgado Paz</div>
              <div class="meta">
                <a>Product Owner</a>
              </div>
              <div class="description">
                <p>
                  Diana is an Professional that's love software development.
                </p>
              </div>
            </div>
            <div class="extra content">
              <span class="right floated"> Joined in 2021 </span>
              <span>
                <i class="user icon"></i>
                > Informatic Engineer
              </span>
            </div>
          </div>
          <!--------------------Tarjeta 2-->
          <div class="ui link cards column card">
            <div class="ui centered medium image">
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

          <!--------------------Tarjeta 3-->
          <div class="ui link cards column card">
            <div class="ui centered medium image">
              <img src="../assets/equipo/JavPerez.jpg" />
            </div>
            <div class="content">
              <div class="header">Javier Pérez</div>
              <div class="meta">
                <a>Development Team</a>
              </div>
              <div class="description">
                Javier Expert in Automatizacion and process
              </div>
            </div>
            <div class="extra content">
              <span class="right floated"> Joined in 2021 </span>
              <span>
                <i class="user icon"></i>
                Profession is Control Systems Engineer
              </span>
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

    <footer class="footer">
      <div class="item">Texto de ubicacion de la tienda</div>
      <div class="social">
        <div class="item">
          <img class="ui avatar image" src="../assets/social/instagram.png" />
        </div>
        <div class="item">
          <img class="ui avatar image" src="../assets/social/facebook.png" />
        </div>
        <a
          class="item"
          href="https://web.whatsapp.com/send/?phone=+57300000000&text=tu+texto+personalizado&app_absent=0"
          target="_blank"
        >
          <img class="ui avatar image" src="../assets/social/whatsapp.png" />
        </a>
      </div>
    </footer>
  </div>
</template>

<script>
import BasicLayouts from "../layouts/BasicLayouts.vue";

export default {
  name: "Home",
  components: {
    BasicLayouts,
  },
};
</script>


<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Raleway:ital@1&display=swap");

.containerWayraca {
  display: grid;
  grid-template-columns: 30% 70%;
  grid-template-rows: 100%;
  padding: 10px;
  font-family: "Raleway", sans-serif;
}
.subtitle {
  font-family: "Raleway", sans-serif;
}

.tag {
  height: 200px;
  vertical-align: middle;
  margin: 10% auto;
}

.Presentation {
  padding: 20px 20px 20px 20px;
  font-size: 10;

  color: rgb(11, 7, 44);
  text-align: justify;
}
.equipo {
  display: flexbox;
  flex-direction: row;
}
.card {
  font-family: "Raleway", sans-serif;
  width: 250px !important;
}

.subir {
  position: absolute;
  top: 10px;
  left: 10px;
}

.item {
  color: #ffffff;
}
.footer {
  display: grid;
  grid-template-columns: 30% 30% 30%;
  grid-template-rows: 100%;
  z-index: -2;
  height: 60px;
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
}
</style>