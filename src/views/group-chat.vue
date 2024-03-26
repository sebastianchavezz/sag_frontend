<template>
  <div class="group-chat-container">
    <app-header rootClassName="header-root-class-name5"></app-header>
    <div class="group-chat-main-canvas">
      <left-canvas rootClassName="left-canvas-root-class-name6"></left-canvas>
      <div class="group-chat-container1">
        <div class="group-chat-container2">
          <h1>Group Chat Party: &apos;PlaceHolde&apos;</h1>
        </div>
        <app-messageindivual></app-messageindivual>
        <app-messageindivual></app-messageindivual>
        <div class="group-chat-container3">
          <input
            type="text"
            placeholder="Message"
            class="group-chat-textinput input"
          />
          <button type="button" class="group-chat-button button">
            <span>
              <span>Send</span>
              <br />
            </span>
          </button>
          <button type="button" class="group-chat-button1 button">
            <span>
              <span>Add Pic</span>
              <br />
            </span>
          </button>
        </div>
      </div>
      <right-canvas rootClassName="right-canvas-root-class-name6"></right-canvas>
    </div>
  </div>
</template>

<script>
import AppHeader from '../components/header'
import LeftCanvas from '../components/left-canvas'
import AppMessageindivual from '../components/messageindivual'
import RightCanvas from '../components/right-canvas'

export default {
  name: 'GroupChat',
  props: {},
  components: {
    AppHeader,
    LeftCanvas,
    AppMessageindivual,
    RightCanvas,
  },
  metaInfo: {
    title: 'GroupChat - Respectful Winged Tarsier',
    meta: [
      {
        property: 'og:title',
        content: 'GroupChat - Respectful Winged Tarsier',
      },
    ],
  },
}
</script>

<style scoped>
.group-chat-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
}
.group-chat-main-canvas {
  flex: 1;
  width: 1600px;
  height: 100%;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: flex-end;
}
.group-chat-container1 {
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
.group-chat-container2 {
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
.group-chat-container3 {
  flex: 0 0 auto;
  width: 100%;
  height: 100px;
  display: flex;
  align-items: flex-start;
}
.group-chat-textinput {
  width: 80%;
  height: 100%;
  align-self: flex-end;
}
.group-chat-button {
  width: 10%;
  height: 100%;
}
.group-chat-button1 {
  width: 10%;
  height: 100%;
}
@media(max-width: 1600px) {
  .group-chat-main-canvas {
    width: 100%;
  }
  .group-chat-container1 {
    align-items: center;
    flex-direction: column;
    justify-content: flex-start;
  }
}
</style>
