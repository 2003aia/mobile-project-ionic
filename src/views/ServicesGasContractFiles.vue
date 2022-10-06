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
            storageHandler();
          } else {
            router.push('/tabs/services');
          }
        }
      "
      :loading="loading"
      outlineBtn="."
      title="Заключения договора поставки газа для обеспечения коммунально - бытовых нужд гражданина собственниками квартир"
    >
      <template v-if="sent === false" v-slot:header-content>
        <ion-text>
          <p class="text-20-600">Загрузка электронных копий документов</p>
        </ion-text>
      </template>
      <template v-slot:main-content>
        <div v-show="sent === true">
          <ion-text
            ><p class="title ion-text-start">Спасибо!</p>
            <p>
              {{ this.$pinia.state.value?.services?.servicesResponse?.message }}
            </p>
            <p>
              Ваша заявка принята в обработку. После процедуры идентификации на
              предмет соответствия достоверности введенных данных, с Вами
              свяжется сотрудник УГРС. По вопросам регистрации заявки обращаться
              по номеру 319-555 в будни с 08.00 до 17.00
            </p>
          </ion-text>
        </div>
        <div v-show="sent === false">
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
            <ion-text>
              <p class="text">
                {{ el.text.slice(0, -1) }}
                <ion-text class="dot" v-show="el.required">*</ion-text>
              </p>
            </ion-text>
            <ion-item lines="none" v-show="el?.value">
              <ion-text class="file-text blue">
                <!-- {{ el?.value?.name }} -->
                {{ el.value?.name }}
              </ion-text>
              <ion-icon
                @click="() => (el.value = null)"
                class="history-icon"
                slot="end"
                :icon="trashOutline"
              />
            </ion-item>
            <ion-text v-show="el.error === true && el.value == null">
              <p class="error">Выберите файл</p>
            </ion-text>
            <InputFile
              :data="el.field"
              :accept="'image/jpeg, application/pdf, .zip, image/png,'"
              @change="(e) => el.fn(e)"
            />
          </ion-list>
          <ion-text
            v-show="
              this.$pinia.state.value?.services?.servicesResponse?.error ===
              true
            "
          >
            <p class="error">Что-то пошло не так</p>
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
import { IonPage, IonText, IonItem, IonList, IonIcon } from "@ionic/vue";
import Back from "../components/Back.vue";
import InputFile from "../components/InputFile.vue";
import {
  documentTextOutline,
  caretDownSharp,
  trashOutline,
} from "ionicons/icons";
import { mapActions } from "pinia";

