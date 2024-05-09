<script setup>
import { onMounted, onUnmounted, ref } from "vue";
import AppButton from "../App/AppButton.vue";

</script>

<template>
    <section class="hero">
        <div class="hero-body">
            <div class="hero-wrapper">
                <h1 class="hero-title">Welcome to the Landing Page</h1>
                <p class="hero-subtitle">
                    A colossal structure located in the Asdana system, with the
                    soaring hotel "The Reverie" as its iconic landmark. Once a
                    frontier prison belonging to the IPC, The Family had modeled
                    it to serve as an interstellar transportation hub and the
                    gateway to the Sweetdream Paradise.
                </p>
                <AppButton
                    text="Quero começar agora"
                    variant="outline"
                    :has-icon="true"
                >
                    <v-icon name="md-chevronright-round" scale="1.2"></v-icon>
                </AppButton>

                <div class="hero-video">
                    <img src="../../assets/images/hero.png" alt="" />
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss">
.hero {
    background-color: var(--primary);
    min-height: 720px;
    margin-bottom: 40rem;

    canvas{
        opacity: .3;
        width: 100vw;
    }

    &-title,
    &-subtitle {
        color: var(--white);
        text-align: center;
    }

    &-wrapper {
        position: relative;
        @include contentWrapper(15rem 1rem 5rem);
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1.5rem;
    }

    &-video {
        position: absolute;
        top: calc(100% - 1.5rem);
    }

    &-title{
        color: #FFF;
        text-align: center;
        font-family: Poppins;
        font-size: 4rem;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
    }
}
</style>
