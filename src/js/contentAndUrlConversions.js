import { QuillDeltaToHtmlConverter } from 'quill-delta-to-html';

const convertOpsToHtml = (ops) => {
    var cfg = {inlineStyles: true};
    var converter = new QuillDeltaToHtmlConverter(ops, cfg);
    return converter.convert(); 
}

export { convertOpsToHtml }