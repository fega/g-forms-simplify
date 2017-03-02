const chai = require('chai'); 
const expect = require('chai').expect;
const arrayToHtml = require('./../lib/bin/arrayToHtml')
const h = require('./../lib/bin/helpers')

var testArray = [{tag:'input'},{tag:'textarea'}]
var testArrayInvalid = [{tag:'invalid'}]

describe('arrayToHtml', done =>{

  describe('Always', done => {
    it('should return a form tag', done => {
      var html = arrayToHtml(testArray)
      expect(html).to.contain('<form')
      expect(html).to.contain(' method="POST" ')
      expect(html).to.contain('</form>')
      done()
    })
    it ('should not contain a destiny property',done => {
      var html = arrayToHtml(testArray)
      expect(html).to.not.contain(h.destiny('destiny'))
      done()
    })
    it ('should contain a textarea tag if is avadible',done => {
      var html = arrayToHtml(testArray)
      expect(html).to.contain('<textarea')
      done()
    })
    it ('should contain a input tag if is avadible',done => {
      var html = arrayToHtml(testArray)
      expect(html).to.contain('<input')
      done()
    })
  })

  describe('if destiny is provided',() => {
    it('should return a destiny property',done => {
      var html = arrayToHtml(testArray,'','destiny')
      expect(html).to.contain(h.destiny('destiny'))
      done()
    })
  })
  describe('if first argument is not an array',() => {
    it('should return a destiny property',done => {
      expect(arrayToHtml.bind(undefined)).to.throw()
      done()
    })
  })
})