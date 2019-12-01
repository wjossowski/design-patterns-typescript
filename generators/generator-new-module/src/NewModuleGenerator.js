const Generator = require('yeoman-generator')
const slug = require('slug')

const { getLastModuleNumber } = require('./utils')
const { OUTPUT_DIR_ROOT, MODULE_DIRECTORY_SLUG } = require('./config')

class NewModuleGenerator extends Generator {
  async getNewModuleName() {
    this.props = await this.prompt([
      {
        type: 'input',
        name: 'title',
        message: 'New module title',
      },
      {
        type: 'input',
        name: 'className',
        message: 'New module base class',
      },
    ])
  }

  async createNewModuleDirectory() {
    const moduleNumber =
      (await getLastModuleNumber(this.destinationPath(OUTPUT_DIR_ROOT))) + 1
    const directorySlug = slug(this.props.title, MODULE_DIRECTORY_SLUG)
    const className = this.props.className
    const outputDir = `${OUTPUT_DIR_ROOT}/${moduleNumber}-${directorySlug}`

    await this.fs.copyTpl(
      this.templatePath('Class.test.ts.template'),
      this.destinationPath(`${outputDir}/${className}.test.ts`),
      { className },
    )

    await this.fs.copyTpl(
      this.templatePath('Class.ts.template'),
      this.destinationPath(`${outputDir}/${className}.ts`),
      { className },
    )

    await this.fs.copyTpl(
      this.templatePath('notes.md.template'),
      this.destinationPath(`${outputDir}/notes.md`),
      { title: this.props.title },
    )
  }
}

module.exports = {
  NewModuleGenerator,
}
