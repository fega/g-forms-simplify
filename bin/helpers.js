module.exports.destiny= function (destiny){
	return destiny?'target="hidden_iframe" onsubmit="submitted=true"':'';
};

module.exports.destinyScript= function (destiny){
	return destiny?`
	<script type="text/javascript">var submitted=false;</script>
	<iframe name="hidden_iframe" id="hidden_iframe" style="display:none" onload="if(submitted){window.location='${destiny}';}"></iframe`:'';
};

module.exports.value= function (value){
	return value?`value="${value}"`:'';
};

module.exports.name= function (name){
	return name?`name="${name}"`:'';
};

module.exports.type= function (type){
	return type?`type="${type}"`:'';
};

module.exports.autocomplete= function (autocomplete){
	return autocomplete?`autocomplete="${autocomplete}"`:'';
};

module.exports.required= function (required){
	return required?`required`:'';
};

module.exports.placeholder= function (placeholder){
	return placeholder?`placeholder="${placeholder}"`:'';
};
module.exports.label= function (label,index){
	return label?`<label for="g-form-input-${index}">${label}</label>`:'';
};
