/* global require, describe, it */
'use strict';

// MODULES //

var chai = require( 'chai' ),
	parsers = require( './../lib/parsers.js' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'parsers', function tests() {

	it( 'should export an object', function test() {
		expect( parsers ).to.be.an( 'object' );
	});

	it( 'should include parsers', function test() {
		var keys = Object.keys( parsers ),
			len = keys.length,
			i;

		for ( i = 0; i < len; i++ ) {
			assert.isFunction( parsers[ keys[ i ] ], keys[ i ] );
		}
	});

});
