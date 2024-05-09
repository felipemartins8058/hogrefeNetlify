<script setup>
import { computed } from "vue";
//import AppLoadingAnimation from "./App/AppLoadingAnimation.vue";

const buttonProps = defineProps({
    type: String,
    isLoading: Boolean,
    variant: String,
    size: String,
    text: String,
    loadingText: String,
    hasIcon: Boolean,
    disabled: Boolean,
    fullWidth: Boolean,
    custom: Object,
});

const buttonVariants = {
    outline: "button outline",
    default: "button default",
};

const buttonType = computed(
    () => buttonVariants[buttonProps.variant] || "button custom"
);

const styleCustom = computed(() => {
    return buttonProps.custom ? buttonProps.custom : "";
});
</script>

<template>
    <button
        :class="[
            buttonType,
            buttonProps.size,
            buttonProps.fullWidth ? 'fullWidth' : '',
        ]"
        :disabled="buttonProps.disabled"
        :style="styleCustom"
        :type="buttonProps.type || 'button'"
    >
        {{ buttonProps.isLoading ? buttonProps.loadingText : buttonProps.text }}
        <div class="button-icon" v-if="hasIcon && !buttonProps.isLoading">
            <slot class="button-icon"></slot>
        </div>
        <div v-if="isLoading" class="loading-wrapper">
            <AppLoadingAnimation></AppLoadingAnimation>
        </div>
    </button>
</template>

<style lang="scss" scoped>
.button {
    border-radius: 0.375rem;
    border: none;
    cursor: pointer;
    display: flex;
    gap: 0.5rem;
    align-items: center;
    transition: all 0.2s ease-in-out;
    padding: 1rem 1.5rem;
    box-shadow: none;

    &.outline {
        background-color: var(--color-button-outline);
        border: 1px solid var(--color-button-outline-border);
        color: var(--color-text);
    }

    &.default {
        background-color: var(--color-button-default);
        color: var(--color-button-default-text);
    }

    &.fullWidth {
        width: 100%;
        justify-content: center;
    }

    &.small {
        padding: 0.5rem 1rem;
    }

    &.icon{
        padding: 0.5rem;
    }

    &-icon{
        display: flex;
    }

    .loading-wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }

    &:disabled {
        background-color: var(--color-placeholder);
        color: var(--color-button-default-text);
        cursor: not-allowed;
    }
}
</style>