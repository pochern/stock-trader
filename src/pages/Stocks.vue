<template>
  <b-row>
    <app-stock
      v-for="stock in stocks"
      :key="stock.id"
      :stock="stock"
    />
  </b-row>
</template>

<script lang="ts">
import Vue from 'vue';
import Stock from '@/components/stocks/Stock.vue';

export default Vue.extend({
  components: {
    appStock: Stock,
  },
  computed: {
    stocks() {
      return this.$store.getters.stocks;
    },
  },
});
</script>
