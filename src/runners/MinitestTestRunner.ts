import { join } from "path";
import { debug, WorkspaceFolder } from "vscode";

import { ITestRunnerInterface } from "../interfaces/ITestRunnerInterface";
import { ITestRunnerOptions } from "../interfaces/ITestRunnerOptions";
import { ConfigurationProvider } from "../providers/ConfigurationProvider";
import { TerminalProvider } from "../providers/TerminalProvider";

export class MinitestTestRunner implements ITestRunnerInterface {
  public name: string = "minitest";
  public terminalProvider: TerminalProvider = null;
  public configurationProvider: ConfigurationProvider = null;

  constructor({ terminalProvider, configurationProvider }: ITestRunnerOptions) {
    this.terminalProvider = terminalProvider;
    this.configurationProvider = configurationProvider;
  }

  public runTest(
    rootPath: WorkspaceFolder,
    fileName: string,
    testName: string
  ) {
    const environmentVariables = this.configurationProvider
      .environmentVariables;
    // We force slash instead of backslash for Windows
    const cleanedFileName = fileName.replace(/\\/g, "/");

    const command = `ruby ${cleanedFileName} --name "/test_[0-9]{4}_${testName}/"`;

    const terminal = this.terminalProvider.get(
      { env: environmentVariables },
      rootPath
    );

    terminal.sendText(command, true);
    terminal.show(true);
  }

  public debugTest(
    rootPath: WorkspaceFolder,
    fileName: string,
    testName: string
  ) {
    const environmentVariables = this.configurationProvider
      .environmentVariables;
    // We force slash instead of backslash for Windows
    const cleanedFileName = fileName.replace(/\\/g, "/");

    debug.startDebugging(rootPath, {
      args: ["--name", `/test_[0-9]{4}_${testName}/`],
      console: "integratedTerminal",
      env: environmentVariables,
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
