/* @flow */


const canUseDOM = !!(
  (typeof window !== 'undefined' &&
  window.document && window.document.createElement)
);


export default function parseHTML(html: string): Element {
  let docBody = '';
  if (typeof DOMParser !== 'undefined') {
    let parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    docBody = doc.body;
  } else if (canUseDOM) {
    const doc = document.implementation.createHTMLDocument('');
    doc.documentElement.innerHTML = html;
    docBody = doc.body;
  }
  return docBody;
}
