<template>
  <div class="main">
    <slot name="content" />
  </div>
</template>
<script>
import { defineComponent } from "vue";
export default defineComponent({
  setup() {},
  name: "layoutBox",
  components: {},
  props: {
    btnSrc: String,
    filledButton: String,
    title: String,
    height: String,
  },
});
</script>

<style scoped>
.main {
  background: rgb(255, 255, 255);
  padding: 15px;
  z-index: 2000px;
  border-radius: 15px;
  width: 100%;
  height: 100%;
  margin-bottom: 20px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
}
</style>