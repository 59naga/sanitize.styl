const path = require('path');

module.exports = () => {
  return function (style) {
    const sanitizeDir = path.dirname(require.resolve('sanitize.css'));
    const sanitizeStyl = path.join(sanitizeDir, 'lib', 'sanitize.styl');
    style.define('sanitizeStyl', sanitizeStyl);
    style.include(__dirname);
  };
};
