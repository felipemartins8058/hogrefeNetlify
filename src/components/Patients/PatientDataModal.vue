<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { register } from "swiper/element/bundle";
import AppButton from "../App/AppButton.vue";
import MapaAppliedPatient from "../Mapas/MapaAppliedPatient.vue";

// register Swiper custom elements
register();

const patientDataModalProps = defineProps({
    patient: Object,
});

const emit = defineEmits(["update:showModal"]);
</script>

<template>
    <div class="patient-data">
        <div class="patient-data-register">
            <div class="patient-data-register-item">
                <p class="patient-data-register-item-name">Paciente</p>
                <p class="patient-data-register-item-data">{{ patientDataModalProps?.patient?.nome }}</p>
            </div>
            <div class="patient-data-register-item">
                <p class="patient-data-register-item-name">Email</p>
                <p class="patient-data-register-item-data">{{ patientDataModalProps?.patient?.email }}</p>
            </div>
            <div class="patient-data-register-item">
                <p class="patient-data-register-item-name">CPF</p>
                <p class="patient-data-register-item-data">{{ patientDataModalProps?.patient?.cpf }}</p>
            </div>
            <div class="patient-data-register-item">
                <p class="patient-data-register-item-name">Data de nascimento</p>
                <p class="patient-data-register-item-data">{{ patientDataModalProps?.patient?.dataNascimento }}</p>
            </div>
            <div class="patient-data-register-item">
                <p class="patient-data-register-item-name">Escolaridade</p>
                <p class="patient-data-register-item-data">{{ patientDataModalProps?.patient?.escolaridade }}</p>
            </div>
            <div class="patient-data-register-item">
                <p class="patient-data-register-item-name">Endereço</p>
                <p class="patient-data-register-item-data">{{ patientDataModalProps?.patient?.endereco }}</p>
            </div>
            <div class="patient-data-register-item">
                <p class="patient-data-register-item-name">Estado</p>
                <p class="patient-data-register-item-data">{{ patientDataModalProps?.patient?.estado }}</p>
            </div>
            <div class="patient-data-register-item">
                <p class="patient-data-register-item-name">Cidade</p>
                <p class="patient-data-register-item-data">{{ patientDataModalProps?.patient?.cidade }}</p>
            </div>
            <div class="patient-data-register-item">
                <p class="patient-data-register-item-name">Etnia</p>
                <p class="patient-data-register-item-data">{{ patientDataModalProps?.patient?.etnia }}</p>
            </div>
            <div class="patient-data-register-item">
                <p class="patient-data-register-item-name">Estado Civil</p>
                <p class="patient-data-register-item-data">{{ patientDataModalProps?.patient?.estadoCivil }}</p>
            </div>
            <div class="patient-data-register-item">
                <p class="patient-data-register-item-name">Religião</p>
                <p class="patient-data-register-item-data">{{ patientDataModalProps?.patient?.religiao }}</p>
            </div>
            <div class="patient-data-register-item">
                <p class="patient-data-register-item-name">Pratica religião</p>
                <p class="patient-data-register-item-data">{{ patientDataModalProps?.patient?.praticaReligiao }}</p>
            </div>
        </div>
        <div class="patient-data-mapas">
            <h4 class="patient-data-mapas-title">Mapas do paciente</h4>
            <swiper-container
                :slides-per-view="3"
                :loop="true"
                :space-between="24"
                :breakpoints="{
                    768: {
                        slidesPerView: 3,
                    },
                }"
            >
                <swiper-slide
                    v-for="mapa in patientDataModalProps?.patient?.mapasAplicados"
                    :key="mapa.id"
                >
                    <MapaAppliedPatient
                        :applied-mapa="mapa"
                    ></MapaAppliedPatient
                ></swiper-slide>
            </swiper-container>
        </div>
        <div class="patient-data-apply">
            <AppButton
                text="Aplicar nova entrevista"
                variant="default"
                :has-icon="true"
                :full-width="true"
            >
                <v-icon name="md-chevronright-round" scale="1.2"></v-icon>
            </AppButton>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.patient-data {
    position: relative;

    &-register {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 1.5rem;

        &-item {
            &-name {
                color: var(--color-label);
                margin-bottom: 0.25rem;
            }
        }
    }

    &-mapas {
        margin-top: 1.5rem;
        padding-bottom: 5rem;

        &-title {
            margin-bottom: 1.5rem;
        }
    }

    &-apply {
        position: fixed;
        border-radius: 0 0 0.5rem 0.5rem;
        z-index: 1;
        bottom: 0;
        right: 0;
        left: 0;
        padding: 0.5rem 1.5rem 1.5rem;
        background-color: var(--color-background-default);
    }
}
</style>

