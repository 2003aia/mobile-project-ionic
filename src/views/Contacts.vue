<template>
  <ion-page>
    <Back />
    <Layout height="false" outlineBtn="." filledBtn="." title="Контакты">
      <template v-slot:main-content>
        <ion-text>
          <p class="title ion-text-start">Связаться с нами</p>
          <p>
            Управление газораспределительных сетей АО «Сахатранснефтегаз»
            PC (Я), 677005, г. Якутск, ул. П. Алексеева, д. 64
            <br />
            Эл. почта: ugrs@aostng.ru
          </p>
        </ion-text>

        <div v-for="el in data" :key="el.name">
          <ion-item>
            <div @click="openLink(el2.name)" v-show="Array.isArray(el.phone)">
              <div class="header-item" v-for="el2 in el.phone" :key="el2">
                <ion-icon :icon="call" />
                <ion-text class="title ion-text-start">
                  {{ el2.name }}
                </ion-text>
              </div>

              <ion-text> {{ el.name }} </ion-text>
            </div>
            <div @click="openLink(el.phone)" v-show="!Array.isArray(el.phone)">
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
          <ion-item @click="openLink(el.phone)" button>
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
  methods: {
    openLink(phone) {
      document.location.href = `tel:${phone}`
    }
  },
  data() {
    return {
      data: [
        {
          phone: "8 (4112) 46-00-07",
          name: "Приемная УГРС",
        },
        {
          phone: [
            {
              name: '8 (4112) 46-00-30',
            },
            {
              name: '8(4112) 46-00 - 41'
            },
            { name: '8(4112) 46-00 - 71' }
          ],
          name: "Абонентский отдел",
        },
        {
          phone: "8 (4112) 319-777",
          name: "Служба Единое окно",
        },
        {
          phone: "8 (4112) 319-555",
          name: "Служба по техническому обслуживанию газового оборудования",
        },
      ],
      emergency: [
        { phone: "04", name: "Телефон аварийных служб" },
        { phone: "104", name: "Для мобильных операторов" },
        { phone: "8 (4112) 46-00-98", name: "Техническая поддержка" },
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