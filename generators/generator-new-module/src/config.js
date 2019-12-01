const slug = require('slug')

const OUTPUT_DIR_ROOT = 'src'
const MODULE_DIRECTORY_REGEX = /(?<number>\d+)-(.*)/
const MODULE_DIRECTORY_SLUG = {
  replacement: '-', // replace spaces with replacement
  symbols: true, // replace unicode symbols or not
  remove: null, // (optional) regex to remove characters
  lower: true, // result in lower case
  charmap: slug.charmap, // replace special characters
  multicharmap: slug.multicharmap, // replace multi-characters
}

module.exports = {
  OUTPUT_DIR_ROOT,
  MODULE_DIRECTORY_REGEX,
  MODULE_DIRECTORY_SLUG,
}
