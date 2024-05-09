<script setup>
import AppButton from '../App/AppButton.vue';

const mapaAppliedPatientProps = defineProps({
    appliedMapa: Object,
});
</script>

<template>
    <div class="mapa-applied">
        <div class="mapa-applied-cover">
            <img src="../../assets/images/document.png" alt="Mapa Cover" />
        </div>
        <div class="mapa-applied-content">
            <div>
                <h5 class="mapa-applied-content-title">{{ mapaAppliedPatientProps?.appliedMapa?.title }}</h5>
                <p class="mapa-applied-content-text">{{ mapaAppliedPatientProps?.appliedMapa?.subtitle }}</p>
            </div>
            <div class="mapa-applied-content-item">
                <v-icon name="md-locationon" scale="1.2" color="var(--color-subtitle)"></v-icon>
                <p>{{ mapaAppliedPatientProps?.appliedMapa?.local }}</p>
            </div>
            <div class="mapa-applied-content-item">
                <v-icon name="md-calendarmonth" scale="1.2" color="var(--color-subtitle)"></v-icon>
                <p>{{ mapaAppliedPatientProps?.appliedMapa?.data }} {{ mapaAppliedPatientProps?.appliedMapa?.hora }}</p>
            </div>
            <AppButton
                variant="outline"
                :has-icon="false"
                text="Ver entrevista"
                size="small"
                :full-width="true"
            >
            </AppButton>
        </div>
    </div>
</template>

<style scoped lang="scss">
.mapa-applied{
    border-radius: 0.5rem;
    border: 1px solid var(--color-border-default);
    overflow: hidden;

    &-cover{
        display: flex;
        padding: 1.5rem 3.8rem 0;
        background-color: var(--color-background-light);

        img{
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    &-content{
        padding: 1.5rem;
        background-color: var(--color-background-default);
        border-radius: 0 0 0.5rem 0.5rem;
        display: flex;
        flex-direction: column;
        gap: 1rem;

        &-text{
            color: var(--color-subtitle)
        }

        &-item{
            display: flex;
            gap: 1rem;
        }
    }
}
</style>