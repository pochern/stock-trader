<template>
  <b-row>
    <app-stock
      v-for="stock in stocks"
      :key="stock.id"
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
  data() {
    return {
      stocks: [
        { id: 1, name: 'VLKAF', price: 197 },
        { id: 2, name: 'JNJ', price: 160 },
        { id: 3, name: 'TSLA', price: 701 },
        { id: 4, name: 'FB', price: 265 },
      ],
    };
  },
});
</script>
