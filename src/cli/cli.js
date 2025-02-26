import fs from "node:fs";
import {
  separateParagraphsInObjects,
  separateTextIntoParagraphs,
} from "../index.js";
import treatErrors from "../errors/errors-function.js";
import treatTextData from "../helpers/helpers.js";
import { Command } from "commander";
import chalk from "chalk";

const program = new Command();

program
  .version("0.0.1", "-v, --version", "Versão atual do projeto")
  .description(
    'Use o "-t" para passar o endereço do texto e o "-d" para passar o destino do seu resultado.'
  )
  .option("-t, --text <string>", "Endereço do arquivo de texto")
  .option("-d, --destiny <string>", "Destino da resposta do arquivo de texto")
  .action((options) => {
    const { text, destiny } = options;
    if (!text || !destiny) {
      console.error(
        chalk.red(
          "\nPreencha o endereço do texto e o destino de seu resultado!\n"
        )
      );
      program.help();
      return;
    } else {
      fs.readFile(text, "utf-8", (error, data) => {
        try {
          if (error) throw error;
          writeReturnedFiles(
            JSON.stringify(
              separateParagraphsInObjects(separateTextIntoParagraphs(data))
            ),
            destiny
          );
        } catch (error) {
          treatErrors(error);
        }
      });
    }
  });

program.parse(process.argv);

async function writeReturnedFiles(data, destiny) {
  try {
    await fs.promises.writeFile(
      `${destiny}/resultado.txt`,
      treatTextData(data)
    );
    console.log(
      chalk.green(
        `\nPalavras duplicadas foram salvas com sucesso em ${destiny} como resultado.txt!\n`
      )
    );
  } catch (error) {
    treatErrors(error);
  }
}
