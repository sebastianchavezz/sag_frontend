<template>
  <div class="post-container">
    <app-header rootClassName="header-root-class-name10"></app-header>
    <div class="post-main-canvas">
      <right-canvas rootClassName="right-canvas-root-class-name11"></right-canvas>
      <div class="post-container1">
        <div class="post-container2">
          <h1>
            <span>&apos;User&apos; post</span>
            <br />
            <span>Info post</span>
            <br />
          </h1>
        </div>
        <div class="post-container3"></div>
        <div class="post-container4">
          <img
            alt="image"
            src="https://play.teleporthq.io/static/svg/default-img.svg"
            class="post-image"
          />
        </div>
        <div class="post-container5">
          <button type="button" class="button">Like</button>
          <button type="button" class="button">Update</button>
          <button type="button" class="button">
            <span>
              <span>Delete</span>
              <br />
            </span>
          </button>
        </div>
        <form class="post-form">
          <div class="post-container6">
            <textarea
              placeholder="Description"
              class="post-textarea textarea"
            ></textarea>
          </div>
          <app-messageindivual></app-messageindivual>
          <div class="post-container7">
            <input
              type="text"
              placeholder="Message"
              class="post-textinput input"
            />
            <button type="button" class="post-button3 button">
              <span>
                <span>Send</span>
                <br />
              </span>
            </button>
            <button type="button" class="post-button4 button">
              <span>
                <span>Add Pic</span>
                <br />
              </span>
            </button>
          </div>
        </form>
      </div>
      <left-canvas rootClassName="left-canvas-root-class-name11"></left-canvas>
    </div>
  </div>
</template>

<script>
import AppHeader from '../components/header'
import RightCanvas from '../components/right-canvas'
import AppMessageindivual from '../components/messageindivual'
import LeftCanvas from '../components/left-canvas'

export default {
  name: 'Post',
  props: {},
  components: {
    AppHeader,
    RightCanvas,
    AppMessageindivual,
    LeftCanvas,
  },
  metaInfo: {
    title: 'Post - Respectful Winged Tarsier',
    meta: [
      {
        property: 'og:title',
        content: 'Post - Respectful Winged Tarsier',
      },
    ],
  },
}
</script>

<style scoped>
.post-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
}
.post-main-canvas {
  flex: 1;
  width: 1600px;
  height: 100%;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: flex-start;
}
.post-container1 {
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
.post-container2 {
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
.post-container3 {
  flex: 0 0 auto;
  width: 100%;
  border: 2px dashed rgba(120, 120, 120, 0.4);
  height: 100px;
  display: flex;
  align-items: flex-start;
}
.post-container4 {
  flex: 0 0 auto;
  width: 100%;
  height: 352px;
  display: flex;
  align-items: flex-start;
}
.post-image {
  top: 102px;
  left: 0px;
  right: 0px;
  width: 80%;
  height: 352px;
  margin: auto;
  position: absolute;
  object-fit: cover;
}
.post-container5 {
  flex: 0 0 auto;
  width: 100%;
  height: var(--dl-size-size-small);
  display: flex;
  align-items: flex-start;
}
.post-form {
  width: 98%;
  height: 378px;
  display: flex;
  align-self: center;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
}
.post-container6 {
  flex: 0 0 auto;
  width: 100%;
  height: 100px;
  display: flex;
  align-items: flex-start;
}
.post-textarea {
  width: 100%;
}
.post-container7 {
  flex: 0 0 auto;
  width: 100%;
  height: 100px;
  display: flex;
  align-items: flex-start;
}
.post-textinput {
  width: 80%;
  height: 100%;
  align-self: flex-end;
}
.post-button3 {
  width: 10%;
  height: 100%;
}
.post-button4 {
  width: 10%;
  height: 100%;
}
@media(max-width: 1600px) {
  .post-main-canvas {
    width: 100%;
  }
  .post-container1 {
    align-items: center;
    flex-direction: column;
    justify-content: flex-start;
  }
  .post-image {
    width: 684px;
    height: 355px;
  }
}
</style>
