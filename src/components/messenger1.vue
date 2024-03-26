<template>
  <div class="messenger1-messenger" v-bind:class="rootClassName">
    <div class="messenger1-profile"><div class="messenger1-container"></div></div>
    <img :alt="imageAlt" :src="imageSrc" class="messenger1-image" />
    <span class="messenger1-text">{{ text }}</span>
  </div>
</template>

<script>
export default {
  name: 'Messenger1',
  props: {
    rootClassName: String,
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
      default: '26 Birthday',
    },
  },
}
</script>

<style scoped>
.messenger1-messenger {
  flex: 0 0 auto;
  width: 218px;
  height: 62px;
  display: flex;
  position: relative;
  align-items: flex-start;
  padding-left: var(--dl-space-space-unit);
  padding-right: var(--dl-space-space-unit);
  flex-direction: column;
}
.messenger1-profile {
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
.messenger1-container {
  flex: 0 0 auto;
  width: auto;
  border: 2px dashed rgba(120, 120, 120, 0.4);
  height: auto;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.messenger1-image {
  width: var(--dl-size-size-small);
  height: var(--dl-size-size-small);
  margin: 0px;
  padding: 0px;
  align-self: flex-start;
  object-fit: cover;
  border-radius: 50px;
}
.messenger1-text {
  top: 0px;
  right: 0px;
  bottom: 0px;
  margin: auto;
  position: absolute;
  align-self: flex-start;
  padding-top: var(--dl-space-space-halfunit);
  padding-left: var(--dl-space-space-unit);
  padding-right: var(--dl-space-space-unit);
  padding-bottom: var(--dl-space-space-halfunit);
}
.messenger1-root-class-name {
  width: 100%;
}
</style>
