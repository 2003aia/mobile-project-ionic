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
      :method="
        () => {
          if (open == false) {
            router.push('/tabs/servicesRequestFiles');
          }
        }
      "
      :method2="
        () => {
          open = false;
        }
      "
      :filledBtn="open === true ? 'Рассчитать ' : 'Далее'"
      :outlineBtn="open === true ? 'Установить значение' : '.'"
      title="Заявка на социальную газификацию"
    >
      <template v-slot:header-content>
        <ion-text>
          <p class="text-20-600">
            Определение максимального часового расхода газа
          </p>
        </ion-text>
      </template>
      <template v-slot:main-content>
        <div v-if="open === false">
          <ion-text>
            <p>
              <ion-text class="dot">*</ion-text> - обязательное поле для
              заполнения.
            </p>
            <p class="sub-title">
              Планируемая величина максимального часового расхода газа
              <ion-text class="dot">*</ion-text>
            </p>
          </ion-text>

          <Input name="0 " />
          <ion-text>
            <p class="sub-title">Калькулятор МЧРГ</p>
          </ion-text>
          <Input
            name="Открыть  "
            @click="
              () => {
                if (open === false) {
                  open = true;
                } else {
                  open = false;
                }
              }
            "
          />
        </div>
        <div v-if="open === true">
          <ion-text>
            <p class="sub-title">Площадь помещения (м2)</p>
          </ion-text>
          <Input :name="'150'" />
          <ion-text>
            <p class="input-text">
              Уточнять у заявителя, площадь всех помещений суммарно
            </p>
          </ion-text>
          <ion-text>
            <p class="sub-title">Высота наружная (м)</p>
          </ion-text>
          <Input :name="'2'" />
          <ion-text>
            <p class="input-text">
              У заявителя высота здания снаружи (без кровли)
            </p>
          </ion-text>
          <ion-text>
            <p class="sub-title">Наличие газовой плиты</p>
          </ion-text>
          <InputCheckbox
            class="input-checkbox"
            :name="'С плитой в кол-ве 1шт'"
          />
          <InputCheckbox :name="'Без плиты'" />
          <ion-text
            ><p class="sub-title footer">
              У вас примерный МЧРГ: 3.32
            </p></ion-text
          >
        </div>
      </template>
    </Layout>
  </ion-page>
</template>


<script>
import { defineComponent } from "vue";
import { useRouter } from "vue-router";
import Layout from "../components/Layout.vue";
import { IonPage, IonText } from "@ionic/vue";
import Back from "../components/Back.vue";
import { documentTextOutline } from "ionicons/icons";
import Input from "../components/Input.vue";
import InputCheckbox from "../components/InputCheckbox.vue";

export default defineComponent({
  name: "servicesRequestCalc",
  components: {
    InputCheckbox,
    Input,
    IonPage,
    Layout,
    IonText,
    Back,
  },
  data() {
    return {
      open: false,
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
  margin-top: 0px;
  margin-bottom: 10px;
}
.dot {
  color: #62d0ce;
}
.input-text {
  margin-top: -6px;
}
.input-checkbox {
  margin-top: -10px;
}
.footer {
  margin-top: 20px;
}
</style>