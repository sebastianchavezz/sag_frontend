<template>
  <div class="add-user-to-party-container">
    <app-header rootClassName="header-root-class-name11"></app-header>
    <div class="add-user-to-party-main-canvas">
      <left-canvas rootClassName="left-canvas-root-class-name12"></left-canvas>
      <right-canvas rootClassName="right-canvas-root-class-name12"></right-canvas>
      <div class="add-user-to-party-container1">
        <div class="add-user-to-party-container2">
          <h1 class="add-user-to-party-text">Add &quot;User&quot; to Party</h1>
        </div>
        <div class="add-user-to-party-container3">
          <textarea
            placeholder="Name Party"
            class="add-user-to-party-textarea textarea"
          ></textarea>
          <button type="button" class="add-user-to-party-button button">
            <span>
              <span>Add</span>
              <br />
            </span>
          </button>
        </div>
        <div class="add-user-to-party-container4">
          <textarea
            placeholder="Name Party"
            class="add-user-to-party-textarea1 textarea"
          ></textarea>
          <button type="button" class="add-user-to-party-button1 button">
            <span>
              <span>Add</span>
              <br />
            </span>
          </button>
        </div>
        <div class="add-user-to-party-container5">
          <textarea
            placeholder="Name Party"
            class="add-user-to-party-textarea2 textarea"
          ></textarea>
          <button type="button" class="add-user-to-party-button2 button">
            <span>
              <span>Add</span>
              <br />
            </span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppHeader from '../components/header'
import LeftCanvas from '../components/left-canvas'
import RightCanvas from '../components/right-canvas'

export default {
  name: 'AddUserToParty',
  props: {},
  components: {
    AppHeader,
    LeftCanvas,
    RightCanvas,
  },
  metaInfo: {
    title: 'AddUserToParty - Respectful Winged Tarsier',
    meta: [
      {
        property: 'og:title',
        content: 'AddUserToParty - Respectful Winged Tarsier',
      },
    ],
  },
}
</script>

<style scoped>
.add-user-to-party-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
}
.add-user-to-party-main-canvas {
  flex: 1;
  width: 1600px;
  height: 100%;
  display: flex;
  position: relative;
  align-items: flex-end;
  justify-content: center;
}
.add-user-to-party-container1 {
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
  justify-content: flex-start;
}
.add-user-to-party-container2 {
  flex: 0 0 auto;
  width: 100%;
  height: 15%;
  display: flex;
  position: relative;
  align-items: flex-start;
}
.add-user-to-party-text {
  width: 100%;
  align-self: center;
  text-align: center;
}
.add-user-to-party-container3 {
  flex: 0 0 auto;
  width: 100%;
  height: 100px;
  display: flex;
  position: relative;
  align-self: center;
  align-items: center;
  flex-direction: row;
  justify-content: flex-start;
}
.add-user-to-party-textarea {
  width: 90%;
  height: 100%;
}
.add-user-to-party-button {
  width: 10%;
  height: 100%;
}
.add-user-to-party-container4 {
  flex: 0 0 auto;
  width: 100%;
  height: 100px;
  display: flex;
  position: relative;
  align-self: center;
  align-items: center;
  flex-direction: row;
  justify-content: flex-start;
}
.add-user-to-party-textarea1 {
  width: 90%;
  height: 100%;
}
.add-user-to-party-button1 {
  width: 10%;
  height: 100%;
}
.add-user-to-party-container5 {
  flex: 0 0 auto;
  width: 100%;
  height: 100px;
  display: flex;
  position: relative;
  align-self: center;
  align-items: center;
  flex-direction: row;
  justify-content: flex-start;
}
.add-user-to-party-textarea2 {
  width: 90%;
  height: 100%;
}
.add-user-to-party-button2 {
  width: 10%;
  height: 100%;
}
@media(max-width: 1600px) {
  .add-user-to-party-main-canvas {
    width: 100%;
  }
}
</style>
