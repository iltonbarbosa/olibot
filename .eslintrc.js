module.exports = {
	root: true,
	env: {
		node: true,
	},
	extends: [
		'plugin:vue/essential',
		'@vue/airbnb',
	],
	parserOptions: {
		parser: 'babel-eslint',
	},
	rules: {
		'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'class-methods-use-this': 'off',
		'no-unused-vars': ['error', { 'argsIgnorePattern': 'next' }],
		'no-tabs': ['error', { allowIndentationTabs: true }],
		'no-useless-escape': 'off',
		'indent': [2, 'tab'],
		'semi': ['error', 'never'],
		'quotes': ['error', 'single'],
		'no-console': ["error", { allow: ["info", "error"] }]
	},
};
