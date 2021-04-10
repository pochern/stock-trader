<template>
  <div id="app">
    <the-header />
    <section class="content">
      <router-view />
    </section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import TheHeader from '@/components/TheHeader.vue';

export default Vue.extend({
  components: {
    TheHeader,
  },
  created() {
    this.$store.dispatch('initStocks');
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
  @include padding(all (35px 60px));
}

.content {
  @include padding(all (0 30px));
}
</style>
