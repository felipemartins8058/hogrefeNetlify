import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import MapasView from "../views/MapasView.vue";
import MapaDetailsView from "../views/MapaDetailsView.vue";
import PatientsView from "../views/PatientsView.vue";
import PatientRegisterView from "../views/PatientRegisterView.vue";
import NewApplicationInPersonView from "../views/NewApplicationInPersonView.vue";
import LandingPageView from "../views/LandingPageView.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "HomeView",
            component: HomeView,
        },
        {
            path: "/mapas",
            name: "MapasView",
            component: MapasView,
        },
        {
            path: "/mapa/detalhes/:mapaId",
            name: "MapaDetailsView",
            component: MapaDetailsView,
        },
        {
            path: "/pacientes",
            name: "PatientsView",
            component: PatientsView,
        },
        {
            path: "/pacientes/cadastro",
            name: "PatientRegisterView",
            component: PatientRegisterView,
        },
        {
            path: "/nova-aplicacao-presencial",
            name: "NewApplicationInPersonView",
            component: NewApplicationInPersonView,
        },
        {
            path: "/lp",
            name: "LandingPageView",
            component: LandingPageView,
        }
    ],
    scrollBehavior(to) {
        if (to.hash) {
            return {
                el: to.hash,
                behavior: "smooth",
            };
        }
        return new Promise((r) => {
            setTimeout(() => {
                r({ left: 0, top: 0 });
            }, 500);
        });
    },
});

export default router;