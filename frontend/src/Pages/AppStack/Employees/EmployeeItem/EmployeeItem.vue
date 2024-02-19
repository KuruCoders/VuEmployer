<script setup>
import { useRouter } from 'vue-router';
const router = useRouter()
</script>

<template>
    <tr>
        <td>#010</td>
        <td><a href="#" className="text-reset">E-Grocery Super Market</a></td>
        <td>egrocery@dayrep.com</td>
        <td>fds343</td>
        <td>
            <i className="fa-solid fa-pencil text-warning fs-5 mx-10" @click="router.push('/app/editEmployee/1')" style="cursor: pointer;"/>
            <i className="fa-solid fa-trash text-danger fs-5" style="cursor: pointer;"/>
        </td>
    </tr>
</template>