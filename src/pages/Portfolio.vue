<template>
  <div>
    <app-stock
      v-for="stock in stocks"
      :key="stock.id"
      :stock="stock"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapGetters } from 'vuex';
import Stock from '@/components/portfolio/Stock.vue';

export default Vue.extend({
  components: {
    appStock: Stock,
  },
  computed: {
    ...mapGetters({
      stocks: 'stockPortfolio',
    }),
  },
});
</script>
