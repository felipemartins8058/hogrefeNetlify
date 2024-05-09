<script setup>

</script>

<template>
    <div class="input-search">
        <div class="input-search-label">
            <label for="search">Pesquisar mapa</label>
        </div>
        <div class="input-search-input">
            <v-icon name="md-search"></v-icon>
            <input type="text" id="search" placeholder="Digite nome do mapa" />
        </div>
    </div>
</template>

<style scoped lang="scss">
.input-search{
    display: flex;
    flex-direction: column;
    width: 100%;

    &-label{
        margin-bottom: 0.5rem;
        color: var(--color-label);
    }

    &-input{
        display: flex;
        align-items: center;
        gap: 0.5rem;
        padding: .5rem;
        border: 1px solid var(--color-border-default);
        background-color: var(--color-background-default);
        border-radius: 0.5rem;

        v-icon{
            color: var(--color-text);
        }

        input{
            width: 100%;
            border: none;
            outline: none;
            background-color: transparent;
            color: var(--color-text);
        }
    }
}
</style>