import { useServicesStore } from "../stores/services";

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
    IonIcon,
  },
  methods: {
    ...mapActions(useServicesStore, ["services", "uploadFiles"]),
    async storageHandler() {
      let formFiles = {};
      let formFilesEmpty = {};
      let check = this.$data.data.filter((el) => {
        if (el.required === true) {
          el.error = true;
          return el.value === null;
        }
      });
      if (check.length === 0) {
        this.$data.loading = true;

        let files = [];
        const toBase64 = (file) =>
          new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);

            reader.onload = () => {
              resolve(reader.result);
            };
            reader.onerror = (error) => reject(error);
          });
        let checkf = this.$data.data.filter((el) => {
          if (el.value === null) {
            return el;
          }
        });
        for (let index = 0; index < checkf.length; index++) {
          const element = checkf[index];
          formFilesEmpty[element.field] = {
            NAME: element.text,
            VALUE: element.value,
          };
        }
        for (let index = 0; index < this.$data.data.length; index++) {
          const element = this.$data.data[index];
          files.push({
            field: element.field,
            text: element.text,
            title: element.value?.name,
            file:
              element.value !== null ? await toBase64(element.value) : false,
          });
        }
        this.uploadFiles(files).then(() => {
          for (
            let index = 0;
            index < this.$pinia.state.value?.services?.filesResponse.length;
            index++
          ) {
            const element =
              this.$pinia.state.value?.services?.filesResponse[index];
            formFiles[element.field] = {
              NAME: element.text,
              VALUE: element.fileId,
            };
          }

          let userObject = {
            ...this.$pinia.state.value?.services?.form,
            ...formFiles,
            ...formFilesEmpty,
          };

          this.services(userObject).then(() => {
            this.$data.sent = true;
            this.$data.loading = false;
            if (
              this.$pinia.state.value?.services?.servicesResponse?.error ===
              true
            )
              this.$data.sent = false;

            console.log(
              userObject,
              "test",
              this.$pinia.state.value?.services?.servicesResponse
            );
          });
        });

        /* if (this.$pinia.state.value?.services?.form) {
          this.$pinia.state.value.services.form = userObject;
        } */
      }
    },
  },
  data() {
    return {
      sent: false,
      loading: false,
      data: [
        {
          field: "FILE_C_6",
          text: "Копия основного документа, удостоверяющий личность (паспорт гражданина вторая, третья страницы с персональными данными гражданина, страницы с отметкой о регистрации)",
          required: true,
          fn: function (e) {
            this.value = e.target.files[0];
          },
          value: null,
        },
        {
          required: true,
          field: "FILE_C2_6_DOVERENNOST",
          text: "Документы, подтверждающие право собственности заявителя в отношении помещений, газоснабжение которых необходимо обеспечить, или иные основания пользования этими помещениями (выписка из ЕГРН, договор социального найма, договор аренды и т.д.; все страницы) ",
          fn: function (e) {
            this.value = e.target.files[0];
          },
          value: null,
        },
        {
          field: "FILE_C2_3_1",
          text: "Документы, подтверждающие размеры общей площади жилых помещений в многоквартирном доме, площади нежилых отапливаемых помещений, относящихся к общему имуществу многоквартирного дома (технический паспорт, технический план) ",
          fn: function (e) {
            this.value = e.target.files[0];
          },
          required: false,

          value: null,
        },
        {
          field: "FILE_C2_3_2",
          required: false,
          text: "Документы, подтверждающие размеры общей площади жилых и отапливаемых вспомогательных помещений жилого дома, а также размер (объем) отапливаемых помещений надворных построек, - для индивидуальных домовладений  ",
          fn: function (e) {
            this.value = e.target.files[0];
          },
          value: null,
        },
        {
          required: true,
          field: "FILE_C2_4_1",
          text: "Документы, подтверждающие количество лиц, проживающих в жилых помещениях многоквартирных домов и жилых домов (справка о составе семьи со сроком давности не более 1 месяца); *",
          fn: function (e) {
            this.value = e.target.files[0];
          },
          value: null,
        },
        {
          field: "FILE_C2_5_1",
          text: "Документы, подтверждающие состав и тип газоиспользующего оборудования, входящего в состав внутридомового газового оборудования, и соответствие этого оборудования установленным для него техническим требованиям  ",
          fn: function (e) {
            this.value = e.target.files[0];
          },
          value: null,
          required: false,
        },
        {
          field: "FILE_C2_6_1",
          text: "Документы, подтверждающие тип установленного прибора (узла) учета газа, место его присоединения к газопроводу, дату опломбирования прибора учета газа заводом-изготовителем или организацией, осуществлявшей его последнюю поверку (паспорт на счётчик )  ",
          fn: function (e) {
            this.value = e.target.files[0];
          },
          value: null,
          required: false,
        },
        {
          field: "FILE_C2_11_1",
          text: "Копия договора о техническом обслуживании и ремонте внутридомового и (или) внутриквартирного газового оборудования  ",
          fn: function (e) {
            this.value = e.target.files[0];
          },
          value: null,
          required: false,
        },
        {
          field: "FILE_C2_12_1",
          text: "Копия акта о технологическом подключении или копия акта о готовности сетей газопотребления и газоиспользующего оборудования объекта капитального строительства к подключению (в случае, если оферта направляется до завершения мероприятий по подключению)   ",
          fn: function (e) {
            this.value = e.target.files[0];
          },
          value: null,
          required: false,
        },
        {
          field: "FILE_C2_13_1",
          text: "Согласие от всех участников долевой собственности, в случае, если имущество находится в долевой собственности, согласно ст. 247 ГК РФ   ",
          fn: function (e) {
            this.value = e.target.files[0];
          },
          value: null,
          required: false,
        },
        {
          field: "FILE_C2_14_1",
          text: "Доверенность или иные документы, подтверждающие полномочия представителя заявителя (в случае если заявка о подключении (технологическом присоединении) подается представителем заявителя)  ",
          fn: function (e) {
            this.value = e.target.files[0];
          },
          value: null,
          required: false,
        },
        {
          field: "FILE_C2_15_1",
          text: "Дополнительное поле для загрузки документов  ",
          fn: function (e) {
            this.value = e.target.files[0];
          },
          value: null,
          required: false,
        },
      ],
    };
  },
  setup() {
    const router = useRouter();
    return { router, documentTextOutline, caretDownSharp, trashOutline };
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
.file-text {
  word-break: break-all;
}
</style>
