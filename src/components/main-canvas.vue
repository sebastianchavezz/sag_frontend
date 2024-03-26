<template>
  <div class="main-canvas-main-canvas">
    <left-canvas rootClassName="left-canvas-root-class-name2"></left-canvas>
    <right-canvas rootClassName="right-canvas-root-class-name2"></right-canvas>
    <div class="main-canvas-container"></div>
  </div>
</template>

<script>
import LeftCanvas from './left-canvas'
import RightCanvas from './right-canvas'

export default {
  name: 'MainCanvas',
  props: {},
  components: {
    LeftCanvas,
    RightCanvas,
  },
}
</script>

<style scoped>
.main-canvas-main-canvas {
  flex: 1;
  width: 1600px;
  height: 100%;
  display: flex;
  position: relative;
  align-items: flex-end;
  justify-content: center;
}
.main-canvas-container {
  top: 0px;
  flex: 1;
  left: 0px;
  right: 0px;
  width: 58%;
  border: 2px dashed rgba(120, 120, 120, 0.4);
  height: 100%;
  margin: auto;
  display: flex;
  position: absolute;
  align-self: flex-start;
  align-items: flex-start;
}
@media(max-width: 1600px) {
  .main-canvas-main-canvas {
    width: 100%;
  }
}
</style>
