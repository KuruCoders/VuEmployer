<script setup>
import { useRouter } from 'vue-router';

const router = useRouter()
</script>

<template>
    <section>
        <div className="container d-flex flex-column justify-content-center align-items-center">
            <div className="row min-vh-100 justify-content-center align-items-center">
                <div className="col-12 ">
                    <div className="row">
                        <div className="col-12">
                            <div className='text-center'>
                                <img src="/assets/images/svg-graphics/error.svg" alt className="img-fluid" />
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="text-center">
                                <h1>Something’s wrong here...</h1>
                                <p className="mb-8 text-capitalize">
                                    We can’t find the page you’re looking for,back to home.
                                    <br />
                                    Check out our help center for help
                                </p>
                                <button @click="router.back()" className="btn btn-primary ms-2">Back to home</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>