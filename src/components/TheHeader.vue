<script setup>
import { useRouter } from 'vue-router'

const theHeaderProps = defineProps({
    isLp: {
        type: Boolean,
        default: false
    }
})
</script>

<template>
    <header class="header" :class="theHeaderProps.isLp ? 'lp' : ''">
        <div class="header-wrapper">
            <div class="header-content">
                <div class="header-menu">
                    <h3 class="header-menu-title">MAPA</h3>
                    <nav class="header-menu-list">
                        <ul>
                            <li><a href="#"><router-link to="/">Início</router-link></a></li>
                            <li><a href="#"><router-link to="/pacientes">Pacientes</router-link></a></li>
                            <li><a href="#"><router-link to="/mapas">Mapas</router-link></a></li>
                            <li><a href="#"><router-link to="/nova-aplicacao-presencial">Nova Aplicação</router-link></a></li>
                        </ul>
                    </nav>
                </div>
                <div>
                    <button class="button-user">
                        <v-icon name="md-accountcircle"></v-icon>
                        <span>Nome do Usuário</span>
                    </button>
                </div>
            </div>
        </div>
    </header>
</template>

<style scoped lang="scss">
.header {
    background-color: var(--color-background-light);

    &-wrapper {
        @include contentWrapper(1rem 1rem);
    }

    &-content {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    &-menu {
        display: flex;
        gap: 3rem;
        align-items: center;

        &-title {
            font-size: 1.5rem;
            font-weight: bolder;
            color: var(--color-title);
        }

        &-list {
            ul {
                display: flex;
                list-style: none;
                padding: 0;

                li {
                    margin-right: 1rem;

                    a {
                        text-decoration: none;
                        color: var(--color-button-default);
                    }
                }
            }
        }
    }

    &.lp {
        background-color: transparent;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        z-index: 1000;

        .header-menu-title,a{
            color: var(--white);
        
        }
    }
}

.button-user {
    background-color: var(--color-button-outline);
    border: 1px solid var(--color-button-outline-border);
    color: var(--color-text);
    border-radius: .5rem;
    padding: .5rem 1rem;
    display: flex;
    align-items: center;
    gap: .5rem;
    cursor: pointer;
}
</style>
