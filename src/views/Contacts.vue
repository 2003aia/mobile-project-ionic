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
            <br>

            Режим работы отделов с 8 до 17, обед с 12 до 13
            <br>
            
          </p>
        </ion-text>

       

        <ion-accordion-group ref="contacts1" v-for="el in data" :key="el?.name">
          <ion-accordion value="first">
            <ion-item class="headerAcc" lines="full" slot="header">
              <ion-text class="sub-title ion-text-start">
                {{ el.name }}
              </ion-text>
            </ion-item>

            <div class="contentAcc" slot="content">
              <div v-show="el.email" class="header-item" @click="openEmail(el.email)">
                <ion-icon :icon="mailOutline" />
                <ion-text>{{ el.email }}</ion-text>
              </div>

              <div v-for="el2 in el.phone" :key="el2">

                <div class="header-item" @click="openLink(el3)" v-for="el3 in el2.items" :key="el3">
                  <ion-icon :icon="call" />
                  <ion-text class="title ion-text-start">
                    {{ el3 }}
                  </ion-text>
                </div>
                <ion-text class="ion-text-start">
                  {{ el2.title }}
                </ion-text>
                <ion-text class="ion-text-start">
                  <span style="color: black">{{ el2.name }} </span>
                  <span>{{ el2?.address }}</span>
                </ion-text>
                <div v-show="el2?.countys" class="header-item" @click="openLink(el2?.countys?.item)" >
                  <ion-icon :icon="call" />
                  <ion-text class="title ion-text-start">
                    {{ el2?.countys?.item }}
                  </ion-text>
                </div>
                <ion-text class="ion-text-start">
                  {{ el2?.countys?.county }}
                </ion-text>
              </div>

            </div>

          </ion-accordion>
        </ion-accordion-group>
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
import { IonPage, IonText, IonItem, IonIcon, IonAccordion, IonAccordionGroup } from "@ionic/vue";
import { call, mailOutline } from "ionicons/icons";
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
    IonAccordion, IonAccordionGroup
  },
  methods: {
    openLink(e) {
      console.log(e)
      document.location.href = `tel:${e}`
    },
    openEmail(e) {
      console.log(e)
      document.location.href = `mailto:${e}`
    },
  },
  data() {
    return {
      data: [
      {
          phone: [
            {
              items: [
                '319-777 '
              ],
            },
          ],
          name: "Единый Колл-центр",
        },
        {
          phone: [
            {
              items: [
                '46-00-03'
              ],
            },
          ],
          email: 'usd@aostng.ru',
          name: "Приемная Управления сбытовой деятельностью ",
        },
        {
          phone: [
            {
              title: 'Сверка и передача показаний ',
              items: [
                '46-00-30',
                '46-00-41',
                '46-00-71'
              ],
            },
            {
              title: 'Договорной отдел с физическими лицами',
              items: [
                '46-00-45'
              ],
            },
          ],
          email: 'orchk.usd@aostng.ru',
          name: "Отдел по работе с физическими лицами ",
        },
        {
          phone: [
            {
              title: 'Сверка с юридическими лицами',
              items: [
                '46-00-14',
                '46-00-73'
              ],
            },
            {
              title: 'Договорной отдел с ЮЛ',
              items: [
                '46-01-08'
              ],
            },
            {
              title: 'Передача показаний для ЮЛ',
              items: [
                '46-00-62',
                '46-00-59',
                '46-00-26'
              ],
            },
          ],
          email: 'orkk.usd@aostng.ru',
          name: "Отдел по работе с юридическими лицами",
        },
        {
          phone: [
            {
              title: 'Диспетчерская',
              items: [
                '319-555'
              ],
            },
            {
              title: 'Звоните вне рабочее время (круглосуточно)',
              items: [
                '104'
              ],
            },
          ],
          email: 'stgo.ugrs@aostng.ru',
          name: "Служба по техническому обслуживанию газового оборудования ",
        },
        {
          phone: [
            {
              name: 'Верхневилюйский ЭГУ ',
              address: 'по адресу: с. Верхневилюйск ул. Дь.Аныстырова, д.',
              items: [
                '8-411-33-41987'
              ],
            },
            {
              name: 'Вилюйский ЭГУ ',
              address: 'по адресу: г. Вилюйск ул. Ленина, д.35',
              items: [
                '8-411-32-42329	'
              ],
              countys: {
                county: 'п.Кысыл-Сыр, ул.Весенняя 16 «Г»',
                item: '8-411-32-20004'
              }
            },
            {
              name: 'Вилюйский ЭГУ ',
              address: 'по адресу: с.Бердигестях, ул. Коврова, д.22',
              items: [
                '8-411-31-41054	'
              ],
            },
            {
              name: 'Жатайский ЭГУ ',
              address: 'по адресу: п. Жатай ул. Северная, д.43/1',
              items: [
                '42-67-27'
              ],
            },
            {
              name: 'Кобяйский ЭГУ ',
              address: 'по адресу: с. Кобяй ул. А.С. Терехова, д.3/1',
              items: [
                '8-411-63-26029',
                '26115'
              ],
              countys: {
                county: 'с. Сайылык ул. А.Егорова, д.2/1',
                item: '8-411-63-24588'
              }
            },
            {
              name: 'Мегино-Кангаласский ЭГУ ',
              address: 'по адресу: с. Майя ул. Советская, д.5',
              items: [
                '8-411-43-42311',
              ],
              countys: {
                county: 'с.Н.Бестях, ул. Газовиков, д.1',
                item: '8-411-43-24455'
              }
            },
            {
              name: 'Намский ЭГУ ',
              address: 'по адресу: с. Намцы ул. Цугель Аммосовой, д.7',
              items: [
                '8-411-62-41493'
              ],
            },
            {
              name: 'Хангаласский ЭГУ ',
              address: 'по адресу: г. Покровск ул. Орджоникидзе, д.76',
              items: [
                '8-411-44-23114'
              ],
            },
            {
              name: 'Хангаласский ЭГУ ',
              address: 'по адресу: г. Покровск ул. Орджоникидзе, д.76',
              items: [
                '8-411-44-23114'
              ],
            },
            {
              name: 'Хатасский ЭГУ ',
              address: 'по адресу: с. Хатассы ул. Аммосова, д.30',
              items: [
                '40-95-19'
              ],
            },
            {
              name: 'Чурапчинский ЭГУ ',
              address: 'по адресу: с.Чурапча, ул.Флегонтова , д.18/1',
              items: [
                '8-411-51-41136'
              ],
            },
          ],
          name: "Эксплуатационные участки ",
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
    return { router, call, mailOutline };
  },
});
</script>

<style scoped>
.headerAcc {
  border-bottom: 1px solid #e0e0e0;
  --inner-padding-bottom: -10px;
  --padding-bottom: 10px;
}

.contentAcc {
  margin-top: 10px;
  padding-bottom: 10px;
}

.sub-title {
  /* margin-bottom: -10px; */
  /* background-color: #dd2c00; */
}

ion-accordion-group {
  margin-bottom: 6px;
}

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