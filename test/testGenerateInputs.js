/* eslint-disable */
'use strict'
var chai = require('chai');
var expect = require('chai').expect;
var request =require('chai-http');
var cheerio = require('cheerio');
var gi = require('../bin/generateInputs.js');
var $;

describe('generateInputs',function(done){
	describe('.textInput',function(done){
		it('(<serializedInput>) should be a valid html input',function(done){
			var options = {
				name: 'name',
				type: 'type',
				value: 'value',
				placeholder: 'placeholder',
				autocomplete: 'name',
				required: 'required',
				label: 'label',
				min: '0',
				max: '20',
				maxlength: '2',
			};
			var input = gi.textInput(options,2);
			expect(input).to.contain('<p>');
			expect(input).to.contain('</p>');
			expect(input).to.contain('<input ');
			expect(input).to.contain(' name="name" ');
			expect(input).to.contain(' type="type" ');
			expect(input).to.contain(' value="value" ');
			expect(input).to.contain(' placeholder="placeholder" ');
			expect(input).to.contain(' max="20" ');
			expect(input).to.contain(' min="0" ');
			expect(input).to.contain(' maxlength="2" ');
			expect(input).to.contain(`<label for="g-form-input-2">label</label>`);
			done();
		})
	});


	describe('.textareaInput',function(done){
		it('(<serializedTextarea>) should be a valid html textarea',function(done){
			var options = {
				name: 'name',
				type: 'textarea',
				value: 'value',
				placeholder: 'placeholder',
				autocomplete: 'name',
				required: 'required',
				label: 'label',
				min: '0',
				max: '20',
				maxlength: '2',
			};
			var input = gi.textareaInput(options,2);
			expect(input).to.contain('<p>');
			expect(input).to.contain('</p>');
			expect(input).to.contain('<textarea ');
			expect(input).to.contain('</textarea>');
			expect(input).to.contain(' name="name" ');
			expect(input).to.not.contain('type="type"');
			expect(input).to.not.contain('value="value"');
			expect(input).to.contain('value');
			expect(input).to.contain(' placeholder="placeholder" ');
			expect(input).to.contain(' max="20" ');
			expect(input).to.contain(' min="0" ');
			expect(input).to.contain(' maxlength="2" ');
			expect(input).to.contain(`<label for="g-form-input-2">label</label>`);
			done();
		})
	});

});
