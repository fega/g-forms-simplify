
var cheerio = require('cheerio');
var request = require('request');
var $;
serializeForm(generateForm,'https://docs.google.com/forms/d/e/1FAIpQLSfkdFR2sq8L-V-a_x3Ms6JAd-ol6jdm7AqOrRMy3Cp_g3Wz2Q/viewform')
function serializeForm(callback,form){
	request(form, (error, response, body)=> {
		if (!error && response.statusCode == 200) {
			$ = cheerio.load(body);
			var action=$('form').attr('action');
			var array= $('form').serializeArray();
			var completeArray = array.map(item=>{

				var el=`input[name="${item.name}"]`;

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
