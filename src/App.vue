<template>
  <v-app id="bg">
    <v-navigation-drawer disable-resize-watcher right app v-model="drawer">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">Free WiFi</v-list-item-title>
          <v-list-item-subtitle>Spark International Airport</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-list-item to="/home" @click="drawer = false">
        <v-list-item-content>
          <v-list-item-title>Login form</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-list-item to="/terms-and-conditions" @click="drawer = false">
        <v-list-item-content>
          <v-list-item-title>T & Cs</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-list-item to="/help-faqs" @click="drawer = false">
        <v-list-item-content>
          <v-list-item-title>Help and FAQs</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-list-item to="/privacy" @click="drawer = false">
        <v-list-item-content>
          <v-list-item-title>Your privacy</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>
    </v-navigation-drawer>
    <v-container>
      <v-fade-transition>
        <router-view></router-view>
      </v-fade-transition>
      <!-- Mobile only  -->
      <div class="d-sm-none">
        <v-btn dark top absolute right icon @click="drawer = !drawer" class="float-right">
          <v-icon>fa-bars</v-icon>
        </v-btn>
      </div>
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: "App",
  components: {},

  data: () => ({
    drawer: false,
    items: [
      {
        href: "home",
        router: true,
        title: "Home",
        icon: "home"
      }
    ]
  })
};
</script>
<style>
#bg {
  height: 100%;
  background-image: url(./assets/bg_large.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
}

@media screen and (max-width: 600px) {
  #bg {
    background-image: url(./assets/bg_small.jpg);
  }
}
</style>
