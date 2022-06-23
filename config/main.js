const fecha = ((d) => {
  return {
    Date: d,
    now: Date.now(),
    date: d.toDateString(),
    utc: d.toUTCString(),
  }
})(new Date())

const _log = './log'
const fs = require('fs')
const path = require('path')
const process = require('process')
const child_process = require('child_process')
const exec = require('child_process').execSync

const UTF8 = { encoding: 'utf8' }

const param = (function org_params(val) {
  let total_instructions = val.slice(2, val.length)
  return total_instructions
})(process.argv)

function ui(typ = 'tfxdff', msg = 'null') {
  return {
    tfxdff: (m) => {
      return `\x1b[48;2;231;72;86m\x1b[38;5;253m\x1b[1m ${m} message \x1b[0m`
    },
    new: (m) => {
      return `\x1b[38;2;13;188;121m\x1b[1m${m}\x1b[0m`
    },
    path: (m) => {
      return `\x1b[38;2;252;127;0m\x1b[1m${m}\x1b[0m`
    },
    error: (m) => {
      return `\x1b[48;2;231;72;86m\x1b[38;5;253m\x1b[1m ${m}  \x1b[0m\x1b[38;2;231;72;86m   Error!\x1b[0m`
    },
    warn: (m) => {
      return `\x1b[48;2;252;127;0m\x1b[38;5;253m\x1b[1m ${m}  \x1b[0m\x1b[38;2;252;127;0m    Warning!\x1b[0m`
    },
    show: (m) => {
      return `\x1b[48;2;13;188;121m\x1b[38;5;253m\x1b[1m ${m}  \x1b[0m\x1b[38;2;13;188;121m      OK\x1b[0m`
    },
  }[typ](msg)
}

function getsQuotes(str, isPath = false) {
  if (isPath) return `"${str}"`
  return str.includes(' ') || str.includes(':') ? `"${str}"` : str
}

function main(ins) {
  const oOperations = {
    'set:entry': (confs) => {
      let new_Name
      let new_path
      let target = confs && confs.length ? confs[0] : false
      let entries = fs.readFileSync(path.join(__dirname, './getEntry.js'), UTF8)
      let regex0 = /^(.*?):(.*?),$/gim
      let evsect = [...entries.matchAll(regex0)]
      let newOrder = []

      for (let i = 0; i < evsect.length; i++) {
        let _check = null
        if (target)
          _check = evsect[i][1].includes(target)
            ? true
            : evsect[i][2].includes(target)
            ? true
            : false
        if (_check) {
          newOrder.unshift(`${evsect[i][0]}`)
        } else {
          newOrder.push(`${evsect[i][0]}`)
        }
      }

      let fileToWrite = 'const entryPoints = {\r\n'
      let composite = ''

      for (let i = 0; i < newOrder.length; i++) {
        composite += `${newOrder[i]}\r\n`
      }
      new_Name = target
      new_path = confs[1] ? confs[1] : `./src/components/${confs[0]}/${confs[0]}.tsx`

      if (
        target &&
        (!composite.includes(confs[0]) || !!(confs[1] && !composite.includes(confs[1])))
      ) {
        let newEntry = `    ${getsQuotes(new_Name)}: ${getsQuotes(new_path, true)},\r\n`
        fileToWrite += newEntry
      }

      fileToWrite += composite
      fileToWrite += '}\r\nmodule.exports = entryPoints;'
      fs.writeFileSync(path.join(__dirname, './getEntry.js'), fileToWrite, UTF8)
      let file

      try {
        file = fs.openSync(path.join(__dirname, `.${new_path}`), 'ax')
        fs.appendFileSync(file, 'data to append', 'utf8')
      } catch (error) {
        console.log('there was an error in opening file...\n', 'trying building the path')
        let curatedPath = `.${new_path
          .split('/')
          .filter((item) => {
            return !item.includes('.tsx')
          })
          .join('/')}/`
        let folder = fs.mkdirSync(path.join(__dirname, curatedPath), { recursive: true })
        console.log('Created 1st folder is ::', folder)
        file = fs.openSync(path.join(__dirname, `.${new_path}`), 'ax')
        fs.appendFileSync(file, 'data to append', 'utf8')
      }

      if (file) {
        console.log(
          `File ${ui('new', 'Created & piped')} for devServer: [${ui('new', new_Name)}] @<${ui(
            'path',
            new_path
          )}>`
        )
      } else {
        console.log(`File piped for devServer: [${ui('new', new_Name)}] @<${ui('path', new_path)}>`)
      }
    },
    two: (confs) => {
      console.log('From SECOND function', confs)
    },
    dev: (confs) => {
      exec('echo PEDRO casa')
      console.log('webpack serve --config config/webpack.config.dev.js --stats-error-details')
    },
    set: (confs) => {
      console.log(ui('warn', 'There is no configuration setup for this command'))
    },
    server: (confs = null) => {
		console.log('host url is at [C:\Windows\System32\drivers\etc\hosts]')
      let result = child_process.execSync('npx --version', UTF8)
      if (confs) {
        return result
      } else {
        console.log(result)
      }
    },
    nonce: (file = null) => {
      try {
        let options = {
          cwd: file.cwd || null, // <string> | <URL> Current working directory of the child process.
          input: file.input || null, // <string> | <Buffer> | <TypedArray> | <DataView> The value which will be passed as stdin to the spawned process. Supplying this value will override stdio[0].
          stdio: file.stdio || null, // <string> | <Array> Child's stdio configuration. stderr by default will be output to the parent process' stderr unless stdio is specified. Default: 'pipe'.
          env: file.env || null, // <Object> Environment key-value pairs. Default: process.env.
          shell: file.shell || null, // <string> Shell to execute the command with. See Shell requirements and Default Windows shell. Default: '/bin/sh' on Unix, process.env.ComSpec on Windows.
          uid: file.uid || null, // <number> Sets the user identity of the process. (See setuid(2)).
          gid: file.gid || null, // <number> Sets the group identity of the process. (See setgid(2)).
          timeout: file.timeout || null, // <number> In milliseconds the maximum amount of time the process is allowed to run. Default: undefined.
          killSignal: file.killSignal || null, // <string> | <integer> The signal value to be used when the spawned process will be killed. Default: 'SIGTERM'.
          maxBuffer: file.maxBuffer || null, // <number> Largest amount of data in bytes allowed on stdout or stderr. If exceeded, the child process is terminated and any output is truncated. See caveat at maxBuffer and Unicode. Default: 1024 * 1024.
          encoding: file.encoding || null, // <string> The encoding used for all stdio inputs and outputs. Default: 'buffer'.
          windowsHide: file.windowsHide || null, // <boolean> Hide the subprocess console window that would normally be created on Windows systems. Default: false.
        }
      } catch (error) {
        console.log('no files to build')
      }
      return [true, 'build']
    },
  }

  const _func = ins[0] || null

  const check = ((pool, key) => {
    return pool.includes(key)
  })(Object.keys(oOperations), _func)

  if (!check) {
    console.log(ui('error', 'Not a command'))
    console.log(ui('warn', 'Not a command'))
    console.log(ui('show', 'Not a command'))
    process.exit(1)
  }

  const _configs = ((items) => {
    if (items && items.includes('+')) {
      let _iSn = items.indexOf('+')
      setTimeout(() => {
        main(items.slice(_iSn + 1, items.length))
      }, 0)
      return items.slice(0, _iSn)
    } else if (items) {
      return items
    } else return null
  })(ins.slice(1, ins.length) || null)

  let mainResult = oOperations[_func](_configs)
  mainResult && console.log(mainResult)
}

main(param)
