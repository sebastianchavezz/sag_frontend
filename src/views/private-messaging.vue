<template>
  <div class="private-messaging-container">
    <app-header rootClassName="header-root-class-name8"></app-header>
    <div class="private-messaging-main-canvas">
      <left-canvas rootClassName="left-canvas-root-class-name9"></left-canvas>
      <div class="private-messaging-container1">
        <div class="private-messaging-container2">
          <h1>Messaging with &apos;User&apos;</h1>
        </div>
        <app-messageindivual></app-messageindivual>
        <app-messageindivual></app-messageindivual>
        <div class="private-messaging-container3">
          <input
            type="text"
            placeholder="Message"
            class="private-messaging-textinput input"
          />
          <button type="button" class="private-messaging-button button">
            <span>
              <span>Send</span>
              <br />
            </span>
          </button>
          <button type="button" class="private-messaging-button1 button">
            <span>
              <span>Add Pic</span>
              <br />
            </span>
          </button>
        </div>
      </div>
      <right-canvas rootClassName="right-canvas-root-class-name9"></right-canvas>
    </div>
  </div>
</template>

<script>
import AppHeader from '../components/header'
import LeftCanvas from '../components/left-canvas'
import AppMessageindivual from '../components/messageindivual'
import RightCanvas from '../components/right-canvas'

export default {
  name: 'PrivateMessaging',
  props: {},
  components: {
    AppHeader,
    LeftCanvas,
    AppMessageindivual,
    RightCanvas,
  },
  metaInfo: {
    title: 'PrivateMessaging - Respectful Winged Tarsier',
    meta: [
      {
        property: 'og:title',
        content: 'PrivateMessaging - Respectful Winged Tarsier',
      },
    ],
  },
}
</script>

<style scoped>
.private-messaging-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
}
.private-messaging-main-canvas {
  flex: 1;
  width: 1600px;
  height: 100%;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: flex-end;
}
.private-messaging-container1 {
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
  justify-content: flex-end;
}
.private-messaging-container2 {
  top: 0px;
  left: 0px;
  width: 100%;
  height: 98px;
  display: flex;
  position: absolute;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.private-messaging-container3 {
  flex: 0 0 auto;
  width: 100%;
  height: 100px;
  display: flex;
  align-items: flex-start;
}
.private-messaging-textinput {
  width: 80%;
  height: 100%;
  align-self: flex-end;
}
.private-messaging-button {
  width: 10%;
  height: 100%;
}
.private-messaging-button1 {
  width: 10%;
  height: 100%;
}
@media(max-width: 1600px) {
  .private-messaging-main-canvas {
    width: 100%;
  }
  .private-messaging-container1 {
    align-items: center;
    flex-direction: column;
    justify-content: flex-start;
  }
}
</style>
