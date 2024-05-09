<style>
.p-3.mt-8.text-black.rounded-md, .text-sm.mt-2{
    display: none;
}
</style>

<template>
    <tapir-widget
        :time="2"
        backendEndpoint="https://your-endpoint.com/.netlify/functions/audio-message"
        buttonColor="green"
    />
</template>

<script>
import TapirWidget from "vue-audio-tapir";

export default {
    name: "App",
    components: {
        TapirWidget,
    },
};
</script>


