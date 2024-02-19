<script setup></script>

<template>
    <section class="vh-100">
        <div class="container h-100 px-6 p-md-0 d-flex flex-column justify-content-center align-items-center">
            <div class="row justify-content-center align-items-center">
                <div class="col-12 col-md-5">
                    <div class="mb-lg-9 mb-5 d-flex flex-column align-items-center">
                        <img class="w-65 mb-5" src="/assets/images/logo/freshcart-logo.png" alt="eCommerce HTML Template" />
                        <p class="fw-bolder">Admin Login</p>
                    </div>
                    <form class="needs-validation" noValidate>
                        <div class="row g-3">
                            <div class="col-12">
                                <input type="email" class="form-control" id="formSigninEmail" placeholder="Email"
                                    required />
                                <div class="invalid-feedback">Please enter name.</div>
                            </div>
                            <div class="col-12">
                                <div class="password-field position-relative">
                                    <div class="password-field position-relative">
                                        <input type="password" class="form-control fakePassword" id="formSigninPassword"
                                            placeholder="Password" required />
                                        <div class="invalid-feedback">Please enter name.</div>
                                    </div>
                                </div>
                            </div>
                            <div class="d-flex justify-content-end mb-4 mt-1">
                                <div>
                                    <a href="../pages/forgot-password.html"> Forgot password? </a>
                                </div>
                            </div>
                            <div class="col-12 d-grid">
                                <button type="submit" class="btn btn-primary">Sign In</button>
                            </div>
                            <p className="text-start mt-2">
                                New User ?
                                <a href="#!"> Sign Up</a>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>
