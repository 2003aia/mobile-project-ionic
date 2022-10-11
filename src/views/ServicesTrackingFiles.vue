<template>
  <ion-page>
    <Back
      :btnSrc="
        () => {
          if (sent === true) sent = false;
          else {
            router.push('/tabs/servicesTrackingTerms');
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
      title="Запрос на предоставление информации о ходе выполнения мероприятий по подключению (технологическому присоединению) физического лица
"
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
          <div v-for="el in data" :key="el.text">
            <ion-text>
              <p class="text">
                {{ el.text }}
              </p>
            </ion-text>
            <InputFile name="0" />
          </div>
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
import { IonPage, IonText, IonItem,} from "@ionic/vue";
import Back from "../components/Back.vue";
import { caretDownSharp } from "ionicons/icons";
import InputFile from "../components/InputFile.vue";

export default defineComponent({
  name: "servicesTrackingFiles",
  components: {
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
          text: "Документы, подтверждающие право собственности заявителя в отношении помещений, газоснабжение которых необходимо обеспечить, или иные основания пользования этими помещениями (выписка из ЕГРН, договор социального найма, договор аренды и т.д.; все страницы) *",
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