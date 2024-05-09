<script setup>
import { onMounted, computed } from 'vue';
import { useRoute } from 'vue-router';
import { useMapaStore } from '../stores/mapa';
import MapaDetail from '../components/Mapas/MapaDetail.vue';

const route = useRoute();
const mapaStore = useMapaStore();

onMounted(async() => {
    if (route.params.mapaId) {
        await mapaStore.getMapaData({ mapaId: route.params.mapaId});
    }
});

const mapa = computed(() => mapaStore.getMapaDataState);
</script>

<template>
    <main>
        <MapaDetail
            :mapa="mapa"
        ></MapaDetail>
    </main>
</template>

<style scoped lang="scss">
</style>
