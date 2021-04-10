<template>
  <b-navbar
    toggleable="lg"
    type="light"
    variant="light"
  >
    <b-navbar-brand to="/">
      Stock Trader
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse" />

    <b-collapse
      id="nav-collapse"
      is-nav
    >
      <b-navbar-nav>
        <b-nav-item to="/portfolio">
          Portfolio
        </b-nav-item>
        <b-nav-item to="/stocks">
          Stocks
        </b-nav-item>
      </b-navbar-nav>
    </b-collapse>
    <!-- Right aligned nav items -->
    <b-navbar-nav class="ml-auto">
      <b-nav-form>
        <b-nav-item>End Day</b-nav-item>
        <b-nav-item-dropdown
          text="Save & Load"
          right
        >
          <b-dropdown-item href="#">
            Save Data
          </b-dropdown-item>
          <b-dropdown-item href="#">
            Load Data
          </b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item>
          <strong>Funds: {{ funds }}</strong>
        </b-nav-item>
      </b-nav-form>
    </b-navbar-nav>
  </b-navbar>
</template>

<style lang="scss" scoped>
@import '@/styles/main.scss';

nav {
  @include margin(bottom 30px);
}
</style>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  computed: {
    funds() {
      return this.$store.getters.funds;
    },
  },
});
</script>
