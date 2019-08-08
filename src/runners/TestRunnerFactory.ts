import { ITestRunnerInterface } from "../interfaces/ITestRunnerInterface";
import { TerminalProvider } from "../providers/TerminalProvider";
import { MinitestTestRunner } from "./MinitestTestRunner";

const terminalProvider = new TerminalProvider();

export async function getTestRunner(): Promise<ITestRunnerInterface> {
  return new MinitestTestRunner({ terminalProvider });
}
