var cheerio = require('cheerio');
var request = require('request');
var colors=require('colors');
 /* Parses the form and creates a JSON repesentation
 * @param  {cheerioObject} $ Object to be parsed
 * @return {Array}      Array with objects
 */
module.exports = function ($) {
	var array= $('form').serializeArray();
	return array.map(item=>{ //Serialize it to a Json and return it
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
};