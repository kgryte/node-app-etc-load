'use strict';

// MODULES //

var fs = require( 'fs' ),
	path = require( 'path' ),
	extname = require( 'utils-extname' ),
	cwd = require( 'utils-cwd' ),
	getParser = require( './parser.js' ),
	exts = require( './exts.js' );


// LOAD //

/**
* FUNCTION: load( file )
*	Loads a configuration file.
*
* @param {String} file - file path
* @returns {Object} configuration object
*/
function load( file ) {
	var config,
		parse,
		ext;

	ext = extname( file );
	if ( ext === '.js' ) {
		file = path.resolve( cwd(), file );
		return require( file );
	}
	parse = getParser( ext );
	if ( parse === null ) {
		throw new Error( 'invalid input argument. Input argument has an unrecognized/unsupported file extension: `' + ext + '`. Supported extensions: [' + ( exts().join( ',' ) ) + '].' );
	}
	file = path.resolve( cwd(), file );
	file = fs.readFileSync( file, {
		'encoding': 'utf8'
	});
	config = parse( file );
	if ( config instanceof Error ) {
		throw config;
	}
	return config;
} // end FUNCTION load()


// EXPORTS //

module.exports = load;
