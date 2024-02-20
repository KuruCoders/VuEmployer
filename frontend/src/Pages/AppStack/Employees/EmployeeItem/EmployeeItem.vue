<script setup>
import { useRouter } from 'vue-router';

const props = defineProps({
    empList: {
        type:Array
    }
})
const emit = defineEmits([
    'deleteEmployee'
])
const deleteEmp = (id) => {
    emit('deleteEmployee',id)
}
const router = useRouter()
</script>

<template>
    <tbody>
        <tr v-for="emp in empList" :key="emp.id">
            <td>#{{ emp.id }}</td>
            <td>{{ emp.name }}</td>
            <td>{{ emp.email }}</td>
            <td>{{ emp.storecode }}</td>
            <td>{{ emp.country }}</td>
            <td>
                <i class="fa-solid fa-pencil text-warning fs-5 mx-10" @click="router.push(`/app/editEmployee/${emp.id}`)"
                    style="cursor: pointer;" />
                <i @click="deleteEmp(emp.id)" class="fa-solid fa-trash text-danger fs-5" style="cursor: pointer;" />
            </td>
        </tr>
    </tbody>
</template>