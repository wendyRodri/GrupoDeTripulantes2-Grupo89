<template>
  <BasicLayouts>
    <div class="contact">
      <h2>Contactenos</h2>
      <form class="ui form" @submit.prevent="contact">
        <div class="field">
          <input type="text" placeholder="Nombre" />
        </div>
        <div class="field">
          <input type="text" placeholder="Correo eletronico" />
        </div>
        <div class="field">
          <input type="tel" placeholder="Deje su numero +57" />
        </div>
        <div class="field">
          <input type="text" placeholder="Deje su mensaje" />
        </div>
        <button type="submit" class="ui button fluid primary">Enviar</button>
      </form>
    </div>
  </BasicLayouts>
</template>

<script>
import BasicLayouts from "../layouts/BasicLayouts.vue";
export default {
  name: "Contact",
  components: {
    BasicLayouts,
  },
};
</script>

<style lang="scss" scoed>
.contact {
  text-align: center;
  h2 {
    margin: 50px 0 30px 0;
  }

  .ui.form {
    max-width: 300px !important;
    margin: 0 auto;
    margin-bottom: 10px;
  }
}
</style>