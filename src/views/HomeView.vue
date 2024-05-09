<script setup>
import { ref } from 'vue';
import Home from '../components/Home/Home.vue';

import img1 from '../assets/images/1.png';
import img2 from '../assets/images/2.png';
import img3 from '../assets/images/3.png';

const menuItems = ref([
    {
        id: 1,
        title: 'Pacientes',
        icon: img1,
        route: '/pacientes',
        buttonText: 'Buscar paciente'
    },
    {
        id: 2,
        title: 'Nova Aplicação',
        icon: img2,
        route: '/nova-aplicacao-presencial',
        buttonText: 'Aplicar'
    },
    {
        id: 3,
        title: 'Mapas',
        icon: img3,
        route: '/mapas',
        buttonText: 'Ver mapas disponíveis'
    }
]);
</script>

<template>
    <main>
        <Home
            :menu-items="menuItems"
        ></Home>
    </main>
</template>

<style scoped lang="scss">
</style>