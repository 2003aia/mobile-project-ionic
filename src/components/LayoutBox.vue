<template>
  <div class="main" v-bind:class="{ padding: padding }" @click="onClick">
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
    padding: Boolean,
    btnSrc: String,
    filledButton: String,
    title: String,
    height: String,
    onClick: Function,
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

.padding {
  padding: 0;
  margin-bottom: 20px;
}
</style>
