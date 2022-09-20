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
            router-link="/personalAccountPayment"
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

        <div v-for="el in indicesList" :key="el">
          <layout-box>
            <template v-slot:content>
              <ion-text>
                <p class="title ion-text-start">Счетчик</p>
              </ion-text>
              <ion-item>
                <ion-text>{{ JSON.parse(lcList.counters)?.name }}</ion-text>
              </ion-item>
              <ion-item>
                <ion-text>Датa</ion-text>
                <ion-text slot="end" class="text-end">{{ el.date }}</ion-text>
              </ion-item>
              <ion-item>
                <ion-text>Показания</ion-text>
                <ion-text slot="end" class="text-end">{{
                  el.indication
                }}</ion-text>
              </ion-item>
            </template>
          </layout-box>
        </div>
        <layout-box>
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
        </layout-box>
        <Button
          :loading="loading"
          :name="'Подтвердить'"
          @click="setIndicesHandler"
        />

        <ion-text>
          <p class="ion-text-center">
            {{ setIndicesMessage }}
          </p>
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
  IonItem /* IonList */,
} from "@ionic/vue";
import Button from "../components/Button.vue";
import LayoutBox from "../components/LayoutBox.vue";
import Input from "../components/Input.vue";
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
    setIndicesHandler() {
      this.$data.loading = true;

      const counterId = JSON.parse(this.$route.params?.counters)?.counterId;

      const setIndices = new Promise((resolve) => {
        resolve(this.setIndices(counterId, this.$data.indication));
      });
      setIndices.then(() => {
        this.$data.loading = false;
      });
      console.log(this.$data.indication, counterId, "indication");
    },
    changeIndication(e) {
      this.$data.indication = e.target.value;
    },
  },
  computed: {
    indicesList() {
      return this.$pinia.state.value?.personalAccount?.getIndicesResponse
        ?.data[0]?.indications
        ? this.$pinia.state.value?.personalAccount?.getIndicesResponse?.data[0]
            ?.indications
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
    this.getIndices(JSON.parse(this.$route.params.counters).counterId);
  },
  names: "personalAccauntIndication",
  components: {
    Back,
    LayoutBox,
    IonContent,
    IonPage,
    Button,
    IonText,
    Input,
    IonItem,
    /* IonList, */
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
</style>
