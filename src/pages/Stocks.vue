<template>
  <b-row>
    <app-stock
      v-for="stock in stocks"
      :key="stock.id"
      :stock="stock"
    ></app-stock>
  </b-row>
</template>

<script lang="ts">
import Vue from 'vue';
import Stock from '@/components/stocks/Stock.vue';

export default Vue.extend({
  components: {
    'app-stock': Stock,
  },
  computed: {
    stocks() {
      return this.$store.getters.stocks;
    },
  },
});
</script>
