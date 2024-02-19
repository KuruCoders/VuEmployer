<script setup>
import { defineProps } from "vue";
const props = defineProps({
    title: {
        type: String,
        required: true,
    },
    iconName: {
        type: String,
        required: true,
    },
});
</script>

<template>
    <div class="row mb-8">
        <div class="col-md-12">
            <div class="card p-4">
                <div class="d-md-flex justify-content-between align-items-center">
                    <div>
                        <h2>{{ title }}</h2>
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb mb-0">
                                <li class="breadcrumb-item">
                                    <a href="#" class="text-inherit">Dashboard</a>
                                </li>
                                <li class="breadcrumb-item active" aria-current="page">
                                    {{ title }}
                                </li>
                            </ol>
                        </nav>
                    </div>
                    <i :class="['fa-solid', iconName, 'fs-3']" />
                </div>
            </div>
        </div>
    </div>
</template>
