const pack = require('./build/pack');

module.exports = pack({
	dev: true,
	entry: {
		'js/editor': './editor/index.js',
	},
});