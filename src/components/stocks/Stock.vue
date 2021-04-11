<template>
  <b-col
    sm="6"
    md="4"
  >
    <b-card
      header="Card Header"
      header-text-variant="white"
      header-tag="header"
      header-bg-variant="success"
    >
      <template #header>
        <h3>
          {{ stock.name }}
          <small>(Price: {{ stock.price }})</small>
        </h3>
      </template>
      <b-card-text>
        <input
          v-model.number="quantity"
          class="form-control"
          type="number"
          placeholder="Quantity"
          :class="{ danger: insufficientFunds }"
        >
        <b-button
          variant="success"
          :disabled="insufficientFunds || quantity <= 0 || !Number.isInteger(quantity)"
          @click="buyStock"
        >
          {{ insufficientFunds ? 'Insufficient Funds' : 'Buy' }}
        </b-button>
      </b-card-text>
    </b-card>
  </b-col>
</template>

<script lang="ts">
import Vue from 'vue';
import { Stock as IStock } from '@/interfaces/stocks';

export default Vue.extend({
  props: {
    stock: {
      type: Object as () => IStock,
      required: true,
    },
  },
  data() {
    return {
      quantity: 0,
    };
  },
  computed: {
    funds(): number {
      return this.$store.getters.funds;
    },
    insufficientFunds(): boolean {
      return (this.quantity * this.stock.price) > this.funds;
    },
  },
  methods: {
    buyStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity,
      };
      console.log(order);
      this.$store.dispatch('buyStock', order);
    },
  },
});
</script>

<style lang="scss" scoped>
@import '@/styles/main.scss';

h3 {
  @include margin(bottom 0);
}

.card {
  @include margin(bottom 30px);
}

.card-text {
  display: flex;
  justify-content: space-between;
}

.form-control {
  @include w-h(200px, undefined);
}

.danger {
  border: 1px solid red;
  &:focus {
    border: 1px solid red;
  }
}
</style>
