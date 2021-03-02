<template>
  <div id="app">
    <the-header></the-header>
    <b-row>
      <b-col col="12">
        <router-view></router-view>
      </b-col>
    </b-row>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import TheHeader from '@/components/TheHeader.vue';

export default Vue.extend({
  components: {
    TheHeader,
  },
});
</script>

<style lang="scss">
@import '@/styles/main.scss';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  @include padding(all (30px 60px));
}
</style>
