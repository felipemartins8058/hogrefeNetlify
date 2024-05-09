import "vue-audio-tapir/dist/vue-audio-tapir.css";
import "./assets/scss/main.scss";
import { createApp, markRaw } from "vue";
import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
import { OhVueIcon, addIcons } from "oh-vue-icons";
import {
    MdChevronrightRound,
    MdKeyboardarrowdownRound,
    MdAccountcircle,
    MdAccountbox,
    MdSearch,
    MdClose,
    MdInsertdrivefile,
    MdAdd,
    MdShoppingcart,
    MdMorehoriz,
    MdLocationon,
    MdCalendarmonth,
    MdSwaphoriz,
    MdRecordvoiceover,
    MdWarningamberRound,
    MdInfooutline,
    MdHealthandsafety 
} from "oh-vue-icons/icons";
import App from "./App.vue";
import router from "./router";

addIcons(
    MdChevronrightRound,
    MdKeyboardarrowdownRound,
    MdAccountcircle,
    MdAccountbox,
    MdSearch,
    MdClose,
    MdInsertdrivefile,
    MdAdd,
    MdShoppingcart,
    MdMorehoriz,
    MdLocationon,
    MdCalendarmonth,
    MdSwaphoriz,
    MdRecordvoiceover,
    MdWarningamberRound,
    MdInfooutline,
    MdHealthandsafety 
);

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);
pinia.use(({ store }) => {
    store.router = markRaw(router);
});

const app = createApp(App);

app.component("v-icon", OhVueIcon);
app.use(pinia);
app.use(router);
app.mount("#app");
