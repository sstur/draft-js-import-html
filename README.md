# DraftJS: Import HTML to ContentState

This is a module for [DraftJS](https://github.com/facebook/draft-js) that will convert HTML to editor content.

It was extracted from [React-RTE](https://react-rte.org) and placed into a separate module for more general use. Hopefully it can be helpful in your projects.

## Installation

    npm install --save draft-js-import-html

## How to Use

    import {stateFromHTML} from 'draft-js-import-html';
    let contentState = stateFromHTML(html);

This project is still under development. If you want to help out, please open an issue to discuss or join us on [Slack](https://draftjs.slack.com/).

## License

This software is [BSD Licensed](/LICENSE).
