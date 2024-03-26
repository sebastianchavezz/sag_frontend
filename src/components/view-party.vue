<template>
  <div class="view-party-container" v-bind:class="rootClassName">
    <textarea
      :placeholder="textareaPlaceholder"
      class="view-party-textarea textarea"
    ></textarea>
    <button type="button" class="view-party-button button">
      <span>
        <span>view</span>
        <br />
        <br />
      </span>
    </button>
  </div>
</template>

<script>
export default {
  name: 'ViewParty',
  props: {
    textareaPlaceholder: {
      type: String,
      default: 'placeholder',
    },
    rootClassName: String,
  },
}
</script>

<style scoped>
.view-party-container {
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
.view-party-textarea {
  width: 90%;
  height: 100%;
}
.view-party-button {
  width: 10%;
  height: 100%;
}
.view-party-root-class-name {
  top: 130px;
  left: 0px;
  right: 0px;
  margin: auto;
  position: absolute;
}
</style>
