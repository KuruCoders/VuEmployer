<script setup>
import MainSideNav from '@/components/SideBar/MainSideNav.vue';
import Header from '@/components/Header/Header.vue';
import Employees from './Employees/Employees.vue'
import { RouterView,useRouter } from 'vue-router';
import Authenticate from '@/Store/Authenticate';

const router = useRouter()
if (!Authenticate.isAuthenticated()) {
    router.push('/')
}
</script>

<template>
    <Header />
    <div class="main-wrapper">
        <MainSideNav />
        <RouterView/>
        <!-- <Employees /> -->
    </div>
</template>