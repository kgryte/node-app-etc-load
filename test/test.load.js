/* global require, describe, it */
'use strict';

// MODULES //

var chai = require( 'chai' ),
	path = require( 'path' ),
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

	it( 'should throw an error if provided an extension which is not a string primitive', function test() {
		var values,
			i;

		values = [
			5,
			NaN,
			null,
			true,
			undefined,
			[],
			{},
			function(){}
		];

		for ( i = 0; i < values.length; i++ ) {
			expect( badValue( values[i] ) ).to.throw( TypeError );
		}
		function badValue( value ) {
			return function badValue() {
				load( './test/fixtures/config.txt', value );
			};
		}
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

	it( 'should load `*.hjson` configuration files', function test() {
		var config;

		config = load( './test/fixtures/config.hjson' );
		assert.deepEqual( config, expected );
	});

	it( 'should load `*.json5` configuration files', function test() {
		var config;

		config = load( './test/fixtures/config.json5' );
		assert.deepEqual( config, expected );
	});

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

	it( 'should load a configuration file and parse according to a provided extension', function test() {
		var config;

		config = load( './test/fixtures/config.txt', '.toml' );
		assert.deepEqual( config, expected );
	});

	it( 'should load a configuration file and parse according to a provided extension (without requiring a leading `.`)', function test() {
		var config,
			fpath;

		fpath = path.resolve( __dirname, './../test/fixtures/config.txt' );
		config = load( fpath, 'toml' );
		assert.deepEqual( config, expected );
	});

});
