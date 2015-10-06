'use strict';

// MODULES //

var fs = require( 'fs' ),
	path = require( 'path' ),
	extname = require( 'utils-extname' ),
	cwd = require( 'utils-cwd' ),
	isString = require( 'validate.io-string-primitive' ),
	getParser = require( './parser.js' ),
	exts = require( './exts.js' );


// LOAD //

/**
* FUNCTION: load( filename[, fmt] )
*	Loads a configuration file.
*
* @param {String} filename - file path
* @param {String} [fmt] - extension name explicitly specifying how to parse a file
* @returns {Object} configuration object
*/
function load( filename, fmt ) {
	var config,
		parse,
		file,
		ext;

	if ( arguments.length > 1 ) {
		ext = fmt;
		if ( !isString( ext ) ) {
			throw new TypeError( 'invalid input argument. Extension argument must be a primitive string. Value: `' + ext + '`.' );
		}
		if ( ext[ 0 ] !== '.' ) {
			ext = '.' + ext;
		}
	} else {
		ext = extname( filename );
	}
	ext = ext.toLowerCase();
	if ( ext === '.js' ) {
		file = path.resolve( cwd(), filename );
		return require( file );
	}
	parse = getParser( ext );
	if ( parse === null ) {
		throw new Error( 'invalid input argument. Input argument has an unrecognized/unsupported file extension: `' + ext + '`. Supported extensions: [' + ( exts().join( ',' ) ) + '].' );
	}
	file = path.resolve( cwd(), filename );
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
