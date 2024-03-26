<template>
  <div class="create-party-container">
    <app-header rootClassName="header-root-class-name3"></app-header>
    <div class="create-party-main-canvas">
      <left-canvas rootClassName="left-canvas-root-class-name4"></left-canvas>
      <right-canvas rootClassName="right-canvas-root-class-name4"></right-canvas>
      <div class="create-party-container1">
        <div class="create-party-container2"><h1>Create a Party</h1></div>
        <form class="create-party-form">
          <input
            type="text"
            placeholder="Name Party"
            class="create-party-textinput input"
          />
          <input
            type="text"
            placeholder="occasion"
            class="create-party-textinput1 input"
          />
          <input
            type="text"
            placeholder="date"
            enctype="Dateµ"
            class="create-party-textinput2 input"
          />
          <textarea
            placeholder="Description"
            class="create-party-textarea textarea"
          ></textarea>
          <add-friend></add-friend>
          <button type="button" class="button">Plan a Party</button>
        </form>
        <img
          alt="image"
          src="https://play.teleporthq.io/static/svg/default-img.svg"
          class="create-party-image"
        />
      </div>
    </div>
  </div>
</template>

<script>
import AppHeader from '../components/header'
import LeftCanvas from '../components/left-canvas'
import RightCanvas from '../components/right-canvas'
import AddFriend from '../components/add-friend'

export default {
  name: 'CreateParty',
  props: {},
  components: {
    AppHeader,
    LeftCanvas,
    RightCanvas,
    AddFriend,
  },
  metaInfo: {
    title: 'CreateParty - Respectful Winged Tarsier',
    meta: [
      {
        property: 'og:title',
        content: 'CreateParty - Respectful Winged Tarsier',
      },
    ],
  },
}
</script>

<style scoped>
.create-party-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
}
.create-party-main-canvas {
  flex: 1;
  width: 1600px;
  height: 100%;
  display: flex;
  position: relative;
  align-items: flex-end;
  justify-content: center;
}
.create-party-container1 {
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
.create-party-container2 {
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
.create-party-form {
  left: 0px;
  right: 0px;
  width: 98%;
  bottom: 56px;
  height: 378px;
  margin: var(--dl-space-space-halfunit);
  display: flex;
  position: absolute;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
}
.create-party-textinput {
  width: 80%;
}
.create-party-textinput1 {
  width: 80%;
}
.create-party-textinput2 {
  width: 80%;
}
.create-party-textarea {
  width: 80%;
}
.create-party-image {
  top: 102px;
  left: 0px;
  right: 0px;
  width: 80%;
  height: 352px;
  margin: auto;
  position: absolute;
  object-fit: cover;
}
@media(max-width: 1600px) {
  .create-party-main-canvas {
    width: 100%;
  }
  .create-party-container1 {
    align-items: center;
    flex-direction: column;
    justify-content: flex-start;
  }
  .create-party-image {
    width: 684px;
    height: 355px;
  }
}
</style>
