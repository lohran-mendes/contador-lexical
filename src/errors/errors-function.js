import chalk from "chalk";

export default function treatErrors(error) {
  if (error.code === "ENOENT") {
    throw new Error(
      chalk.red(`\nO arquivo do caminho: ${error.path} não foi encontrado.
     \nVerifique se o caminho está correto\n`)
    );
  } else {
    console.error(chalk.red("\nErro na aplicação:\n\n", error));
  }
}
