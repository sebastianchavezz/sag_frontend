<template>
  <div class="page-container">
    <div class="page-infinite-scroll">
      <div class="page-post-canvas">
        <div class="page-what-is-on-your-mind">
          <div class="page-pic">
            <img
              alt="image"
              src="https://play.teleporthq.io/static/svg/default-img.svg"
              class="page-image"
            />
          </div>
          <input
            type="text"
            placeholder="Whatsuup bro, say something"
            class="page-input input"
          />
        </div>
        <div class="page-container1">
          <button type="button" class="button">
            <span>
              <span>Add Picture</span>
              <br />
            </span>
          </button>
          <button type="button" class="button">
            <span>
              <span>Post</span>
              <br />
            </span>
          </button>
        </div>
      </div>
      <div class="page-post">
        <profilepic-and-name-time
          rootClassName="profilepic-and-name-time-root-class-name1"
        ></profilepic-and-name-time>
        <div class="page-photocommentpost">
          <div class="page-comment">
            <span class="page-text06">
              Lorem ipsum dolor sit amet. Quo doloribus aspernatur et repellendus
              vitae et commodi nihil
              <span v-html="raw72pa"></span>
            </span>
          </div>
          <img
            alt="image"
            src="https://play.teleporthq.io/static/svg/default-img.svg"
            class="page-image1"
          />
          <div class="page-container2">
            <button type="button" class="button">Like</button>
            <button type="button" class="button">
              <span>
                <span>Go to post</span>
                <br />
              </span>
            </button>
          </div>
          <div class="page-comments">
            <span class="page-text10">Sebastian Chavez</span>
            <div class="page-container3"></div>
            <span class="page-text11">
              Lorem ipsum dolor sit amet. Quo doloribus aspernatur et repellendus
              vitae et commodi nihil
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProfilepicAndNameTime from '../components/profilepic-and-name-time'

export default {
  name: 'Page',
  props: {},
  components: {
    ProfilepicAndNameTime,
  },
  data() {
    return {
      raw72pa: ' ',
    }
  },
  metaInfo: {
    title: 'Page - Respectful Winged Tarsier',
    meta: [
      {
        property: 'og:title',
        content: 'Page - Respectful Winged Tarsier',
      },
    ],
  },
}
</script>

<style scoped>
.page-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
}
.page-infinite-scroll {
  flex: 0 0 auto;
  left: 0px;
  right: 0px;
  width: 543px;
  bottom: 0px;
  height: 815px;
  margin: auto;
  display: flex;
  z-index: 100;
  position: absolute;
  align-self: center;
  box-shadow: 5px 5px 10px 0px #d4d4d4;
  align-items: center;
  padding-top: var(--dl-space-space-oneandhalfunits);
  padding-left: var(--dl-space-space-halfunit);
  padding-right: var(--dl-space-space-halfunit);
  flex-direction: column;
  padding-bottom: var(--dl-space-space-halfunit);
  justify-content: flex-start;
}
.page-post-canvas {
  flex: 0 0 auto;
  width: 95%;
  height: 25%;
  display: flex;
  padding: var(--dl-space-space-unit);
  box-shadow: 5px 5px 20px 0px #635d5d;
  align-items: flex-start;
  border-color: var(--dl-color-gray-black);
  border-width: 1px;
  border-radius: var(--dl-radius-radius-radius8);
  flex-direction: column;
}
.page-what-is-on-your-mind {
  width: 100%;
  height: 50%;
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  justify-content: flex-start;
}
.page-pic {
  flex: 0 0 auto;
  width: 20%;
  height: 100%;
  display: flex;
  align-self: flex-start;
  align-items: flex-start;
}
.page-image {
  width: var(--dl-size-size-small);
  height: var(--dl-size-size-small);
  margin: var(--dl-space-space-twounits);
  padding: 0px;
  align-self: center;
  object-fit: cover;
  border-radius: 50px;
}
.page-input {
  width: 70%;
  height: 60%;
  margin: var(--dl-space-space-unit);
  position: relative;
  align-self: flex-end;
  border-radius: 50px;
}
.page-container1 {
  flex: 0 0 auto;
  width: 100%;
  height: 50%;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
}
.page-post {
  width: 95%;
  height: 70%;
  display: flex;
  padding: var(--dl-space-space-unit);
  position: relative;
  box-shadow: 5px 5px 20px 0px #635d5d;
  margin-top: var(--dl-space-space-oneandhalfunits);
  align-items: flex-start;
  border-color: var(--dl-color-gray-black);
  border-width: 1px;
  border-radius: var(--dl-radius-radius-radius8);
  margin-bottom: var(--dl-space-space-oneandhalfunits);
  justify-content: center;
}
.page-photocommentpost {
  flex: 1;
  left: 0px;
  right: 0px;
  width: 100%;
  bottom: 0px;
  height: 86%;
  margin: 0px;
  display: flex;
  position: absolute;
  align-self: flex-end;
  align-items: flex-start;
  padding-top: 0px;
  padding-left: var(--dl-space-space-unit);
  padding-right: var(--dl-space-space-unit);
  flex-direction: column;
  padding-bottom: var(--dl-space-space-unit);
  justify-content: flex-start;
}
.page-comment {
  flex: 0 0 auto;
  width: 100%;
  height: 10%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.page-text06 {
  margin: var(--dl-space-space-halfunit);
}
.page-image1 {
  width: 100%;
  height: 60%;
  object-fit: cover;
}
.page-container2 {
  width: 100%;
  height: var(--dl-size-size-small);
  display: flex;
  align-self: center;
  align-items: flex-start;
}
.page-comments {
  flex: 0 0 auto;
  left: 0px;
  right: 0px;
  width: 95%;
  bottom: 0px;
  height: 25%;
  margin: auto;
  display: flex;
  padding: var(--dl-space-space-unit);
  position: absolute;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.page-text10 {
  top: 0px;
  margin: var(--dl-space-space-unit);
  position: absolute;
  align-self: flex-start;
}
.page-container3 {
  flex: 0 0 auto;
  width: auto;
  border: 2px dashed rgba(120, 120, 120, 0.4);
  height: auto;
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-direction: column;
}
.page-text11 {
  left: 0px;
  bottom: 0px;
  margin: var(--dl-space-space-unit);
  padding: var(--dl-space-space-unit);
  position: absolute;
  font-size: 14px;
}
@media(max-width: 1600px) {
  .page-infinite-scroll {
    left: 0px;
    right: 0px;
    width: 537px;
    margin: auto;
  }
}
</style>
