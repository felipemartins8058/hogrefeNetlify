<script setup>
const inputTextProps = defineProps({
    name: String,
    label: {
        type: [String, Boolean],
        default: "",
    },
    placeholder: {
        type: String,
        default: "Digite aqui...",
    },
    modelValue: {
        type: [String, Boolean],
        default: "",
    },
    size: String,
    required: Boolean,
});

const emit = defineEmits(["update:modelValue"]);
</script>

<template>
    <div class="input-group">
        <label :for="inputTextProps?.name">{{ inputTextProps?.label }}</label>
        <input
            type="text"
            :name="inputTextProps?.name"
            :id="inputTextProps?.name"
            :value="inputTextProps?.modelValue"
            @input="emit('update:modelValue', $event.target.value)"
            :placeholder="inputTextProps?.placeholder"
            :required="inputTextProps?.required"
        />
    </div>
</template>

<style scoped lang="scss">
.input-group {
    @include formElement;
}
</style>
