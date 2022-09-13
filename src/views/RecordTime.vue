<template>
    <ion-page>
        <Back title='Назад' />
        <Layout outlineBtn="." filledBtn="." title="Выбор времени">
            <template v-slot:main-content>
                <ion-text class="title">Выберите время</ion-text>

                <ion-list v-if="entryAvailableTimes.length > 0">
                    <ion-item v-for="time in entryAvailableTimes" :key="time" router-link="/tabs/record" @click="selectTime(time)">
                        <ion-text class="sub-title">{{time}}</ion-text>
                    </ion-item>
                </ion-list>
                <ion-list v-else>
                    <ion-item router-link="/tabs/record" @click="selectTime(null)">
                        <ion-text class="sub-title">Выберите вид услуг и дату записи</ion-text>
                    </ion-item> 
                </ion-list>
            </template>
        </Layout>
    </ion-page>
</template>


<script>
import { defineComponent } from "vue";
import { useRouter } from "vue-router";
import Layout from "../components/Layout.vue";
import { IonPage, IonText, IonList, IonItem } from "@ionic/vue";
import Back from '../components/Back.vue'
import { usePreEntryStore } from "../stores/preEntry";

export default defineComponent({
    name: "recordTime",
    components: {
        IonPage,
        IonList,
        Layout,
        IonItem,
        Back,
        IonText,
    },
    setup() {
        const router = useRouter();
        const { entryAvailableTimes, entryTime, setTime } = usePreEntryStore();
        console.log(entryAvailableTimes)
        return { router, entryAvailableTimes, entryTime, setTime };
    },
    methods: {
        selectTime(time) {
            if (time && time != "На данную дату свободного времени нет") {
                this.setTime(time);
            }
        }
    }
});
</script>

<style scoped>
ion-item {
    --padding-start: 0;
    --inner-padding-bottom: 10px;
    --inner-padding-end: 0;
    --inner-padding-top: 20px;
}
</style>
