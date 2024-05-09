<script setup></script>

<template>
    <div class="questions-list">
        <h5>Lista de perguntas</h5>
        <div class="questions-list-item" v-for="item in Array(7)">
            <p class="questions-list-item-number">99</p>
            <p>Curabitur euismod neque in interdum auctor?</p>
        </div>
    </div>
</template>

<style scoped lang="scss">
.questions-list {
    border: 1px solid var(--color-border-default);
    background: var(--black-100);
    border-radius: 0.5rem;
    align-items: flex-start;
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    &-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 1rem;

        &-number {
            z-index: 1;
            aspect-ratio: 1;
            width: 2rem;
            height: 2rem;
            display: flex;
            justify-content: center;
            align-items: center;
            background: var(--success);
            border-radius: 50%;
            color: var(--white);
        }
    }
}
</style>
