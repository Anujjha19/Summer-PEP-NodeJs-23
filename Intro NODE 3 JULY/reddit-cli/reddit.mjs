#! /usr/bin/env node
import open from "open";
import fetch from "node-fetch";
import yargs from "yargs";

//parse env variables

// console.log(process.argv)
const { argv } = yargs(process.argv)

//fetch request to reddit api

const res = await fetch('https://www.reddit.com/.json')
const data = await res.json()
// console.log('data', data)
const children = data.data.children
const randomPost = children[Math.floor(Math.random() * children.length)]


// console.log(randomPost)

//log if --print flag is passed

if (argv.print) {
    console.log(`
     Title: ${randomPost.data.title}\n
     Link: ${randomPost.data.permalink}
    `)
} else {
    //open in the browser if not
    open(`https://reddit.com${randomPost.data.permalink}`)
}
