// const fs = require('fs');
//common js
//read, create, delete, rename, update

// readFile(path.join(__dirname, 'template.html'))

// console.log(__dirname)

import { readFile, writeFile } from 'fs/promises';


// console.log(import.meta.url)
// const template = await readFile(new URL('template.html', import.meta.url))
// console.log(template.toString())


let template = await readFile(new URL('template.html', import.meta.url), 'utf-8')
// console.log(template)


const data = {
    title: 'learning node js',
    body: 'this is our latest html'
}

// let a = Object.entries(data)
// console.log(a)

for (const [key, value] of Object.entries(data)) {
    template = template.replace(`{${key}}`, value)
}
// console.log(template)

await writeFile(new URL('index.html', import.meta.url), template);
