<template>
  <div class="messages-container">
    <app-header rootClassName="header-root-class-name12"></app-header>
    <div class="messages-main-canvas">
      <left-canvas rootClassName="left-canvas-root-class-name13"></left-canvas>
      <div class="messages-container1">
        <div class="messages-container2">
          <h1>
            <span>All my messages User: </span>
            <br />
          </h1>
        </div>
        <div class="messages-container3">
          <app-messenger
            rootClassName="messenger-root-class-name7"
          ></app-messenger>
          <app-messenger
            rootClassName="messenger-root-class-name11"
          ></app-messenger>
          <app-messenger
            rootClassName="messenger-root-class-name10"
          ></app-messenger>
          <app-messenger
            rootClassName="messenger-root-class-name9"
          ></app-messenger>
          <app-messenger
            rootClassName="messenger-root-class-name8"
          ></app-messenger>
        </div>
      </div>
      <right-canvas rootClassName="right-canvas-root-class-name13"></right-canvas>
    </div>
  </div>
</template>

<script>
import AppHeader from '../components/header'
import LeftCanvas from '../components/left-canvas'
import AppMessenger from '../components/messenger'
import RightCanvas from '../components/right-canvas'

export default {
  name: 'Messages',
  props: {},
  components: {
    AppHeader,
    LeftCanvas,
    AppMessenger,
    RightCanvas,
  },
  metaInfo: {
    title: 'Messages - Respectful Winged Tarsier',
    meta: [
      {
        property: 'og:title',
        content: 'Messages - Respectful Winged Tarsier',
      },
    ],
  },
}
</script>

<style scoped>
.messages-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
}
.messages-main-canvas {
  flex: 1;
  width: 1600px;
  height: 100%;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: flex-end;
}
.messages-container1 {
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
.messages-container2 {
  top: 0px;
  left: 0px;
  width: 100%;
  height: 98px;
  display: flex;
  position: absolute;
  align-self: center;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.messages-container3 {
  flex: 0 0 auto;
  width: 100%;
  height: 50%;
  display: flex;
  align-self: center;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
@media(max-width: 1600px) {
  .messages-main-canvas {
    width: 100%;
  }
  .messages-container1 {
    align-items: center;
    flex-direction: column;
    justify-content: flex-start;
  }
}
</style>
