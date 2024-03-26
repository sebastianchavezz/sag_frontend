<template>
  <div class="marketplace-container">
    <app-header rootClassName="header-root-class-name1"></app-header>
    <div class="marketplace-main-div">
      <div class="marketplace-market-place">
        <div class="marketplace-container1">
          <h1 class="marketplace-text">Marketplace</h1>
        </div>
        <div class="marketplace-product-placement">
          <div class="marketplace-row1">
            <product-card
              rootClassName="product-card-root-class-name6"
            ></product-card>
            <product-card
              rootClassName="product-card-root-class-name7"
            ></product-card>
            <product-card
              rootClassName="product-card-root-class-name8"
            ></product-card>
          </div>
        </div>
      </div>
      <left-canvas rootClassName="left-canvas-root-class-name1"></left-canvas>
      <right-canvas rootClassName="right-canvas-root-class-name1"></right-canvas>
    </div>
  </div>
</template>

<script>
import AppHeader from '../components/header'
import ProductCard from '../components/product-card'
import LeftCanvas from '../components/left-canvas'
import RightCanvas from '../components/right-canvas'

export default {
  name: 'Marketplace',
  props: {},
  components: {
    AppHeader,
    ProductCard,
    LeftCanvas,
    RightCanvas,
  },
  metaInfo: {
    title: 'Marketplace - Respectful Winged Tarsier',
    meta: [
      {
        property: 'og:title',
        content: 'Marketplace - Respectful Winged Tarsier',
      },
    ],
  },
}
</script>

<style scoped>
.marketplace-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
}
.marketplace-main-div {
  gap: 0;
  flex: 1;
  width: 1600px;
  height: 100%;
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
}
.marketplace-market-place {
  top: 0px;
  left: 0px;
  right: 0px;
  width: 58%;
  height: 100%;
  display: flex;
  padding: var(--dl-space-space-unit);
  position: absolute;
  margin-top: var(--dl-space-space-unit);
  align-items: flex-start;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: auto;
  flex-direction: column;
  justify-content: flex-start;
}
.marketplace-container1 {
  width: 100%;
  height: 52px;
  display: flex;
  align-items: flex-start;
}
.marketplace-text {
  align-self: center;
}
.marketplace-product-placement {
  flex: 0 0 auto;
  width: 100%;
  height: 100%;
  display: flex;
  margin-top: var(--dl-space-space-oneandhalfunits);
  align-items: flex-start;
  justify-content: flex-start;
}
.marketplace-row1 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
}
@media(max-width: 1600px) {
  .marketplace-main-div {
    width: 1600px;
    height: 100%;
  }
  .marketplace-product-placement {
    height: 100%;
    margin: var(--dl-space-space-halfunit);
    padding: var(--dl-space-space-halfunit);
    align-items: flex-start;
    justify-content: flex-start;
  }
  .marketplace-row1 {
    height: auto;
  }
}
@media(max-width: 1200px) {
  .marketplace-main-div {
    width: 100%;
  }
}
</style>
