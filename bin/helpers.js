
var isNumber = require('is-number');
/**
 * Returns a string useful for change the form destiny after send it, append it under the <form> tag
 * @param  {String} destiny Wanted destiny
 * @return {String}         Useful string
 */
module.exports.destiny= function (destiny){
	return destiny?'target="hidden_iframe" onsubmit="submitted=true"':'';
};
/**
 * Returns a string useful for change the form destiny after send it, append it between the <html> tag
 * @param  {String} destiny Wanted destiny
 * @return {String}         Useful string
 */
module.exports.destinyScript= function (destiny){
	return destiny?`<script type="text/javascript">var submitted=false;</script>
<iframe name="hidden_iframe" id="hidden_iframe" style="display:none" onload="if(submitted){window.location='${destiny}';}"></iframe`:'';
};
/**
 * Returns a value prop String
 * @param  {String} value value of the property "value"
 * @return {String}       String 
 */
module.exports.value= function (value){
	return value?`value="${value}"`:'';
};
/**
 * Returns a name prop String
 * @param  {String} name value of the property "name"
 * @return {String}       String 
 */
module.exports.name= function (name){
	return name?`name="${name}"`:'';
};
/**
 * Returns a type prop String
 * @param  {String} type value of the property "type"
 * @return {String}       String 
 */
module.exports.type= function (type){
	return type?`type="${type}"`:'';
};
/**
 * Returns a autocomplete prop String
 * @param  {String} autocomplete value of the property "value"
 * @return {String}       Stringautocomplete */
module.exports.autocomplete= function (autocomplete){
	return autocomplete?`autocomplete="${autocomplete}"`:'';
};
/**
 * Returns a required prop String
 * @param  {String} required value of the property "required"
 * @return {String}       String 
 */
module.exports.required= function (required){
	return required?`required`:'';
};
/**
 * Returns a placeholder prop String
 * @param  {String} placeholder value of the property "placeholder"
 * @return {String}       String 
 */
module.exports.placeholder= function (placeholder){
	return placeholder?`placeholder="${placeholder}"`:'';
};
/**
 * Returns a max prop String
 * @param  {String} max value of the property "max"
 * @return {String}       String 
 */
module.exports.max= function (max){
	return max?`max="${max}"`:'';
};
/**
 * Returns a min prop String
 * @param  {String} min value of the property "min"
 * @return {String}       String 
 */
module.exports.min= function (min){
	return min?`min="${min}"`:'';
};
/**
 * Returns a maxlength prop String
 * @param  {String} maxlength value of the property "maxlength"
 * @return {String}       String 
 */
module.exports.maxlength= function (maxlength){
	return isNumber(maxlength)?`maxlength="${maxlength}"`:'';
};
/**
 * Returns a label tag string
 * @param  {String} label Label text
 * @param  {id} index Label id
 * @return {String}       Tag String
 */
module.exports.label= function (label,index){
	return label?`<label for="g-form-input-${index}">${label}</label>`:'';
};
