<template>
  <div class="messenger-messenger" v-bind:class="rootClassName">
    <div class="messenger-profile"><div class="messenger-container"></div></div>
    <img :alt="imageAlt" :src="imageSrc" class="messenger-image" />
    <span class="messenger-text">{{ text }}</span>
  </div>
</template>

<script>
export default {
  name: 'Messenger',
  props: {
    imageSrc: {
      type: String,
      default: 'https://play.teleporthq.io/static/svg/default-img.svg',
    },
    rootClassName: String,
    imageAlt: {
      type: String,
      default: 'image',
    },
    text: {
      type: String,
      default: 'Sebastian Chavez',
    },
  },
}
</script>

<style scoped>
.messenger-messenger {
  flex: 0 0 auto;
  width: 277px;
  height: 62px;
  display: flex;
  position: relative;
  align-items: flex-start;
  padding-left: var(--dl-space-space-unit);
  padding-right: var(--dl-space-space-unit);
  flex-direction: column;
}
.messenger-profile {
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
.messenger-container {
  flex: 0 0 auto;
  width: auto;
  border: 2px dashed rgba(120, 120, 120, 0.4);
  height: auto;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.messenger-image {
  width: var(--dl-size-size-small);
  height: var(--dl-size-size-small);
  margin: 0px;
  padding: 0px;
  align-self: flex-start;
  object-fit: cover;
  border-radius: 50px;
}
.messenger-text {
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
.messenger-root-class-name {
  width: 100%;
}
.messenger-root-class-name1 {
  width: 100%;
}
.messenger-root-class-name2 {
  width: 100%;
}
.messenger-root-class-name3 {
  width: 100%;
}
.messenger-root-class-name4 {
  width: 100%;
}
.messenger-root-class-name5 {
  align-self: flex-start;
}
.messenger-root-class-name6 {
  align-self: flex-start;
}





@media(max-width: 1600px) {
  .messenger-root-class-name {
    width: 100%;
  }
  .messenger-root-class-name1 {
    width: 100%;
  }
  .messenger-root-class-name2 {
    width: 100%;
  }
  .messenger-root-class-name3 {
    width: 100%;
  }
  .messenger-root-class-name4 {
    width: 100%;
  }
}
</style>
