import Vue from 'vue';
import VueRouter from 'vue-router';

import Hello from './Hello.vue';

Vue.use(VueRouter);

function dynamicPropsFn(route){
    const now = new Date();
    console.log(parseInt(route.params.years));
    return {
        name:(now.getFullYear() + parseInt(route.params.years)) + '!'
    }
}

const router = new VueRouter({
    mode:'history',
    base:__dirname,
    routes:[
        {path:'/',component:Hello},
        {path:'/hello/:name',component:Hello,props:true},
        {path:'/static',component:Hello,props:{name:'world'}},
        {path:'/dynamic/:years',component:Hello,props:dynamicPropsFn}
    ]
});

const vm = new Vue({
    router
}).$mount('#app');
