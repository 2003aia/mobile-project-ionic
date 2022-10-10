<template>
  <ion-page>
    <Back
      :btnSrc="
        () => {
          if (sent === true) sent = false;
          else {
            router.push('/tabs/servicesRequestCalc');
          }
        }
      "
    /><!-- () => {
          if (sent === false) {
            sent = true;
          } else {
            router.push('/tabs/services');
          }
        } -->
    <Layout
      :method="
        sent === false ? storageHandler : () => router.push('/tabs/services')
      "
      :loading="loading"
      height="false"
      :filledBtn="sent === false ? 'Далее' : 'Готово'"
      outlineBtn="."
      title="Заявка на социальную газификацию"
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
                {{ el.text
                }}<ion-text class="blue" v-show="el.required">*</ion-text>
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
              :accept="'image/jpeg, application/pdf, .zip, image/png,'"
              name="0"
              :changeHandler="(e) => el.fn(e)"
            />
          </ion-list>
          <ion-text
            v-show="
              this.$pinia.state.value?.services?.servicesResponse?.error ===
              true
            "
          >
            <p class="error">Что то пошло не так</p>
          </ion-text>
        </div>
        <div
          v-if="
            this.$pinia.state.value?.services?.servicesResponse?.error === false
          "
        >
          <ion-text>
            <p class="title ion-text-start">Спасибо!</p>
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
import { caretDownSharp, trashOutline } from "ionicons/icons";
import InputFile from "../components/InputFile.vue";
import { mapActions } from "pinia";
import { useServicesStore } from "../stores/services";

export default defineComponent({
  name: "servicesRequestFiles",
  components: {
    IonPage,
    Layout,
    IonList,
    IonText,
    InputFile,
    Back,
    IonIcon,
    IonItem,
  },
  methods: {
    ...mapActions(useServicesStore, ["services", "uploadFiles"]),
    async storageHandler() {
      let check = this.$data.data.filter((el) => {
        if (el.required === true) {
          el.error = true;
          return el.value === null;
        }
      });
      if (check.length === 0) {
        let formFiles = {};
        let formFilesEmpty = {};
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

        this.$data.loading = true;
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
            ) {
              this.$data.sent = false;
            }
            console.log(
              formFiles,
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
      loading: false,
      sent: false,

      data: [
        {
          field: "FILE_C_3",
          value: null,
          required: false,
          text: "Топографическая карта участка в масштабе 1 к 500 (не прилагается, если заказчик - физическое лицо, осуществляющее создание (реконструкцию) объекта индивидуального жилищного строительства)",
          fn: function (e) {
            this.value = e.target.files[0];
          },
        },
        {
          required: true,
          field: "FILE_C_9",
          value: null,
          text: "Копия документа, подтверждающего право собственности или иное предусмотренное законом основание на домовладение",
          fn: function (e) {
            this.value = e.target.files[0];
          },
        },
        {
          required: true,
          field: "FILE_C_10",
          value: null,
          text: "Копия документа, подтверждающего право собственности или иное предусмотренное законом основание на земельный участок, на котором расположено домовладение заявителя",
          fn: function (e) {
            this.value = e.target.files[0];
          },
        },
        {
          value: null,
          field: "FILE_C2_2",
          required: true,
          text: "Ситуационный план расположения земельного участка с привязкой к территории населенного пункта (формат А4)",
          fn: function (e) {
            this.value = e.target.files[0];
          },
        },
        {
          field: "FILE_C2_14_1",
          value: null,
          required: false,

          text: `Доверенность или иные документы, подтверждающие полномочия представителя заявителя (в случае если заявка о подключении (технологическом присоединении) подается представителем заявителя)`,
          fn: function (e) {
            this.value = e.target.files[0];
          },
        },
      ],
    };
  },
  setup() {
    const router = useRouter();
    return { router, caretDownSharp, trashOutline };
  },
});
</script>

<style scoped>
.text {
  margin-bottom: 10px;
  margin-top: 5px;
}

.file-text {
  word-break: break-all;
}
</style>
