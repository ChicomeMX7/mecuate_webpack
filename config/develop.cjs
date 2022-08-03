const _log = './log'
const fs = require('fs')
const path = require('path')
const process = require('process')
const child_process = require('child_process')
const { callbackify } = require('util')

const param = (function org_params(val) {
    let total_instructions = val.slice(2, val.length)
    return total_instructions
})(process.argv)

const stdout = (str, pathFile, ext = null) => {
    let file_adress = `${pathFile}/out-${Date.now()}.${ext ? ext : '.log'}`
    let data2save = `///pepe --output ${fecha.utc} \n\n ${str}`
    let outsize = data2save.length * 8
    fs.writeFile(file_adress, data2save, (err) => {
        if (err) throw err
        console.log(`Data log saved :[${outsize}]Kib --${fecha.date}`)
    })
}
const error = ({ a, b, c }) => {
    let origin = a
    let message = b
    let inst = c || null
    let complete = `Error in [${origin}] det:[${JSON.stringify(
        message
    ).substring(0, 18)}...]${inst ? inst : '.'}`
}

function main(ins) {
    if (ins[0] === 'clear') {
        let folder = path.join(__dirname, '../../htdocs')
        console.log('Recivied on main', ins, 'as for folder:', folder)
        fs.rmSync(folder, { recursive: true, force: true })
    } else {
        try {
            fs.mkdirSync(_log, { recursive: true })
        } catch (err) {
            console.error(err)
            console.log('err in main function')
        }
        const callback = {
            set: (value) => {
                console.log(
                    'RECIBED THE VALUE IN A CALLBACK FUNCTION WICH IS REALLY NOT SO IT WILL RETURN AND ADD ONE AND SOFOR SKINP ONE ITERATION TO THE INITIAL ARRAY'
                )
            },
            server: (def = null) => {
                let result = child_process.execSync('npx --version')
                if (def) {
                    console.log(result)
                    return result
                } else {
                    console.log(result)
                }
            },
            build: (file = null) => {
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
        function start(args) {
            let lst
            try {
                lst = Object.keys(args)
            } catch (e) {
                error('listing:cmd', e)
            }
            const __map = callback

            for (let i = 0; i < lst.length; i++) {
                let curr = args[lst[i]].replace('--', '')
                console.log('Processing: ', curr)
                if (__map[curr]) {
                    let result = __map[curr](1)
                    console.log(result)
                }
            }
            a()
        }

        function a() {
            console.log('A function is called')
        }

        start(ins)
    }
}

function _main_() {
    const child = child_process.exec('vite')
    const server = child_process.exec('docker start mecuate')
    // const spawn = require('child_process').spawn
    // const child = spawn('vite')
    // const server = spawn('docker start mecuate')

    var scriptOutput = ''

    child.stdout.setEncoding('utf8')
    child.stdout.on('data', function (data) {
        console.log('stdout: ' + data)
        data = data.toString()
        scriptOutput += data
    })
    child.stderr.setEncoding('utf8')
    child.stderr.on('data', function (data) {
        console.log('stderr: ' + data)
        data = data.toString()
        scriptOutput += data
    })
    child.on('close', function (code) {
        console.log('closing code: ' + code)
        console.log('Full output of script: ', scriptOutput)
        server.stdin.write('docker stop mecuate')
    })
}

_main_()
