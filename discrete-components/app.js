import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Home = {template:'<div>Component:home</div>'}
const Foo = {template:'<div>Component:foo</div>'}
const Bar = {template:'<div>Component:bar</div>'}

const router = new VueRouter({
	mode:'history',
	base:__dirname,
	routes:[
		{path:'/',component:Home},
		{path:'/foo',component:Foo},
		{path:'/bar',component:Bar}
	]
})

const BaseVue = Vue.extend({router})

document.querySelectorAll('.app').forEach(node => {
	new BaseVue({
		el:node
	})
})