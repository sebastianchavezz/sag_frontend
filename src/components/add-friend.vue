<template>
  <div class="add-friend-container">
    <input type="text" :placeholder="friend" class="add-friend-textinput input" />
    <button type="button" class="add-friend-button button">{{ button }}</button>
  </div>
</template>

<script>
export default {
  name: 'AddFriend',
  props: {
    friend: {
      type: String,
      default: 'Friend',
    },
    button: {
      type: String,
      default: 'Add',
    },
  },
}
</script>

<style scoped>
.add-friend-container {
  flex: 0 0 auto;
  width: 80%;
  height: auto;
  display: flex;
  position: relative;
  align-items: flex-start;
}
.add-friend-textinput {
  width: 90%;
}
.add-friend-button {
  width: 10%;
}
</style>
