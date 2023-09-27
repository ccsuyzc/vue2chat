<template>
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: "App",
  mounted(){
    this.$store.dispatch('getNewData')
  }
};
</script>

<style>
.app {
  width: 100%;
  height: 100%;
}
* {
  margin: 0;
  padding: 0;
}

</style>