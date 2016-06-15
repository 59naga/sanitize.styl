`sanitize.styl`
---

<p align="right">
  <a href="https://npmjs.org/package/sanitize.styl">
    <img src="https://img.shields.io/npm/v/sanitize.styl.svg?style=flat-square">
  </a>
  <a href="https://travis-ci.org/59naga/sanitize.styl">
    <img src="http://img.shields.io/travis/59naga/sanitize.styl.svg?style=flat-square">
  </a>
  <a href="https://gemnasium.com/59naga/sanitize.styl">
    <img src="https://img.shields.io/gemnasium/59naga/sanitize.styl.svg?style=flat-square">
  </a>
</p>

add `sanitize()` mixin using [sanitize.css/lib/sanitize.styl](https://github.com/10up/sanitize.css#readme)

Installation
---

```bash
npm install sanitize.styl --save
```

or, force latest `sanitize.css` installation using `@newest`.

```bash
npm install sanitize.styl@newest --save
```

Usage
---

### Via CLI

```stylus
// index.styl
@import 'sanitize.styl'

sanitize()
```

```bash
stylus --use sanitize.styl index.styl
# /* sanitize.css v3.3.0 | CC0 1.0 Public Domain | github.com/10up/sanitize.css */
# /*
#  * Normalization
#  */
# abbr[title] {
# ...
```

### Via API

```js
import stylus from 'stylus';
import sanitizeStyl from 'sanitize.styl';

stylus('sanitize()')
.use(sanitizeStyl())
.import('sanitize.styl')
.render((err, css) => {
  if (err) {
    throw err;
  }
  console.log(css);
  //
  // /* sanitize.css v3.3.0 | CC0 1.0 Public Domain | github.com/10up/sanitize.css */
  // /*
  //  * Normalization
  //  */
  // abbr[title] {
  // ...
});
```

Mixins
---

## `sanitize()`

expand the `sanitize.css` in the execute position.

**In**
```stylus
@import 'sanitize.styl'
sanitize()
```

**Out**
```css
/* sanitize.css v3.3.0 | CC0 1.0 Public Domain | github.com/10up/sanitize.css */
abbr[title] {
...
```

**In**
```stylus
@import 'sanitize.styl'
#container
  sanitize()
```

**Out**
```css
/* sanitize.css v3.3.0 | CC0 1.0 Public Domain | github.com/10up/sanitize.css */
#container abbr[title] {
...
```

Development
---
Requirement global
* NodeJS v6.2.1
* Npm v3.9.3 (or [pnpm](https://github.com/rstacruz/pnpm))

```bash
git clone https://github.com/59naga/sanitize.styl
cd sanitize.styl
npm install

npm test
```

License
---
[MIT](http://59naga.mit-license.org/)
