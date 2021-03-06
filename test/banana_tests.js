'use strict';

var expect = require('chai').expect;
var Banana = require('../lib/banana');

describe('Banana', function() {
  it('can be created', function() {
    new Banana();
  });

  it('can be peeled');

  describe('instance', function() {
    beforeEach(function() {
      this.banana = new Banana();
    });

    it('is edible', function() {
      expect(this.banana.edible()).to.be.true;
    });

    it('is yellow', function() {
      expect(this.banana.color()).to.eql('yellow');
    });

    it('is not peeled', function() {
      expect(this.banana.isPeeled()).to.be.false;
    });

    it.skip('can be peeled', function() {
      this.banana.peel();
      expect(this.banana.isPeeled()).to.be.true;
    });

    it('can be eaten', function() {
      var safe = this.banana.prepareForEating();
      expect(this.banana.isPeeled()).to.be.true;
      expect(safe).to.be.true;
    });

    it('cannot be eaten if rotten', function() {
      this.banana.setRotten(true);
      var safe = this.banana.prepareForEating();
      expect(this.banana.isPeeled()).to.be.false;
      expect(safe).to.be.false;
    });
  });
});
