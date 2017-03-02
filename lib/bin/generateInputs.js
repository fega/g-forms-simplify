var h=require('./helpers');
/**
 * Generates an html text input
 * @param  {Object} item Serialized input item
 * @param  {Number} ind  Index to be added to the Html item ID
 * @return {String}      Html input item
 */
exports.textInput = function (item,ind) {
	var name  =item.name;
	var typ  =item.type;
	var value =item.value;
	var ph    =item.placeholder;
	var auto  =item.autocomplete;
	var req   =item.required;
	var label   =item.label;
	var min   =item.min;
	var max   =item.max;
	var maxlength   =item.maxlength;
	var index   =ind || '';
	return `<p>
	${h.label(label,index)}
	<input id="g-form-input-${index}" ${h.type(typ)} ${h.value(value)} ${h.name(name)} ${h.autocomplete(auto)} ${h.required(req)} ${h.placeholder(ph)} ${h.max(max)} ${h.min(min)} ${h.maxlength(maxlength)} />
	</p>`;
};
/**
 * Generates an html textarea
 * @param  {Object} item Serialized input item
 * @param  {Number} ind  Index to be added to the Html item ID
 * @return {String}      Html textarea item
 */
exports.textareaInput = function (item,ind) {
	var name  =item.name;
	var typ  =item.type;
	var value =item.value;
	var ph    =item.placeholder;
	var auto  =item.autocomplete;
	var req   =item.required;
	var label   =item.label;
	var min   =item.min;
	var max   =item.max;
	var maxlength   =item.maxlength;
	var index   =ind || '';

	return `<p>
	${h.label(label,index)}
	<textarea id="g-form-input-${index}" ${h.name(name)} ${h.autocomplete(auto)} ${h.required(req)} ${h.placeholder(ph)} ${h.max(max)} ${h.min(min)} ${h.maxlength(maxlength)} >${value}</textarea>
	</p>`;
};
