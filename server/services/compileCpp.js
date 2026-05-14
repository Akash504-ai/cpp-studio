import fs from "fs";
import path from "path";

import { exec } from "child_process";

const tempDir = path.join(process.cwd(), "temp");

export const compileAndRun = (code, input) => {

  return new Promise((resolve, reject) => {

    const cppPath = path.join(tempDir, "code.cpp");

    const inputPath = path.join(tempDir, "input.txt");

    const outputExe = path.join(tempDir, "program.exe");

    fs.writeFileSync(cppPath, code);

    fs.writeFileSync(inputPath, input);

    const compileCommand =
      `g++ "${cppPath}" -o "${outputExe}"`;

    exec(compileCommand, (compileError, compileStdErr) => {

      if (compileError) {
        reject(compileStdErr);
        return;
      }

      const runCommand =
        `"${outputExe}" < "${inputPath}"`;

      exec(runCommand, (runError, stdout, stderr) => {

        if (runError) {
          reject(stderr);
          return;
        }

        resolve(stdout || stderr);

      });

    });

  });

};