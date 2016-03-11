/* @flow */

import stateFromElement from 'draft-js-import-element';

import type {ContentState} from 'draft-js';

export default function stateFromHTML(html: string): ContentState {
  let parser = new DOMParser();
  let document = parser.parseFromString(html, 'text/html');
  let element = document.body;
  return stateFromElement(element);
}
