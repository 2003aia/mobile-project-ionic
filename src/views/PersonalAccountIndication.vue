<template>
  <ion-page>
    <Back :btnSrc="() => router.push('/personalAccounts')" />
    <ion-content :fullscreen="true" class="background">
      <div class="container">
        <div class="btn-wrapper">
          <Button
            class="btn"
            :grey="true"
            name="Оплата"
            @click="
              () =>
                router.push({
                  name: 'personalAccountPayment',
                  params: route.params,
                })
            "
          />
          <Button class="btn" name="Показания" />
        </div>
        <layout-box>
          <template v-slot:content>
            <ion-text>
              <p class="title ion-text-start">
                Лицевой счет №{{ lcList?.code }}
              </p>
            </ion-text>
            <ion-item>
              <ion-text> {{ lcList?.name }}</ion-text>
            </ion-item>
            <ion-item>
              <ion-text>{{ lcList?.address }}</ion-text>
            </ion-item>
          </template>
        </layout-box>
        <div v-for="(el, index) in indicesList" :key="el">
          <layout-box>
            <template v-slot:content>
              <ion-text>
                <p class="title ion-text-start">Счетчик</p>
              </ion-text>
              <ion-item>
                <ion-text>{{ el.name }}</ion-text>
              </ion-item>
              <ion-list v-for="(indice, index) in el.indications" :key="indice">
                <ion-text>
                  <p class="sub-title">{{ index + 1 }}.</p>
                </ion-text>
                <ion-item>
                  <ion-text>Датa</ion-text>
                  <ion-text slot="end" class="text-end">{{
                    indice.date
                  }}</ion-text>
                </ion-item>
                <ion-item>
                  <ion-text>Показания</ion-text>
                  <ion-text slot="end" class="text-end">{{
                    indice.indication
                  }}</ion-text>
                </ion-item>
              </ion-list>
              <ion-text>
                <p class="title ion-text-start">Новые показания</p>
              </ion-text>

              <div class="input-wrapper">
                <input
                  ref="text2"
                  type="text"
                  class="input"
                  v-model="el.value"
                  placeholder=" "
                />
                <ion-text
                  class="input-text inputTextBlue"
                  @click="onFocusText(index)"
                  >Введите показания счетчика</ion-text
                >
              </div>
              <Button
                :loading="loading"
                :name="'Подтвердить'"
                @click="setIndicesHandler(el.id, el.value)"
              />
              <ion-text>
                <p class="ion-text-center">
                  {{ setIndicesMessage }}
                </p>
              </ion-text>
            </template>
          </layout-box>
        </div>
        <!--  <layout-box>
          <template v-slot:content>
            <ion-text>
              <p class="title ion-text-start">Новые показания</p>
            </ion-text>
            <Input
              :textBlue="true"
              type="text"
              :value="indication"
              :changeHandler="changeIndication"
              :name="'Введите показания счетчика'"
            />
          </template>
        </layout-box> -->
        <!-- <Button
          :loading="loading"
          :name="'Подтвердить'"
          @click="setIndicesHandler"
        /> -->

        <ion-text>
          <p class="ion-text-center">
            В случае не правильного ввода показаний счетчика, следует обратиться
            в абоненский отдел УГРС по тел. 8(4112)-42-00-30, 46-00-41, 46-00-71
          </p>
        </ion-text>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import { defineComponent } from "vue";
import { IonContent, IonPage, IonText, IonItem, IonList } from "@ionic/vue";
import Button from "../components/Button.vue";
import LayoutBox from "../components/LayoutBox.vue";
import Back from "../components/Back.vue";
import { useRouter, useRoute } from "vue-router";
import { mapActions } from "pinia";
import { usePersonalAccountStore } from "../stores/personalAccount";

export default defineComponent({
  setup() {
    const router = useRouter();
    const route = useRoute();
    return {
      router,
      route,
    };
  },
  data() {
    return {
      indication: "",
      loading: false,
    };
  },
  methods: {
    ...mapActions(usePersonalAccountStore, ["getIndices", "setIndices"]),
    setIndicesHandler(counterId, indice) {
      this.$data.loading = true;

      const setIndices = new Promise((resolve) => {
        resolve(this.setIndices(counterId, indice));
      });
      setIndices.then(() => {
        this.$data.loading = false;
      });
    },
    changeIndication(e) {
      this.$data.indication = e.target.value;
    },
    onFocusText(index) {
      this.$refs.text2[index].focus();
    },
  },

  computed: {
    indicesList() {
      return this.$pinia.state.value?.personalAccount?.getIndicesResponse?.data
        ? this.$pinia.state.value?.personalAccount?.getIndicesResponse?.data
        : [];
    },
    lcList() {
      return this.$route.params;
    },
    setIndicesMessage() {
      return this.$pinia.state.value?.personalAccount?.setIndicesResponse?.data
        ?.message;
    },
  },
  mounted() {
    for (
      let index = 0;
      index < JSON.parse(this.$route.params.counters).length;
      index++
    ) {
      const element = JSON.parse(this.$route.params.counters)[index];
      this.getIndices(element.counterId);
    }
  },
  names: "personalAccauntIndication",
  components: {
    Back,
    LayoutBox,
    IonContent,
    IonPage,
    Button,
    IonText,
    IonItem,
    IonList,
  },
});
</script>

<style scoped>
.container {
  padding: 15px;
  background: #f5f5f5;
}
.btn-wrapper {
  display: flex;
  width: 100%;
  justify-content: space-between;
  background: #eaeaea;
  border-radius: 25px;
  padding-right: 2px;
  padding-left: 2px;
  margin-bottom: 20px;
  flex-wrap: wrap;
}
.btn {
  flex-grow: 1;
}

.text-end {
  color: #0378b4;
  font-weight: 700;
  margin-left: 0;
}
.title {
  margin-top: 20px;
}

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

.input:focus {
  outline: none !important;
  border: solid 1px #62d0ce;
  caret-color: #000;
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

input:not(:placeholder-shown) + ion-text {
  display: none;
}

.dot {
  color: #62d0ce;
}
</style>
