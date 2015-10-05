/* global require, describe, it */
'use strict';

// MODULES //

var chai = require( 'chai' ),
	load = require( './../lib' );


// VARIABLES //

var expect = chai.expect;


// TESTS //

describe( 'app-etc-load', function tests() {

	it( 'should export a function', function test() {
		expect( load ).to.be.a( 'function' );
	});

	it( 'should export a function to get and set configuration parsers', function test() {
		expect( load.parser ).to.be.a( 'function' );
	});

	it( 'should export a function to get a list of supported extensions', function test() {
		expect( load.exts ).to.be.a( 'function' );
	});

});
