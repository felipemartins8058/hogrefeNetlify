<script setup>
import AppButton from "../App/AppButton.vue";
</script>

<template>
    <div class="swap-mapa">
        <div>
            <p>Mapa escolhido</p>
            <h4>Business-Focused Inventory of Personality: UK Edition</h4>
        </div>
        <div>
            <AppButton
                variant="outline"
                :has-icon="true"
                size="icon"
            >
                <v-icon name="md-swaphoriz" scale="1.2"></v-icon>
            </AppButton>
        </div>
    </div>
</template>

<style scoped lang="scss">
.swap-mapa{
    border: 1px solid var(--color-border-default);
    background: var(--color-background-default);
    border-radius: 0.5rem;
    padding: 1.5rem;
    margin-bottom: 1.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>