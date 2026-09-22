# generate-google-calendar-link

Genelate a link to add a new event to the Google Calendar.

Google Calendarに予定を追加するlinkを生成します。

This function will return a dom element.

DOM 要素を返します。

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
Node.js 26 以上が必要です。このパッケージは ES Modules の default export を公開します。
従来の `require()` は `import` に変更してください。

インストール
```
npm install generate-google-calendar-link
```

実行例（`.mjs` ファイル、または `package.json` に `"type": "module"` を指定）
```js
import generateLink from 'generate-google-calendar-link'
var a = generateLink({
    start: new Date(2014, 10, 15, 10),
    end: new Date(2014, 10, 15, 18),
    title: 'New event',
    location: 'Some where',
    details: 'http://event.description.example.com/11234'
})

console.log(a.href)
```

### For browsers

ES Modules と CommonJS の依存ライブラリを処理できるバンドラーを使用してください。
従来の Browserify のみの手順は対応しません。
日付の処理にはブラウザの Temporal API が必要です。ポリフィルは同梱しません。

バンドラーのエントリーファイル（`example.js`）の例：
```js
import generateLink from 'generate-google-calendar-link'

document.getElementById('result').appendChild(generateLink({
    title: 'New event',
    date: '2026/09/22'
}))
```

バンドラーが出力した `bundle.js` を HTML から読み込みます。
```html
<span id="result"></span>
<script type="module" src="bundle.js"></script>
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

### Deploy
#### npm
Publishing uses [npm trusted publishing](https://docs.npmjs.com/trusted-publishers/).
In the npm package settings, configure GitHub Actions as a trusted publisher:

- Organization or user: `ledsun`
- Repository: `generate-google-calendar-link`
- Workflow filename: `publish.yml`
- Environment name: leave blank
- Allow direct publishing with `npm publish`.

Update the version in `package.json` and `package-lock.json` (for example, with
`npm version patch`), then push the commit and version tag. Pushing a tag matching
`v*` (for example, `v0.0.6`) runs `.github/workflows/publish.yml`. The workflow
installs dependencies, runs tests, and publishes to npm.
