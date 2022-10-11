<template>
  <ion-page>
    <Back />
    <Layout height="false" outlineBtn="." filledBtn="." title="Контакты">
      <template v-slot:main-content>
        <ion-text>
          <p class="title ion-text-start">Связаться с нами</p>
          <p>
            677027, Республика Саха (Якутия) г. Якутск, ул. Кирова, д. 18, блок
            "В", Офис 501
            <br />
            Эл. почта: info@aostng.ru
          </p>
        </ion-text>

        <div v-for="el in data" :key="el.name">
          <ion-item>
            <div>
              <div class="header-item">
                <ion-icon :icon="call" />
                <ion-text class="title ion-text-start">
                  {{ el.phone }}
                </ion-text>
              </div>

              <ion-text> {{ el.name }} </ion-text>
            </div>
          </ion-item>
        </div>
        <div v-for="el in emergency" :key="el.name">
          <ion-item>
            <div>
              <div class="header-item">
                <ion-icon class="emergency" :icon="call" />
                <ion-text class="title emergency ion-text-start">
                  {{ el.phone }}
                </ion-text>
              </div>

              <ion-text class="sub-emergency"> {{ el.name }} </ion-text>
            </div>

          </ion-item>
        </div>
      </template>
    </Layout>
  </ion-page>
</template>


<script>
import { defineComponent } from "vue";
import { useRouter } from "vue-router";
import Layout from "../components/Layout.vue";
import { IonPage, IonText, IonItem, IonIcon } from "@ionic/vue";
import { call } from "ionicons/icons";
import Back from "../components/Back.vue";

export default defineComponent({
  name: "contactsPage",
  components: {
    IonIcon,
    IonPage,
    Layout,
    IonText,
    IonItem,
    Back,
  },
  data() {
    return {
      data: [
        {
          phone: "8 (4112) 46-02-01",
          name: "Приемная генерального директора",
        },
        {
          phone: "8 (4112) 46-02-02",
          name: "Приемная главного инженера",
        },
        {
          phone: "8 (4112) 46-02-16",
          name: "Канцелярия",
        },
        {
          phone: "8 (4112) 46-02-18",
          name: "Канцелярия",
        },
        {
          phone: "8 (4112) 46-48-44",
          name: "Факс",
        },
        {
          phone: "8 (4112) 46-00-98",
          name: "Техническая поддержка сайта",
        },
        {
          phone: "8 (4112) 46-02-15",
          name: "Пресс-служба",
        },
      ],
      emergency: [
        { phone: "04", name: "Телефон аварийных служб" },
        { phone: "104", name: "Для мобильных операторов" },
        { phone: "104", name: "Служба единое окно" },
      ],
    };
  },
  setup() {
    const router = useRouter();
    return { router, call };
  },
});
</script>

<style scoped>
ion-icon {
  width: 24px;
  height: 24px;
  color: #62d0ce;
  margin-bottom: 5px;
  margin-right: 15px;
}

.emergency {
  color: #dd2c00;
}

.sub-emergency {
  color: #ff8a65;

}

.header-item {
  display: flex;
  align-items: center;
  /* margin-bottom: 5px; */
  margin-top: 10px;
}

ion-item {
  --padding-start: 0;
  --inner-padding-bottom: 10px;
}
</style>