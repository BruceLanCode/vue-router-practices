import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Home = {template:'<div>home</div>'}
const Foo = {template:'<div>foo</div>'}
const Bar = {
	template:`
		<div>
			bar
			<div style="height:500px"></div>
			<p id="anchor">Anchor</p>
		</div>
	`
}

const scrollBehavior = (to,from,savePosition)=>{
	if(savePosition){
		return savePosition
	}else{
		const position = {}
		if(to.hash){
			position.selector = to.hash
		}
		if(to.matched.some(m=>m.meta.scrollToTop)){
			position.x = 0
			position.y = 0
		}
		return position
	}
}

const router = new VueRouter({
	mode:'history',
	base:__dirname,
	scrollBehavior,
	routes:[
		{path:'/',component:Home,meta:{scrollToTop:true}},
		{path:'/foo',component:Foo},
		{path:'/bar',component:Bar,meta:{scrollToTop:true}}
	]
})

new Vue({
	router
}).$mount('#app')