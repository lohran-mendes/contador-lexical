export function separateTextIntoParagraphs(text) {
  if (typeof text === "string" && text.length > 0) {
    const arrayText = text
      .split("\r\n")
      .filter((paragraph) => paragraph.length > 0);
    return arrayText;
  } else console.log("Não há texto a ser lido");
}

export function separateParagraphsInObjects(paragraphs) {
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
    const regex = /[^\w\sáéíóúãõâêîôûàèìòùç]/g;
    let arrayWord = paragraph.toLowerCase().replace(regex, "").split(" ");
    let objectOfRepeatedWords = arrayWord
      .filter((word) => word)
      .reduce((previousValue, currentValue) => {
        previousValue[currentValue] = (previousValue[currentValue] || 0) + 1;
        return previousValue;
      }, {});
    for (const key in objectOfRepeatedWords) {
      if (objectOfRepeatedWords[key] === 1) {
        delete objectOfRepeatedWords[key];
      }
    }
    return objectOfRepeatedWords;
  }
}
