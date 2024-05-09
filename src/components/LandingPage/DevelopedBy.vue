<script setup>
import AppButton from "../App/AppButton.vue";
</script>

<template>
    <section class="developed-by">
        <h5 class="developed-by-subtitle">Lorem ipsum</h5>
        <h2 class="developed-by-title">Desenvolvido por</h2>
        <div class="developed-by-logos">
            <img src="../../assets/images/move.png" alt="" />
            <img src="../../assets/images/catvante.png" alt="" />
        </div>
    </section>
</template>

<style scoped lang="scss">
.developed-by {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 5rem 1rem;

    &-title {
        color: var(--color-title);
        margin-bottom: 2rem;
    }

    &-subtitle {
        color: var(--color-subtitle);
    }

    &-logos {
        display: flex;
        gap: 3.5rem;
        margin-top: 2rem;
    }
}
</style>
