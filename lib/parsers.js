'use strict';

// MODULES //

var parseJSON = require( 'utils-json-parse' ),
	parseTOML = require( 'utils-toml-parse' ),
	parseYAML = require( 'utils-yaml-parse' ),
	parseALCE = require( 'utils-alce-parse' ),
	parseCJSON = require( 'utils-cjson-parse' ),
	parseHJSON = require( 'utils-hjson-parse' ),
	parseJSON5 = require( 'utils-json5-parse' ),
	parseProperties = require( 'utils-properties-parse' ),
	parseINI = require( 'utils-ini-parse' );


// PARSERS //

var parsers = {
	'.json': parseJSON,
	'.cjson': parseCJSON,
	'.hjson': parseHJSON,
	'.json5': parseJSON5,
	'.alce': parseALCE,
	'.toml': parseTOML,
	'.yml': parseYAML,
	'.yaml': parseYAML,
	'.properties': parseProperties,
	'.ini': parseINI
};


// EXPORTS //

module.exports = parsers;
