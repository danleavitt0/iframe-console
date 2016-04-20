# iframe-console

[![Build status][travis-image]][travis-url]
[![Git tag][git-image]][git-url]
[![NPM version][npm-image]][npm-url]
[![Code style][standard-image]][standard-url]

Gather iframe errors and console messages

## Installation

```
npm install iframe-console
```

## Usage
In iframe:
```js
require('iframe-console')()
```
In parent:
```js
window.addEventListener('message', function ({type, data}) {
  // handle message
})
```

## API

### iframeConsole(source, target)

  - `source`
    - **type:** string
    - url source of message [defaults to window.parent.document.URL]
  - `target`
    - **type:** window
    - the window to direct console messages to

[travis-image]: https://img.shields.io/travis/danleavitt0/iframe-console.svg?style=flat
[travis-url]: https://travis-ci.org/danleavitt0/iframe-console
[git-image]: https://img.shields.io/github/tag/ev3-js/iframe-console.svg?style=flat
[git-url]: https://github.com/ev3-js/iframe-console
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat
[standard-url]: https://github.com/feross/standard
[npm-image]: https://img.shields.io/npm/v/iframe-console.svg?style=flat
[npm-url]: https://npmjs.org/package/iframe-console
