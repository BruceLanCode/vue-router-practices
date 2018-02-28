import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Home = {template:'<div>home</div>'}
const Foo = () => import('./Foo.vue')
const Bar = () => import(/* webpackChunkName: "/bar" */'./Bar.vue')
const Baz = () => import(/* webpackChunkName: "/bar" */'./Baz.vue')

const router = new VueRouter({
	mode:'history',
	base:__dirname,
	routes:[
		{path:'/',component:Home},
		{path:'/foo',component:Foo},
		{path:'/bar',component:Bar,
			children:[
				{path:'baz',component:Baz}
			]
		}
	]
})

new Vue({
	router
}).$mount('#app')