<script setup>
import BreadCrumb from '../../../components/BreadCrumb/BreadCrumb.vue'
import EmployeeItem from './EmployeeItem/EmployeeItem.vue';
import Paginator from '../../../components/Paginator/Paginator.vue'
import AddEmployee from './AddEmployee/AddEmployee.vue'
</script>

<template>
    <main className="main-content-wrapper">
        <div className="container">
            <BreadCrumb :iconName="'fa-user-nurse'" :title="'Employees'" />
            <div className="row">
                <div className="col-xl-12 col-12 mb-5">
                    <div className="card h-100 card">
                        <div className="p-6">
                            <div className="row">
                                <div className="col-md-6 col-12">
                                    <form className="d-flex" role="search">
                                        <input className="form-control me-2" type="search" placeholder="Search Seller"
                                            aria-label="Search" />
                                    </form>
                                </div>
                                <div className="col-md-6 text-end">
                                    <button  data-bs-toggle="modal"  data-bs-target="#addEmpModal" className='btn btn-dark'>Add Employee</button>
                                </div>
                                <AddEmployee/>
                            </div>
                        </div>
                        <div className="card-body p-0">
                            <div className="table-responsive">
                                <table className="table table-centered table-hover text-nowrap table-borderless mb-0">
                                    <thead className="bg-light">
                                        <tr>
                                            <th>Employee Id</th>
                                            <th>Name</th>
                                            <th>Email</th>
                                            <th>Store Code</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <EmployeeItem/>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <Paginator />
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>