<template>
  <div class="cart-dimmer" :class="{ open: showCart }" @click="closeCart">
    <div class="cart" :class="{ open: showCart }">
    
       <div>
        <CartHeader :closeCart="closeCart"/>
        <CartBody :products="products"/>
       </div>

    <CartFooter :products="products" :closeCart="closeCart" v-if="products"/>
  </div>
  </div>
  

  
</template>

<script>
import { ref, computed, watchEffect } from 'vue';
import { useStore } from 'vuex';
import CartHeader from './CartHeader.vue';
import CartBody from './CartBody.vue';
import CartoFooter from './CartFooter.vue';
import { getProductsCartApi } from '../../api/cart';

export default {
  name: 'Cart',
  components: {
    CartHeader,
    CartBody,
    CartoFooter,
  },
  setup() {
    const store = useStore();
    const showCart = computed(() => store.state.showCart);
    let products = ref(null);

    const getProductsCart = async () => {
      const response = await getProductsCartApi();
      products.value = response;
    };

    watchEffect(() => {
      showCart.value;
      getProductsCart();
    });

    const closeCart = () => {
      store.commit('setShowCart', false);
    };

    return {
      showCart,
      closeCart,
      products,
    };
  },
};
</script>

<style lang="scss" scoped>

.cart-dimmer {
  opacity: 0;
  transition: opacity 0.5 ease;
  &.open {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color:rgba(144, 130, 130, 0.829);
    opacity: 0.9;
  }
}

.cart {
  position: fixed;
  right: 0;
  top: 0;
  width: 400px;
  height: 100vh;
  //background-color: #f5f3f1ad;
  background-color: #eff9f8;
background-image: url("data:image/svg+xml,%3Csvg width='32' height='64' viewBox='0 0 32 64' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 28h20V16h-4v8H4V4h28v28h-4V8H8v12h4v-8h12v20H0v-4zm12 8h20v4H16v24H0v-4h12V36zm16 12h-4v12h8v4H20V44h12v12h-4v-8zM0 36h8v20H0v-4h4V40H0v-4z' fill='%23e8ea52' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E");
  box-shadow: 0px 0px 26px 5px rgba(7, 7, 7, 0.75);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: transform 0.9s ease;
  transform: translateX(150%);
  &.open {
    transform: translateX(0);
  }
}


</style>
