module.exports = {
	"env": {
		"browser": true,
		"es6": true
	},
	"extends": [
		"airbnb",
		"prettier",
		"eslint:recommended",
		"plugin:react/recommended"
	],
	"parserOptions": {
		"ecmaFeatures": {
			"jsx": true
		},
		"ecmaVersion": 2018,
		"sourceType": "module"
	},
	"plugins": [
		"react",
		"prettier"
	],
	"rules": {
		"indent": [
			"error",
			"tab"
		],
		"quotes": [
			"error",
			"single"
		],
		"semi": [
			"error",
			"always"
		],
		"react/jsx-indent": 0,
		"react/jsx-filename-extension": 0,
		"prettier/prettier": [
            "error",
            {
                "useTabs": true,
                "tabWidth": 4,
                "singleQuote": true
            }
        ],
	}
};
