<script setup>
import { computed, onMounted } from 'vue'
import { usePatientStore } from '../stores/patient'
import Patients from '../components/Patients/Patients.vue'

const patientStore = usePatientStore()

onMounted(async () => {
    await patientStore.getListPatientsData()
})

const patients = computed(() => patientStore.getListPatientsDataState)
</script>

<template>
    <main>
        <Patients
            :patients-list="patients"
        ></Patients>
    </main>
</template>

<style lang="scss" scoped>

</style>