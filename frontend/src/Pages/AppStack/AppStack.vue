<script setup>
import MainSideNav from '@/components/SideBar/MainSideNav.vue';
import Header from '@/components/Header/Header.vue';
import Employees from './Employees/Employees.vue'
import { RouterView } from 'vue-router';
</script>

<template>
    <Header />
    <div class="main-wrapper">
        <MainSideNav />
        <RouterView/>
        <!-- <Employees /> -->
    </div>
</template>