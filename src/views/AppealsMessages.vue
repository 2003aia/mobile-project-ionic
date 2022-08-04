<template>
  <ion-page>
    <Back
      @click="() => (checkStatus = false)"
      :btnSrc="
        () => {
          router.push('/appeals');
        }
      "
    />
    <Layout
      height="false"
      outlineBtn="."
      :method="() => (checkStatus = false)"
      :filledBtn="'.'"
      :title="`Мои обращения`"
    >
      <template v-slot:main-content>
        <ion-text class="title">
          {{
            route.params.newAppeal
              ? "Новое обращение"
              : `Обращение №${route.params?.id ? route.params.id : ""}`
          }}
        </ion-text>

        <ion-text
          ><p v-if="!route.params.newAppeal && category">
            {{ category }}
          </p></ion-text
        >

        <ion-accordion-group v-if="route.params?.newAppeal">
          <ion-accordion :toggle-icon="caretDownSharp" value="second">
            <ButtonSelect
              slot="header"
              :name="
                selected?.category
                  ? selected.category
                  : `Выберите категорию обращения`
              "
            />
            <div slot="content">
              <ion-list
                v-for="el in appealsCategoriesResponse.data"
                :key="el.id"
              >
                <ion-item @click="selectCategorie(el)">
                  <ion-text class="sub-title">{{ el.category }}</ion-text>
                </ion-item>
              </ion-list>
            </div>
          </ion-accordion>
        </ion-accordion-group>
        <div v-if="route.params.title && appealsInfoMessages">
          <div v-for="el in appealsInfoMessages" :key="el.id">
            <div class="message" v-if="el.support_message == false">
              <div class="message-main">
                <ion-text>{{ el.message }}</ion-text>
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
              </div>
              <div class="message-footer">
                <ion-text class="message-text">{{ el.date_create }}</ion-text>
              </div>
            </div>
          </div>
        </div>

        <div class="loading" v-if="!appealsInfoMessages || !category">
          <ion-spinner name="bubbles"></ion-spinner>
        </div>
      </template>
    </Layout>

    <div class="input-container">
      <ion-item lines="none" class="input-wrapper">
        <label for="file">
          <input
            :value="files.value"
            @change="filesChange"
            class="input-file"
            multiple
            id="file"
            type="file"
          />

          <ion-img
            class="input-icon-left"
            slot="start"
            :src="require('@/assets/img/scrape.png')"
          ></ion-img>
        </label>

        <input
          :value="message.value"
          @change="messageChange"
          class="input"
          placeholder="Напишите сообщение"
        />
        <ion-img
          @click="
            () => {
              route.params?.newAppeal
                ? createAppealHandler()
                : createMessageHandler()
            }
          "
          class="input-icon"
          slot="end"
          :src="require('@/assets/img/send.png')"
        ></ion-img>
      </ion-item>
      <div class="chip-container" v-if="files">
        <ion-chip>
          <ion-text>{{ files }}</ion-text>
          <ion-icon :icon="close"></ion-icon>
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
import { caretDownSharp, close } from "ionicons/icons";
import {
  IonPage,
  IonText,
  IonItem,
  IonAccordion,
  IonAccordionGroup,
  IonImg,
  IonList,
  IonChip,
  IonIcon,
  onIonViewDidEnter,
  IonSpinner,
} from "@ionic/vue";
import { storeToRefs } from "pinia";
import { Storage } from "@ionic/storage";
import { useAppealsStore } from "../stores/appeals";

export default defineComponent({
  name: "appealsMessages",
  components: {
    IonPage,
    Layout,
    IonText,
    Back,
    IonItem,
    ButtonSelect,
    IonAccordion,
    IonImg,
    IonList,
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
    const category = ref("");
    const appealsInfoMessages = ref([]);
    const {
      appealsCategoriesResponse,
      createAppealResponse,
      appealsInfoResponse,
      createMessageResponse,
    } = storeToRefs(useAppealsStore());
    const {
      getAppealsCategoreis,
      createAppeal,
      getAppealsInfo,
      createMessage,
    } = useAppealsStore();
    let message = ref("");
    let files = ref("");

    const selectCategorie = (props) => {
      selected.value = props;
    };

    const getAppealsCategoreisHandler = () => {
      getAppealsCategoreis().then(() => {
        appealsCategoriesResponse.value?.data.filter((value) => {
          if (value.id === JSON.parse(route.params.category_id))
            category.value = value.category;
        });
      });
    };
    const getAppealsInfoHandler = async () => {
      await store.create();
      const storeValue = await store.get("token");
      const token = JSON.parse(storeValue)?.token;
      if (route.params?.id) {
        getAppealsInfo(token, route.params?.id).then(() => {
          appealsInfoMessages.value = appealsInfoResponse.value?.data.reverse();
        });
      }
    };
    const createAppealHandler = async () => {
      await store.create();
      const storeValue = await store.get("token");
      const token = JSON.parse(storeValue).token;
      if (message.value !== "") {
        createAppeal(token, message.value, selected.value?.id).then(() => {
          console.log("test", createAppealResponse);
        });
      }
    };
    const createMessageHandler = async () => {
      await store.create();
      const storeValue = await store.get("token");
      const token = JSON.parse(storeValue).token;
      console.log("route,params test", route.params, message.value);
      if (message.value !== "") {
        createMessage(
          token,
          message.value,
          route.params.category_id,
          route.params.id
        ).then(() => {
          console.log("test", createMessageResponse.value);
        });
      }
    };
    const messageChange = (e) => {
      message.value = e.currentTarget.value;
    };

    const filesChange = (e) => {
      console.log(e, "files onchange");
      files.value = e.currentTarget.value;
    };

    onIonViewDidEnter(() => {
      getAppealsCategoreisHandler();
      getAppealsInfoHandler();
    });
    return {
      router,
      route,
      messageChange,
      message,
      files,
      filesChange,
      caretDownSharp,
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
  width: 35px;
  height: 35px;
  margin-right: 10px;
  margin-left: 10px;
}
.input-icon-left {
  margin-left: 10px;
  width: 35px;
  height: 35px;

  margin-right: 0;
}
.input {
  border: none;
  width: 100%;
  padding: 22px 0px 22px 10px;
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

ion-spinner {
  top: -20px;
}
.loading {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>