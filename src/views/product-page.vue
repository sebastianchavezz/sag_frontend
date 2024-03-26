<template>
  <div class="product-page-container">
    <app-header rootClassName="header-root-class-name7"></app-header>
    <div class="product-page-main-div">
      <div class="product-page-market-place">
        <div class="product-page-container1">
          <h1 class="product-page-text">Product : &apos;Product Name&apos;</h1>
        </div>
        <div class="product-page-product-placement">
          <product-card
            rootClassName="product-card-root-class-name15"
          ></product-card>
        </div>
        <div class="product-page-container2">
          <textarea
            placeholder="SPECS"
            class="product-page-textarea textarea"
          ></textarea>
        </div>
        <div class="product-page-container3">
          <div class="product-page-container4">
            <button type="button" class="button">Add To Party</button>
            <select class="product-page-select">
              <option value="Party 1">Option 1</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 3">Option 3</option>
            </select>
          </div>
          <button type="button" class="button">Add to Whislist</button>
        </div>
      </div>
      <left-canvas rootClassName="left-canvas-root-class-name8"></left-canvas>
      <right-canvas rootClassName="right-canvas-root-class-name8"></right-canvas>
    </div>
  </div>
</template>

<script>
import AppHeader from '../components/header'
import ProductCard from '../components/product-card'
import LeftCanvas from '../components/left-canvas'
import RightCanvas from '../components/right-canvas'

export default {
  name: 'ProductPage',
  props: {},
  components: {
    AppHeader,
    ProductCard,
    LeftCanvas,
    RightCanvas,
  },
  metaInfo: {
    title: 'ProductPage - Respectful Winged Tarsier',
    meta: [
      {
        property: 'og:title',
        content: 'ProductPage - Respectful Winged Tarsier',
      },
    ],
  },
}
</script>

<style scoped>
.product-page-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
}
.product-page-main-div {
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
.product-page-market-place {
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
.product-page-container1 {
  width: 100%;
  height: 10%;
  display: flex;
  align-items: flex-start;
}
.product-page-text {
  align-self: center;
}
.product-page-product-placement {
  flex: 0 0 auto;
  width: 100%;
  height: 50%;
  display: flex;
  position: relative;
  align-self: center;
  margin-top: 0px;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.product-page-container2 {
  flex: 0 0 auto;
  width: 100%;
  height: 20%;
  display: flex;
  align-self: center;
  margin-top: var(--dl-space-space-sixunits);
  align-items: flex-start;
}
.product-page-textarea {
  width: 100%;
  height: 100%;
}
.product-page-container3 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
}
.product-page-container4 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
}
.product-page-select {
  width: var(--dl-size-size-xlarge);
  height: var(--dl-size-size-small);
}
@media(max-width: 1600px) {
  .product-page-main-div {
    width: 1600px;
    height: 100%;
  }
  .product-page-product-placement {
    height: 100%;
    margin: var(--dl-space-space-halfunit);
    padding: var(--dl-space-space-halfunit);
    align-items: flex-start;
    justify-content: flex-start;
  }
}
@media(max-width: 1200px) {
  .product-page-main-div {
    width: 100%;
  }
}
</style>
