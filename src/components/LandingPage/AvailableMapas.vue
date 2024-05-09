<script setup>
import { onMounted } from "vue";
import { register } from "swiper/element/bundle";
import AppButton from "../App/AppButton.vue";
import MapaApplyCard from "../Mapas/MapaApplyCard.vue";

// register Swiper custom elements
register();

</script>

<template>
    <section class="available-mapas">
        <div class="available-mapas-wrapper">
            <div class="available-mapas-grid">
                <div>
                    <h5 class="available-mapas-subtitle">Lorem Ipsum</h5>
                    <h2 class="available-mapas-title">Mapas disponíveis</h2>
                    <p class="available-mapas-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Vestibulum tempor elit arcu, vitae condimentum enim
                        consequat a. Donec vestibulum libero sit amet vehicula
                        suscipit. Proin tincidunt quis neque in venenatis.
                        Pellentesque blandit semper velit
                    </p>
                    <h5 class="available-mapas-subtile">Lorem Ipsum</h5>
                    <img src="../../assets/images/hogrefe.png" alt="" />
                </div>
                <div class="swiper">
                    <swiper-container
                        :slides-per-view="2.1"
                        :loop="true"
                        :space-between="24"
                        :navigation="{
                            nextEl: '#button-next',
                            prevEl: '#button-prev',
                        }"
                        :breakpoints="{
                            768: {
                                slidesPerView: 2.1,
                            },
                        }"
                    >
                        <swiper-slide
                            ><MapaApplyCard :only-view="true"></MapaApplyCard
                        ></swiper-slide>
                        <swiper-slide
                            ><MapaApplyCard :only-view="true"></MapaApplyCard
                        ></swiper-slide>
                        <swiper-slide
                            ><MapaApplyCard :only-view="true"></MapaApplyCard
                        ></swiper-slide>
                        <swiper-slide
                            ><MapaApplyCard :only-view="true"></MapaApplyCard
                        ></swiper-slide>
                    </swiper-container>
                    <AppButton
                        id="button-next"
                        :has-icon="true"
                        size="icon"
                        variant="outline"
                    >
                        <v-icon name="md-chevronright-round"></v-icon>
                    </AppButton>
                    <AppButton id="button-prev" :has-icon="true" size="icon" variant="outline">
                        <v-icon
                            name="md-chevronright-round"
                            flip="horizontal"
                        ></v-icon>
                    </AppButton>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
.available-mapas {
    &-wrapper {
        @include contentWrapper(5rem 1rem);
    }

    &-grid {
        display: grid;
        grid-template-columns: repeat(2, minmax(300px, 1fr));
        gap: 2.5rem;
    }

    &-subtitle {
        color: var(--color-subtitle);
    }

    &-title {
        color: var(--color-title);
        margin-bottom: 1rem;
    }

    &-text {
        margin-bottom: 1.5rem;
    }
}

.swiper{
    position: relative;

    button{
        position: absolute;
        z-index: 1;
        top: 40%;
    }

    #button-next{
        right: calc(0px - 1rem);
    }

    #button-prev{
        left: calc(0px - 1rem);
    }
}
</style>
