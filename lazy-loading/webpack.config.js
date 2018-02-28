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
				query: {
					presets: ['es2015'],
					plugins:['syntax-dynamic-import']
				}
			},
			{
				test:/\.vue$/,
				loader:'vue-loader'
			}
		]
	},
	resolve: {
		alias: {
			'vue': 'vue/dist/vue.js' 
		} 
	}
};