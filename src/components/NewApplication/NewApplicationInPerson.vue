<script setup>
import { ref, onMounted } from "vue";
import AppButton from "../App/AppButton.vue";
import InputText from "../App/Input/InputText.vue";
import InputSelect from "../App/Input/InputSelect.vue";
import InputRadio from "../App/Input/InputRadio.vue";
import SwapMapaForm from "./SwapMapaForm.vue";
import HogrefeFlag from "../App/HogrefeFlag.vue";
import ApplicationRecorder from "./ApplicationRecorder.vue";
import CollapsableInfo from "./CollapsableInfo.vue";
import QuestionsList from "./QuestionsList.vue";

const showModal = ref(false);
const toggleModal = () => {
    showModal.value = !showModal.value;
};

const stepController = ref(0);
</script>

<template>
    <section class="new-app">
        <div class="new-app-wrapper">
            <h1 class="new-app-title">Nova aplicação presencial</h1>

            <div v-if="stepController == 0">
                <SwapMapaForm></SwapMapaForm>
                <div class="new-app-section">
                    <HogrefeFlag></HogrefeFlag>
                    <h4>Cadastro</h4>
                    <div class="new-app-section-grid">
                        <InputText></InputText>
                        <InputText></InputText>
                        <InputText></InputText>
                        <InputText></InputText>
                        <InputText></InputText>
                    </div>
                </div>

                <div class="new-app-section">
                    <HogrefeFlag></HogrefeFlag>
                    <h4>Cadastro</h4>
                    <div class="new-app-section-grid">
                        <InputSelect></InputSelect>
                        <InputSelect></InputSelect>
                        <InputSelect></InputSelect>
                        <InputSelect></InputSelect>
                        <InputSelect></InputSelect>
                        <InputSelect></InputSelect>
                        <InputSelect></InputSelect>
                    </div>
                </div>

                <div class="new-app-section">
                    <HogrefeFlag></HogrefeFlag>
                    <h4>Cadastro</h4>
                    <div class="new-app-section-column">
                        <InputRadio></InputRadio>
                        <InputRadio></InputRadio>
                        <InputRadio></InputRadio>
                        <InputText></InputText>
                        <InputRadio></InputRadio>
                        <InputRadio></InputRadio>
                        <InputRadio></InputRadio>
                    </div>
                </div>
            </div>

            <div class="grid" v-if="stepController == 1">
                <div>
                    <ApplicationRecorder></ApplicationRecorder>
                    <div class="new-app-section">
                        <div class="new-app-section-column">
                            <CollapsableInfo
                                :collapsed="false"
                            ></CollapsableInfo>
                            <div>
                                <p>Pergunta 1</p>
                                <h4>
                                    Vivamus pellentesque mauris at lorem
                                    fermentum rutrum et diam nunc, nec commodo
                                    eros?
                                </h4>
                            </div>
                            <CollapsableInfo></CollapsableInfo>
                            <CollapsableInfo></CollapsableInfo>
                            <div class="new-app-section-column-buttons">
                                <AppButton
                                    text="Voltar"
                                    :has-icon="true"
                                    variant="outline"
                                    :custom="{
                                        'flex-direction': 'row-reverse',
                                    }"
                                >
                                    <v-icon
                                        name="md-chevronright-round"
                                        scale="1.2"
                                        flip="horizontal"
                                    ></v-icon>
                                </AppButton>
                                <AppButton
                                    text="Avançar"
                                    :has-icon="true"
                                    variant="outline"
                                >
                                    <v-icon
                                        name="md-chevronright-round"
                                        scale="1.2"
                                    ></v-icon>
                                </AppButton>
                            </div>
                        </div>
                    </div>
                </div>

                <QuestionsList></QuestionsList>
            </div>

            <div class="new-app-buttons">
                <AppButton
                    variant="outline"
                    text="Cancelar"
                    :has-icon="true"
                    :custom="{ 'flex-direction': 'row-reverse' }"
                    @click="stepController = 0"
                >
                    <v-icon name="md-close" scale="1.2"></v-icon>
                </AppButton>
                <AppButton
                    text="Iniciar aplicação"
                    :has-icon="true"
                    variant="default"
                    @click="stepController = 1"
                >
                    <v-icon name="md-chevronright-round" scale="1.2"></v-icon>
                </AppButton>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.new-app {
    &-wrapper {
        @include contentWrapper(2rem 1rem);
    }

    &-title {
        color: var(--color-title);
        margin-bottom: 1.5rem;
    }

    &-section {
        position: relative;
        border-radius: 0.5rem;
        border: 1px solid var(--color-border-default);
        background-color: var(--color-background-default);
        padding: 1.5rem;
        margin-bottom: 1.5rem;

        &-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 1rem 1.5rem;
            margin-top: 1.5rem;
        }

        &-column {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            margin-top: 1.5rem;

            &-buttons {
                display: flex;
                justify-content: space-between;
                gap: 1rem;
            }
        }
    }

    &-buttons {
        display: flex;
        justify-content: space-between;
        gap: 1rem;
    }
}

.grid {
    display: grid;
    grid-template-columns: 9fr 3fr;
    gap: 1.5rem;
}
</style>
