<script setup></script>

<template>
    <nav class="navbar navbar-expand-lg navbar-glass">
            <div class="container-fluid">
                <div class="d-flex justify-content-between align-items-center w-100">
                    <div class="d-flex align-items-center">
                        <Link class="text-inherit d-block d-xl-none me-4" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
                            <i class="fa-solid fa-bars fs-3" />
                        </Link>
                        <form role="search">
                            <input class="form-control" type="search" placeholder="Search" aria-label="Search" />
                        </form>
                    </div>
                    <div>
                        <ul class="list-unstyled d-flex align-items-center mb-0 ms-5 ms-lg-0">
                            <li class="me-2">
                                <NavLink to class="position-relative btn-icon btn-light btn rounded-circle"  >
                                    <i class="fa-solid fa-bell fs-5" />
                                    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger mt-2 ms-n2">
                                        2
                                    </span>
                                </NavLink>
                            </li>
                            <li class="ms-4">
                                <NavLink to>
                                    <img src="/assets/images/avatar/avatar-1.jpg" alt="propic" class="avatar avatar-md rounded-circle" />
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
</template>