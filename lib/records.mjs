// A small, plain-text format: field: value, with --- between entries.
// Preserve file order so adding a past entry at the top puts it first.
export function parseRecords(markdown, { filename, fields: allowedFields, required = [], validate = () => {} }) {
  const records = [];
  const fields = new Set([...allowedFields, 'draft']);
  let record = {};
  let startLine = 1;
  const fail = (line, message) => { throw new Error(`${filename}:${line}: ${message}`); };
  const finish = () => {
    if (!Object.keys(record).length) return;
    for (const field of required) {
      if (!record[field]) fail(startLine, `This entry needs ${field}: ...`);
    }
    validate(record, message => fail(startLine, message));
    if (record.draft !== undefined && !['true', 'false'].includes(record.draft)) fail(startLine, 'draft must be true or false.');
    if (record.draft !== 'true') records.push(record);
    record = {};
  };
  markdown.split(/\r?\n/).forEach((raw, index) => {
    const line = raw.trim();
    if (!line || line.startsWith('#')) return;
    if (line === '---') { finish(); return; }
    const separator = line.indexOf(':');
    if (separator < 1) fail(index + 1, 'Write field: value, or separate entries with ---.');
    const field = line.slice(0, separator).trim();
    let value = line.slice(separator + 1).trim();
    if (!fields.has(field)) fail(index + 1, `Unknown field "${field}". Expected one of: ${[...fields].join(', ')}.`);
    if (field in record) fail(index + 1, 'Put --- between entries.');
    if (!Object.keys(record).length) startLine = index + 1;
    // Quotes are optional; colons inside a title or URL need no escaping.
    if (value.startsWith('"') && value.endsWith('"')) {
      try { value = JSON.parse(value); } catch { fail(index + 1, 'Remove the surrounding quotes or use valid quoted text.'); }
    }
    if (value.startsWith("'") && value.endsWith("'")) value = value.slice(1, -1);
    record[field] = value;
  });
  finish();
  return records;
}


export function validateWebsite(value, fail) {
  if (!value) return;
  let url;
  try { url = new URL(value); } catch { fail("Use a full https:// link."); }
  if (!["https:", "http:"].includes(url.protocol)) fail("Links must start with https:// or http://.");
}
