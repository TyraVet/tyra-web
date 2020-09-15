import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Clients from '../views/Clients.vue'
import Panel from '../views/Panel.vue'
import Breeds from '../views/Breeds.vue'
import Login from '../views/Login.vue'
import SignUp from '../views/SignUp.vue'
import PageNotFound from '../views/PageNotFound.vue'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'home',
		component: Home,
		meta: {
			title: 'TyraWeb Home Page'
		}
	},
	{
		path: '/clients',
		name: 'clients',
		component: Clients,
		meta: {
			title: 'TyraWeb Clients View'
		}
	},
	{
		path: '/panel',
		name: 'panel',
		component: Panel,
		meta: {
			title: 'TyraWeb Admin Panel'
		}
	},
	{
		path: '/panel/breeds',
		name: 'breeds',
		component: Breeds,
		meta: {
			title: 'TyraWeb Breeds List'
		}
	},
	{
		path: '/log-in',
		name: 'log-in',
		component: Login,
		meta: {
			title: 'TyraWeb Login'
		}
	},
	{
		path: '/sign-up',
		name: 'sign-up',
		component: SignUp,
		meta: {
			title: 'TyraWeb SignUp'
		}
	},
	{
		path: '*',
		name: 'page-not-found',
		component: PageNotFound,
		meta: {
			title: 'TyraWeb Page Not Found'
		}
	}
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router
