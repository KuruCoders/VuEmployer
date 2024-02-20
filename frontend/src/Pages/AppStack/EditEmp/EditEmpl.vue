<script setup>
import BreadCrumb from '../../../components/BreadCrumb/BreadCrumb.vue';
import { useRoute, useRouter } from 'vue-router';
import EmployeeService from '@/Services/Employee/EmployeeService';
import { useToast } from 'vue-toastification';
import { onMounted, ref } from 'vue';
import { Form, Field } from 'vee-validate';
import EmpYup from '@/Validation/EmpYup/EmpYup';

const route = useRoute()
const router = useRouter()
const { id } = route.params
const loading = ref(false)
const toast = useToast()
const empInit = ref({
    email: "",
    name: "",
    storecode: "",
    country: "",
})

const fetchEmpById = async (id) => {
    try {
        loading.value = true
        const response = await EmployeeService.getEmpById(id)
        if (response.data.id) {
            empInit.value.email = response.data.email
            empInit.value.name = response.data.name
            empInit.value.storecode = response.data.storecode
            empInit.value.country = response.data.country
        }
    } catch (error) {
        if (error.response.data.code === 404) {
            toast.error(error.response.data.message)
        }
    } finally {
        loading.value = false
    }
}
const editEmp = async () => {
    try {
        loading.value = true
        let data = {
            name: empInit.value.name,
            email: empInit.value.email,
            storecode: empInit.value.storecode,
            country: empInit.value.country,
        };
        const response = await EmployeeService.updateEmp(data,id)
        if (response.data.id) {
            loading.value=false
            toast.success("Succesfully Updated");
            router.push("/app/employees");
        }
    } catch (error) {
        if (error.response.data.code === 400) {
            toast.error(error.response.data.message)
        }
        if (error.response.data.code === 403) {
            toast.error(error.response.data.message)
        }
        if (error.response.data.code === 404) {
            toast.error(error.response.data.message)
        }
    } finally {
        loading.value=false
    }
}
onMounted(() => {
    fetchEmpById(id)
})
</script>

<template>
    <main className="main-content-wrapper pb-6 px-0 px-md-4 pt-14">
        <div className="container">
            <BreadCrumb :title="'Edit Employee'" :iconName="'fa-user-nurse'" />
            <div className="row">
                <div className="col-md-8 offset-md-2 col-12 mb-5">
                    <h4 v-if="loading" class="text-center my-4 mb-10" >Fetching Data ....</h4>
                    <div v-else className="card p-5">
                        <Form @submit="editEmp" :validation-schema="EmpYup.editEmp" v-slot="{ errors }">
                            <div class="row row-gap-4">
                                <div class="col-md-6">
                                    <Field type="text" v-model="empInit.name" name="name"
                                        :class="{ 'is-invalid': errors.name }" class="form-control" placeholder="First name"
                                        aria-label="First name" required />
                                    <div class="invalid-feedback">{{ errors.name }}</div>
                                </div>
                                <div class="col-md-6">
                                    <Field type="text" v-model="empInit.country" name="country"
                                        :class="{ 'is-invalid': errors.country }" class="form-control"
                                        placeholder="Enter Country" aria-label="First name" required />
                                    <div class="invalid-feedback">{{ errors.country }}</div>
                                </div>
                                <div class="col-6">
                                    <Field type="text" v-model="empInit.storecode" name="storecode"
                                        :class="{ 'is-invalid': errors.storecode }" class="form-control"
                                        placeholder="store code" />
                                    <div class="invalid-feedback">{{ errors.storecode }}</div>
                                </div>
                                <div class="col-6">
                                    <Field type="email" v-model="empInit.email" class="form-control" name="email"
                                        :class="{ 'is-invalid': errors.email }" placeholder="Email" />
                                    <div class="invalid-feedback">{{ errors.email }}</div>
                                </div>
                                <div class="col-12 text-end">
                                    <button :disabled="loading" type="submit" class="btn btn-primary">
                                        Edit Employee
                                    </button>
                                </div>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>