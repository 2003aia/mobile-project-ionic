<template>
  <div class="input-wrapper">
    <input v-if="type === 'number'" ref="text" :type="type" :min="min" oninput="validity.valid||(value='');"
      :class="{ input: true, blue: blue }" placeholder=" " :value="value" @change="changeHandler" />
    <input ref="text" :class="{ blue: blue }" :type="type" class="input" placeholder=" " v-mask="mask" :value="value"
      @change="changeHandler" v-if="mask" />
    <input :value="value" @change="changeHandler" ref="text" :type="type"
      :class="{ input: true, padding: padding, blue: blue }" placeholder=" " v-if="!mask && type !== 'number' && !min" />
    <ion-text :class="{ inputTextBlue: textBlue === true, blueText: blue }" class="input-text"
      @click="onFocusText()">{{
          name
      }}
      <ion-text v-if="required" class="dot">*</ion-text>
    </ion-text>

  </div>
</template>
<script>
import { defineComponent } from "vue";
import { IonText } from "@ionic/vue";
import { mask } from "vue-the-mask";

export default defineComponent({
  components: {
    IonText,
  },
  directives: { mask },
  setup() { },
  methods: {
    onFocusText: function () {
      this.$refs.text.focus();
    },
  },
  data() {
    return {
      value2: this.value,
      changeHandler2: this.changeHandler,
    };
  },
  computed: {
    inputValue: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit("updated", val);
      },
    },
  },
  name: "inputView",
  props: {
    required: Boolean,
    textBlue: Boolean,
    name: String,
    value: String,
    type: String,
    changeHandler: Function,
    min: Number,
    mask: String,
    padding: Boolean,
    blue: Boolean,
  },
});
</script>

<style scoped>
.input {
  border-radius: 8px;
  padding: 15px;
  width: 100%;
  border: solid 1px #e0e0e0;
  margin-bottom: 15px;
  --padding-start: 15px;
  --padding-bottom: 14px;
  --padding-top: 14px;
  --placeholder-color: #9e9e9e;
  --placeholder-font-weight: 400;
}

.error {
  border: solid 1px #dd2c00;
}

.padding {
  padding: 5px;
  margin: 0;
  --padding-start: 5px;
  --padding-top: 4px;
  --padding-bottom: 4px;


}

.input:focus {
  outline: none !important;
  border: solid 1px #62d0ce;
  caret-color: #000;
}

.blue {
  background: #268FCC;
  border: solid 1px #268FCC;
  color: #fff;

}

.blueText {
  color: #8BD4FF;
}

.blue::placeholder {
  color: #8BD4FF
}

.input-wrapper {
  position: relative;
  width: 100%;
}

.input-text {
  z-index: 0;
  padding-left: 15px;
  position: absolute;
  left: 1px;
  top: 15px;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
}

.inputTextBlue {
  color: #0378b4;
  font-weight: 700;
}

input:not(:placeholder-shown)+ion-text {
  display: none;
}

.dot {
  color: #62d0ce;
}
</style>
