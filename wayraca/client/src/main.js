import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "semantic-ui-css/semantic.min.css";


createApp(App).use(store).use(router).mount('#app')

/***********Desde aqui van mis modificaciones del JS - dddelgado*********/
setInterval(function() {
    $("#slideshow > div:first")
      .fadeOut(1000)
      .next()
      .fadeIn(1000)
      .end()
      .appendTo("#slideshow");
  }, 3000);
  $("#slideshow > div:gt(0)").hide();
  
  $(window).on("scroll", function() {
    if (
      $(window).scrollTop() + $(window).height() >
      $(".wrapper").outerHeight()
    ) {
      $(".arrow").hide();
    } else {
      $(".arrow").show();
    }
  });
  $(".arrow").click(function() {
    $("html").animate({ scrollTop: $("html").prop("scrollHeight") }, 1200);
  });
  /**************Hasta aqui van mis modificaciones del JS - dddelgado*********/
