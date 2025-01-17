import { getTemplateData } from './utils/getTemplateData'
import { replaceTemplate } from './utils/replaceTemplate'
import { writeTemplateOutput } from './utils/writeTemplateOutput'

async function main() {
  const data = await getTemplateData()
  const output = replaceTemplate(data)
  await writeTemplateOutput(output)
}

main()
  .then(() => {
    console.log('Template built successfully')
    process.exit(0)
  })
  .catch((err) => {
    console.error(err)
    process.exit(1)
  })
