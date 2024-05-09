<script setup>
import AppButton from "../App/AppButton.vue";
</script>

<template>
    <div class="mapa-store">
        <div class="mapa-store-background">
            <img
                src="../../assets/images/background-abstract.png"
                alt="Imagem de fundo"
            />
        </div>
        <div class="mapa-store-image">
            <img src="../../assets/images/mapastore.png" alt="Imagem da loja" />
        </div>
        <div class="mapa-store-content">
            <h4 class="mapa-store-content-title">
                Fallen leaves adorn my night
            </h4>
            <p class="mapa-store-content-text">Fallen leaves adorn my night</p>
            <AppButton
                variant="outline"
                text="Fallen leaves adorn my night"
                :full-width="true"
                :has-icon="true"
            >
                <v-icon name="md-chevronright-round" scale="1.2"></v-icon>
            </AppButton>
        </div>
    </div>
</template>

<style scoped lang="scss">
.mapa-store {
    position: relative;
    overflow: hidden;
    border-radius: 0.5rem;
    border: 1px solid var(--color-border-default);
    background: var(--primary);
    padding: 1.5rem;
    display: flex;
    justify-content: center;
    gap: 1.5rem;

    @include md {
        flex-direction: column;
        gap: 1rem;
    }

    &-image {
        z-index: 1;
        img {
            display: flex;
            height: 100%;
            width: 100%;
            object-fit: cover;
            border-radius: 0.5rem;
        }
    }

    &-content {
        z-index: 1;
        display: flex;
        flex-direction: column;
        gap: 1rem;

        &-title,
        &-text {
            color: var(--white);
        }
    }

    &-background {
        position: absolute;
        z-index: 0;
        top: 0;
        left: 0;
        opacity: 0.1;
        width: 100%;
        height: 100%;

        img {
            width: 150%;
            height: 150%;
            object-fit: cover;
            transform: translate(-25%, -25%);
        }
    }
}
</style>
