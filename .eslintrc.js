module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "node": true
    },
    "extends": "eslint:recommended",
    "rules": {
        // "indent": [
        //     "error",
        //     "tab"
        // ],
        // "quotes": [
        //     "error",
        //     "single"
        // ],
        "semi": [
            "error",
            "always"
        ],
        "no-console":[0],
        "array-callback-return":["error"],
        //node
        "callback-return":["error"],
        "global-require":["error"],
        "no-mixed-requires":["error"],
        "no-new-require":["error"],
        "no-path-concat":["error"],
        "prefer-arrow-callback":["warn"],
        "no-new-object":["error"],
        "object-shorthand":["error"],
        "prefer-const":["warn"]
    }
	} 
