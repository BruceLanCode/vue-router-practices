import Vue from 'vue';
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Home = {
	template:`
		<div class='home'>
			<h2>Home</h2>
			<p>hello</p>
		</div>
	`
}

const Parent = {
	data(){
		return {
			transitionName:'slide-left'
		}
	},
	beforeRouteUpdate()
}