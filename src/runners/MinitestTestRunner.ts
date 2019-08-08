import { debug, WorkspaceFolder } from "vscode";

import { ITestRunnerInterface } from "../interfaces/ITestRunnerInterface";
import { ITestRunnerOptions } from "../interfaces/ITestRunnerOptions";
import { TerminalProvider } from "../providers/TerminalProvider";

export class MinitestTestRunner implements ITestRunnerInterface {
  public name: string = "minitest";
  public terminalProvider: TerminalProvider = null;

  constructor({ terminalProvider }: ITestRunnerOptions) {
    this.terminalProvider = terminalProvider;
  }

  get binPath(): string {
    return null;
  }

  public runTest(
    rootPath: WorkspaceFolder,
    fileName: string,
    testName: string
  ) {
    // We force slash instead of backslash for Windows
    const cleanedFileName = fileName.replace(/\\/g, "/");

    const command = `ruby ${cleanedFileName} --name "/test_[0-9]{4}_${testName}/"`;

    const terminal = this.terminalProvider.get({}, rootPath);

    terminal.sendText(command, true);
    terminal.show(true);
  }

  public debugTest(
    rootPath: WorkspaceFolder,
    fileName: string,
    testName: string
  ) {
    // We force slash instead of backslash for Windows
    const cleanedFileName = fileName.replace(/\\/g, "/");

    debug.startDebugging(rootPath, {
      args: ["--name", `/test_[0-9]{4}_${testName}/`],
      console: "integratedTerminal",
      name: "Debug Ruby Test",
      program: `${cleanedFileName}`,
      request: "launch",
      type: "Ruby",
      windows: {
        args: ["--name", "/test_[0-9]{4}_${testName}/"],
        program: `${cleanedFileName}"`
      }
    });
  }
}
