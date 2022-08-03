const process = require('process')
const path = require('path')
const fs = require('fs')

const params = getParams()
const env_ = getENV()

const mkFolder = (name, loc) => {
    fs.mkdirSync(`${env_.PWD}/src/${loc}/${name}`, {
        recursive: true,
    })
}

const mkComponent = (name,loc) => {
    const fakeData = {
        index: `export { ${name} } from './${name}'\n\r`,
        file: `import React, { ComponentProps } from 'react'\n
        import { ${name}Root } from './${name}.styles'\n\ntype ${name}OwnProps = ComponentProps<typeof ${name}Root>\nexport type ${name}Props = ${name}OwnProps & {\n_name_?: string\n}\n\nexport const ${name} = ({}: ${name}Props) => {\n\n\treturn(\n\t\t<${name}Root>\n\t\t</${name}Root>\n\t)\n}\n`,
        styles: `import { styled } from '@/stitches.conf'\n\r\n\rexport const ${name}Root = styled('div', {\n\n})\n`,
        spec: `import { ${name} } from './${name}'\n\r\n\rdescribe("Suite ${name}", () => {\n\n\tit("Should $1", () => {\n\n\t})\n\n})\n`,
    }
    const location = 'components'
    mkFolder(name,location)
    fs.writeFileSync(`${env_.PWD}/src/${location}/${name}/index.ts`,fakeData.index)
    fs.writeFileSync(`${env_.PWD}/src/${location}/${name}/${name}.tsx`,fakeData.file)
    fs.writeFileSync(`${env_.PWD}/src/${location}/${name}/${name}.styles.ts`,fakeData.styles)
    fs.writeFileSync(`${env_.PWD}/src/${location}/${name}/${name}.spec.tsx`,fakeData.spec)
}

const mkPage = (name,loc) => {

    const location = 'pages'
    mkFolder(name,location)

}

const getName = () => {
    const temp = params
        .filter((val) => {
            return !val.startsWith('-')
        })
        .toString()
    const _end = temp.substring(1, temp.length)
    const _str = temp.substring(0, 1)
    return `${_str.toUpperCase()}${_end}`
}

const createFiles = () => {
    const cmd_type = params.filter((val) => {
        return val.startsWith('-')
    })
    const __cmd = cmd_type.length ? cmd_type : ['components']
    const __name = getName()
    const call = {
        '--component': mkComponent,
        '-component': mkComponent,
        '--c': mkComponent,
        '-c': mkComponent,
        '--page': mkPage,
        '-page': mkPage,
        '--p': mkPage,
        '-p': mkPage,
    }

    for (const item of __cmd) {

        call[item](__name,item)
    }
    console.log('done building',__name)
}

function getParams() {
    return process.argv.slice(2, process.argv.length)
}

function getENV() {
    return process.env
}
/* 
fs.mkdirSync(folderName, { recursive: true });
out: path.join(__dirname, "../../htdocs/src/components"),
*/

createFiles()
