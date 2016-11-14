var program = require('commander');
var path = require('path');
var cheerio = require('cheerio');
var request = require('request');
var $;

program
	.version('0.1.0')
	.option('-f, --form','form URL or ID to be converted')
	.option('-l --legacy','convert old version of google forms')
	.option('-o --ouput','if you want an output file')
	.option('-F --flavor','materialize or bootstrap flavored html')
	.option('-r --response','where you want to redirect after an user sends a form')
	.parse(process.argv);

var form;

console.log('Converting: '+ program.form);
//sanitize form
if (program.form.includes('docs.google.com/forms')){
	if (program.form.includes('/viewform')){
		form = program.form;
	}else{
		form = `${program.form}+/viewform`;
	}

}else{
	if (
		program.form.includes('http://') ||
		program.form.includes('https://') ||
		program.form.includes('.')
	){
		console.log('It doesn\'t looks as a google form URL or id');
		process.exit(1);
	}
	form = `https://docs.google.com/forms/d/e/${program.form}/viewform`;
}
serializeForm(generateForm,form);

//request te form
function serializeForm(callback,form){
	request(form, (error, response, body)=> {
		if (!error && response.statusCode == 200) {
			$ = cheerio.load(body);
			var action=$('form').attr('action');
			var array= $('form').serializeArray();
			var completeArray = array.map(item=>{

				var el=`input[name=""${item.name}"]`;

				var type=$(el).attr('type');
				var autocomplete=$(el).attr('autocomplete');
				var label=$(el).attr('aria-label');
				var required=$(el).attr('required');
				var placeholder=$(el).attr('data-initial-value');

				return {
					name:item.name,
					value:item.value,
					type,
					autocomplete,
					label,
					required,
					placeholder
				};
			});
		}
		callback(error,action,completeArray);
	});
}
function generateForm(error,action,serialized){
	var myString='';
	myString+=`<form action="${action}" method="" target="hidden_iframe" onsubmit="submitted=true">`;
	serialized.forEach(item=>{
		myString+=`\n<input type="${item.type}" value="${item.value}" name="${item.name}" autocomplete="${item.autocomplete}" required="${item.required}" placeholder="${item.placeholder}"/>`;
	});
	myString+=`\n</form>`;
	console.log(myString);
}
