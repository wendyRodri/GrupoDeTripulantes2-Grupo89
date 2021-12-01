<template>
  <div class="pusher">
    <div class="ui vertical stripe segment">
      <div class="ui middle aligned stackable grid container">
        <div class="row">
          <div class="six wide right floated column">
            <img src="../assets/wayuu.jpg" alt="Ecommerce" />
          </div>
          <div class="eight wide column">
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
        </div>
      </div>
    </div>
    <!--tarjetas de presentacion-->
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
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import { useStore } from "vuex";
export default {
  name: "Prueba",
};
</script>

<style></style>
