<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
    <nav class="navbar-vertical-nav offcanvas offcanvas-start navbar-offcanvac" tabIndex={-1} id="offcanvasExample">
        <div class="navbar-vertical">
            <div class="px-4 py-5 d-flex justify-content-between align-items-center">
                <a class="navbar-brand">
                    <img class='img-fluid w-50' src="/assets/images/logo/freshcart-logo.png" alt />
                </a>
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
            </div>
            <div class="navbar-vertical-content flex-grow-1" data-simplebar>
                <ul class="navbar-nav flex-column">
                    <li class="nav-item">
                        <RouterLink to="/app/dashboard" exact active-class="active" class="nav-link ">
                            <div class="d-flex align-items-center">
                                <span class="nav-link-icon"><i class="fa-solid fa-dashboard" /></span>
                                <span class="nav-link-text">Dashboard</span>
                            </div>
                        </RouterLink>
                    </li>
                    <hr class='bordered my-0' />
                    <li class="nav-item">
                        <RouterLink to="/app/employees" exact active-class="active"  class="nav-link ">
                            <div class="d-flex align-items-center">
                                <span class="nav-link-icon"><i class="fa-solid fa-people-group" /></span>
                                <span class="nav-link-text">Employees</span>
                            </div>
                        </RouterLink>
                    </li>

                    <hr class='bordere my-0' />
                    <li class="nav-item">
                        <a class="nav-link">
                            <div class="d-flex align-items-center">
                                <span class="nav-link-icon"><i class="fa-solid fa-user" /></span>
                                <span class="nav-link-text">Profile</span>
                            </div>
                        </a>
                    </li>
                    <li class="nav-item">
                        <button class="nav-link">
                            <div class="d-flex align-items-center">
                                <span class="nav-link-icon"><i class="fa-solid fa-share" /></span>
                                <span class="nav-link-text">Share</span>
                            </div>
                        </button>
                    </li>
                    <li class="nav-item">
                        <button class="nav-link">
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