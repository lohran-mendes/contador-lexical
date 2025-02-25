import fs from "node:fs";
import {
  separateParagraphsInObjects,
  separateTextIntoParagraphs,
} from "../index.js";
import treatErrors from "../errors/errors-function.js";
import treatTextData from "../helpers/helpers.js";

export const inputText = process.argv[2];
export const outputText = process.argv[3];

fs.readFile(inputText, "utf-8", (error, data) => {
  try {
    if (error) throw error;
    writeReturnedFiles(
      JSON.stringify(
        separateParagraphsInObjects(separateTextIntoParagraphs(data))
      )
    );
  } catch (error) {
    treatErrors(error);
  }
});

async function writeReturnedFiles(data) {
  const nameFile = inputText.slice(inputText.lastIndexOf("\\") + 1);
  try {
  await fs.promises.writeFile(`${outputText}/resultado.txt`, treatTextData(data))
    console.log(
      `\nPalavras duplicadas de ${nameFile} salvadas com sucesso em  ${outputText}/resultado.txt!\n`
    );
  } catch (error) {
    treatErrors(error);
  }
}
