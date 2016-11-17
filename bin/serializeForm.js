var cheerio = require('cheerio');
var request = require('request');
var colors=require('colors');
var $;
module.exports=function (callback,form,options){
	request(form, (error, response, body)=> {
		if (!error && response.statusCode == 200) {
			$ = cheerio.load(body);
			var action=$('form').attr('action');
			var array= $('form').serializeArray();

			var formArray = array.map(item=>{

				var el=`[name="${item.name}"]`;

				var tag = $(el).prop('tagName').toLowerCase();

				var type=$(el).attr('type');
				var autocomplete=$(el).attr('autocomplete');
				var label=$(el).attr('aria-label');
				var required=$(el).attr('required');
				var placeholder=$(el).attr('data-initial-value');
				var maxlength=$(el).attr('maxlength');
				var max=$(el).attr('max');
				var min=$(el).attr('min');

				return {
					name:item.name,
					value:item.value,
					type,
					autocomplete,
					label,
					required,
					placeholder,
					max,
					min,
					maxlength,
					tag
				};
			});
		}
		// console.log("serialized form:".yellow);
		// console.log(formArray);
		callback(error,action,formArray,options);
	});
};
