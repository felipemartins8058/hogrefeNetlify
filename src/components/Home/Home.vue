<script setup>
import HomeBigCard from "./HomeBigCard.vue";
import MapaStoreCard from "../Mapas/MapaStoreCard.vue";

const homeProps = defineProps({
    menuItems: Array
});
</script>

<template>
    <main>
        <section class="home">
            <div class="home-wrapper">
                <h5>Bem vindo, Nome usuário!</h5>
                <MapaStoreCard></MapaStoreCard>
                <div class="home-menu">
                    <HomeBigCard
                        v-for="item in homeProps?.menuItems"
                        :key="item?.id"
                        :title="item?.title"
                        :icon="item?.icon"
                        :route="item?.route"
                        :button-text="item?.buttonText"
                    ></HomeBigCard>
                </div>
            </div>
        </section>
    </main>
</template>

<style scoped lang="scss">
.home {
    &-wrapper {
        @include contentWrapper(2rem 1rem);

        display: grid;
        gap: 2rem;
    }

    &-menu {
        display: grid;
        grid-template-columns: repeat(3, minmax(300px, 1fr));
        gap: 1rem;
    }
}
</style>
