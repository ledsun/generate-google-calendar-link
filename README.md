# generate-google-calendar-link

Genelate a link to add a new event to the Google Calendar.

Google Calendarに予定を追加するlinkを生成します。

This function will return a dom element.

DOM 要素を返します。

[![Build Status](https://travis-ci.org/ledsun/generate-google-calendar-link.svg)](https://travis-ci.org/ledsun/generate-google-calendar-link)

[![Sauce Test Status](https://saucelabs.com/browser-matrix/google-calendar-link.svg)](https://saucelabs.com/u/google-calendar-link)

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

### For bower
```
bower install generate-google-calendar-link
```

htmlにscriptタグを埋め込みます。
```html
<link rel="stylesheet" href="bower_components/generate-google-calendar-link/index.css">
<div id="result"></div>
<script src="bower_components/generate-google-calendar-link/index.js"></script>
<script>
var a = generateLink({
    start: new Date(2014, 10, 15, 10),
    end: new Date(2014, 10, 15, 18),
    title: 'New event',
    location: 'Some where',
    details: 'http://event.description.example.com/11234'
})

document.getElementById('result').appendChild(a)
</script>
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
#### Standalone

[mocha](https://github.com/mochajs/mocha) is used to test.

[mocha](https://github.com/mochajs/mocha)を使います。

```
npm install
npm test
```

#### cross borwser

[zuul](https://github.com/defunctzombie/zuul) is used to check `index.js` works in corss borwsers.

クロスブラウザで動作するか確認するには、[zuul](https://github.com/defunctzombie/zuul)を使います。

```
npm run browser
```

### Deploy
#### npm
Update `package.json`.

`package.json`を更新します。

```
npm install
npm test
npm publish
```

#### bower
See [generate-google-calendar-link-bower](https://github.com/ledsun/generate-google-calendar-link-bower).
