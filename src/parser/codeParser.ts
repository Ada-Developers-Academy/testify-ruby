// TODO: "describe" support?

const singleStringPattern = "(?:'(?:(?:[^']|\\\\')*[^\\'])')";
const doubleStringPattern = '(?:"(?:(?:[^"]|\\\\")*[^\\"])")';
const stringPattern = `(?:${singleStringPattern}|${doubleStringPattern})`;
const testNamePattern = `(?:(?:[(]\\s*${stringPattern}\\s*[)])|${stringPattern})`;

const itPattern = new RegExp(`\\b(it\\s*${testNamePattern})`, "g");

function codeParser(sourceCode) {
  return [...sourceCode.matchAll(itPattern)].map(match => ({
    loc: {
      end: match.index + match[0].length,
      start: match.index
    },
    testName: match[0]
  }));
}

export { codeParser };
