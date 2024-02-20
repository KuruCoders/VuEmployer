<script setup>
import { RouterLink, useRouter } from "vue-router";
import { Form, Field } from "vee-validate";
import { ref } from "vue";
import { useToast } from "vue-toastification";
import Authenticate from "@/Store/Authenticate";
import AuthYup from "@/Validation/AuthYup/AuthYup";
import AuthService from "@/Services/Auth/AuthService";

const router = useRouter();
const loading = ref(false);
const toast = useToast();
const authModel = ref({
    name: "",
    telephone: "",
    email: "",
    password: "",
});

const submitData = async () => {
    try {
        loading.value = true;
        toast.info('Validatind Credentials')
        const data = {
            email: authModel.value.email,
            password: authModel.value.password,
            telephone: authModel.value.telephone,
            name:authModel.value.name
        }
        const response = await AuthService.authRegister(data)
        if (response.data.id) {
            toast.success('Succesfully Registered')
            router.push('/login')
        }
    } catch (error) {
        if (error.response.data.code === 400) {
            toast.error(error.response.data.message)
        }
        if (error.response.data.code === 403) {
            toast.error(error.response.data.message)
        }
    }
    finally {
        authModel.value.email=''
        authModel.value.telephone=''
        authModel.value.name=''
        authModel.value.password = ''

        loading.value=false
     }
};

if (Authenticate.isAuthenticated()) {
    router.push("/app/employees");
}
</script>

<template>
    <section class="vh-100">
        <div class="container h-100 px-6 p-md-0 d-flex flex-column justify-content-center align-items-center">
            <div class="row justify-content-center align-items-center">
                <div class="col-12 col-md-4">
                    <div class="mb-lg-9 mb-5 d-flex flex-column align-items-center">
                        <img class="w-65 mb-5" src="/assets/images/logo/freshcart-logo.png"
                            alt="eCommerce HTML Template" />
                        <p>Welcome! Register Now.</p>
                    </div>
                    <Form @submit="submitData" :validation-schema="AuthYup.register" v-slot="{ errors }"
                        class="needs-validation">
                        <div class="row g-3">
                            <div class="col">
                                <Field v-model="authModel.name" type="text" name="name" :class="{ 'is-invalid': errors.name }" class="form-control" id="formSignupfname" placeholder="First Name"
                                    required />
                                <div class="invalid-feedback">{{ errors.name }}</div>
                            </div>
                            <div class="col">
                                <Field type="text" v-model="authModel.telephone" pattern="[0-9]*" maxlength="10" name="telephone" :class="{ 'is-invalid': errors.telephone }" class="form-control" id="formSignupTel"
                                    placeholder="Telephone" required />
                                <div class="invalid-feedback">{{ errors.telephone }}</div>
                            </div>
                            <div class="col-12">
                                <Field type="email" v-model="authModel.email" name="email" :class="{ 'is-invalid': errors.email }" class="form-control" id="formSignupEmail" placeholder="Email"
                                    required />
                                <div class="invalid-feedback">{{ errors.email }}</div>
                            </div>
                            <div class="col-12">
                                <div class="password-field position-relative">
                                    <div class="password-field position-relative">
                                        <Field name="password" v-model="authModel.password" type="password" :class="{ 'is-invalid': errors.password }" class="form-control fakePassword" id="formSignupPassword"
                                            placeholder="*****" required />
                                        <div class="invalid-feedback">
                                            {{ errors.password }}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 d-grid mt-8">
                                <button :disabled="loading" type="submit" class="btn btn-primary">
                                    Register
                                </button>
                            </div>
                            <p class="text-start mt-2">
                                Already a User ?
                                <RouterLink to="/login"> Sign In</RouterLink>
                            </p>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    </section>
</template>
