import { exists } from "fs";
import { join } from "path";
import { WorkspaceFolder } from "vscode";

import { ITestRunnerInterface } from "../interfaces/ITestRunnerInterface";
import { ConfigurationProvider } from "../providers/ConfigurationProvider";
import { TerminalProvider } from "../providers/TerminalProvider";
import { MinitestTestRunner } from "./MinitestTestRunner";

const terminalProvider = new TerminalProvider();

function doesFileExist(filePath: string): Promise<boolean> {
  return new Promise(resolve => {
    exists(filePath, doesExist => {
      resolve(doesExist);
    });
  });
}

async function getAvailableTestRunner(
  testRunners: ITestRunnerInterface[],
  rootPath: WorkspaceFolder
): Promise<ITestRunnerInterface> {
  for (const runner of testRunners) {
    const doesRunnerExist = await doesFileExist(
      join(rootPath.uri.path, runner.binPath)
    );

    if (doesRunnerExist) {
      return runner;
    }
  }

  throw new Error("No test runner in your project. Please install one.");
}

export async function getTestRunner(
  rootPath: WorkspaceFolder
): Promise<ITestRunnerInterface> {
  const configurationProvider = new ConfigurationProvider(rootPath);

  const minitestTestRunner = new MinitestTestRunner({
    configurationProvider,
    terminalProvider
  });

  return getAvailableTestRunner([minitestTestRunner], rootPath);
}
