// The module 'assert' provides assertion methods from node
import * as assert from "assert";

import { codeParser } from "../../parser/codeParser";

suite("codeParser Tests", () => {
  test("Incomplete test", () => {
    const code = `it(`;
    assert.equal(0, codeParser(code).length);
  });

  test("Single quotes, parens", () => {
    const code = `it('Fake test')`;

    assert.equal(1, codeParser(code).length);
  });

  test("Single quotes, no parens", () => {
    const code = `it 'Fake test'`;
    assert.equal(1, codeParser(code).length);
  });

  test("Double quotes, parens", () => {
    const code = `it("Fake test")`;

    assert.equal(1, codeParser(code).length);
  });

  test("Double quotes, no parens", () => {
    const code = `it "Fake test"`;
    assert.equal(1, codeParser(code).length);
  });

  test("Multiple tests", () => {
    const code = `
it "Fake test"
Not a test
it("Fake test 2")
Not a test
it 'Fake test 3'
Not a test
it ('Fake test 4')
`;
    assert.equal(4, codeParser(code).length);
  });
});
