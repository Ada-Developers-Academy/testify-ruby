import { Position, Range } from "vscode";
// TODO: Add support for `describe` blocks?

const singleStringPattern = "(?:'(?:(?:[^']|\\\\')*[^\\'])')";
const doubleStringPattern = '(?:"(?:(?:[^"]|\\\\")*[^\\"])")';
const stringPattern = `(?:${singleStringPattern}|${doubleStringPattern})`;
const testNamePattern = `(?:(?:[(]\\s*${stringPattern}\\s*[)])|${stringPattern})`;

const itPattern = new RegExp(`\\b(it\\s*${testNamePattern})`, "g");

interface ITest {
  loc: Range;
  testName: string;
}

function findPosition(lengths: number[], index: number): Position {
  let line = 0;

  for (const len of lengths) {
    if (index < len) {
      return new Position(line, index);
    } else {
      line += 1;
      index -= len;
    }
  }

  throw new Error("Position does not exist in file!");
}

function codeParser(sourceCode: string): ITest[] {
  const lengths = sourceCode.split(/\r?\n/).map(line => line.length + 1);

  const matches: ITest[] = [];
  let match = itPattern.exec(sourceCode);

  while (match !== null) {
    matches.push({
      loc: new Range(
        findPosition(lengths, match.index),
        findPosition(lengths, match.index + match[0].length)
      ),
      testName: match[0]
    });

    match = itPattern.exec(sourceCode);
  }

  return matches;
}

export { codeParser };
