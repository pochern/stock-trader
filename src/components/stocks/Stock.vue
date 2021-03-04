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
      title="Title"
    >
      <template #header>
        <h3>
          NAME
          <small>(Price: PRICE)</small>
        </h3>
      </template>
      <b-card-text>Header and footers variants.</b-card-text>
    </b-card>
  </b-col>
</template>

<style lang="scss" scoped>
@import '@/styles/main.scss';

h3 {
  @include margin(bottom 0);
}

.card {
  @include margin(bottom 30px);
}
</style>
