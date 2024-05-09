<script setup>
import AppButton from "../App/AppButton.vue";

const mapaApplyCard = defineProps({
    mapa: Object,
    onlyView: {
        type: Boolean,
        default: false,
    },
});
</script>

<template>
    <div class="mapa-apply">
        <div class="mapa-apply-cover">
            <img src="../../assets/images/document.png" alt="Mapa Cover" />
        </div>
        <div class="mapa-apply-content">
            <div>
                <h5 class="mapa-apply-content-title">
                    {{ mapa.titulo }}
                </h5>
                <p class="mapa-apply-content-text">
                    {{ mapa.subtitulo }}
                </p>
            </div>
            <router-link
                :to="{
                    name: 'MapaDetailsView',
                    params: { mapaId: mapa.id },
                }"
            >
                <AppButton
                    variant="outline"
                    :has-icon="false"
                    text="Saiba mais"
                    size="small"
                    :full-width="true"
                >
                </AppButton>
            </router-link>
            <router-link
                v-if="!mapaApplyCard.onlyView"
                to="/nova-aplicacao-presencial"
            >
                <AppButton
                    variant="default"
                    :has-icon="true"
                    text="Aplicar entrevista"
                    :full-width="true"
                >
                    <v-icon name="md-chevronright-round" scale="1.2"></v-icon>
                </AppButton>
            </router-link>
        </div>
    </div>
</template>

<style scoped lang="scss">
.mapa-apply {
    border-radius: 0.5rem;
    border: 1px solid var(--color-border-default);
    overflow: hidden;

    &-cover {
        display: flex;
        padding: 1.5rem 3.8rem 0;
        background-color: var(--color-background-light);

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    &-content {
        padding: 1.5rem;
        background-color: var(--color-background-default);
        border-radius: 0 0 0.5rem 0.5rem;
        display: flex;
        flex-direction: column;
        gap: 1rem;

        &-text {
            color: var(--color-subtitle);
            margin-top: 0.5rem;
        }
    }
}
</style>
