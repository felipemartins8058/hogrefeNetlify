<script setup>
const inputRadioProps = defineProps({
    name: {
        type: String,
        required: true,
    },
    label: {
        type: String,
        required: true,
    },
    options: {
        type: Array,
        required: true,
    },
    modelValue: {
        type: [String],
        required: true,
    },
    required: Boolean
});

const emit = defineEmits(["update:modelValue"]);
</script>

<template>
    <div class="input-group">
        <p>{{ inputRadioProps?.label }}</p>
        <div class="input-group-radio">
            <template
                v-for="option in inputRadioProps?.options"
                :key="option"
            >
                <div class="input-group-radio-option">
                    <input
                        type="radio"
                        :name="inputRadioProps?.name"
                        :id="option + inputRadioProps?.name"
                        @change="emit('update:modelValue', option || '')"
                        :checked="inputRadioProps?.modelValue === option"
                    />
                    <label :for="option + inputRadioProps?.name">{{ option }}</label>
                </div>
            </template>
        </div>
    </div>
</template>

<style scoped lang="scss">
.input-group {
    @include formElement;

    p{
        color: var(--color-label);
    }

    &-radio {
        &-option {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            margin-bottom: 0.2rem;

            label,
            input {
                color: var(--color-text);
                cursor: pointer;
            }
        }
    }
}
</style>
