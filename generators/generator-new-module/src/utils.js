const fs = require('fs').promises

const { MODULE_DIRECTORY_REGEX } = require('./config')

const getLastModuleNumber = async (path) => {
  const outputDirectoryContent = await fs.readdir(path)

  return outputDirectoryContent.reduce((currentMax, directory) => {
    const result = MODULE_DIRECTORY_REGEX.exec(directory)
    if (!result) {
      return currentMax
    }

    return Math.max(currentMax, result.groups.number)
  }, 0)
}

module.exports = {
  getLastModuleNumber,
}
