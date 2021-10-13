<template>
<section>
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
    <!-----------------Tarjetas de presentacion de interes------------------>
    <br />
    <h2 class="subtitle">Equipo de Desarrollo</h2>
    <div class="equipo">
      <div class="ui link cards">
        <!---------------Tarjeta 1-->
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
        <!--------------------Tarjeta 2-->
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

        <!--------------------Tarjeta 3-->
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
</section>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Raleway:ital@1&display=swap");

.containerWayraca  {
  display: grid;
  grid-template-columns: 30% 70%;
  grid-template-rows: 100%;
  padding: 10px;
  font-family: "Raleway", sans-serif;
}
.subtitle{
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
.equipo{
  display: flexbox;
  flex-direction: row;
}
.card {
  font-family: "Raleway", sans-serif;
  width: 250px !important;
}
</style>