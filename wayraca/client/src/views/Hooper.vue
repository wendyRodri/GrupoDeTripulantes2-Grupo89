 <!--------------------------------HOPER--------------------->
 <template>
  <hooper :progress="true" :autoPlay="true" :playSpeed="2000">
    <slide>
      <img src="../assets/slides/Banner1.jpg" />
    </slide>
    <slide>
      <img src="../assets/slides/Banner2.jpg" />
    </slide>
    <slide>
      <img src="../assets/slides/Banner4.jpg" />
    </slide>
  </hooper>
</template>


<script>
import { Hooper, Slide } from "hooper";
import "hooper/dist/hooper.css";

export default {
  name: "App",
  components: {
    Hooper,
    Slide,
  },
};
</script>