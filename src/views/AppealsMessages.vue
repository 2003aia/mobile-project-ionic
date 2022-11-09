<template>
  <ion-page>
    <Back @click="() => (checkStatus = false)" :btnSrc="
      () => {
        this.$pinia.state.value.appeals.newAppeal = false;
        router.push('/appeals');
      }
    " />
    <Layout height="false" outlineBtn="." :method="() => (checkStatus = false)" :filledBtn="'.'"
      :title="`Мои обращения`">
      <template v-slot:main-content>
        <ion-text class="title">
          {{
              this.$pinia.state.value.appeals.newAppeal
                ? "Новое обращение"
                : `Обращение №${this.$pinia.state.value.appeals.appealsItem?.id
                  ? this.$pinia.state.value.appeals.appealsItem.id
                  : ""
                }`
          }}
        </ion-text>

        <ion-text>
          <p v-show="!this.$pinia.state.value.appeals.newAppeal && category">
            {{ category }}
          </p>
        </ion-text>
        <ion-accordion-group ref="accordionSupport" v-show="this.$pinia.state.value.appeals.newAppeal">
          <ion-accordion :toggle-icon="caretDownSharp" value="second">
            <ButtonSelect class="btn-select" slot="header" :name="
              selected?.category
                ? selected.category
                : `Выберите категорию обращения`
            " />

            <div slot="content">
              <div v-for="el in appealsCategoriesResponse?.data" :key="el?.id">
                <ion-item @click="
                  () => {
                    this.$refs.accordionSupport.$el.value = undefined;
                    selectCategorie(el);
                  }
                ">
                  <ion-text class="sub-title">{{ el?.category }}</ion-text>
                </ion-item>
              </div>
            </div>
          </ion-accordion>
        </ion-accordion-group>
        <div v-show="
          (this.$pinia.state.value.appeals.appealsItem.title &&
            appealsInfoMessages &&
            !loading && !this.$pinia.state.value.appeals.newAppeal) ||
          supportCreate
        ">
          <div v-for="el in appealsInfoMessages" :key="el.id">
            <div class="message" v-if="el.support_message == false">
              <div class="message-main">
                <ion-text>{{ el.message }}</ion-text>
                <div class="chip-container" v-for="(file, index) in el?.files" :key="index">
                  <ion-chip>
                    <ion-text style="color: #7f8da8; font-size: 12px; font-weight: 400;">{{ file?.NAME || file?.name }}
                    </ion-text>
                    <ion-icon :icon="downloadOutline" @click="downloadFile(file.SRC)"></ion-icon>
                  </ion-chip>
                </div>
              </div>
              <div class="message-footer">
                <ion-text class="message-text">{{ el.date_create }}</ion-text>
              </div>
            </div>
            <div class="message-left" v-if="el.support_message == true">
              <div class="message-main">
                <ion-text>
                  {{ el.message }}
                </ion-text>
                <div class="chip-container" v-for="(file, index) in el?.files" :key="index">
                  <ion-chip>
                    <ion-text style="color: #7f8da8; font-size: 12px; font-weight: 400;">{{ file?.NAME && file?.name }}
                    </ion-text>
                    <ion-icon :icon="downloadOutline" @click="downloadFile(file.SRC)"></ion-icon>
                  </ion-chip>
                </div>
              </div>
              <div class="message-footer">
                <ion-text class="message-text">{{ el.date_create }}</ion-text>
              </div>
            </div>
          </div>
        </div>
        <ion-item lines="none" v-show="loading">
          <ion-spinner name="bubbles" />
        </ion-item>
      </template>
    </Layout>

    <div class="input-container">
      <ion-item lines="none" class="input-wrapper">
        <ion-button mode="ios" class="btn-support" fill="clear">
          <label for="file">
            <input :value="files.value" @change="filesChange" class="input-file" multiple id="file" type="file" accept="image/jpeg, application/pdf, .zip, image/png" />

            <ion-img class="input-icon-left" :src="require('@/assets/img/scrape.png')"></ion-img>
          </label>
        </ion-button>

        <ion-input :value="message.value" @input="messageChange" class="input" placeholder="Напишите сообщение" />
        <ion-button mode="ios" fill="clear" class="btn-support">
          <ion-img @click="
            () => {
              this.$pinia.state.value.appeals.newAppeal && !supportCreate
                ? createAppealHandler()
                : createMessageHandler();
            }
          " class="input-icon" slot="end" :src="require('@/assets/img/send.png')"></ion-img>
        </ion-button>
      </ion-item>
      <div class="chip-container" v-for="(el, index) in files" :key="index">
        <ion-chip>
          <ion-text>{{ el.name }}</ion-text>
          <ion-icon :icon="close" @click="() => files.splice(index, 1)"></ion-icon>
        </ion-chip>
      </div>
    </div>
  </ion-page>
