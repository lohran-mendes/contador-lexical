export default function treatErrors(error) {
  if (error.code === "ENOENT") {
    throw new Error(
      `\nO arquivo do caminho: ${error.path} não foi encontrado.
     \nVerifique se o caminho está correto\n`
    );
  } else {
    console.error('\nErro na aplicação:\n\n', error)
  }
}