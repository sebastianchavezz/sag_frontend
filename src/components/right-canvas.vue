<template>
  <div class="right-canvas-right-canvas" v-bind:class="rootClassName">
    <h3 class="right-canvas-text">{{ heading }}</h3>
    <app-messenger rootClassName="messenger-root-class-name4"></app-messenger>
    <app-messenger rootClassName="messenger-root-class-name"></app-messenger>
    <app-messenger rootClassName="messenger-root-class-name1"></app-messenger>
    <app-messenger rootClassName="messenger-root-class-name2"></app-messenger>
    <app-messenger rootClassName="messenger-root-class-name3"></app-messenger>
  </div>
</template>

<script>
import AppMessenger from './messenger'

export default {
  name: 'RightCanvas',
  props: {
    rootClassName: String,
    heading: {
      type: String,
      default: 'Active friends',
    },
  },
  components: {
    AppMessenger,
  },
}
</script>

<style scoped>
.right-canvas-right-canvas {
  width: 20%;
  height: 815px;
  margin: var(--dl-space-space-unit);
  display: flex;
  position: relative;
  align-self: flex-end;
  align-items: flex-start;
  padding-top: var(--dl-space-space-unit);
  padding-left: var(--dl-space-space-twounits);
  padding-right: var(--dl-space-space-twounits);
  flex-direction: column;
  padding-bottom: var(--dl-space-space-twounits);
}
.right-canvas-text {
  align-self: flex-start;
  margin-top: var(--dl-space-space-unit);
  margin-left: var(--dl-space-space-oneandhalfunits);
  border-color: var(--dl-color-gray-black);
  border-width: 0px;
  margin-right: var(--dl-space-space-unit);
  margin-bottom: var(--dl-space-space-unit);
}
.right-canvas-root-class-name {
  top: 0px;
  right: 0px;
  position: absolute;
}
.right-canvas-root-class-name1 {
  top: 0px;
  flex: 1;
  right: 0px;
  height: 100%;
  position: absolute;
}
.right-canvas-root-class-name2 {
  top: 0px;
  right: 0px;
  position: absolute;
}
.right-canvas-root-class-name3 {
  top: 0px;
  right: 0px;
  position: absolute;
}
.right-canvas-root-class-name4 {
  top: 0px;
  right: 0px;
  position: absolute;
}
.right-canvas-root-class-name5 {
  top: 0px;
  right: 0px;
  position: absolute;
}
.right-canvas-root-class-name6 {
  top: 0px;
  right: 0px;
  position: absolute;
}
.right-canvas-root-class-name7 {
  top: 0px;
  flex: 1;
  right: 0px;
  height: 100%;
  position: absolute;
}
.right-canvas-root-class-name8 {
  top: 0px;
  flex: 1;
  right: 0px;
  height: 100%;
  position: absolute;
}
.right-canvas-root-class-name9 {
  top: 0px;
  right: 0px;
  position: absolute;
}
.right-canvas-root-class-name10 {
  top: 0px;
  flex: 1;
  right: 0px;
  height: 100%;
  position: absolute;
}
.right-canvas-root-class-name11 {
  top: 0px;
  right: 0px;
  position: absolute;
}
.right-canvas-root-class-name12 {
  top: 0px;
  right: 0px;
  position: absolute;
}
.right-canvas-root-class-name13 {
  top: 0px;
  right: 0px;
  position: absolute;
}
.right-canvas-root-class-name14 {
  top: 0px;
  right: 0px;
  position: absolute;
}
@media(max-width: 1600px) {
  .right-canvas-right-canvas {
    width: 306px;
    padding: var(--dl-space-space-unit);
  }
  .right-canvas-root-class-name1 {
    top: 0px;
    right: 0px;
    width: 20%;
    height: 100%;
    position: absolute;
  }
  .right-canvas-root-class-name2 {
    top: 0px;
    right: 0px;
    position: absolute;
  }
  .right-canvas-root-class-name3 {
    top: 0px;
    right: 0px;
    position: absolute;
  }
  .right-canvas-root-class-name4 {
    top: 0px;
    right: 0px;
    position: absolute;
  }
  .right-canvas-root-class-name5 {
    top: 0px;
    right: 0px;
    position: absolute;
  }
  .right-canvas-root-class-name6 {
    top: 0px;
    right: 0px;
    position: absolute;
  }
  .right-canvas-root-class-name7 {
    top: 0px;
    right: 0px;
    width: 20%;
    height: 100%;
    position: absolute;
  }
  .right-canvas-root-class-name8 {
    top: 0px;
    right: 0px;
    width: 20%;
    height: 100%;
    position: absolute;
  }
  .right-canvas-root-class-name9 {
    top: 0px;
    right: 0px;
    position: absolute;
  }
  .right-canvas-root-class-name10 {
    top: 0px;
    right: 0px;
    width: 20%;
    height: 100%;
    position: absolute;
  }
  .right-canvas-root-class-name11 {
    top: 0px;
    right: 0px;
    position: absolute;
  }
  .right-canvas-root-class-name12 {
    top: 0px;
    right: 0px;
    position: absolute;
  }
  .right-canvas-root-class-name13 {
    top: 0px;
    right: 0px;
    position: absolute;
  }
  .right-canvas-root-class-name14 {
    top: 0px;
    right: 0px;
    position: absolute;
  }
}
@media(max-width: 1200px) {
  .right-canvas-right-canvas {
    right: 0px;
    width: 318px;
  }
}
</style>
