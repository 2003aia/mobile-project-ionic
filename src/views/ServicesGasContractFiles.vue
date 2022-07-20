<template>
  <ion-page>
    <Back
      :btnSrc="
        () => {
          if (sent === true) sent = false;
          else {
            router.push('/tabs/servicesGasContractCheckbox');
          }
        }
      "
    />
    <Layout
      height="false"
      :filledBtn="sent === false ? 'Далее' : 'Готово'"
      :method="
        () => {
          if (sent === false) {
            sent = true;
          } else {
            router.push('/tabs/services');
          }
        }
      "
      outlineBtn="."
      title="Заключения договора поставки газа для обеспечения коммунально - бытовых нужд гражданина собственниками квартир"
    >
      <template v-if="sent === false" v-slot:header-content>
        <ion-text>
          <p class="text-20-600">Загрузка электронных копий документов</p>
        </ion-text>
      </template>
      <template v-slot:main-content>
        <div v-if="sent === true">
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
        <div v-if="sent === false">
          <ion-item>
            <ion-text>
              Для загрузки возможны следующие типы файлов: *.jpg, *.jpeg, *.zip,
              *.pdf, *.png Размер одного файла не должен превышать 5 Мб
              <p class="sub-title">
                Важно! Если загружаемый документ содержит несколько страниц, то
                просим загрузить одним файлом в формате *.pdf
              </p>
              <p class="text">
                <ion-text class="dot">*</ion-text>
                - обязательное поле для заполнения.
              </p>
            </ion-text>
          </ion-item>

          <ion-list v-for="el in data" :key="el.text">
            <div>
              <ion-text>
                <p class="text">
                  {{ el.text.slice(0, -1) }}
                  <ion-text
                    class="dot"
                    v-if="el.text.substr(el.text.length - 1) === '*'"
                    >*</ion-text
                  >
                </p>
              </ion-text>
              <InputFile @change="el.fn" />
            </div>
          </ion-list>
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
import InputFile from "../components/InputFile.vue";
import { documentTextOutline } from "ionicons/icons";

export default defineComponent({
  name: "servicesGasContractFiles",
  components: {
    IonList,
    IonPage,
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
          text: "Копия основного документа, удостоверяющий личность (паспорт гражданина вторая, третья страницы с персональными данными гражданина, страницы с отметкой о регистрации) *",
          fn: function (e) {
            console.log(e, "test");
          },
        },
        {
          text: "Документы, подтверждающие право собственности заявителя в отношении помещений, газоснабжение которых необходимо обеспечить, или иные основания пользования этими помещениями (выписка из ЕГРН, договор социального найма, договор аренды и т.д.; все страницы) *",
          fn: function (e) {
            console.log(e, "test");
          },
        },
        {
          text: "Документы, подтверждающие размеры общей площади жилых помещений в многоквартирном доме, площади нежилых отапливаемых помещений, относящихся к общему имуществу многоквартирного дома (технический паспорт, технический план) ",
          fn: function (e) {
            console.log(e, "test");
          },
        },
        {
          text: "Документы, подтверждающие размеры общей площади жилых и отапливаемых вспомогательных помещений жилого дома, а также размер (объем) отапливаемых помещений надворных построек, - для индивидуальных домовладений  ",
          fn: function (e) {
            console.log(e, "test");
          },
        },
        {
          text: "Документы, подтверждающие количество лиц, проживающих в жилых помещениях многоквартирных домов и жилых домов (справка о составе семьи со сроком давности не более 1 месяца); *",
          fn: function (e) {
            console.log(e, "test");
          },
        },
        {
          text: "Документы, подтверждающие состав и тип газоиспользующего оборудования, входящего в состав внутридомового газового оборудования, и соответствие этого оборудования установленным для него техническим требованиям  ",
          fn: function (e) {
            console.log(e, "test");
          },
        },
        {
          text: "Документы, подтверждающие тип установленного прибора (узла) учета газа, место его присоединения к газопроводу, дату опломбирования прибора учета газа заводом-изготовителем или организацией, осуществлявшей его последнюю поверку (паспорт на счётчик )  ",
          fn: function (e) {
            console.log(e, "test");
          },
        },
        {
          text: "Копия договора о техническом обслуживании и ремонте внутридомового и (или) внутриквартирного газового оборудования  ",
          fn: function (e) {
            console.log(e, "test");
          },
        },
        {
          text: "Копия акта о технологическом подключении или копия акта о готовности сетей газопотребления и газоиспользующего оборудования объекта капитального строительства к подключению (в случае, если оферта направляется до завершения мероприятий по подключению)   ",
          fn: function (e) {
            console.log(e, "test");
          },
        },
        {
          text: "Согласие от всех участников долевой собственности, в случае, если имущество находится в долевой собственности, согласно ст. 247 ГК РФ   ",
          fn: function (e) {
            console.log(e, "test");
          },
        },
        {
          text: "Доверенность или иные документы, подтверждающие полномочия представителя заявителя (в случае если заявка о подключении (технологическом присоединении) подается представителем заявителя)  ",
          fn: function (e) {
            console.log(e, "test");
          },
        },
        {
          text: "Дополнительное поле для загрузки документов  ",
          fn: function (e) {
            console.log(e, "test");
          },
        },
      ],
    };
  },
  setup() {
    const router = useRouter();
    return { router, documentTextOutline };
  },
});
</script>

<style scoped>
.sub-title {
  margin-top: 15px;
  margin-bottom: 10px;
}
.dot {
  color: #62d0ce;
}
.text {
  margin-bottom: 10px;
  margin-top: 0px;
}
</style>