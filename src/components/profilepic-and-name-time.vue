<template>
  <div class="profilepic-and-name-time-profile" v-bind:class="rootClassName">
    <img :alt="imageAlt" :src="imageSrc" class="profilepic-and-name-time-image" />
    <div class="profilepic-and-name-time-container">
      <span class="profilepic-and-name-time-text">{{ text }}</span>
      <span class="profilepic-and-name-time-text1">
        <span>4 hours ago</span>
        <br />
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProfilepicAndNameTime',
  props: {
    imageSrc: {
      type: String,
      default: 'https://play.teleporthq.io/static/svg/default-img.svg',
    },
    imageAlt: {
      type: String,
      default: 'image',
    },
    text: {
      type: String,
      default: 'Sebastian Chavez',
    },
    rootClassName: String,
  },
}
</script>

<style scoped>
.profilepic-and-name-time-profile {
  flex: 0 0 auto;
  width: 100%;
  height: 10%;
  display: flex;
  position: relative;
  align-items: center;
  padding-left: var(--dl-space-space-unit);
  flex-direction: row;
  justify-content: flex-start;
}
.profilepic-and-name-time-image {
  width: var(--dl-size-size-small);
  height: var(--dl-size-size-small);
  margin: 0px;
  padding: 0px;
  align-self: flex-start;
  object-fit: cover;
  border-radius: 50px;
}
.profilepic-and-name-time-container {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.profilepic-and-name-time-text {
  align-self: flex-start;
  margin-left: var(--dl-space-space-oneandhalfunits);
}
.profilepic-and-name-time-text1 {
  font-size: 14px;
  align-self: flex-end;
  margin-left: var(--dl-space-space-oneandhalfunits);
}
.profilepic-and-name-time-root-class-name {
  flex: 1;
  align-self: flex-start;
}
.profilepic-and-name-time-root-class-name1 {
  flex: 1;
  align-self: flex-start;
}
.profilepic-and-name-time-root-class-name2 {
  flex: 1;
  align-self: flex-start;
}
</style>
