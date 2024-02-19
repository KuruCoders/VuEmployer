<script setup>
import Authenticate from "../../../Store/Authenticate";
import { useRouter, RouterLink } from "vue-router";
import { Field, Form } from "vee-validate";
import AuthYup from "../../../Validation/AuthYup/AuthYup";
import { ref } from "vue";
import AuthService from "../../../Services/Auth/AuthService";
import { useToast } from "vue-toastification";
import LocalStore from "@/Store/LocalStore";

const router = useRouter();
const loading = ref(false);
const toast = useToast()
const authModel = ref({
    email: '',
    password:''
})

if (Authenticate.isAuthenticated()) {
    router.push("/app/employees");
}

const submitData = async () => {
    loading.value = true;
    toast.info('Validating Credentials')
    try {
        const data = {email:authModel.value.email,password:authModel.value.password}
        const response = await AuthService.authLogin(data)
        if (response.data.token) {
            LocalStore.storeToken(response.data.token)
            toast.success('Success')
            router.push("/app/employees");
        }
    } catch (error) {
        if (error.response.data.code === 400) {
            toast.error(error.response.data.message)
        }
    } finally {
        loading.value = false
    }
};
</script>

<template>
    <section class="vh-100">
        <div class="container h-100 px-6 p-md-0 d-flex flex-column justify-content-center align-items-center">
            <div class="row justify-content-center align-items-center">
                <div class="col-12 col-md-5">
                    <div class="mb-lg-9 mb-5 d-flex flex-column align-items-center">
                        <img class="w-65 mb-5" src="/assets/images/logo/freshcart-logo.png" alt="eCommerce HTML Template" />
                        <p class="fw-bolder">Admin Login</p>
                    </div>
                    <Form @submit="submitData" :validation-schema="AuthYup.login" v-slot="{ errors }"
                        class="needs-validation">
                        <div class="row g-3">
                            <div class="col-12">
                                <Field v-model="authModel.email" type="email" name="email" :class="{ 'is-invalid': errors.email }"
                                    class="form-control" id="formSigninEmail" placeholder="Email" required />
                                <div class="invalid-feedback">{{ errors.email }}</div>
                            </div>
                            <div class="col-12">
                                <div class="password-field position-relative">
                                    <div class="password-field position-relative">
                                        <Field v-model="authModel.password" type="password" :class="{ 'is-invalid': errors.password }" name="password"
                                            class="form-control" id="formSigninPassword" placeholder="Password" required />
                                        <div class="invalid-feedback">{{ errors.password }}</div>
                                    </div>
                                </div>
                            </div>
                            <div class="d-flex justify-content-end mb-4 mt-1">
                                <div>
                                    <a> Forgot password? </a>
                                </div>
                            </div>
                            <div class="col-12 d-grid">
                                <button :disabled="loading" type="submit" class="btn btn-primary">
                                    Sign In
                                </button>
                            </div>
                            <p className="text-start mt-2">
                                New User ?
                                <RouterLink to="/register"> Sign Up</RouterLink>
                            </p>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    </section>
</template>
