/* @flow */
const {describe, it} = global;
import expect from 'expect';
import stateFromHTML from '../stateFromHTML';
import {convertToRaw} from 'draft-js';

describe('stateFromHTML', () => {
  let html = '<p>Hello World</p>';
  it('should create content state', () => {
    let contentState = stateFromHTML(html);
    let rawContentState = convertToRaw(contentState);
    let blocks = removeKeys(rawContentState.blocks);
    expect(blocks).toEqual(
      [{text: 'Hello World', type: 'unstyled', depth: 0, inlineStyleRanges: [], entityRanges: []}]
    );
  });
});

function removeKeys(blocks) {
  return blocks.map((block) => {
    let {key, ...other} = block;
    return other;
  });
}
