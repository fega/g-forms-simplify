const request = require('request-promise-native');
const urlCheck = require('./bin/formCheck');
const cheerio = require('cheerio');
const formToArray = require('./bin/serializeForm')
const arrayToHtml = require('./bin/arrayToHtml')

module.exports = async function(form, options){
  var urlForm = urlCheck(form);
  var destiny = options.destiny;
  var body = await request(urlForm);
  var $ = cheerio.load(body);

  var action=$('form').attr('action');//Select the form action
  //generates an array  with the form names
  var serializedForm = formToArray($)
  return arrayToHtml(serializedForm, action, destiny)
}