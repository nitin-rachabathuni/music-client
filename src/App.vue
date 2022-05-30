<template>
  <div id="app" data-app="true">
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"
    />
    <!-- <v-main> -->
    <router-view></router-view>
    <!-- </v-main> -->
  </div>
</template>

<script>
export default {
  name: "app",

  components: {},

  data: () => ({
    //
  }),
};
</script>
