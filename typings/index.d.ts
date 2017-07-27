declare module 'draft-js-import-html' {
  import draftjs = require('draft-js');

  export interface Options {
    parser(html: string): HTMLElement;
  }

  export function stateFromHTML(content: string, options?: Options): draftjs.ContentState;
}
