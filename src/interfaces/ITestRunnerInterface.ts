import { WorkspaceFolder } from "vscode";

import { TerminalProvider } from "../providers/TerminalProvider";

export interface ITestRunnerInterface {
  name: string;
  binPath: string;
  terminalProvider: TerminalProvider;

  runTest(rootPath: WorkspaceFolder, fileName: string, testName: string): void;
  debugTest(
    rootPath: WorkspaceFolder,
    fileName: string,
    testName: string
  ): void;
}
