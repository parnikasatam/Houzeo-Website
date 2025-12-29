const fs = require('fs')
const path = require('path')

const exts = ['.js', '.vue', '.css', '.html', '.md']
const root = path.resolve(__dirname, '..')
let modified = []

function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true })
  for (const e of entries) {
    if (e.name === 'node_modules' || e.name === '.git') continue
    const full = path.join(dir, e.name)
    if (e.isDirectory()) walk(full)
    else if (exts.includes(path.extname(e.name))) processFile(full)
  }
}

function processFile(file) {
  let txt = fs.readFileSync(file, 'utf8')
  let original = txt

  // Remove block comments /* ... */
  txt = txt.replace(/\/\*[\s\S]*?\*\//g, '')

  // Remove HTML comments <!-- ... -->
  txt = txt.replace(/<!--[\s\S]*?-->/g, '')

  // Remove line comments starting with // at line start (ignore URLs or protocol patterns)
  txt = txt.replace(/(^|\n)[ \t]*\/\/.*(?=\n|$)/g, '$1')

  if (txt !== original) {
    fs.writeFileSync(file, txt, 'utf8')
    modified.push(file)
  }
}

walk(root)
console.log('Removed comments from files:', modified.length)
modified.forEach(f => console.log(' -', path.relative(root, f)))
