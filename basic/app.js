import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const Home = {template:'<div>home</div>'};
const Foo = {template:'<div>foo</div>'};
const Bar = {template:'<div>bar</div>'};

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', component: Home },
    { path: '/foo', component: Foo },
    { path: '/bar', component: Bar }
  ]
});


new Vue({
	router,
	template: `
    <div id="app">
      <h1>Basic</h1>
      <ul>
        <li><router-link to="/">/</router-link></li>
        <li><router-link to="/foo">/foo</router-link></li>
        <li><router-link to="/bar">/bar</router-link></li>
        <router-link tag="li" to="/bar" :event="['mousedown', 'touchstart']">
          <a>/bar</a>
        </router-link>
      </ul>
      <router-view class="view"></router-view>
    </div>
  `
}).$mount('#app');

