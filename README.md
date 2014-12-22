# generate-goggle-calendar-link

Genelate a link to add a new event to the Google Calendar.

Google Calendarに予定を追加するlinkを生成します。

This function will return a dom element.

DOM 要素を返します。

[![Build Status](https://travis-ci.org/ledsun/generate-google-calendar-link.svg)](https://travis-ci.org/ledsun/generate-google-calendar-link)

[![Sauce Test Status](https://saucelabs.com/browser-matrix/generate-google-calendar-link.svg)](https://saucelabs.com/u/generate-google-calendar-link)

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
var document = require("global/document")
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
ダウンロード
```
curl https://raw.githubusercontent.com/ledsun/generate-google-calendar-link/master/index.js -o generate-google-calendar-link.js
```

htmlにscriptタグを埋め込みます。
```html
<span id="result"></span>
<script src="generate-google-calendar-link.js"></script>
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

### For bower
インストール

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

### Build

```
npm install
npm run build
```

The main function in `src/generate-google-calendar-link.js`.

主な関数は`src/generate-google-calendar-link.js`に入っています。

`src/generate-google-calendar-link.js` is converted to `index.js` as [UMD](https://github.com/umdjs/umd) by [gulp](http://gulpjs.com/).

`src/generate-google-calendar-link.js`を[gulp](http://gulpjs.com/)使って[UMD](https://github.com/umdjs/umd)に変換します。変換した先は`index.js`です。

### Testing
#### Node.js

[mocha](https://github.com/mochajs/mocha) is used to test.

[mocha](https://github.com/mochajs/mocha)を使います。

```
npm install
npm run build
npm test
```

#### browser

Open `example.html` to check `index.js` is loadable by a browser.

ブラウザで読み込めるか確認するには、`example.html`を開きます。

```
open example.js
```


[zuul](https://github.com/defunctzombie/zuul) is used to check `index.js` works in corss borwsers.

クロスブラウザで動作するか確認するには、[zuul](https://github.com/defunctzombie/zuul)を使います。

```
npm run browser
```

### Deploy

Update `package.json`.

`package.json`を更新します。

```
npm install
npm run build
npm test
npm publish
```
