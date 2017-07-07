import { ContentState } from 'draft-js';
import { stateFromHTML } from 'draft-js-import-html';

const html = '<div>testing</div>';

const resultWithOutOptions: ContentState = stateFromHTML(html);

const parser = (html: string) => {
  let doc = document.implementation.createHTMLDocument('');
  doc.documentElement.innerHTML = html;
  return doc.body;
};

const resultWithOptionalParser: ContentState = stateFromHTML(html, { parser });
