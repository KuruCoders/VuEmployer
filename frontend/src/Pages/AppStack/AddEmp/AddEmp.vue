<script setup>
import BreadCrumb from "../../../components/BreadCrumb/BreadCrumb.vue";
import EmployeeService from "../../../Services/Employee/EmployeeService";
import { useToast } from "vue-toastification";
import { useRouter } from "vue-router";
import { ref } from "vue";
import { Form, Field } from "vee-validate";
import EmpYup from "../../../Validation/EmpYup/EmpYup";

const router = useRouter();
const loading = ref(false);
const toast = useToast();
const empInit = ref({
    email: "",
    name: "",
    storecode: "",
    country: "",
});

const addEmpl = async () => {
    try {
        loading.value = true;
        let data = {
            name: empInit.value.name,
            email: empInit.value.email,
            storecode: empInit.value.storecode,
            country: empInit.value.country,
        };
        const response = await EmployeeService.employeeCreate(data);
        if (response.data.id) {
            toast.success("Succesfully Added");
            router.push("/app/employees");
        }
    } catch (error) {
        if (error.response.data.code === 400) {
            toast.error(error.response.data.message)
        }
        if (error.response.data.code === 403) {
            toast.error(error.response.data.message)
        }
    } finally {
        empInit.value.email=''
        empInit.value.storecode=''
        empInit.value.name=''
        empInit.value.country=''

        loading.value=false
    }
};
</script>

<template>
    <main class="main-content-wrapper pb-6 px-0 px-md-4 pt-14">
        <div class="container">
            <BreadCrumb :title="'Add Employee'" :iconName="'fa-user-nurse'" />
            <div class="row">
                <div class="col-md-8 offset-md-2 col-12 mb-5">
                    <div class="card p-5">
                        <Form @submit="addEmpl" :validation-schema="EmpYup.addEmp" v-slot="{ errors }">
                            <div class="row row-gap-4">
                                <div class="col-md-6">
                                    <Field type="text" v-model="empInit.name" name="name"
                                        :class="{ 'is-invalid': errors.name }" class="form-control" placeholder="First name"
                                        aria-label="First name" required />
                                    <div class="invalid-feedback">{{ errors.name }}</div>
                                </div>
                                <div class="col-md-6">
                                    <Field type="text" v-model="empInit.country" name="country"
                                        :class="{ 'is-invalid': errors.country }" class="form-control" placeholder="Enter Country"
                                        aria-label="First name" required />
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
                                        Add Employee
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
