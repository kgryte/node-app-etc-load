'use strict';

// MODULES //

var parseJSON = require( 'utils-json-parse' ),
	parseTOML = require( 'utils-toml-parse' ),
	parseYAML = require( 'utils-yaml-parse' ),
	parseALCE = require( 'utils-alce-parse' ),
	parseHJSON = require( 'utils-hjson-parse' ),
	noop = function noop() {};


// PARSERS //

var parsers = {
	'.json': parseJSON,
	'.cjson': noop,
	'.hjson': parseHJSON,
	'.alce': parseALCE,
	'.toml': parseTOML,
	'.yml': parseYAML,
	'.yaml': parseYAML,
	'.ini': noop
};


// EXPORTS //

module.exports = parsers;
