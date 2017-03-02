var h=require('./helpers');
var gi=require('./generateInputs');
/**
 * Generates a HTML form from with the action provided and with the serialized form provided
 * @param  {Error} error      	Error first
 * @param  {String} action     form action to be included
 * @param  {Object} serialized Array with serialized form inputs
 * @param  {Object} options    {destiny: "form destiny url"}
 * @return {[type]}            [description]
 */
module.exports=function (error,action,serialized,options){
	var destiny=options.destiny;
	var myString='';

	myString+=`<form action="${action}" method="POST" ${h.destiny(destiny)}>`;
	serialized.forEach((item,index)=>{
		switch (item.tag) {
			case 'input':
				console.log("generating text input".yellow);
				myString+=gi.textInput(item,index);
				break;
			case 'textarea':
			console.log("generating textarea".yellow);
				myString+=gi.textareaInput(item,index);
				break;
			default:
		}
	});
	myString+= h.destinyScript(destiny);
	myString+=`\n<input type="submit" name="submit" value="Send">`;
	myString+=`\n</form>`;
  console.log("Result:".yellow);
	console.log(myString);
	console.log("Enjoy your form".yellow);
};