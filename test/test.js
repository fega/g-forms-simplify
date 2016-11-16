/* eslint-disable */
'use strict'
var chai = require('chai');
var expect = require('chai').expect;
var request =require('chai-http');
var cheerio = require('cheerio');
var h = require('../bin/helpers');
var $;

chai.use(request);
var baseUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSfKcGSBRWFEkhkZRMqDH9aFCIgsGR1a0R3LkZFA6ssNPx5tpw/viewform';

describe('helper.destiny() test',done=>{
	describe('when helper.destiny(undefined) is executed',done=>{
		var helper = h.destiny(undefined);
		it('should be ""',done=>{
			expect(helper).to.equal('')
			done()
		});
	});
});
