<script setup>
import { ref } from "vue";
import MapaStoreCard from "./MapaStoreCard.vue";
import MapaApplyCard from "./MapaApplyCard.vue";
import InputSearch from "../App/Input/InputSearch.vue";
import AppModal from "../App/AppModal.vue";
import InputSelect from "../App/Input/InputSelect.vue";
import AppButton from "../App/AppButton.vue";

const mapasProps = defineProps({
    mapasList: Array,
})

const showModal = ref(false);
const toggleModal = () => {
    showModal.value = !showModal.value;
};
</script>

<template>
    <section class="mapas">
        <div class="mapas-wrapper">
            <h1 class="mapas-title">Mapas</h1>
            <MapaStoreCard></MapaStoreCard>
            <div class="mapas-list">
                <div class="mapas-list-head">
                    <div>
                        <h4 class="mapas-list-title">Mapas disponíveis</h4>
                        <p class="mapas-list-head-subtilte">
                            Lista de mapas dispoíveis para aplicação
                        </p>
                    </div>
                    <div>
                        <div class="mapas-list-head-remainingapps">
                            <div class="mapas-list-head-remainingapps-left">
                                <v-icon name="md-insertdrivefile"></v-icon>
                                <p>Aplicações restantes: {{ "29" }}</p>
                            </div>
                            <div
                                class="mapas-list-head-remainingapps-right"
                                @click="toggleModal"
                            >
                                <v-icon name="md-add"></v-icon>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="mapas-list-search">
                    <InputSearch></InputSearch>
                </div>
                <div class="mapas-list-grid">
                    <MapaApplyCard
                        v-for="mapa in mapasList"
                        :key="mapa.id"
                        :mapa="mapa"
                    ></MapaApplyCard>
                </div>
            </div>
        </div>
        <AppModal
            v-model:showModal="showModal"
            title="Compra de licenças"
            modalId="mapa-modal"
        >
            <template #modal-body>
                <div class="modal-store">
                    <p class="modal-store-text">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s
                    </p>
                    <div class="modal-store-buy">
                        <InputSelect></InputSelect>
                        <div class="modal-store-buy-price">
                            <h5>Total</h5>
                            <h4>R$ 99,99</h4>
                        </div>
                    </div>
                    <div class="modal-store-buttons">
                        <AppButton :hasIcon="true" variant="outline" @click="toggleModal">
                            <v-icon name="md-close"></v-icon>
                        </AppButton>
                        <AppButton
                            text="Comprar"
                            :hasIcon="true"
                            variant="default"
                            :custom="{ 'flex-direction': 'row-reverse' }"
                        >
                            <v-icon name="md-shoppingcart"></v-icon>
                        </AppButton>
                    </div>
                </div>
            </template>
        </AppModal>
    </section>
</template>

<style scoped lang="scss">
.mapas {
    &-wrapper {
        @include contentWrapper(2rem 2rem);
    }

    &-title {
        color: var(--color-title);
        margin-bottom: 2rem;
    }

    &-list {
        &-head {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: 2rem;
            margin-bottom: 1rem;

            &-subtilte {
                color: var(--color-subtitle);
                margin-top: 0.5rem;
            }

            &-remainingapps {
                display: flex;

                &-left,
                &-right {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    padding: 1rem;
                    border-radius: 0.5rem 0 0 0.5rem;
                    border: 1px solid var(--color-border-default);
                    border-right: none;
                    background: var(--color-button-outline);
                }

                &-right {
                    cursor: pointer;
                    border-radius: 0 0.5rem 0.5rem 0;
                    background: var(--color-button-outline);
                    border: 1px solid var(--color-border-default);
                }
            }
        }

        &-search {
            margin-bottom: 1.5rem;
        }

        &-grid {
            display: grid;
            grid-template-columns: repeat(4, minmax(300px, 1fr));
            gap: 1.5rem;

            @include md {
                grid-template-columns: repeat(2, minmax(300px, 1fr));
            }

            @include sm {
                grid-template-columns: repeat(1, minmax(300px, 1fr));
            }
        }
    }
}

.modal-store {
    &-text {
        margin-bottom: 1rem;
    }

    &-buy {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 2rem;
        margin-bottom: 1rem;

        &-price {
            display: flex;
            flex-direction: column;
            justify-content: space-between;

            h4, h5{
                color: var(--color-title);
            }
        }
    }

    &-buttons {
        display: flex;
        justify-content: space-between;
    }
}
</style>
