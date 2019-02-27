# Install
- Num diretorio que deseja, use este comando para criar um projeto react:
```sh
 npx create-react-app (e o nome da pasta que deseja)
```
- Depois da pasta do projeto react criada, entramos na pasta e eliminamos todos os ficheiros excepto a do node_modules.
- Depois de ter apagado todos os ficheiro e deixado apenas o node_modules vamos fazer clone do meu Repositório para uma pasta que deseja.
- Feito o clone do Repositório cópiamos o conteúdo do meu Repositório para a pasta que criamos anteriormente do projeto react.
- Com estes passos feitos, vamos ao terminal, vamos até a pasta que criamos do projeto react com todo os ficheiros do meu Repositório mais o node_modules e usamos primeiramente este comando.
```sh
 npm install firebase
```
- Serve para puder depois ele conseguir ligar a minha base de dados no firebase.
- Com o firebase installado usamos o código
```sh
 npm start
```
Done

## Things about my website 
- Caso não introduzir nenhum valor, o que lhe vai aparecer é isto 
![Caso não introduza valores](https://i.imgur.com/gdCQECD.png)

- Caso Introduza valores existentes na base de dados o que vai aparecer será istó
![Imgur](https://i.imgur.com/UJhNMxY.png)

- Caso introduza algum valor que não exista registado na base de dados o que vai acontecer será algo deste estilo
 
![Imgur](https://i.imgur.com/oDaxkOJ.png)  ![Imgur](https://i.imgur.com/5z9RepF.png)

- Estas duas imagens significa que introduzi um valor fiz send e a segunda imagem representa o que irá acontecer quando carregar no botão send ele apaga os valores da Name e do country, assim significando que os valores foi introduzido.

## How do I register an artist or Album or Track?
- Simples quando iniciar o programa ele terá uma navbar aonde o Home mostra os registos guardados na base de dados é o publish mostra os forms para registar ou artista ou album ou track.


## Difficulties
- Primeiro começou pela navbar porque nunca tinha conseguido por uma navbar a funcionar corretamente por isso tive de pesquisar muito sore as navbar em react.
- Depois passou por selecionar tracks existentes na base de dados e guardar essas mesmas tracks ou uma ou várias como desejar.
- Também o orderBy deu algumas dores de cabeça mas com ajuda eu consegui fazer.
- E por último foi a search que não consegui desenvolver, pois ela deveria estar numa classe pai para puder comuniar com os filhos.

## Modelo E-R

