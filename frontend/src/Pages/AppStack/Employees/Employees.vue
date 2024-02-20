<script setup>
import BreadCrumb from '../../../components/BreadCrumb/BreadCrumb.vue'
import EmployeeItem from './EmployeeItem/EmployeeItem.vue';
import Paginator from '../../../components/Paginator/Paginator.vue'
import { useRouter } from 'vue-router';
import EmployeeService from '@/Services/Employee/EmployeeService';
import { computed, onBeforeMount, onMounted, ref } from 'vue';
import { useToast } from 'vue-toastification';

const toast = useToast()
const loading = ref(false)
const router = useRouter()
const empList = ref([])
const empCount = ref(0)
const searchQuery = ref('')

const fetchData = async () => {
    try {
        loading.value = true
        const response = await EmployeeService.getAllEmp()
        if (response.data.page) {
            empCount.value = response.data.totalItems
            empList.value = response.data.items
        }
    } catch (error) {
        if (error.response.data.code === 400) {
            toast.error(error.response.data.message)
        }
    } finally {
        loading.value = false
    }
}
const handleEmpDelete = async (empId) => {
    try {
        loading.value = true
        const response = await EmployeeService.deleteEmp(empId)
        toast.success('Deleted')
    } catch (error) {
        if (error.response.data.code === 400) {
            toast.error(error.response.data.message)
        }
        if (error.response.data.code === 404) {
            toast.error(error.response.data.message)
        }
    } finally {
        loading.value = false
        fetchData()
    }
}
const checkEmpExist = computed(() => empList.value.length === 0)

const searchEmpl = (query) => {
    empList.value = empList.value.filter((emp) => {
        return (
            emp.name.toLowerCase().includes(query.toLowerCase()) ||
            emp.email.toLowerCase().includes(query.toLowerCase()) ||
            emp.storecode.toLowerCase().includes(query.toLowerCase()) ||
            emp.country.toLowerCase().includes(query.toLowerCase())
        )
    })
}
onMounted(() => {
    fetchData()
})
</script>

<template>
    <main class="main-content-wrapper pt-14">
        <div class="container">
            <BreadCrumb :iconName="'fa-user-nurse'" :title="'Employees'" />
            <div class="row">
                <div class="col-xl-12 col-12 mb-5">
                    <div class="card h-100 card">
                        <div class="p-6">
                            <div class="row">
                                <div class="col-md-6 col-12">
                                    <div class="d-flex visually-hidden" role="search">
                                        <input v-model="searchQuery" class="form-control me-2" type="search"
                                            placeholder="Search Seller" aria-label="Search" />
                                    </div>
                                    <div class="d-flex justify-content-start align-items-center" role="search">
                                        <h4>Employee List</h4>
                                    </div>
                                </div>
                                <div class="col-md-6 text-end">
                                    <button @click="router.push('/app/addEmployee')" class='btn btn-dark'>Add
                                        Employee</button>
                                </div>
                            </div>
                        </div>
                        <h4 v-if="loading" class="text-center my-4 mb-10">Loading ...</h4>
                        <h4 v-else-if="checkEmpExist" class="text-center my-4 mb-10">No Emplyees Found</h4>
                        <div v-else class="card-body p-0">
                            <div class="table-responsive">

                                <table class="table table-centered table-hover text-nowrap table-borderless mb-0">
                                    <thead class="bg-light">
                                        <tr>
                                            <th>Employee Id</th>
                                            <th>Name</th>
                                            <th>Email</th>
                                            <th>Store Code</th>
                                            <th>Country</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <EmployeeItem @deleteEmployee="handleEmpDelete" :empList="empList" />
                                </table>
                            </div>
                            <Paginator :total="+empCount" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>