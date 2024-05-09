<script setup></script>

<template>
    <div class="hogrefe-flag">
        <div class="hogrefe-flag-green"></div>
        <div class="hogrefe-flag-red"></div>
        <div class="hogrefe-flag-blue"></div>
    </div>
</template>

<style scoped lang="scss">
.hogrefe-flag{
    position: absolute;
    height: 100%;
    width: .25rem;
    top: 0;
    left: 0;
    border-radius: .5rem 0 0 .5rem;
    overflow: hidden;
    z-index: 2;

    &-green{
        background-color: var(--green-h);
        height: 33.33%;
    }

    &-red{
        background-color: var(--red-h);
        height: 33.33%;
    }

    &-blue{
        background-color: var(--blue-h);
        height: 33.33%;
    }
}
</style>