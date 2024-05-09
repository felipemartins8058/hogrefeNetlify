<script setup>
import AppButton from "../App/AppButton.vue";

const patientsTableItemProps = defineProps({
    patient: Object,
});

const emit = defineEmits(["openPatientDataModal", "selectedPatient"]);
</script>

<template>
    <tr>
        <td>{{ patientsTableItemProps?.patient.nome }}</td>
        <td>{{ patientsTableItemProps?.patient.dataNascimento }}</td>
        <td>{{ patientsTableItemProps?.patient.grupo }}</td>
        <td>
            <AppButton
                has-icon="true"
                variant="default"
                size="icon"
                @click="emit('openPatientDataModal'), emit('selectedPatient', patientsTableItemProps?.patient.id)"
                ><v-icon name="md-morehoriz"></v-icon
            ></AppButton>
        </td>
    </tr>
</template>

<style scoped lang="scss">
tbody {
    tr {
        td {
            padding: 0.5rem 0;
            border-bottom: 1px solid var(--color-border-default);
        }
    }
}
</style>
