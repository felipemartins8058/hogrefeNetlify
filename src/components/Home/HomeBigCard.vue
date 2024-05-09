<script setup>
import AppButton from "../App/AppButton.vue";

const homeBigCardProps = defineProps({
    title: String,
    icon: String,
    route: String,
    buttonText: String,
});
</script>

<template>
    <div class="bigcard">
        <div class="bigcard-body">
            <img :src="homeBigCardProps?.icon" alt="" />
            <h3>{{ homeBigCardProps?.title }}</h3>
            <router-link :to="homeBigCardProps?.route">
                <AppButton
                    variant="default"
                    :text="homeBigCardProps?.buttonText"
                    :full-width="true"
                    :has-icon="true"
                >
                    <v-icon name="md-chevronright-round" scale="1.2"></v-icon>
                </AppButton>
            </router-link>
        </div>
    </div>
</template>

<style scoped lang="scss">
.bigcard {
    border-radius: 0.5rem;
    border: 1px solid var(--color-border-default);
    background: var(--white);
    padding: 2rem 1.5rem;

    &-body {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        align-items: flex-start;

        img {
            align-self: center;
            width: 100%;
            height: 100%;
            max-height: 360px;
            object-fit: contain;
        }

        a{
            width: 100%;
        }
    }
}
</style>
