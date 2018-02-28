import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const Home = {template:'<div><h1>Home</h1><router-view></router-view></div>'};
const Foo = {template:'<div>foo</div>'};
const Bar = {template:'<div>bar</div>'};
const Baz = {template:'<div>baz</div>'};
const Default = {template:'<div>default</div>'};
const Nested = {template:'<router-view/>'};
const NestedFoo = {template:'<div>nested foo</div>'};

const router = new VueRouter({
    mode:'history',
    base:__dirname,
    routes:[
    	{path:'/home',component:Home,
    		children:[
    			{path:'foo',component:Foo,alias:'/foo'},
    			{path:'bar',component:Bar,alias:'bar-alias'},
    			{path:'baz',component:Baz,alias:['/baz','baz-alias']},
    			{path:'default',component:Default,alias:''},
    			{path:'nested',component:Nested,alias:'nested-alias',
    				children:[
    					{path:'foo',component:NestedFoo}
    				]
    			}
    		]
    	},
    ]
});

new Vue({
	router
}).$mount('#app');