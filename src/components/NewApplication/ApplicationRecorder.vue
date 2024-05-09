<script setup>
import { ref } from "vue";
import AppButton from "../App/AppButton.vue";
import TapirWidget from "./tapir.vue"

const isRecording = ref(false);
</script>

<template>
    <div class="recorder">
        <p class="recorder-label">Gravação da entrevista</p>
        <AppButton
            v-if="!isRecording"
            variant="default"
            :has-icon="true"
            text="Começar a gravar"
            :full-width="true"
            :custom="{ 'flex-direction': 'row-reverse'}"
            @click="isRecording = true"
        >
            <v-icon name="md-recordvoiceover" scale="1.2"></v-icon>
        </AppButton>
        <div v-if="isRecording">
            <TapirWidget></TapirWidget>
        </div>
        <div class="recorder-warning">
            <v-icon name="md-warningamber-round" scale="1.2" color="var(--color-label)"></v-icon>
            <span class="recorder-label">Não esqueça de iniciar a gravação antes de começar a entrevista!</span>
        </div>
    </div>
</template>

<style scoped lang="scss">
.recorder{
    border: 1px solid var(--color-border-default);
    background: var(--color-background-default);
    border-radius: 0.5rem;
    padding: 1.5rem;
    margin-bottom: 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    &-label{
        color: var(--color-label);
    }

    &-warning{
        display: flex;
        gap: .25rem;
    }
}
</style>