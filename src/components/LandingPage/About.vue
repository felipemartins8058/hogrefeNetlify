<script setup>
import AppButton from "../App/AppButton.vue";
</script>

<template>
    <section class="about">
        <div class="about-wrapper">
            <div class="about-card">
                <div class="about-card-image">
                    <div class="about-card-image-size">
                        <img src="../../assets/images/aboutLp.png" alt="" />
                    </div>
                </div>
                <div class="about-card-content">
                    <div>
                        <h5 class="about-card-content-">Tecnologia e saúde</h5>
                        <h2 class="about-card-content-">Sobre o MAPA</h2>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Vestibulum tempor elit arcu, vitae condimentum enim
                        consequat a. Donec vestibulum libero sit amet vehicula
                        suscipit. Proin tincidunt quis neque in venenatis.
                        Pellentesque blandit semper velit, vel mollis augue
                        malesuada vitae. Maecenas eget velit maximus ex ultrices
                        pellentesque quis a mi. Suspendisse et orci sem.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Ut porttitor, urna condimentum blandit rhoncus, magna
                        neque pulvinar ante, sed feugiat nibh nulla cursus
                        mauris. Aliquam placerat, tortor venenatis semper
                        viverra, odio nibh facilisis risus, nec faucibus ante
                        velit ut felis. Sed pellentesque turpis nulla, nec
                        efficitur justo finibus vel. Sed tempor dictum bibendum.
                        Vestibulum non purus et nibh dignissim egestas sit amet
                        in velit. Suspendisse ac sapien nec tellus volutpat
                        blandit et ut enim. Praesent malesuada imperdiet erat.
                    </p>
                    <AppButton
                        text="Quero começar agora"
                        variant="default"
                        :has-icon="true"
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
.about {
    &-wrapper {
        @include contentWrapper(5rem 1rem);
    }

    &-card {
        background-color: var(--color-background-default);
        border-radius: 0.5rem;
        border: 1px solid var(--color-border-default);
        padding: 1rem;
        display: grid;
        grid-template-columns: 1fr 3fr;
        align-items: center;
        gap: 2.5rem;

        &-content {
            display: flex;
            gap: 1rem;
            flex-direction: column;
            align-items: flex-start;

            button {
                margin-top: 1.5rem;
            }
        }

        &-image {
            display: flex;
            width: 100%;
            height: 100%;

            &-size {
                position: relative;
                display: flex;
                width: 100%;
                height: 100%;

                img {
                    position: absolute;
                    width: 100%;
                    bottom: 0;
                    height: calc(100% + 4.5rem);
                    object-fit: cover;
                    border-radius: 0.5rem;
                }
            }
        }
    }
}
</style>
