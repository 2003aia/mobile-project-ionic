<template>
  <ion-page>
    <Back />
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
                <p class="title ion-text-start">Счетчик {{ el?.name }}</p>
              </ion-text>
              <ion-row>
                <ion-col size="2" size-sm>№</ion-col>
                <ion-col>Дата</ion-col>
                <ion-col>Показания</ion-col>
              </ion-row>

              <ion-list
                v-for="(indice, index) in el?.indications"
                :key="indice"
              >
                <ion-row
                  :class="{
                    'ion-row-last':
                      el?.indications[el?.indications?.length - 1]?.date ===
                      indice?.date,
                  }"
                >
                  <ion-col class="sub-title" size="2" size-sm
                    >{{ index + 1 }}.</ion-col
                  >

                  <ion-col class="text-end">{{
                    indice?.date.substring(0, 10)
                  }}</ion-col>
                  <ion-col class="text-end">{{ indice?.indication }}</ion-col>
                </ion-row>

                <!-- <ion-text>
                  <p class="sub-title">{{ index + 1 }}.</p>
                </ion-text>
                <ion-item>
                  <ion-text>Датa</ion-text>
                  <ion-text slot="end" class="text-end">{{
                    indice?.date
                  }}</ion-text>
                </ion-item>
                <ion-item>
                  <ion-text>Показания</ion-text>
                  <ion-text slot="end" class="text-end">{{
                    indice?.indication
                  }}</ion-text>
                </ion-item> -->
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
              {{ el.response }}
              <ion-text v-show="el.response === 'Заполните поле'">
                <p class="ion-text-start error">
                  {{ el.response }}
                </p>
              </ion-text>
              <ion-text v-show="el.response">
                <p class="ion-text-center">
                  {{ el.response }}
                </p>
              </ion-text>
              <Button
                v-model="el.loading"
                :loading="el.loading !== true ? false : el.loading"
                :name="'Подтвердить'"
                @click="
                  () => {
                    setIndicesHandler(el.id, el.value, el.loading, el.response);
                  }
                "
              />
            </template>
          </layout-box>
        </div>
        <div v-show="indicesList?.length === 0">
          <layout-box>
            <template v-slot:content>
              <ion-text>
                <p class="title ion-text-start">Новые показания</p>
              </ion-text>
              <Input
                :textBlue="true"
                type="text"
                :value="counterId"
                :changeHandler="changeCounterId"
                :name="'Введите номер счетчика'"
              />
              <Input
                :textBlue="true"
                type="text"
                :value="indication"
                :changeHandler="changeIndication"
                :name="'Введите показания счетчика'"
              />
              <ion-text v-show="error">
                <p class="ion-text-start error">
                  {{ error }}
                </p>
              </ion-text>
              <ion-text v-show="response">
                <p class="ion-text-center">
                  {{ response }}
                </p>
              </ion-text>
              <Button
                :loading="loading"
                :name="'Подтвердить'"
                @click="
                  () => {
                    if (counterId?.length !== 0) {
                      setIndicesHandler(
                        counterId,
                        indication,
                        loading,
                        response
                      );
                    } else {
                      error = 'Заполните все поля';
                    }
                  }
                "
              />
            </template>
          </layout-box>
        </div>

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
import {
  IonContent,
  IonPage,
  IonText,
  IonItem,
  IonList,
  IonRow,
  IonCol,
} from "@ionic/vue";
import Button from "../components/Button.vue";
import LayoutBox from "../components/LayoutBox.vue";
import Back from "../components/Back.vue";
import { useRouter, useRoute } from "vue-router";
import { mapActions } from "pinia";
import { usePersonalAccountStore } from "../stores/personalAccount";
import Input from "../components/Input.vue";

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
      counterId: "",
      error: "",
      loading: false,
      response: "",
    };
  },
  methods: {
    ...mapActions(usePersonalAccountStore, ["getIndices", "setIndices"]),
    async setIndicesHandler(counterId, indice, loading, response) {
      
      if (
        (indice !== undefined || indice?.length >= 0) &&
        loading === undefined &&
        response === undefined
      ) {
        this.$data.loading = true;
        const setIndices = new Promise((resolve) => {
          resolve(this.setIndices(counterId, indice));
        });
        setIndices.then(() => {
          response =
            this.$pinia.state.value?.personalAccount?.setIndicesResponse
              ?.message;
          loading = false;
        });
      } else {
        response = "Заполните поле";
        this.$data.error = "Заполните поле";
      }
    },
    changeIndication(e) {
      this.$data.indication = e.target.value;
    },
    changeCounterId(e) {
      this.$data.counterId = e.target.value;
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
      return this.$pinia.state.value?.personalAccount?.personalItemData;
    },
    setIndicesMessage() {
      return this.$pinia.state.value?.personalAccount?.setIndicesResponse?.data
        ?.message;
    },
  },
  mounted() {
    for (let index = 0; index < this.lcList?.counters?.length; index++) {
      const element = this.lcList?.counters[index];

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
    Input,
    IonRow,
    IonCol,
  },
});
</script>

<style scoped>
ion-row {
  padding-top: 5px;
  padding-bottom: 5px;
  border-bottom: solid 1px #e0e0e0;
}
.ion-row-last {
  border-bottom: none;
}
ion-col {
  word-break: break-all;
}
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
  word-break: break-all;
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
