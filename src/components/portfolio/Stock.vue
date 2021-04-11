<template>
  <b-col
    sm="6"
    md="4"
  >
    <b-card
      header="Card Header"
      header-text-variant="white"
      header-tag="header"
      header-bg-variant="info"
    >
      <template #header>
        <h3>
          {{ stock.name }}
          <small>(Price: {{ stock.price }} | Quantity: {{ stock.quantity }})</small>
        </h3>
      </template>
      <b-card-text>
        <input
          v-model.number="quantity"
          class="form-control"
          type="number"
          placeholder="Quantity"
          :class="{ danger: insufficientQuantity }"
        >
        <b-button
          variant="success"
          :disabled="insufficientQuantity || quantity <= 0 || !Number.isInteger(quantity)"
          @click="sellStock"
        >
          {{ insufficientQuantity ? 'Not enough' : 'Sell' }}
        </b-button>
      </b-card-text>
    </b-card>
  </b-col>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapActions } from 'vuex';

export default Vue.extend({
  props: {
    stock: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      quantity: 0,
    };
  },
  computed: {
    insufficientQuantity(): boolean {
      return this.quantity > this.stock.quantity;
    },
  },
  methods: {
    ...mapActions({
      placeSellOrder: 'sellStock',
    }),
    sellStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity,
      };
      // Action
      this.placeSellOrder(order);
      this.quantity = 0;
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
    @extend .danger;
  }
}
</style>
