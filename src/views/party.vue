<template>
  <div class="party-container">
    <app-header rootClassName="header-root-class-name2"></app-header>
    <div class="party-main-canvas">
      <left-canvas rootClassName="left-canvas-root-class-name3"></left-canvas>
      <right-canvas rootClassName="right-canvas-root-class-name3"></right-canvas>
      <div class="party-container1">
        <button @click="addParty" type="button" class="party-button button">Add Party</button>
        <view-party rootClassName="view-party-root-class-name"></view-party>
      </div>
    </div>
  </div>
</template>

<script>
import AppHeader from '../components/header'
import LeftCanvas from '../components/left-canvas'
import RightCanvas from '../components/right-canvas'
import ViewParty from '../components/view-party'

export default {
  name: 'Party',
  props: {},
  components: {
    AppHeader,
    LeftCanvas,
    RightCanvas,
    ViewParty,
  },
  metaInfo: {
    title: 'Party - Respectful Winged Tarsier',
    meta: [
      {
        property: 'og:title',
        content: 'Party - Respectful Winged Tarsier',
      },
    ],
  },
  methods:{
    addParty(){
      this.$router.push("/create-party");
    }
  }
}
</script>

<style scoped>
.party-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
}
.party-main-canvas {
  flex: 1;
  width: 1600px;
  height: 100%;
  display: flex;
  position: relative;
  align-items: flex-end;
  justify-content: center;
}
.party-container1 {
  top: 0px;
  flex: 1;
  left: 0px;
  right: 0px;
  width: 58%;
  height: 100%;
  margin: auto;
  display: flex;
  position: absolute;
  align-self: flex-start;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.party-button {
  top: 0px;
  left: 0px;
  right: 0px;
  width: 272px;
  height: 64px;
  margin: auto;
  position: absolute;
}
@media(max-width: 1600px) {
  .party-main-canvas {
    width: 100%;
  }
}
</style>
