/* eslint-disable */
'use strict'
var chai = require('chai'); 
var expect = require('chai').expect;
var request =require('chai-http');
var cheerio = require('cheerio');
var h = require('../lib/bin/helpers');
var serializeForm = require('../lib/bin/serializeForm.js');
var $;

var html =`
	<form action="action">
	<input name="1name"></input>
	<textarea name="2name"></textarea>
	</form>
	`
var load = cheerio.load(html)

chai.use(request);

describe('serializeForm',function(done){
	describe('(undefined)',function(done){
		it('Should throw an error', () => {
			expect(serializeForm.bind(undefined)).to.throw()
		})
	});
	describe('("string")',function(done){
		it('Should throw an error', () => {
			expect(serializeForm.bind('string')).to.throw()
		})
	});
	describe('(cheerioObject)',function(done){
		it('Should return an array', () => {
			var result = serializeForm(load)
			expect(result).to.be.instanceOf(Array)
		})
		it('Should generate delete unwanted spaces')
	});
});
