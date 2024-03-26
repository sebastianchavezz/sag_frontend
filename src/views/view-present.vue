<template>
  <div class="view-present-container">
    <app-header rootClassName="header-root-class-name6"></app-header>
    <div class="view-present-main-div">
      <div class="view-present-market-place">
        <div class="view-present-container1">
          <h1 class="view-present-text">Present &apos;User&apos; wants</h1>
        </div>
        <div class="view-present-product-placement">
          <div class="view-present-row1">
            <product-card
              rootClassName="product-card-root-class-name9"
            ></product-card>
            <product-card
              rootClassName="product-card-root-class-name10"
            ></product-card>
            <product-card
              rootClassName="product-card-root-class-name11"
            ></product-card>
          </div>
          <div class="view-present-container2">
            <textarea
              placeholder="Info"
              class="view-present-textarea textarea"
            ></textarea>
          </div>
          <button type="button" class="view-present-button button">
            <span>
              <span>Go To GroupMessanger</span>
              <br />
            </span>
          </button>
          <button type="button" class="view-present-button1 button">
            <span>
              <span>Go to Party</span>
              <br />
            </span>
          </button>
        </div>
      </div>
      <right-canvas rootClassName="right-canvas-root-class-name7"></right-canvas>
      <left-canvas rootClassName="left-canvas-root-class-name7"></left-canvas>
    </div>
  </div>
</template>

<script>
import AppHeader from '../components/header'
import ProductCard from '../components/product-card'
import RightCanvas from '../components/right-canvas'
import LeftCanvas from '../components/left-canvas'

export default {
  name: 'ViewPresent',
  props: {},
  components: {
    AppHeader,
    ProductCard,
    RightCanvas,
    LeftCanvas,
  },
  metaInfo: {
    title: 'ViewPresent - Respectful Winged Tarsier',
    meta: [
      {
        property: 'og:title',
        content: 'ViewPresent - Respectful Winged Tarsier',
      },
    ],
  },
}
</script>

<style scoped>
.view-present-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
}
.view-present-main-div {
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
.view-present-market-place {
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
.view-present-container1 {
  width: 100%;
  height: 52px;
  display: flex;
  align-items: flex-start;
}
.view-present-text {
  align-self: center;
}
.view-present-product-placement {
  flex: 0 0 auto;
  width: 100%;
  height: 100%;
  display: flex;
  margin-top: var(--dl-space-space-oneandhalfunits);
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
}
.view-present-row1 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
}
.view-present-container2 {
  flex: 0 0 auto;
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.view-present-textarea {
  width: 100%;
  height: 100%;
}
.view-present-button {
  align-self: center;
}
.view-present-button1 {
  align-self: center;
}
@media(max-width: 1600px) {
  .view-present-main-div {
    width: 1600px;
    height: 100%;
  }
  .view-present-product-placement {
    height: 100%;
    margin: var(--dl-space-space-halfunit);
    padding: var(--dl-space-space-halfunit);
    align-items: flex-start;
    justify-content: flex-start;
  }
  .view-present-row1 {
    height: auto;
  }
}
@media(max-width: 1200px) {
  .view-present-main-div {
    width: 100%;
  }
}
</style>
