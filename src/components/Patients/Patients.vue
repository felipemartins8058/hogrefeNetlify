<script setup>
import { ref, onMounted } from "vue";
import SearchInput from "../App/Input/InputSearch.vue";
import AppButton from "../App/AppButton.vue";
import PatientsTable from "./PatientsTable.vue";
import AppModal from "../App/AppModal.vue";
import PatientDataModal from "./PatientDataModal.vue";

const patientsProps = defineProps({
    patientsList: Array,
})

const showPatientDataModal = ref(false);
const selectedPatient = ref(null);

const setSelectedPatient = (patient) => {
    selectedPatient.value = patientsProps?.patientsList.find((p) => p.id === patient);
}
</script>

<template>
    <section class="patients">
        <div class="patients-wrapper">
            <h1 class="patients-title">Pacientes</h1>
            <div class="patients-card">
                <div class="patients-card-head">
                    <SearchInput></SearchInput>
                    <router-link to="/pacientes/cadastro">
                        <AppButton
                            text="Adicionar Paciente"
                            :has-icon="true"
                            variant="default"
                            :full-width="true"
                            :custom="{ 'white-space': 'nowrap' }"
                        >
                            <v-icon name="md-add" scale="1.2"></v-icon>
                        </AppButton>
                    </router-link>
                </div>
                <div class="patients-card-table-text">
                    <v-icon name="md-accountbox" scale="1.2"></v-icon>
                    <h5>Seus últimos pacientes acessados</h5>
                </div>
                <PatientsTable
                    :patientsList="patientsList"
                    @open-patient-data-modal="showPatientDataModal = true"
                    @selected-patient="setSelectedPatient"
                ></PatientsTable>
            </div>
        </div>
        <AppModal
            v-model:showModal="showPatientDataModal"
            title="Dados Pessoais"
            modalId="mapa-modal"
            size="large"
        >
            <template #modal-body>
                <PatientDataModal
                    :patient="selectedPatient"
                ></PatientDataModal>
            </template>
        </AppModal>
    </section>
</template>

<style lang="scss" scoped>
.patients {
    &-wrapper {
        @include contentWrapper(2rem 2rem);
    }

    &-title {
        color: var(--color-title);
        margin-bottom: 1.5rem;
    }

    &-card {
        padding: 1.5rem;
        background: var(--color-background-default);
        border: 1px solid var(--color-border-default);
        border-radius: 0.5rem;

        &-head {
            display: grid;
            grid-template-columns: 3fr 1fr;
            gap: 1.5rem;
            align-items: end;
        }

        &-table-text {
            display: flex;
            gap: 1rem;
            align-items: center;
            margin: 1.5rem 0 0;
        }
    }
}
</style>
