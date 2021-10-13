<template lang="pug">
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
</template>
<style>
@import url("https://fonts.googleapis.com/css2?family=Raleway:ital@1&display=swap");
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
   font-family: "Raleway", sans-serif;
}
</style>