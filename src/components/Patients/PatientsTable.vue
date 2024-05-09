<script setup>
import PatientsTableItem from "./PatientsTableItem.vue";

const emit = defineEmits(["openPatientDataModal", "selectedPatient"]);

const patientsTableProps = defineProps({
    patientsList: Array,
});

const selectedPatient = (patient) => {
    emit("selectedPatient", patient);
};

const openModal = () => {
    emit("openPatientDataModal");
}

</script>

<template>
    <table class="patients-table">
        <thead>
            <tr>
                <th width="40%">Nome</th>
                <th>Data de nascimento</th>
                <th>Grupo</th>
                <th width="1%"></th>
            </tr>
        </thead>
        <tbody>
            <PatientsTableItem
                v-for="patient in patientsTableProps?.patientsList"
                :key="patient.id"
                :patient="patient"
                @open-patient-data-modal="openModal"
                @selected-patient="selectedPatient"
            ></PatientsTableItem>
        </tbody>
    </table>
</template>

<style lang="scss" scoped>
.patients-table {
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;

    thead {
        tr {
            th {
                color: var(--color-subtitle);
                padding: 0.5rem 0;
                border-bottom: 1px solid var(--color-border-default);
            }
        }
    }

    tbody {
        tr {
            td {
                padding: 0.5rem 0;
                border-bottom: 1px solid var(--color-border-default);
            }
        }
    }
}
</style>import PatientsTableItemVue from "./PatientsTableItem.vue";

