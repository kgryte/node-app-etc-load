/* global require, describe, it */
'use strict';

// MODULES //

var chai = require( 'chai' ),
	load = require( './../lib/load.js' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'load', function tests() {

	var expected = {
		'port': 7331,
		'address': '127.0.0.1'
	};

	it( 'should export a function', function test() {
		expect( load ).to.be.a( 'function' );
	});

	it( 'should throw an error if provided a filename having an unsupported filename extension', function test() {
		var values,
			i;

		values = [
			'./beep',
			'./beep.boop',
			'./beep.go',
			'./beep.conf',
			'./beep.txt'
		];

		for ( i = 0; i < values.length; i++ ) {
			expect( badValue( values[i] ) ).to.throw( Error );
		}
		function badValue( value ) {
			return function badValue() {
				load( value );
			};
		}
	});

	it( 'should throw an error if a parser returns an error while attempting to parse a configuration file', function test() {
		expect( foo ).to.throw( Error );
		function foo() {
			load( './test/fixtures/bad.json' );
		}
	});

	it( 'should load `*.js` configuration files', function test() {
		var config;

		config = load( './test/fixtures/config.js' );
		assert.deepEqual( config, expected );
	});

	it( 'should load `*.json` configuration files', function test() {
		var config;

		config = load( './test/fixtures/config.json' );
		assert.deepEqual( config, expected );
	});

	it( 'should load `*.cjson` configuration files' );

	it( 'should load `*.alce` configuration files', function test() {
		var config;

		config = load( './test/fixtures/config.alce' );
		assert.deepEqual( config, expected );
	});

	it( 'should load `*.ini` configuration files' );

	it( 'should load `*.toml` configuration files', function test() {
		var config;

		config = load( './test/fixtures/config.toml' );
		assert.deepEqual( config, expected );
	});

	it( 'should load `*.yml` and `*.yaml` configuration files', function test() {
		var config;

		config = load( './test/fixtures/config.yaml' );
		assert.deepEqual( config, expected );

		config = load( './test/fixtures/config.yml' );
		assert.deepEqual( config, expected );
	});

});
