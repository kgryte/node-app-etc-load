Load
===
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][codecov-image]][codecov-url] [![Dependencies][dependencies-image]][dependencies-url]

> Loads a configuration file.


## Installation

``` bash
$ npm install app-etc-load
```


## Usage

``` javascript
var load = require( 'app-etc-load' );
```

#### load( filename )

Loads a configuration file.

``` javascript
var config = load( '/path/to/configuration/file.<ext>' );
// returns {...}
```

If provided a relative path, the filename is resolved relative to the [current working directory](https://github.com/kgryte/utils-cwd).

``` javascript
var config = load( './file.<ext>' );
// returns {...}
```

The following configuration file formats (extensions) are supported:

*	[TOML](https://github.com/kgryte/utils-toml-parse): `*.toml`
*	[YAML](https://github.com/kgryte/utils-yaml-parse): `*.yaml` or `*.yml`
*	[JSON](https://github.com/kgryte/utils-json-parse): `*.json`
*	[ALCE](https://github.com/kgryte/utils-alce-parse): `*.alce`
*	`*.js`

See the `./text/fixtures` directory for file examples.


#### load.exts()

Returns a list of supported filename extensions.

``` javascript
var exts = load.exts();
// returns ['.json','.toml',...]
```


#### load.parser( extname[, parser] )

Returns a parser for the specified extension.

``` javascript
var parser = load.parser( '.json' );
```

Including the `.` when specifying an extension is optional.

``` javascript
var parser = load.parser( 'json' );
```

To extend the main `load` function or to override a default parser, provide a `parser` function for a specified filename extension.

``` javascript
var parser = require( 'my-special-fmt-parser' );

load.parser( '<ext>', parser );
```

Once a parser is set, the main `load` function will recognize and parse files accordingly. The only parser which __cannot__ be overridden is for `.js` configuration files.



## Examples

``` javascript
var load = require( 'app-etc-load' );

var config = load( './.travis.yml' );
console.dir( config );
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


## Tests

### Unit

Unit tests use the [Mocha](http://mochajs.org/) test framework with [Chai](http://chaijs.com) assertions. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul](https://github.com/gotwarlost/istanbul) as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ make view-cov
```


---
## License

[MIT license](http://opensource.org/licenses/MIT).


## Copyright

Copyright &copy; 2015. Athan Reines.


[npm-image]: http://img.shields.io/npm/v/app-etc-load.svg
[npm-url]: https://npmjs.org/package/app-etc-load

[travis-image]: http://img.shields.io/travis/kgryte/node-app-etc-load/master.svg
[travis-url]: https://travis-ci.org/kgryte/node-app-etc-load

[codecov-image]: https://img.shields.io/codecov/c/github/kgryte/node-app-etc-load/master.svg
[codecov-url]: https://codecov.io/github/kgryte/node-app-etc-load?branch=master

[dependencies-image]: http://img.shields.io/david/kgryte/node-app-etc-load.svg
[dependencies-url]: https://david-dm.org/kgryte/node-app-etc-load

[dev-dependencies-image]: http://img.shields.io/david/dev/kgryte/node-app-etc-load.svg
[dev-dependencies-url]: https://david-dm.org/dev/kgryte/node-app-etc-load

[github-issues-image]: http://img.shields.io/github/issues/kgryte/node-app-etc-load.svg
[github-issues-url]: https://github.com/kgryte/node-app-etc-load/issues
