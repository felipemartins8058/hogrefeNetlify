<script setup>
import { ref, onMounted, computed } from "vue";
import { useMapaStore } from "../stores/mapa";
import Mapas from "../components/Mapas/Mapas.vue";

const mapaStore = useMapaStore();

onMounted(async () => {
    await mapaStore.getListMapasData();
});

const mapas = computed(() => mapaStore.getListMapasDataState);
</script>

<template>
    <main>
        <Mapas :mapas-list="mapas"></Mapas>
    </main>
</template>

<style scoped lang="scss"></style>
