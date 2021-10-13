<template>
  <div class="pusher">
    <div class="ui secondary menu">
      <div class="ui container">
        <!-----------Menu izquierda con logo-------------->
        <div class="left menu">
          <router-link class="item" to="/">
            <img
              class="ui small image"
              src="../assets/logo.png"
              alt="Ecommerce"
            />
          </router-link>
          <template v-for="category in categories" :key="category.id">
            <router-link class="item" :to="category.slug">
              {{ category.title }}
            </router-link>
          </template>
        </div>

        <!------------------Menu derecha---------------->
        <div class="right menu">
          <a
            class="item"
            href="https://web.whatsapp.com/send/?phone=+57300000000&text=tu+texto+personalizado&app_absent=0"
            target="_blank"
          >
            Contactenos</a
          >
          <router-link class="item" to="/login" v-if="!token">
            Iniciar Sesión
          </router-link>

          <template v-if="token">
            <router-link class="item" to="/orders">Pedidos</router-link>
            <span class="ui item cart">
              <i class="shopping cart icon" @click="openCart"></i>
            </span>
            <span class="ui item logout" @click="logout">
              <i class="sign-out icon"></i>
            </span>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import { useStore } from "vuex";
import { getTokenApi, deleteTokenApi } from "../api/token";
import { getCategoriesApi } from "../api/category";

export default {
  name: "Menu",

  setup() {
    let categories = ref(null);
    const token = getTokenApi();
    const store = useStore();

    onMounted(async () => {
      const response = await getCategoriesApi();
      categories.value = response;
    });

    const logout = () => {
      deleteTokenApi();
      location.replace("/");
    };

    const openCart = () => {
      store.commit("setShowCart", true);
    };

    return {
      token,
      logout,
      categories,
      openCart,
    };
  },
};
</script>

<style lang="scss" scoped>
.ui.menu.secondary {
  background-image: url("../assets/pajaros.jpg");
  //background-color: #000000;
  .item {
    color: #ffffff;
    &:hover {
      color: #0d1113;
    }
  }
  .menu.left {
    width: 50%;
    .ui.image {
      width: 120px;
    }
  }
  .menu.right {
    width: 50%;
    justify-content: flex-end;
    .logout,
    .cart {
      &:hover {
        cursor: pointer;
      }
    }
  }
}

.footer {
  display: grid;
  grid-template-columns: 30% 30% 30%;
  grid-template-rows: 100%;
  z-index: -2;
  height: 180px;
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
