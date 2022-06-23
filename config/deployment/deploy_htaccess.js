const fs = require('fs')
const path = require('path')
const { DIRECTORY } = require('../repositories/server_directory')

const out_dir = path.resolve(__dirname, DIRECTORY.HTACCESS_MAIN)

const clog = (m) => {
  console.log(
    `\x1b[48;2;13;188;121m\x1b[38;5;253m\x1b[1m ${m}  \x1b[0m\x1b[38;2;13;188;121m      OK\x1b[0m`
  )
}

const ruleCollection = [
  'RewriteEngine On',
  'RewriteCond %{HTTP:Authorization} ^(.*)',
  'RewriteRule .* - [E=HTTP_AUTHORIZATION:%{HTTP:Authorization}]',
  null,
  'RewriteCond %{REQUEST_FILENAME} !-f',
  'RewriteCond %{REQUEST_FILENAME} !-d',
  'RewriteRule ^MIST/(.*)$ /MIST/_main_.php/$1 [QSA]',
  'RewriteRule ^api/mecuate/v1/(.*)$ /api/mec.php/$1 [QSA]',
  'RewriteRule ^api/([^/]+)/([^/]+)/([^/]+)/(.*)$ /api/api.php/$1/$2/$3/$4 [L,QSA]',
]

clog('executing... deployment of htaccess')

const _make_ = (rules) => {
  let body = `# file made: ${Date.now()}\n# .htaccess auto deployed\n\n`

  for (const r of rules) {
    body += r ? `${r}\n` : '\n'
  }

  const status = fs.writeFileSync(`${out_dir}/.htaccess`, body, (e) => {
    if (e) throw e
  })
  clog(status, body)
}

_make_(ruleCollection)
