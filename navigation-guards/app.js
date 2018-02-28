import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Home = {template:'<div>home</div>'};
const Foo = {template:'<div>foo</div>'};
const Bar = {template:'<div>bar</div>'};

function guardRoute (to,from,next){
	if(window.confirm(`Navigate to ${to.path}?`)){
		next()
	}else if(window.confirm(`Redirect to /baz?`)){
		next('/baz')
	}else{
		next(false)
	}
}

const Baz = {
	data(){
		return {saved:false}
	},
	template:`
		<div>
			<p>baz({{saved?'saved':'not saved'}})</p>
			<button @click="saved = true">save</button>
		</div>
	`,
	beforeRouteLeave(to,from,next){
		if(this.saved || window.confirm('Not saved, are you sure you want to navigate away?')){
			next()
		}else{
			next(false)
		}
	}
}

const Qux = {
	data(){
		return {
			msg:null
		}
	},
	template:`<div>{{msg}}</div>`,
	beforeRouteEnter(to,from,next){
		setTimeout(()=>{
			next(vm=>{
				vm.msg = 'Qux'
			})
		},1000)
	}
}

const Quux = {
	data(){
		return{
			prevId:0
		}
	},
	template:`<div>id:{{$route.params.id}}preId:{{prevId}}</div>`,
	beforeRouteUpdate(to,from,next){
		this.prevId = from.params.id
		next()
	}
}

const router = new VueRouter({
	mode:'history',
	base:__dirname,
	routes:[
		{path:'/',component:Home},
		{path:'/foo',component:Foo,beforeEnter:guardRoute},
		{path:'/bar',component:Bar,meta:{needGuard:true}},
		{path:'/baz',component:Baz},
		{path:'/qux',component:Qux},
		{path:'/qux-async',component:resolve=>{
			setTimeout(()=>{
				resolve(Qux)
			},2000)
		}},
		{path:'/quux/:id',component:Quux}
	]
})

router.beforeEach((to,from,next)=>{
	if(to.matched.some(m=>m.meta.needGuard)){
		guardRoute(to,from,next)
	}else{
		next()
	}
})

new Vue({
	router
}).$mount('#app')