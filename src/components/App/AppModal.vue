<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import HogrefeFlag from "../App/HogrefeFlag.vue";

const modalProps = defineProps({
    showModal: {
        type: Boolean,
        default: false,
    },
    title: {
        type: String,
        default: "",
    },
    size: String,
    modalId: String,
});

const emit = defineEmits(["update:showModal"]);

const modalRef = ref(null);
const closeModal = () => emit("update:showModal", false);

const handleKeydownEscape = (event) => {
    if (event.key === "Escape") {
        closeModal();
    }
};

onMounted(() => {
    document.addEventListener("keydown", handleKeydownEscape);
    console.log("mounted");
});

onUnmounted(() => {
    document.removeEventListener("keydown", handleKeydownEscape);
});
</script>

<template>
    <div
        v-if="showModal"
        class="modal"
        :class="[modalProps.showModal ? 'show' : '']"
        :id="modalProps.modalId"
        tabindex="-1"
        :aria-labelledby="modalProps.modalId + '-label'"
        aria-modal="true"
        aria-hidden="true"
        @click="closeModal"
    >
        <div class="modal-dialog" :class="[modalProps.size]" @click.stop>
            <HogrefeFlag></HogrefeFlag>
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title" :id="modalProps.modalId + '-label'">
                        {{ modalProps.title }}
                    </h4>
                    <button
                        type="button"
                        class="modal-button-close"
                        aria-label="Close"
                        @click="closeModal"
                    >
                        <v-icon name="md-close" scale="1.2"></v-icon>
                    </button>
                </div>
                <div class="modal-body">
                    <slot name="modal-body"></slot>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.modal {
    position: fixed;
    inset: 0;
    z-index: 999;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.4);
    display: none;

    &.show {
        display: block;
    }

    &-dialog {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 90%;
        max-width: 720px;
        background-color: var(--color-background-default);
        border-radius: 0.5rem;
        box-shadow: 0 0 1rem rgba(0, 0, 0, 0.2);
        overflow: hidden;

        &.large {
            max-width: 1080px;
        }
    }

    &-content {
        overflow: overlay;
        max-height: 90vh;
        padding: 2rem;

        /* width */
        &::-webkit-scrollbar {
            width: .25rem;
            border-radius: .25rem;
        }

        /* Track */
        &::-webkit-scrollbar-track {
            background: #f1f1f1;
        }

        /* Handle */
        &::-webkit-scrollbar-thumb {
            background: #888;
            border-radius: .25rem;
        }

        /* Handle on hover */
        &::-webkit-scrollbar-thumb:hover {
            background: #555;
        }
    }

    &-header {
        position: relative;
        margin-bottom: 1.5rem;
    }

    &-button-close {
        position: fixed;
        right: 1.5rem;
        top: 1.5rem;
        background: none;
        border: none;
        cursor: pointer;
    }
}
</style>
