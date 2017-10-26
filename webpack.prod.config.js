const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const BUILD_DIR = path.resolve(__dirname, 'build')
const APP_DIR = path.resolve(__dirname, 'src')

const config = {
	entry: `${APP_DIR}/index.jsx`,
	output: {
		path: BUILD_DIR,
		filename: 'bundle.js',
	},
	module: {
		loaders: [
			{
				test: /\.jsx?/,
				include: APP_DIR,
				loader: 'babel',
			},
		],
	},
	plugins: [
		new webpack.optimize.DedupePlugin(),
		new webpack.optimize.UglifyJsPlugin({
			minimize: true,
			compress: {
				warnings: false,
			},
		}),
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: `${APP_DIR}/index.html`,
		}),
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify('production'),
			},
		}),
	],
	resolve: {
		extensions: ['', '.js', '.jsx'],
	},
}

module.exports = config
