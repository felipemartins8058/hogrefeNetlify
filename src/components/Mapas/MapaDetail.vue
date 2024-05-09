<script setup>
import MapaDetailBanner from "./MapaDetailBanner.vue";

const mapaDetail = defineProps({
    mapa: Object,
});
</script>

<template>
    <section class="mapa-detail">
        <div class="mapa-detail-wrapper">
            <h1 class="mapa-detail-title">Mapas</h1>
            <MapaDetailBanner
                :titulo="mapaDetail?.mapa?.titulo"
                :textoBanner="mapaDetail?.mapa?.textoBanner"
                :imagem="mapaDetail?.mapa?.imagem"
            ></MapaDetailBanner>
            <div class="mapa-detail-content">
                <h3>Como usar</h3>
                <p>
                    {{ mapaDetail?.mapa?.textoComoUsar }}
                </p>
            </div>
            <div class="mapa-detail-content-image">
                <div>
                    <h3>Como usar</h3>
                <p>
                    {{ mapaDetail?.mapa?.textoComoUsar }}
                </p>
                </div>
                <div>
                    <img src="../../assets/images/imgphone.png" alt="">
                </div>
            </div>
            <div class="mapa-detail-content-image">
                <h3 id="manual">Manual</h3>
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
.mapa-detail {
    &-wrapper {
        @include contentWrapper(2rem 2rem);
    }

    &-title {
        color: var(--color-title);
        margin-bottom: 2rem;
    }

    &-content{
        margin-top: 6rem;
    }

    &-content-image{
        display: flex;
        justify-content: space-between;
        margin-top: 2rem;
        align-items: center;
    }
}
</style>
