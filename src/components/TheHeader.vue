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
        <b-nav-item @click="endDay">
          End Day
        </b-nav-item>
        <b-nav-item-dropdown
          text="Save & Load"
          right
        >
          <b-dropdown-item
            href="#"
            @click="saveData"
          >
            Save Data
          </b-dropdown-item>
          <b-dropdown-item href="#">
            Load Data
          </b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item>
          <strong>Funds: {{ funds | currency }}</strong>
        </b-nav-item>
      </b-nav-form>
    </b-navbar-nav>
  </b-navbar>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapActions } from 'vuex';
import axios from 'axios';

export default Vue.extend({
  data() {
    return {
      url: process.env.VUE_APP_URL,
    };
  },
  computed: {
    funds() {
      return this.$store.getters.funds;
    },
  },
  methods: {
    ...mapActions([
      'randomizeStocks',
    ]),
    endDay() {
      this.randomizeStocks();
    },
    saveData() {
      const data = {
        funds: this.funds,
        stockPortfolio: this.$store.getters.stockPortfolio,
        stocks: this.$store.getters.stocks,
      };
      // PUT request will overwrite old data
      axios.put(`${this.url}/data.json`, data);
    },
  },
});
</script>

<style lang="scss" scoped>
@import '@/styles/main.scss';

nav {
  @include margin(bottom 30px);
}
</style>
