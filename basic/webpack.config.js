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
		]
	},
	resolve: {
		alias: {
			'vue': 'vue/dist/vue.js' 
		} 
	}
};