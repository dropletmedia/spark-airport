<template>
  <section>
    <v-container app fluid>
      <login />
      <v-footer absolute app color="rgba(0,50,100,0.25)">
        <v-btn
          text
          :x-large="$vuetify.breakpoint.smAndUp"
          :to="{name: 'help'}"
          class="text-none white--text"
        >
          <span style="font-size: 16px;">WiFi Help</span>
        </v-btn>
        <v-spacer></v-spacer>
        <a href="https://wifispark.com" class="mt-2">
          <img
            v-if="$vuetify.breakpoint.xsOnly"
            class="my-2"
            src="../../src/assets/spark_logo_2.png"
            width="27px"
            alt="wifi spark website"
          />
          <img
            v-else
            class="my-4"
            src="../../src/assets/spark_logo_4.png"
            width="158px"
            alt="wifi spark website"
          />
        </a>
      </v-footer>
    </v-container>
  </section>
</template>
<script>
import login from "./login.vue";

export default {
  components: {
    login
  }
};
</script>