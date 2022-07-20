<template>
  <ion-page>
    <Back
      :btnSrc="
        () => {
          if (route.params.next === 'true' && finished === false) {
            router.push('/tabs/servicesOne');
          } else {
            if (finished === true) finished = false;
            else {
              router.push('/tabs/servicesOne');
            }
          }
        }
      "
    />
    <Layout
      :method="
        () => {
          if (route.params.next === 'true' && finished === false) {
            finished = true;
          } else {
            router.push('/tabs/services');
          }
        }
      "
      height="false"
      :filledBtn="
        route.params?.next === 'true' && finished == false
          ? 'Далее'
          : finished
          ? 'Готово'
          : '.'
      "
      :title="route.params?.next === 'true' ? 'Разовая услуга' : 'Вид работ'"
      outlineBtn="."
    >
      <template v-slot:main-content>
        <div v-if="finished">
          <ion-text
            ><p class="title ion-text-start">Спасибо!</p>
            <p>
              Ваша заявка принята в обработку. После процедуры идентификации на
              предмет соответствия достоверности введенных данных, с Вами
              свяжется сотрудник УГРС. По вопросам регистрации заявки обращаться
              по номеру 319-555 в будни с 08.00 до 17.00
            </p>
          </ion-text>
        </div>
        <div v-if="route.params?.next && finished == false">
          <ion-text
            ><p class="title ion-text-start">Согласие на условие договора</p>
          </ion-text>
          <ion-list>
            <ion-item>
              <ion-icon
                slot="start"
                size="large"
                :icon="documentTextOutline"
              ></ion-icon>
              <ion-text class="sub-title">Скачать документ </ion-text>
              <ion-icon
                slot="end"
                size="small"
                class="icon-arrow"
                :icon="arrowDownOutline"
              ></ion-icon>
            </ion-item>
            <ion-item class="check">
              <ion-checkbox slot="start"></ion-checkbox>
              <ion-text
                >Согласен (-на) на обработку персональных данных</ion-text
              >
            </ion-item>
          </ion-list>
        </div>
        <div v-if="route.params.next !== 'true'">
          <ion-text class="title">Выберите варианты</ion-text>
          <ion-list v-for="variant in variants" v-bind:key="variant.id">
            <ion-item>
              <ion-text class="sub-title">{{ variant.name }} </ion-text>
            </ion-item>
          </ion-list>
        </div>
      </template>
    </Layout>
  </ion-page>
</template>


<script>
import { defineComponent } from "vue";
import { useRouter, useRoute } from "vue-router";
import Layout from "../components/Layout.vue";
import {
  IonPage,
  IonText,
  IonList,
  IonItem,
  IonCheckbox,
  IonIcon,
} from "@ionic/vue";
import Back from "../components/Back.vue";
import { documentTextOutline, arrowDownOutline } from "ionicons/icons";

export default defineComponent({
  name: "chooseWorkPage",
  components: {
    IonPage,
    IonList,
    Layout,
    IonItem,
    Back,
    IonText,
    IonCheckbox,
    IonIcon,
  },
  data() {
    return {
      selected: false,
      finished: false,
      variants: [
        { id: 1, name: "Замена газовой плиты" },
        { id: 2, name: "Замена газовой подводки (шланга)" },

        { id: 3, name: "Замена клапана термозапорного" },
        { id: 4, name: "Замена крана" },
        { id: 5, name: "Подключение газовой плиты с устранением заглушки" },
        {
          id: 6,
          name: "Отключение газовой плиты с устранением заглушки (временное отключение)",
        },
        { id: 7, name: "Установка счетчика с поворотом" },
        { id: 8, name: "Монтаж бытового счетчика газа" },
        { id: 9, name: "Замена бытового счетчика газа" },
      ],
    };
  },
  methods: {
    nextHandler: function () {
      this.next = true;
      console.log("test");
    },
  },
  setup() {
    const route = useRoute();
    console.log(route.params, "test");
    const router = useRouter();
    return { router, route, documentTextOutline, arrowDownOutline };
  },
});
</script>

<style scoped>
ion-icon {
  height: 32px;
  width: 32px;
  --ionicon-stroke-width: 40px;
  color: #0378b4;
  margin-right: 15px;
}

.icon-arrow {
  --ionicon-stroke-width: 10px;
  height: 24px;
  width: 24px;
}
ion-item {
  --padding-start: 0;
  --padding-bottom: 0;
  --inner-padding-start: 0px;
  --inner-padding-bottom: 10px;
  --inner-padding-end: 0;
  --inner-padding-top: 20px;
}
</style>
