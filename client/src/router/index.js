import Vue from 'vue'
import Router from 'vue-router'
// Users
import UserIndex from '@/components/Users/Index'
import WaterfallIndex from '@/components/Waterfalls/WaterfallIndex'
import UserCreate from '@/components/Users/CreateUser'
import CreateWaterfall from '@/components/Waterfalls/CreateWaterfall'
import UserEdit from '@/components/Users/EditUser'
import EditWaterfall from '@/components/Waterfalls/EditWaterfall'
import UserShow from '@/components/Users/ShowUser'
import ShowWaterfall from '@/components/Waterfalls/ShowWaterfall'
import Login from '@/components/Users/login'


Vue.use(Router)
export default new Router({
    routes: [
        {
            path: '/users',
            name: 'users',
            component: UserIndex
        },
        {
            path: '/waterfalls',
            name: 'waterfalls',
            component: WaterfallIndex
        },
        {
            path: '/user/create',
            name: 'users-create',
            component: UserCreate
        },
        {
            path: '/waterfall/create',
            name: 'waterfalls-create',
            component: CreateWaterfall
        },
        {
            path: '/user/edit/:userId',
            name: 'user-edit',
            component: UserEdit
        },
        {
            path: '/waterfall/edit/:waterfallId',
            name: 'waterfall-edit',
            component: EditWaterfall
        },
        {
            path: '/user/:userId',
            name: 'user',
            component: UserShow
        },
        {
            path: '/waterfall/:waterfallId',
            name: 'waterfall',
            component: ShowWaterfall
        },
        // authen
{
    path: '/login',
    name: 'login',
    component: Login
   }
    ]
})