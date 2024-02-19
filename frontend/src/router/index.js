import { createRouter, createWebHistory } from 'vue-router'
import AppStack from '../Pages/AppStack/AppStack.vue'
import Employees from '@/Pages/AppStack/Employees/Employees.vue'
import SignIn from '@/Pages/AuthStack/SignIn/SignIn.vue'
import SignUp from '@/Pages/AuthStack/SignUp/SignUp.vue'
import Error404 from '@/Pages/ErrorPage/Error404/Error404.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'main',
            component: SignIn
        },
        {
            path: '/login',
            name: 'login',
            component: SignIn
        },
        {
            path: '/register',
            name: 'register',
            component: SignUp
        },
        {
            path: '/app',
            name: 'app',
            component: AppStack,
            children: [
                {
                    path: '',
                    component:Employees
                },
                {
                    path: 'employees',
                    component: Employees
                },
                {
                    path: 'dashboard',
                    component: ''
                }
            ]
        },
        {
            path: '/:pathMatch(.*)*',
            name: '404',
            component: Error404
        },
    ]
})

export default router