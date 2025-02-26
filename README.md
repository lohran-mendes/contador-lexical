# Contador Lexical  

Olá! Meu nome é **Lohran Mendes** e seja bem-vindo ao meu projeto **Contador Lexical**! 🚀  

Criei este projeto com o objetivo de praticar minha lógica de programação utilizando **JavaScript** e estudar bibliotecas do **Node.js**, como:  
- [**File System (fs)**](https://nodejs.org/api/fs.html) – Para manipulação de arquivos.  
- [**Commander**](https://www.npmjs.com/package/commander) – Para criar uma interface de linha de comando (CLI).  
- [**Chalk**](https://www.npmjs.com/package/chalk) – Para estilizar a saída do terminal.  

## 📌 Sobre o Projeto  

O **Contador Lexical** analisa arquivos de texto (`.txt`) e gera um novo arquivo contendo as palavras repetidas em cada parágrafo.  

Inicialmente, o projeto também informaria a quantidade exata de repetições de cada palavra, mas essa funcionalidade foi omitida para evitar sobrecarregar a saída com informações excessivas.  

## 🚀 Como Usar  

### 1️⃣ Clonando o repositório  

```sh
git clone https://github.com/seu-usuario/contador-lexical.git
cd contador-lexical
```


### 2️⃣ Instalando as dependências

```sh
npm install
```

### 3️⃣ Executando o CLI
Para rodar o programa, utilize o Node.js e execute o arquivo cli.js:

```sh
node src/cli/cli.js -h
```

ou

```sh
node src/cli/cli.js --help
```
Isso mostrará todas as opções disponíveis para utilizar o CLI.

### 4️⃣ Analisando um arquivo de texto

Para que o programa funcione corretamente, você precisa passar os seguintes parâmetros:

- > -t <caminho-do-arquivo> → Caminho do arquivo de texto a ser analisado.
- > -d <caminho-de-destino> → Caminho onde o arquivo de resposta será salvo.

#### Exemplo de uso recomendado:

```sh
node src/cli/cli.js -t meu-texto.txt -d ./returned-files
```
Isso fará com que o resultado seja salvo na pasta returned-files, localizada dentro do projeto.

#### Exemplo de uso para teste:
Um arquivo de texto está disponível neste caminho dentro do projeto para que você possa testar o programa e obter uma saída:

```sh
node .\src\cli\cli.js -t .\files\texto-web.txt -d .\returned-files
```

### 🛠 Tecnologias Utilizadas
- > Node.js
- > JavaScript
- > Commander.js
- > Chalk.js
- > File System (fs)

Sinta-se à vontade para contribuir, sugerir melhorias ou relatar problemas! 😃