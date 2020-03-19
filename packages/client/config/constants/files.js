const FILE_EXTENSIONS = [
  'web.mjs',
  'mjs',
  'web.js',
  'js',
  'web.ts',
  'ts',
  'web.tsx',
  'tsx',
  'json',
  'web.jsx',
  'jsx',
];

const STYLES_FILE_EXTENSIONS = [
  'less',
  'css',
];

const DEV_FILENAME = 'static/js/bundle.js'
const DEV_CHUNK_FILENAME = 'static/js/[name].chunk.js'

module.exports = {
  FILE_EXTENSIONS,
  DEV_FILENAME,
  DEV_CHUNK_FILENAME,
}
