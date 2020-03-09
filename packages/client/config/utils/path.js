const fs = require('fs')
const path = require('path')
const PROCESS = require('../constants/process')
const { FILE_EXTENSIONS } = require('../constants/files')

const resolveWorkingDirectoryPath = relativePath => path.resolve(PROCESS.WORKING_DIRECTORY, relativePath);

const resolveModule = (resolveFn, filePath) => {
  const extension = FILE_EXTENSIONS.find(extension =>
    fs.existsSync(resolveFn(`${filePath}.${extension}`)),
  );

  if (extension) return resolveFn(`${filePath}.${extension}`);

  return resolveFn(`${filePath}.ts`);
};

module.exports = {
  resolveWorkingDirectoryPath,
  resolveModule,
}
