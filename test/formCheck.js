var chai = require('chai'); 
var expect = require('chai').expect;

var urlCheck = require('../lib/bin/formCheck.js');
var baseUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSfKcGSBRWFEkhkZRMqDH9aFCIgsGR1a0R3LkZFA6ssNPx5tpw/viewform';
var baseUrl1 = 'https://docs.google.com/forms/d/e/1FAIpQLSfKcGSBRWFEkhkZRMqDH9aFCIgsGR1a0R3LkZFA6ssNPx5tpw/viewform';
var baseUrl2 = 'docs.google.com/forms/d/e/1FAIpQLSfKcGSBRWFEkhkZRMqDH9aFCIgsGR1a0R3LkZFA6ssNPx5tpw/viewform';
var baseUrl3 = 'docs.google.com/forms/d/e/1FAIpQLSfKcGSBRWFEkhkZRMqDH9aFCIgsGR1a0R3LkZFA6ssNPx5tpw';
var baseId = '1FAIpQLSfKcGSBRWFEkhkZRMqDH9aFCIgsGR1a0R3LkZFA6ssNPx5tpw';

describe('formCheck',done=>{
  describe('(<formUrl>)',done=>{
    it('should be the same',done=>{
      var url= urlCheck(baseUrl);
      expect(url).to.equal(baseUrl);
      var url= urlCheck(baseUrl1);
      expect(url).to.equal(baseUrl1);
      done();
    });
  });
  describe('(<formUrl.without.http://>)',done=>{
    it('should be the same',done=>{
      var url= urlCheck(baseUrl2);
      expect(url).to.equal(baseUrl2);
      done();
    });
  });
  describe('(<formUrl.without./viewform>)',done=>{
    it('should append /viewform',done=>{
      var url= urlCheck(baseUrl3);
      expect(url).to.equal(baseUrl2);
      done();
    });
  });
  describe('(<formID>)',done=>{
    it('should be a <formUrl>',done=>{
      var url= urlCheck(baseId);
      expect(url).to.equal(baseUrl);
      done();
    });
  });
  describe('(undefined)',done=>{
    it('Should throw an error',done=>{
      expect(urlCheck.bind(undefined)).to.throw(/undefined/);
      expect(urlCheck.bind(false)).to.throw();
      done();
    })
  });
  describe('("http://malformed.url")',done=>{
    it('Should throw an error',done=>{
      expect(urlCheck.bind("http://malformed.url")).to.throw();
      done();
    })
  });
  describe('(malformedID/)',done=>{
    it('shold throw an error',done=>{
      expect(urlCheck.bind("malformedID/")).to.throw();
      done();
    })
  });
});