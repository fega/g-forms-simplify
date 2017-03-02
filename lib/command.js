#!/usr/bin/env node
var program = require('commander');
require("babel-polyfill");
const main = require('.')

var colors=require('colors');

program
    .version('0.1.0')
    .option('-f, --form <a>..<b>', 'form URL or ID to be converted')
    // .option('-l --legacy','convert old version of google forms')
    // .option('-o --ouput <a>..<b>', 'if you want an output file (not implemented Yet)')
    // .option('-F --flavor <a>..<b>', 'materialize or bootstrap flavored html (not implemented Yet)')
    .option('-d --destiny <a>..<b>', 'where you want to redirect after an user sends a form')
    .parse(process.argv);

// console.log("checking -f parameter".green);
 var form = program.form

var options = {form};
    options.ouput = program.output || false;
    options.flavor = program.flavor || 'simple';
    options.destiny = program.destiny || false;

main(form,options)
    .then((result) => {
        console.log('Start------------'.red)
        console.log(result)
        console.log('End------------'.red)
    })