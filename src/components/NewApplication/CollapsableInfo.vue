<script setup>
import { ref } from "vue";
import AppButton from "../App/AppButton.vue";

const collapsableInfoProps = defineProps({
    title: String,
    content: String,
    collapsed: {
        type: Boolean,
        default: true,
    },
});

const collapsed = ref(collapsableInfoProps.collapsed);

const toggleCollapse = () => {
    collapsed.value = !collapsed.value;
};
</script>

<template>
    <div class="collapsable">
        <div class="collapsable-header" @click="toggleCollapse">
            <div class="collapsable-header-title">
                <v-icon name="md-infooutline"></v-icon>
                <p>
                    I hear the voice of fate, speaking my name in humble
                    supplication...
                </p>
            </div>
            <AppButton
            :has-icon="true"
                size="icon"
                variant="outline"
                :custom="{ border: 'none', padding: '0'}"
            >
                <v-icon
                    v-if="collapsed"
                    name="md-keyboardarrowdown-round"
                    scale="1.2"
                ></v-icon>
                <v-icon
                    v-else
                    name="md-keyboardarrowdown-round"
                    scale="1.2"
                    flip="vertical"
                ></v-icon>
            </AppButton>
        </div>
        <Transition name="fade">
            <div v-if="!collapsed" class="collapsable-content" ref="teste">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Duis auctor diam quis est lacinia tempus. Curabitur sapien
                    enim, vulputate id molestie non, porttitor quis nibh. Morbi
                    sit amet urna mattis, faucibus lacus vel, congue neque. Duis
                    hendrerit libero dui, vitae convallis arcu pulvinar ut.
                    Interdum et malesuada fames ac ante ipsum primis in
                    faucibus. Morbi et purus arcu. Aliquam condimentum tellus
                    eget tellus lobortis, ultricies dignissim mi sollicitudin.
                    Praesent a commodo diam, commodo blandit quam. Praesent
                    elementum vitae tortor eget aliquet. Praesent at gravida mi.
                </p>
            </div>
        </Transition>
    </div>
</template>

<style scoped lang="scss">
.collapsable {
    border: 1px solid var(--color-border-default);
    border-radius: 0.5rem;
    padding: 1rem;
    overflow: hidden;

    &-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        cursor: pointer;

        &-title {
            display: flex;
            align-items: center;
            gap: .25rem;
        }
    }

    &-content {
        padding-top: 1rem;

        p{
            color: var(--color-label);
        }
    }
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
    transform: translateY(-20px);
    max-height: 0px;
}

.fade-enter-to,
.fade-leave-from {
    opacity: 1;
    transform: translateY(0);
    max-height: 1000px;
}

.fade-enter-active,
.fade-leave-active {
    transition: all 0.3s ease;
}
</style>
