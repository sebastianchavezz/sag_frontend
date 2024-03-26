<template>
  <div class="messageindivual-messageindivual">
    <app-messenger rootClassName="messenger-root-class-name5"></app-messenger>
    <textarea
      :placeholder="textareaPlaceholder"
      class="messageindivual-textarea textarea"
    ></textarea>
  </div>
</template>

<script>
import AppMessenger from './messenger'

export default {
  name: 'Messageindivual',
  props: {
    textareaPlaceholder: {
      type: String,
      default: 'Message',
    },
  },
  components: {
    AppMessenger,
  },
}
</script>

<style scoped>
.messageindivual-messageindivual {
  flex: 0 0 auto;
  width: 100%;
  height: var(--dl-size-size-large);
  display: flex;
  position: relative;
  align-items: center;
  border-color: var(--dl-color-gray-black);
  border-style: solid;
  border-width: 2px;
  border-radius: 16px;
  flex-direction: column;
  justify-content: center;
}
.messageindivual-textarea {
  width: 100%;
  height: auto;
}
</style>
