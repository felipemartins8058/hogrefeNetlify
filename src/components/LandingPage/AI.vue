<script setup>
import AppButton from "../App/AppButton.vue";
</script>

<template>
    <section class="ai">
        <div class="ai-wrapper">
            <div class="ai-grid">
                <div class="ai-grid-blocks">
                    <div v-for="item in Array(2)" class="ai-grid-blocks-col">
                        <div v-for="item in Array(2)" class="ai-grid-blocks-card">
                            <img src="../../assets/images/placeholderAi.png" alt="">
                            <h5>Lorem ipsum</h5>
                            <p>Lorem Ipsum dolor sit amet tenor</p>
                        </div>
                    </div>
                </div>
                <div class="ai-grid-content">
                    <h5 class="ai-grid-content-subtitle">Tecnologia de ponta</h5>
                    <h2 class="ai-grid-content-title">Inteligência Artificial</h2>
                    <p class="ai-grid-content-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Vestibulum tempor elit arcu, vitae condimentum enim
                        consequat a. Donec vestibulum libero sit amet vehicula
                        suscipit. Proin tincidunt quis neque in venenatis.
                        Pellentesque blandit semper velit, vel mollis augue
                        malesuada vitae. Maecenas eget velit maximus ex ultrices
                        pellentesque quis a mi. Suspendisse et orci sem.
                    </p>
                    <h5 class="ai-grid-content-subtitle">Desenvolvido com</h5>
                    <img class="ai-grid-content-image" src="../../assets/images/openai.png" alt="" />
                    <AppButton
                        variant="default"
                        :has-icon="true"
                        text="Quero começar agora"
                    >
                        <v-icon
                            name="md-chevronright-round"
                            scale="1.2"
                        ></v-icon>
                    </AppButton>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
.ai {
    background-image: url("../../assets/images/dotspattern.svg");
    background-size: cover;

    &-wrapper {
        @include contentWrapper(5rem 1rem);
    }

    &-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 2rem;
        align-items: center;

        &-blocks {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 1rem;

            &-col {
                display: flex;
                flex-direction: column;
                gap: 1rem;

                &:first-child {
                    transform: translateY(-1rem);
                }

                &:last-child {
                    transform: translateY(1rem);
                }
            }

            &-card {
                background-color: var(--color-background-default);
                border: 1px solid var(--color-border-default);
                border-radius: .5rem;
                padding: 3rem 1.5rem 1.5rem;
            }
        }

        &-content {

            &-subtitle {
                color: var(--color-subtitle);
            }

            &-title {
                color: var(--color-title);
            }

            &-text {
                color: var(--color-subtitle);
                margin: 1rem 0;
            }

            &-image {
                margin: 1rem 0;
            }
        }
    }
}
</style>
