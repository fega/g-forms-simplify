'use strict'
var chai = require('chai'); 
var expect = require('chai').expect;
var h = require('../lib/bin/helpers');

describe('helpers',done=>{
  describe('destiny',done=>{
    it('(undefined) should be ""',done=>{
      var helper = h.destiny(undefined);
      expect(helper).to.equal('')
      done()
    });

    it('("something") should be target="hidden_iframe" onsubmit="submitted=true"',done=>{
      var helper = h.destiny('something');
      expect(helper).to.equal('target="hidden_iframe" onsubmit="submitted=true"')
      done()
    });
  });

  describe('destinyScript',done=>{
    it('(undefined) should be ""',done=>{
      var helper = h.destinyScript(undefined);
      expect(helper).to.equal('')
      done()
    });

    it('("something") should be an hidden_iframe script',done=>{
      var helper = h.destinyScript('something');
      expect(helper).to.equal(`<script type="text/javascript">var submitted=false;</script>
<iframe name="hidden_iframe" id="hidden_iframe" style="display:none" onload="if(submitted){window.location='something';}"></iframe`);
      done()
    });
  });


  describe('value',done=>{
    it('(undefined) should be ""',done=>{
      var helper = h.value(undefined);
      expect(helper).to.equal('')
      done()
    });

    it('("something") should be value="something"',done=>{
      var helper = h.value('something');
      expect(helper).to.equal(`value="something"`)
      done()
    });
  });

  describe('name',done=>{
    it('(undefined) should be ""',done=>{
      var helper = h.name(undefined);
      expect(helper).to.equal('')
      done()
    });

    it('("something") should be name="something"',done=>{
      var helper = h.name('something');
      expect(helper).to.equal(`name="something"`)
      done()
    });
  });

  describe('type',done=>{
    it('(undefined) should be ""',done=>{
      var helper = h.type(undefined);
      expect(helper).to.equal('')
      done()
    });

    it('("something") should be type="something"',done=>{
      var helper = h.type('something');
      expect(helper).to.equal(`type="something"`)
      done()
    });
  });

  describe('autocomplete',done=>{
    it('(undefined) should be ""',done=>{
      var helper = h.autocomplete(undefined);
      expect(helper).to.equal('')
      done()
    });

    it('("something") should be autocomplete="something"',done=>{
      var helper = h.autocomplete('something');
      expect(helper).to.equal(`autocomplete="something"`)
      done()
    });
  });

  describe('required',done=>{
    it('(undefined) should be ""',done=>{
      var helper = h.required(undefined);
      expect(helper).to.equal('')
      done()
    });

    it('("something") should be required="something"',done=>{
      var helper = h.required('something');
      expect(helper).to.equal('required')
      done()
    });
  });

  describe('placeholder',done=>{
    it('(undefined) should be ""',done=>{
      var helper = h.placeholder(undefined);
      expect(helper).to.equal('')
      done()
    });

    it('("something") should be placeholder="something"',done=>{
      var helper = h.placeholder('something');
      expect(helper).to.equal(`placeholder="something"`)
      done()
    });
  });

  describe('label',done=>{
    it('(undefined) should be ""',done=>{
      var helper = h.label(undefined);
      expect(helper).to.equal('')
      done()
    });

    it('("something",1) should be label="something"',done=>{
      var helper = h.label('something',1);
      expect(helper).to.equal(`<label for="g-form-input-1">something</label>`)
      done()
    });
  });

  describe('max',function(done){
    it('(undefined) should be ""',function(done){
      var helper = h.max(undefined);
      expect(helper).to.equal('')
      done();
    })
    it('("something") should be ""',function(done){
      var helper = h.max("something");
      expect(helper).to.equal(`max="something"`)
      done();
    })
  });

  describe('min',function(done){
    it('(undefined) should be ""',function(done){
      var helper = h.min(undefined);
      expect(helper).to.equal('')
      done();
    })
    it('("something") should be ""',function(done){
      var helper = h.min("something");
      expect(helper).to.equal(`min="something"`)
      done();
    })
  });

  describe('maxlength',function(done){
    it('(undefined) should be ""',function(done){
      var helper = h.maxlength(undefined);
      expect(helper).to.equal('')
      done();
    })
    it('("something") should be ""',function(done){
      var helper = h.maxlength("something");
      expect(helper).to.equal(``)
      done();
    })
    it('(<number>) should be maxlength="<number>"',function(done){
      var helper = h.maxlength(2);
      expect(helper).to.equal(`maxlength="2"`)
      done();
    })
  });
});