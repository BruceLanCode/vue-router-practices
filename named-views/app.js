import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const Foo = {template:'<div>foo</div>'};
const Bar = {template:'<div>bar</div>'};
const Baz = {template:'<div>baz</div>'};

const router = new VueRouter({
	mode:'history',
	base:__dirname,
	routes:[
		{
			path:'/',
			components:{
				default:Foo,
				a:Bar,
				b:Baz
			}
		},
		{
			path:'/other',
			components:{
				default:Baz,
				a:Bar,
				b:Foo
			}
		}
	]
});

new Vue({
	router
}).$mount('#app');