var h=require('./helpers');
module.exports=function (error,action,serialized,options){
	var destiny=options.destiny;
	var myString='';

	myString+=`<form action="${action}" method="POST" ${h.destiny(destiny)}>`;
	serialized.forEach((item,index)=>{
		var name  =item.name;
		var typ  =item.type;
		var value =item.value;
		var ph    =item.placeholder;
		var auto  =item.autocomplete;
		var req   =item.required;
		var label   =item.label;
		myString+=`
<p>
  ${h.label(label,index)}
  <input id="g-form-input-${index}" ${h.type(typ)} ${h.value(value)} ${h.name(name)} ${h.autocomplete(auto)} ${h.required(req)} ${h.placeholder(ph)}/>
</p>`;
	});
	myString+= h.destinyScript(destiny);
	myString+=`\n<input type="submit" name="submit" value="Send">`;
	myString+=`\n</form>`;
  console.log("Result:".yellow);
	console.log(myString);
	console.log("Enjoy your form".yellow);
};
