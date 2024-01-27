module.exports = {
	root: true,
	env: { browser: true, es2020: true },
	extends: [
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:react-hooks/recommended",
		"plugin:storybook/recommended",
		"plugin:import/errors",
		"plugin:import/warnings",
		"plugin:import/typescript",
		"plugin:prettier/recommended",
		"prettier",
	],
	plugins: [
		"react",
		"react-hooks",
		"react-refresh",
		"import",
		"@typescript-eslint",
		"prettier",
	],
	parserOptions: {
		sourceType: "module",
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 6,
		project: "./tsconfig.json",
	},
	env: {
		browser: true,
		es6: true,
	},
	ignorePatterns: ["dist", ".eslintrc.cjs"],
	parser: "@typescript-eslint/parser",
	settings: {
		"import/resolver": {
			node: {
				extensions: [".js", ".jsx", ".ts", ".tsx"],
				moduleDirectory: ["node_modules", "src/"],
			},
			typescript: {
				alwaysTryTypes: true,
			},
		},
		react: {
			version: "detect",
		},
	},
	rules: {
		"@typescript-eslint/no-explicit-any": ["off"],
		"prettier/prettier": [
			"warn",
			{
				singleQuote: false,
			},
		],
		"react-refresh/only-export-components": [
			"warn",
			{ allowConstantExport: true },
		],
		"import/extensions": [
			"off",
			"ignorePackages",
			{
				ts: "never",
				tsx: "never",
			},
		],
		"import/order": [
			"warn",
			{
				groups: ["external", "builtin", "internal", "parent", "sibling"],
				pathGroups: [
					{
						pattern: "react",
						group: "external",
						position: "before",
					},
					{
						pattern: "./*.module.scss",
						group: "sibling",
						position: "after",
					},
				],
				pathGroupsExcludedImportTypes: ["react"],
				"newlines-between": "always",
				alphabetize: {
					order: "asc",
					caseInsensitive: true,
				},
			},
		],
	},
};
