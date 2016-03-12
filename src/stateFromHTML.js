/* @flow */

import {stateFromElement} from 'draft-js-import-element';
import parseHTML from './parseHTML';

import type {ContentState} from 'draft-js';

export default function stateFromHTML(html: string): ContentState {
  let element = parseHTML(html);
  return stateFromElement(element);
}
