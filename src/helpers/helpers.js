export default function treatTextData(data) {
  const enteredJson = JSON.parse(data);
  let textReturned = "";
  for (const element of enteredJson) {
    textReturned += `Palavras duplicadas no parágrafo ${
      element.paragraph
    }: ${Object.keys(element.repeatedWords).join(", ")}\n`;
  }
  return textReturned;
}
