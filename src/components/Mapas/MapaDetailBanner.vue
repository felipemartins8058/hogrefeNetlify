<script setup>
import AppButton from "../App/AppButton.vue";

const detailBanner = defineProps({
    titulo: String,
    textoBanner: String,
    imagem: String,
});
</script>

<template>
    <div class="detail-banner">
        <div class="detail-banner-background">
            <img
                src="../../assets/images/background-abstract.png"
                alt="Mapa Cover"
            />
        </div>
        <div class="detail-banner-body">
            <div class="detail-banner-body-content">
                <h2 class="detail-banner-body-content-title">
                    {{ detailBanner?.titulo }}
                </h2>
                <p class="detail-banner-body-content-text">
                    {{ detailBanner?.textoBanner }}
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters, as opposed to
                    using 'Content here, content here', making it look like
                    readable English. Many desktop publishing packages and web
                    page editors now use Lorem Ipsum as their default model
                    text, and a search for 'lorem ipsum' will uncover many web
                    sites still in their infancy. Various versions have evolved
                    over the years, sometimes by accident, sometimes on purpose
                    (injected humour and the like).
                </p>
                <router-link to="#manual">
                    <AppButton variant="outline" :="true" text="Veja o manual">
                    <v-icon name="md-chevronright-round"></v-icon>
                </AppButton>
                </router-link>
            </div>
            <div class="detail-banner-body-image">
                <img src="../../assets/images/placeholderbook.png" alt="" />
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.detail-banner {
    position: relative;
    border-radius: 0.5rem;
    background: var(--primary);
    padding: 2rem;

    &-body {
        position: relative;
        z-index: 2;
        display: flex;
        justify-content: space-between;

        &-content {
            width: 50%;
            &-title,
            &-text {
                color: var(--color-button-default-text);
            }
            &-text {
                margin-bottom: 1.5rem;
            }
        }

        &-image {
            position: relative;
            min-width: 50%;
            min-height: 100%;
            display: flex;
            justify-content: center;

            img {
                position: absolute;
                width: 80%;
                height: calc(100% + 10rem);
                object-fit: contain;
                top: 0;
            }
        }
    }

    &-background {
        z-index: 0;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        opacity: 0.1;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
}
</style>
