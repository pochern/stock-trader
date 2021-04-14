<template>
  <div id="app">
    <the-header />
    <section class="content">
      <transition
        name="slide"
        mode="out-in"
      >
        <router-view />
      </transition>
    </section>
    <footer>
      <h2>The Footer</h2>
      <button>Create reminders</button>
      <button>Click for bitcoin</button>
    </footer>
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

.slide-enter-active {
  // forwards = keeps end position
  animation: slide-in 200ms ease-out forwards;
}

.slide-leave-active {
  // forwards = keeps end position
  animation: slide-out 200ms ease-out forwards;

}

@keyframes slide-in {
  from {
    transform: translateY(-30px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes slide-out {
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(-30px);
    opacity: 0;
  }
}

</style>
