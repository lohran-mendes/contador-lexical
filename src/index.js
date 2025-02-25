import fs from "node:fs";

function receiveFileText() {
  const link = process.argv[2];
  fs.readFile(link, "utf-8", (error, data) => {
    try {
      if (error) throw error;
      console.log(
        separateParagraphsInObjects(separateTextIntoParagraphs(data))
      );
    } catch (error) {
      if (error.code === "ENOENT") {
        console.error(
          `\nO arquivo do caminho: ${error.path} não foi encontrado.
         \nVerifique se o caminho está correto\n`
        );
      } else {
        console.log("Não esperava esse erro", error);
      }
    }
  });
}

function separateTextIntoParagraphs(text) {
  if (typeof text === "string" && text.length > 0) {
    const arrayText = text
      .split("\r\n")
      .filter((paragraph) => paragraph.length > 0);
    return arrayText;
  } else console.log("Não há texto a ser lido");
}

function separateParagraphsInObjects(paragraphs) {
  if (Array.isArray(paragraphs) && paragraphs.length > 0) {
    return paragraphs.map((paragraph, index) => {
      return {
        paragraph: ++index,
        repeatedWords: separateRepeatedWords(paragraph),
      };
    });
  }
}

function separateRepeatedWords(paragraph) {
  if (typeof paragraph === "string" && paragraph.length > 0) {
    const regex = /[^\w\sáéíóúãõâêîôûàèìòù]/g;
    let arrayWord = paragraph.toLowerCase().replace(regex, "").split(" ");
    let objectOfRepeatedWords = arrayWord.reduce(
      (previousValue, currentValue) => {
        previousValue[currentValue] = (previousValue[currentValue] || 0) + 1;
        return previousValue;
      },
      {}
    );
    for (const key in objectOfRepeatedWords) {
      if (objectOfRepeatedWords[key] === 1) {
        delete objectOfRepeatedWords[key];
      }
    }
    return objectOfRepeatedWords;
  }
}

receiveFileText();
