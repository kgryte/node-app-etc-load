'use strict';

// MODULES //

var parsers = require( './parsers.js' );


// EXTENSIONS //

/**
* FUNCTION: exts()
*	Returns a list of supported filename extensions.
*
* @returns {String[]} list of supported filename extensions
*/
function exts() {
	var keys = Object.keys( parsers );
	keys.push( '.js' );
	return keys;
} // end FUNCTION exts()


// EXPORTS //

module.exports = exts;
