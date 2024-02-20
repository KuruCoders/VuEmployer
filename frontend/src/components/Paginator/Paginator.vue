<script setup>
const props = defineProps({
    total: {
        type: Number,
    },
});
</script>

<template>
    <div class="d-flex justify-content-between align-items-md-center px-6 py-3 flex-md-row flex-column gap-4">
        <span>Showing {{ total }} entries</span>
    </div>
</template>
