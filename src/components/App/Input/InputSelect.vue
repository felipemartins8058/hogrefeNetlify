<script setup>
const inputSelectProps = defineProps({
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
        type: String,
        required: true,
    },
    required: Boolean,
    emptyValueAllowed: {
        type: Boolean,
        default: false,
    },
});

const emit = defineEmits(["update:modelValue"]);
</script>

<template>
    <div class="input-group">
        <label :for="inputSelectProps?.name">{{
            inputSelectProps?.label
        }}</label>
        <select
            :name="inputSelectProps?.name"
            :id="inputSelectProps?.name"
            @change="emit('update:modelValue', $event.target.value)"
            :required="inputSelectProps?.required"
        >
            <option value="" selected disabled><p>Selecionar</p></option>
            <template
                v-for="(option, index) in inputSelectProps?.options"
                :key="option"
            >
                <option
                    :value="option"
                    :selected="inputSelectProps?.modelValue == option"
                >
                    {{ option }}
                </option>
            </template>
        </select>
    </div>
</template>

<style scoped lang="scss">
.input-group {
    @include formElement;
}
</style>
