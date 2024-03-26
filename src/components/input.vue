<template>
  <div class="input-container" v-bind:class="rootClassName">
    <input
      type="text"
      :placeholder="inputPlaceholder"
      class="input-input input"
    />
  </div>
</template>

<script>
export default {
  name: 'Input',
  props: {
    rootClassName: String,
    inputPlaceholder: {
      type: String,
      default: 'Search',
    },
  },
}
</script>

<style scoped>
.input-container {
  display: flex;
  position: relative;
}
.input-input {
  width: 582px;
  height: 47px;
  position: relative;
  border-radius: 50px;
}
.input-root-class-name {
  top: 26px;
  left: 284px;
  position: absolute;
}
</style>
