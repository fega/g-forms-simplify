const request = require('request-promise-native');
const urlCheck = require('./formCheck');
var cheerio = require('cheerio');
var h=require('./helpers');
var gi=require('./generateInputs');

module.exports = async function(form, options){
  var urlForm = urlCheck(form);
  var destiny = options.destiny;
  var html = await request(urlForm);
  var $ = cheerio.load(body);

  var action=$('form').attr('action');//Select the form action
  var array= $('form').serializeArray();//generates an array  with the form names
  var serializedForm = formToArray(array, $)

  return formArrayToHtml(serializedForm, action, destiny)
}

function formToArray(array, $){
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
}
function formArrayToHtml(array,action,destiny){
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

  return myString
}