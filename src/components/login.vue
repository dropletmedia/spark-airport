<template>
  <v-content>
    <div v-if="$vuetify.breakpoint.smAndUp">
      <v-img src="../../src/assets/spark_logo_3.png" class="mx-auto my-4" max-width="125px" />
    </div>
    <div v-else>
      <v-img src="../../src/assets/spark_logo_1.png" class="mx-auto my-4" max-width="252px" />
    </div>
    <h1 class="helv text-center">Free WiFi</h1>
    <h2 v-if="$vuetify.breakpoint.smAndUp" class="mont text-center">
      <b>SPARK INTERNATIONAL AIRPORT</b>
    </h2>

    <div v-if="$vuetify.breakpoint.smAndUp">
      <v-col sm="8" offset-sm="2" md="6" offset-md="3">
        <v-card elevation="0" color="rgba(255,255,255,0.85)">
          <v-card-text>
            <loginform></loginform>
          </v-card-text>
        </v-card>
      </v-col>
    </div>

    <div v-else>
      <loginform></loginform>
    </div>
  </v-content>
</template>

<script>
import loginform from "./loginform";
export default {
  components: {
    loginform
  }
};
</script>

<style>
@font-face {
  font-family: "helveticaregular";
  src: url("../../src/assets/fonts/helvetica_33244fbeea10f093ae87de7a994c3697-webfont.woff2")
      format("woff2"),
    url("../../src/assets/fonts/helvetica_33244fbeea10f093ae87de7a994c3697-webfont.woff")
      format("woff");
  font-weight: normal;
  font-style: normal;
}

.helv {
  color: white;
  font-size: 40px;
  font-family: helveticaregular, sans-serif;
}
.mont {
  font-family: Montserrat, sans-serif;
  font-size: 18px;
  color: white;
}
</style>