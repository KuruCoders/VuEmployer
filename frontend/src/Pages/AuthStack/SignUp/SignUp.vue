<script setup>
</script>

<template>
    <section className="vh-100">
            <div className="container h-100 px-6 p-md-0 d-flex flex-column justify-content-center align-items-center">
                <div className="row justify-content-center align-items-center">
                    <div className="col-12 col-md-4">
                        <div className="mb-lg-9 mb-5 d-flex flex-column align-items-center">
                            <img className='w-65 mb-5' src="/assets/images/logo/freshcart-logo.png" alt="eCommerce HTML Template" />
                            <p>Welcome! Register Now.</p>
                        </div>
                        <form className="needs-validation" noValidate>
                            <div className="row g-3">
                                <div className="col">
                                    <input type="text" className="form-control" id="formSignupfname" placeholder="First Name" required />
                                    <div className="invalid-feedback">Please enter first name.</div>
                                </div>
                                <div className="col">
                                    <input type="text" className="form-control" id="formSignuplname" placeholder="First Name" required />
                                    <div className="invalid-feedback">Please enter last name.</div>
                                </div>
                                <div className="col-12">
                                    <input type="email" className="form-control" id="formSignupEmail" placeholder="Email" required />
                                    <div className="invalid-feedback">Please enter email.</div>
                                </div>
                                <div className="col-12">
                                    <div className="password-field position-relative">
                                        <div className="password-field position-relative">
                                            <input type="password" className="form-control fakePassword" id="formSignupPassword" placeholder="*****" required />
                                            <div className="invalid-feedback">Please enter password.</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 d-grid mt-8">
                                    <button type="submit" className="btn btn-primary">Register</button>
                                </div>
                                <p className='text-start mt-2'>
                                    Already a User ?
                                    <a href="#!"> Sign In</a>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
</template>