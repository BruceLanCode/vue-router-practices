module.exports = {
	entry:'./app.js',
	output:{
		filename:'bundle.js'
	},
	module:{
		rules:[
			{
				test:/\.js$/,
				exclude:/node_modules/,
				loader:'babel-loader',
			},
			{
				test:/\.vue$/,
				loader:'vue-loader',
			}
		]
	},
	resolve: {
		alias: {
			'vue': 'vue/dist/vue.js' 
		} 
	}
};