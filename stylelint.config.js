module.exports = {
	extends: "stylelint-config-standard",
	rules: {
		'declaration-block-single-line-max-declarations': 0,
		indentation: 'tab',
		'max-nesting-depth': 2,
		'max-empty-lines': 1,
		'declaration-block-no-duplicate-properties': true,
		'function-calc-no-invalid': true,
		'number-max-precision': 3,
		'unit-no-unknown': true,
		'property-no-unknown': true,
		'comment-no-empty': true,
		'at-rule-empty-line-before': 'always',
		'selector-no-qualifying-type': [true, { ignore: ['attribute'] }],
	}
};
