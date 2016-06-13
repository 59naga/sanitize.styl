import test from 'ava';
import stylus from 'stylus';
import escapeRegexp from 'escape-regexp';

import sanitize from './';

const render = (str) => {
  let css;
  stylus(str)
  .use(sanitize())
  .import('sanitize.styl')
  .set('compress', true)
  .render((err, data) => {
    if (err) {
      throw err;
    }

    css = data;
  });
  return css;
};

const specs = [
  {
    description: 'when import should not be yielding',
    code: '',
    expected: /^$/
  },
  {
    description: 'when execute mixin, should be yielding',
    code: 'sanitize()',
    expected: new RegExp(`^${escapeRegexp('/* sanitize.css v3.3.0 | CC0 1.0 Public Domain')}`)
  }
];

specs.forEach(spec => {
  test(spec.description, t => {
    const {code, expected} = spec;
    t.true(expected.test(render(code)));
  });
});