</template>

<script>
import { defineComponent, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import Layout from "../components/Layout.vue";
import Back from "../components/Back.vue";
import ButtonSelect from "../components/ButtonSelect.vue";
import { caretDownSharp, close, downloadOutline } from "ionicons/icons";
import {
  IonPage,
  IonText,
  IonItem,
  IonAccordion,
  IonAccordionGroup,
  IonImg,
  IonChip,
  IonIcon,
  onIonViewDidEnter,
  IonSpinner,
  IonButton,
  IonInput,
} from "@ionic/vue";
import { storeToRefs } from "pinia";
import { Storage } from "@ionic/storage";
import { useAppealsStore } from "../stores/appeals";
import moment from "moment";

export default defineComponent({
  name: "appealsMessages",
  components: {
    IonPage,
    Layout,
    IonText,
    Back,
    IonItem,
    IonButton,
    ButtonSelect,
    IonAccordion,
    IonImg,
    IonInput,
    IonChip,
    IonIcon,
    IonSpinner,
    IonAccordionGroup,
  },
  data() {
    return {
      checkStatus: false,
      newAppeal: false,
      categories: [
        {
          name: "Вопросы по подключению (технологического подключения)",
        },
        {
          name: "Вопросы по договорам поставки газа для физических лиц",
        },
        {
          name: "Вопросы по подключению (технологического подключения)",
        },
      ],
    };
  },

  setup() {
    const router = useRouter();
    const route = useRoute();
    const selected = ref("");
    const store = new Storage();
    const loading = ref(false);
    const category = ref("");
    const appealsInfoMessages = ref([]);
    const {
      appealsCategoriesResponse,
      appealsInfoResponse,
      appealsItem,

      createMessageResponse,
    } = storeToRefs(useAppealsStore());
    const {
      getAppealsCategoreis,
      createAppeal,
      getAppealsInfo,
      createMessage,
    } = useAppealsStore();
    let message = ref("");
    let files = ref([]);
    let supportCreate = ref(false);

    const selectCategorie = (props) => {
      selected.value = props;
    };

    const getAppealsCategoriesHandler = () => {
      loading.value = true;
      getAppealsCategoreis().then(() => {
        appealsCategoriesResponse.value?.data.filter((value) => {
          loading.value = false;

          if (value.id === parseInt(appealsItem.value?.category_id))
            category.value = value.category;
        });
      });
    };
    const getAppealsInfoHandler = async () => {
      loading.value = true;

      await store.create();
      const storeValue = await store.get("support");
      const token = storeValue.token;
      if (appealsItem.value?.id) {
        getAppealsInfo(token, appealsItem.value?.id).then(() => {
          loading.value = false;
          appealsInfoMessages.value = appealsInfoResponse.value?.data.reverse();
        });
      }
    };
    const createAppealHandler = async () => {
      await store.create();
      const storeValue = await store.get("support");
      const token = storeValue.token;
      if (message.value !== "" && selected.value?.id) {
        createAppeal(token, message.value, selected.value?.id, files.value).then(() => {
          supportCreate.value = true;
          appealsInfoMessages.value = [
            {
              support_message: false,
              message: message.value,
              date_create: moment().format("DD.MM.YYYY hh:ss"),
              files: files.value,
            },
          ];
        });
      }
    };
    const createMessageHandler = async () => {
      await store.create();
      const storeValue = await store.get("support");
      const token = storeValue.token;
      if (message.value !== "") {
        createMessage(
          token,
          message.value,
          appealsItem.value.category_id,
          appealsItem.value.id,
          files.value,
        ).then(() => {
          appealsInfoMessages.value.push({
            support_message: false,
            message: message.value,
            date_create: moment().format("DD.MM.YYYY hh:ss"),
            files: files.value,
          });
          console.log("test", createMessageResponse.value);
        });
      }
    };
    const messageChange = (e) => {
      message.value = e.currentTarget.value;
    };

    const filesChange = (e) => {
      let files2 = e.currentTarget.files;
      // console.log(files.value, 'test')
      for (let index = 0; index < files2.length; index++) {
        const element = files2[index];
        if (files.value.length < 5) {
          files.value.push(element)
        }

      }
    };
    const downloadFile = (file) => {
      window.open(file, '_blank')
    }

    onIonViewDidEnter(() => {
      getAppealsCategoriesHandler();
      getAppealsInfoHandler();
    });
    return {
      supportCreate,
      router,
      route,
      messageChange,
      loading,
      message,
      files,
      filesChange,
      downloadFile,
      caretDownSharp,
      downloadOutline,
      close,
      selectCategorie,
      createAppealHandler,
      createMessageHandler,
      selected,
      category,
      appealsInfoMessages,
      appealsCategoriesResponse,
    };
  },
});
</script>

<style scoped>
.btn-support {
  --padding-start: 0;
  --padding-end: 0;
  width: 30px;
}

.btn-select {
  /* background: green; */
  margin-top: 10px;
}

.message-left .message-main {
  margin-left: 0;
  background: #0378b4;
  border-radius: 10px 10px 10px 0px;
}

.message-left {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.message-left .message-main ion-text {
  color: #fff;
}

.message-left .message-footer {
  width: 100%;
}

.message-main {
  background: #eaeaea;
  padding: 10px;
  width: fit-content;
  margin-left: auto;
  border-radius: 10px 10px 0px 10px;
}

.message-main ion-text {
  color: #000;
  font-size: 16px;
  font-weight: 400;
  overflow-wrap: anywhere;
  line-height: 20px;
}

.message-footer {
  width: fit-content;
  margin-left: auto;
  margin-top: 10px;
  margin-bottom: 20px;
}

.message-text {
  margin-right: 10px;
}

.input-icon {
  width: 30px;
  height: 30px;
}

.input-icon-left {
  width: 30px;
  height: 30px;
}

.input {
  border: none;
  width: 100%;
  padding: 22px 0px 22px 10px;
  margin-bottom: 0;
}

.input:focus {
  outline: none !important;
  caret-color: #000;
}

.input-wrapper {
  --padding-bottom: 0;
}

.input-container {
  background: #fff;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
}

ion-chip {
  background: #f3f6fa;
  border-radius: 4px;
  padding: 13px;
  margin-bottom: 5px;
  margin-left: 5px;
}

.chip-container {
  padding: 0px 15px 5px 15px;
}

ion-chip ion-text {
  color: #7f8da8;
  font-size: 12px;
  font-weight: 400;
}

ion-chip ion-icon {
  color: #3f64a9;
  width: 16px;
  height: 16px;
}

.title {
  margin-bottom: 10px;
}

label {
  display: block;
  margin-bottom: 0px;
}

.input-file[type="file"] {
  display: none;
}

ion-item {
  --inner-padding-start: 15px;
  --padding-bottom: 15px;
}
</style>
