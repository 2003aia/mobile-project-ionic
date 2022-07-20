<template>
  <ion-page>
    <Back
      :btnSrc="
        () => {
          if (sent === true) sent = false;
          else {
            router.push('/tabs/servicesTechAllianceChoose');
          }
        }
      "
    />
    <Layout
      :method="
        () => {
          if (sent === false) {
            sent = true;
          } else {
            router.push('/tabs/services');
          }
        }
      "
      height="false"
      :filledBtn="sent === false ? 'Далее' : 'Готово'"
      outlineBtn="."
      title="Онлайн-заявка на технологическое подключение"
    >
      <template v-if="sent === false" v-slot:header-content>
        <ion-text>
          <p class="text-20-600">Загрузка электронных копий документов</p>
        </ion-text>
      </template>
      <template v-slot:main-content>
        <div v-if="sent === false">
          <ion-item>
            <ion-text>
              <p>
                Для загрузки возможны следующие типы файлов: *.jpg, *.jpeg,
                *.zip, *.pdf, *.png Размер одного файла не должен превышать 5 Мб
              </p>
              <p class="sub-title">
                Важно! Если загружаемый документ содержит несколько страниц, то
                просим загрузить одним файлом в формате *.pdf
              </p>
            </ion-text>
          </ion-item>
          <ion-list v-for="el in data" :key="el.text">
            <ion-text>
              <p class="text">
                {{ el.text }}
              </p>
            </ion-text>
            <InputFile name="0" />
          </ion-list>
        </div>
        <div v-if="sent === true">
          <ion-text>
            <p class="title ion-text-start">Спасибо!</p>
            <p>
              Ваша заявка принята в обработку. После процедуры идентификации на
              предмет соответствия достоверности введенных данных, с Вами
              свяжется сотрудник УГРС. По вопросам регистрации заявки обращаться
              по номеру 319-555 в будни с 08.00 до 17.00
            </p>
          </ion-text>
        </div>
      </template>
    </Layout>
  </ion-page>
</template>


<script>
import { defineComponent } from "vue";
import { useRouter } from "vue-router";
import Layout from "../components/Layout.vue";
import { IonPage, IonText, IonItem, IonList } from "@ionic/vue";
import Back from "../components/Back.vue";
import { caretDownSharp } from "ionicons/icons";
import InputFile from "../components/InputFile.vue";

export default defineComponent({
  name: "servicesTechAllianceFiles",
  components: {
    IonPage,
    IonList,
    Layout,
    IonText,
    InputFile,
    Back,
    IonItem,
  },
  data() {
    return {
      sent: false,
      data: [
        {
          text: "Топографическая карта участка в масштабе 1 к 500 (не прилагается, если заказчик - физическое лицо, осуществляющее создание (реконструкцию) объекта индивидуального жилищного строительства)",
          fn: function (e) {
            console.log("files", e);
          },
        },
        {
          text: "Копия документа, подтверждающего право собственности или иное предусмотренное законом основание на объект капитального строительства и (или) земельный участок, на котором расположены (будут располагаться) объекты капитального строительства заявителя *",
          fn: function (e) {
            console.log("files", e);
          },
        },
        {
          text: "Ситуационный план расположения земельного участка с привязкой к территории населенного пункта (формат А4) *",
          fn: function (e) {
            console.log("files", e);
          },
        },
        {
          text: "Расчет максимального часового расхода газа (не прилагается, если планируемый максимальный часовой расход газа не более 7 куб. метров)",
          fn: function (e) {
            console.log("files", e);
          },
        },
        {
          text: `Копия документа, подтверждающего право собственности или иное предусмотренное законом основание на объект капитального строительства и (или) земельный участок, на котором расположены (будут располагаться) объекты капитального строительства заявителя * Загрузить документ`,
          fn: function (e) {
            console.log("files", e);
          },
        },
        {
          text: `Заверенная в установленном порядке копия договора о пользовании объектами инфраструктуры и другим имуществом общего пользования НКО`,
          fn: function (e) {
            console.log("files", e);
          },
        },
        {
          text: `Доверенность или иные документы, подтверждающие полномочия представителя заявителя (в случае если заявка о подключении (технологическом присоединении) подается представителем заявителя)`,
          fn: function (e) {
            console.log("files", e);
          },
        },
      ],
    };
  },
  setup() {
    const router = useRouter();
    return { router, caretDownSharp };
  },
});
</script>

<style scoped>
.text {
  margin-bottom: 10px;
  margin-top: 5px;
}
</style>