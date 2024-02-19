<script setup>
import { RouterLink,useRouter } from 'vue-router';
import Authenticate from '@/Store/Authenticate';

const router = useRouter()
const logoutUser = () => {
    Authenticate.logoutUser()
    router.push('/')
}
</script>

<template>
    <nav style="z-index: 99;" class="navbar-vertical-nav d-none d-xl-block">
        <div class="navbar-vertical">
            <div class="px-4 py-5">
                <a to="/app" class="navbar-brand">
                    <img class='w-75' src="/assets/images/logo/freshcart-logo.png" alt />
                </a>
            </div>
            <div class="navbar-vertical-content flex-grow-1" data-simplebar>
                <ul class="navbar-nav flex-column" id="sideNavbar">
                    <li class="nav-item">
                        <RouterLink to="/app/dashboard" exact active-class="active" class="nav-link ">
                            <div class="d-flex align-items-center">
                                <span class="nav-link-icon"><i class="fa-solid fa-dashboard" /></span>
                                <span class="nav-link-text">Dashboard</span>
                            </div>
                        </RouterLink>
                    </li>

                    <hr class='bordered my-1' />
                    
                    <li class="nav-item">
                        <RouterLink to="/app/employees" exact active-class="active" class="nav-link">
                            <div class="d-flex align-items-center">
                                <span class="nav-link-icon"><i class="fa-solid fa-people-group" /></span>
                                <span class="nav-link-text">Employees</span>
                            </div>
                        </RouterLink>
                    </li>

                    <hr class='bordered my-1' />

                    <li class="nav-item">
                        <a class="nav-link">
                            <div class="d-flex align-items-center">
                                <span class="nav-link-icon"><i class="fa-solid fa-user" /></span>
                                <span class="nav-link-text">Profile</span>
                            </div>
                        </a>
                    </li>
                    <li class="nav-item">
                        <button class="nav-link w-100">
                            <div class="d-flex align-items-center">
                                <span class="nav-link-icon"><i class="fa-solid fa-share" /></span>
                                <span class="nav-link-text">Share</span>
                            </div>
                        </button>
                    </li>
                    <li class="nav-item">
                        <button @click="logoutUser" class="nav-link w-100">
                            <div class="d-flex align-items-center">
                                <span class="nav-link-icon"><i class="fa-solid fa-lock" /></span>
                                <span class="nav-link-text">Logout</span>
                            </div>
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>