const h=require('./helpers');
const gi=require('./generateInputs');

module.exports = (array,action,destiny) => {
  var myString = ''
  myString+=`<form action="${action}" method="POST" ${h.destiny(destiny)}>`;
  array.forEach((item,index)=>{
    switch (item.tag) {
      case 'input':
        // console.log("generating text input".yellow);
        myString+=gi.textInput(item,index);
        break;
      case 'textarea':
      // console.log("generating textarea".yellow);
        myString+=gi.textareaInput(item,index);
        break;
    }
  });
  myString+= h.destinyScript(destiny);
  myString+=`\n<input type="submit" name="submit" value="Send">`;
  myString+=`\n</form>`;

  return myString
}