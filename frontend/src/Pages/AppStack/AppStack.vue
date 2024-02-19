<script setup>
import MainSideNav from '@/components/SideBar/MainSideNav.vue';
import Header from '@/components/Header/Header.vue';
import Employees from './Employees/Employees.vue'
</script>

<template>
    <Header />
    <div class="main-wrapper">
        <MainSideNav />
        <Employees />
    </div>
</template>