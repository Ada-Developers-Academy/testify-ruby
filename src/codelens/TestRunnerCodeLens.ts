import { CodeLens, Range, WorkspaceFolder } from "vscode";

export default class TestRunnerCodeLens extends CodeLens {
  constructor(
    rootPath: WorkspaceFolder,
    fileName: string,
    testName: string,
    range: Range
  ) {
    super(range, {
      arguments: [rootPath, fileName, testName],
      command: "testify-ruby.run.test",
      title: "Run Test"
    });
  }
}
