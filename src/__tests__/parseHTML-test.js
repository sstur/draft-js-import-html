/* @flow */
const {describe, it} = global;
import expect from 'expect';
import parseHTML from '../parseHTML';

describe('parseHTML', () => {
  it('should parse basic elements', () => {
    let html = '<p>Hello World</p>';
    let element = parseHTML(html);
    it('should return a element of some kind', () => {
      expect(element.nodeType).toBe(1);
    });
    it('should have the correct child nodes', () => {
      expect(element.childNodes.length).toBe(1);
      expect(element.firstChild.nodeName).toBe('P');
      expect(element.firstChild.firstChild.nodeValue).toBe('Hello World');
    });
  });

  it('should parse incomplete html', () => {
    let html = '<p><strong>Hello<div>World';
    let element = parseHTML(html);
    it('should return a element of some kind', () => {
      expect(element.nodeType).toBe(1);
    });
    it('should have the correct child nodes', () => {
      expect(element.childNodes.length).toBe(2);
      expect(element.firstChild.nodeName).toBe('P');
      expect(element.lastChild.nodeName).toBe('DIV');
      expect(element.firstChild.firstChild.nodeName).toBe('STRONG');
    });
  });
});
