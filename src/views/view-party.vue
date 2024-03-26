<template>
  <div class="view-party-container">
    <app-header rootClassName="header-root-class-name4"></app-header>
    <div class="view-party-main-canvas">
      <left-canvas rootClassName="left-canvas-root-class-name5"></left-canvas>
      <right-canvas rootClassName="right-canvas-root-class-name5"></right-canvas>
      <div class="view-party-container1">
        <div class="view-party-container2">
          <h1>Party: &apos;PlaceHolde&apos;</h1>
        </div>
        <form class="view-party-form">
          <input
            type="text"
            placeholder="Name Party"
            class="view-party-textinput input"
          />
          <input
            type="text"
            placeholder="occasion"
            class="view-party-textinput1 input"
          />
          <input
            type="text"
            placeholder="date"
            enctype="Dateµ"
            class="view-party-textinput2 input"
          />
          <textarea
            placeholder="Description"
            class="view-party-textarea textarea"
          ></textarea>
          <textarea
            placeholder="Members"
            class="view-party-textarea1 textarea"
          ></textarea>
          <button type="button" class="button">
            <span>
              <span>Update</span>
              <br />
            </span>
          </button>
          <button type="button" class="button">
            <span>
              <span>View Presents</span>
              <br />
            </span>
          </button>
          <button type="button" class="button">
            <span>
              <span>Delete</span>
              <br />
            </span>
          </button>
          <button type="button" class="button">
            <span>
              <span>Go To Group Chat</span>
              <br />
            </span>
          </button>
        </form>
        <img
          alt="image"
          src="https://play.teleporthq.io/static/svg/default-img.svg"
          class="view-party-image"
        />
      </div>
    </div>
  </div>
</template>

<script>
import AppHeader from '../components/header'
import LeftCanvas from '../components/left-canvas'
import RightCanvas from '../components/right-canvas'

export default {
  name: 'ViewParty',
  props: {},
  components: {
    AppHeader,
    LeftCanvas,
    RightCanvas,
  },
  metaInfo: {
    title: 'ViewParty - Respectful Winged Tarsier',
    meta: [
      {
        property: 'og:title',
        content: 'ViewParty - Respectful Winged Tarsier',
      },
    ],
  },
}
</script>

<style scoped>
.view-party-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
}
.view-party-main-canvas {
  flex: 1;
  width: 1600px;
  height: 100%;
  display: flex;
  position: relative;
  align-items: flex-end;
  justify-content: center;
}
.view-party-container1 {
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
.view-party-container2 {
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
.view-party-form {
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
.view-party-textinput {
  width: 80%;
}
.view-party-textinput1 {
  width: 80%;
}
.view-party-textinput2 {
  width: 80%;
}
.view-party-textarea {
  width: 80%;
}
.view-party-textarea1 {
  width: 80%;
}
.view-party-image {
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
  .view-party-main-canvas {
    width: 100%;
  }
  .view-party-container1 {
    align-items: center;
    flex-direction: column;
    justify-content: flex-start;
  }
  .view-party-image {
    width: 684px;
    height: 355px;
  }
}
</style>
