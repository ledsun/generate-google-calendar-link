# generate-goggle-calendar-link

Genelate a link to add a new event to the Google Calendar.

Google Calendarに予定を追加するlinkを生成します。

This function will return a dom element.

DOM 要素を返します。

[![Build Status](https://travis-ci.org/ledsun/generate-google-calendar-link.svg)](https://travis-ci.org/ledsun/generate-google-calendar-link)

## Usage

実行例
```js
var a = generateLink({
    start: new Date(2014, 10, 15, 10),
    end: new Date(2014, 10, 15, 18),
    title: 'New event',
    location: 'Some where',
    details: 'http://event.description.example.com/11234'
})
```

### Parameters
See [generate-google-calendar-url](https://github.com/ledsun/generate-google-calendar-url)

## Setup

### For Node.js
インストール
```
npm install generate-google-calendar-link
```

実行例
```js
var document = require('global/document')
var generateLink = require('generate-google-calendar-link')
var a = generateLink({
    start: new Date(2014, 10, 15, 10),
    end: new Date(2014, 10, 15, 18),
    title: 'New event',
    location: 'Some where',
    details: 'http://event.description.example.com/11234'
})

document.getElementById('result').appendChild(a)
```

### For browsers

Use browserify.

For example:
```
browserify example.js -o bundle.js
```

htmlにscriptタグを埋め込みます。
```html
<span id="result"></span>
<script src="bundle.js"></script>
```

## Contributing

contributeするには

1. Fork it.
1. Create a branch (git checkout -b my_function)
1. Commit your changes (git commit -am "Added My Function")
1. Push to the branch (git push origin my_function)
1. Open a Pull Request
1. Enjoy a refreshing coffe and wait

### Test

[mocha](https://github.com/mochajs/mocha) is used to test.

[mocha](https://github.com/mochajs/mocha)を使います。

```
npm install
npm test
```

### Deploy

Update `package.json`.

`package.json`を更新します。

```
npm install
npm test
npm publish
```
