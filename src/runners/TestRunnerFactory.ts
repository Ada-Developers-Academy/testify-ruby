import { exists } from "fs";
import { join } from "path";
import { WorkspaceFolder } from "vscode";

import { ITestRunnerInterface } from "../interfaces/ITestRunnerInterface";
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
    if (runner.binPath) {
      const doesRunnerExist = await doesFileExist(
        join(rootPath.uri.path, runner.binPath)
      );

      if (doesRunnerExist) {
        return runner;
      }
    } else {
      return runner;
    }
  }

  throw new Error("No test runner in your project. Please install one.");
}

export async function getTestRunner(
  rootPath: WorkspaceFolder
): Promise<ITestRunnerInterface> {
  const minitestTestRunner = new MinitestTestRunner({
    terminalProvider
  });

  return getAvailableTestRunner([minitestTestRunner], rootPath);
}
