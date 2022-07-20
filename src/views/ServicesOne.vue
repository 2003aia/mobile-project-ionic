<template>
  <ion-page>
    <Back />
    <Layout
      :method="
        () => router.push({ name: 'servicesOneSelect', params: { next: true } })
      "
      height="false"
      filledBtn="Далее"
      outlineBtn="."
      title="Разовая услуга"
    >
      <template v-slot:header-content>
        <ion-text>
          <p class="text-20-600">Общие сведения для формы заявления</p>

          <p class="text-white">
            <ion-text class="main-subtitle"> Внимание! </ion-text>
            Уважаемые Абоненты, воспользоваться данным сервисом могут только
            Абоненты, заключившие договор на выполнение работ по техническому
            обслуживанию и ремонту внутридомового газового оборудования с
            Управлением газораспрделеиельных сетей АО «Сахатранснефтегаз». Перед
            подачей заявки, убедитесь в налчиии договора для ввода номера в поле
            Анкеты.
          </p>
        </ion-text>
      </template>
      <template v-slot:main-content>
        <ion-text>
          <p class="title ion-text-start">Данные заявителя</p>
          <p>
            <ion-text class="dot">*</ion-text> - обязательное поле для
            заполнения.
          </p>

          <Input name="Укажите имя " :required="true" />
          <Input name="Укажите фамилию " :required="true" />
          <Input name="Укажите отчество" :required="true" />
          <Input name="Место жительства " :required="true" />
          <Input name="+7(996)-915-88-31 " :required="true" />
          <Input name="Pochta@mail.ru " :required="true" />
        </ion-text>
      </template>
      <template v-slot:content>
        <LayoutBox>
          <template v-slot:content>
            <ion-text>
              <p class="title ion-text-start">Данные паспорта</p>
              <p>
                <ion-text class="dot">*</ion-text> - обязательное поле для
                заполнения.
              </p>
            </ion-text>

            <Input name="Серия " :required="true" />
            <Input name="Номер " :required="true" />
            <Input name="Кем выдан " :required="true" />
            <Input name="Дата выдачи паспорта " :required="true" />
          </template>
        </LayoutBox>
        <LayoutBox>
          <template v-slot:content>
            <ion-text>
              <p class="title ion-text-start">Данные об объекте газификации</p>
              <p>
                <ion-text class="dot">*</ion-text> - обязательное поле для
                заполнения.
              </p>
            </ion-text>

            <Input name="Населенный пункт" :required="true" />
            <Input name="Улица " :required="true" />
            <Input name="№ дома  " :required="true" />
            <Input name="№ корпуса " :required="true" />
            <Input name="№ квартиры " :required="true" />
            <ion-text>
              <p class="sub-title">Вид работ</p>
            </ion-text>
            <ButtonSelect
              name="Виберите вариант "
              :btnSrc="
                () => {
                  router.push('/tabs/servicesOneSelect');
                }
              "
            />
            <ion-text>
              <p class="sub-title">
                Лицевой счет (соответствует № договора поставки газа)
              </p>
            </ion-text>
            <Input name="Лицевой счет" />
            <ion-text>
              <p class="sub-title">
                Номер договора выполнение работ по техническому обслуживанию и
                ремонту внутридомового и внутриквартирного газового оборудования
                с УГРС АО Сахатранснефтегаз
              </p>
            </ion-text>
            <Input name="Номер договора" />
            <ion-text>
              <p class="sub-title">
                Управляющая компания для многоквартирных домов
              </p>
            </ion-text>
            <Input name="Управляющая компания" />
          </template>
        </LayoutBox>
      </template>
    </Layout>
  </ion-page>
</template>


<script>
import { defineComponent } from "vue";
import { useRouter } from "vue-router";
import Layout from "../components/Layout.vue";
import { IonPage, IonText } from "@ionic/vue";
import Input from "../components/Input.vue";
import LayoutBox from "../components/LayoutBox.vue";
import Back from "../components/Back.vue";
import ButtonSelect from "../components/ButtonSelect.vue";
export default defineComponent({
  name: "oneServicePage",
  components: {
    IonPage,
    ButtonSelect,
    Layout,
    IonText,
    Input,
    Back,
    LayoutBox,
  },
  setup() {
    const router = useRouter();
    return { router };
  },
});
</script>

<style scoped>
.text-white {
  color: #fff;
}
.dot {
  color: #62d0ce;
}
</style>