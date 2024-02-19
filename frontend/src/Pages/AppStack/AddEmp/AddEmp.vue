<script setup>
import BreadCrumb from '../../../components/BreadCrumb/BreadCrumb.vue'
</script>

<template>
    <main className="main-content-wrapper pb-6 px-0 px-md-4 pt-14">
        <div className="container">
            <BreadCrumb :title="'Add Employee'" :iconName="'fa-user-nurse'" />
            <div className="row">
                <div className="col-md-8 offset-md-2 col-12 mb-5">
                    <div className="card p-5">
                        <form>
                            <div className="row row-gap-4">
                                <div className="col-md-6">
                                    <input type="text" className="form-control" placeholder="First name"
                                        aria-label="First name" required />
                                </div>
                                <div className="col-6">
                                    <select className="form-select">
                                        <option selected>India</option>
                                        <option value={1}>UK</option>
                                        <option value={2}>USA</option>
                                        <option value={3}>UAE</option>
                                    </select>
                                </div>
                                <div className="col-6">
                                    <select className="form-select">
                                        <option selected>Gujarat</option>
                                        <option value={1}>Northern Ireland</option>
                                        <option value={2}>Alaska</option>
                                        <option value={3}>Abu Dhabi</option>
                                    </select>
                                </div>
                                <div className="col-6">
                                    <input type="text" className="form-control" placeholder="Zip Code" />
                                </div>
                                <div className="col-6 col-md-4">
                                    <input type="text" className="form-control" placeholder="Business Name" />
                                </div>
                                <div className="col-6 col-md-4">
                                    <input type="text" className="form-control" placeholder="Business Name" />
                                </div>
                                <div className="col-6 col-md-4">
                                    <input type="text" className="form-control" placeholder="Business Name" />
                                </div>
                                <div className="col-12 text-end">
                                    <button className='btn btn-primary'>Add Employee</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>