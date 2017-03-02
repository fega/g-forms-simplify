var cheerio = require('cheerio');
var request = require('request');
var colors=require('colors');
const util = require('util')
var $;
/**
 * Parses the form and creates a JSON repesentation
 * @param  {Function} callback callback to be executed after the form serialization
 * @param  {String}   form     Form URL
 * @param  {Object}   options  Object with options
 */
module.exports=function (callback,form,options){
	if (!util.isFunction(callback))
		throw Error("serializeForm: no callback provided")
	request(form, (error, response, body)=> {// Request the Form
		if (error)
			throw error

		if (!error && response.statusCode == 200) {
			$ = cheerio.load(body);// load the body

			var action=$('form').attr('action');//Select the form action
			var array= $('form').serializeArray();

			var formArray = array.map(item=>{ //Serialize it to a Json and return it
				var el=`[name="${item.name}"]`;
				return {
					name: item.name,
					value: item.value,
					type: $(el).attr('type'),
					autocomplete: $(el).attr('autocomplete'),
					label: $(el).attr('aria-label'),
					required: $(el).attr('required'),
					placeholder: $(el).attr('data-initial-value'),
					max: $(el).attr('max'),
					min: $(el).attr('min'),
					maxlength: $(el).attr('maxlength'),
					tag: $(el).prop('tagName').toLowerCase()
				};
			});
		}
		// console.log("serialized form:".yellow);
		// console.log(formArray);
		callback(error,action,formArray,options);
	});
};
