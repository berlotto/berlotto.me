---
title: "Ciência de Dados - Não use o anaconda"
description: "Entenda porque decidi nao usar mais o anaconda"
date: 2024-05-24
category: "Ciência de Dados"
postSlug: ciencia-de-dados-nao-use-anaconda-use-jupyter
tags: [datascience, anaconda, python, jupyter, matematica, tools]
---

Um cientista de dados necessita ter muito o controle do seu ambiente no que diz respeito a controle de versões das suas bibliotecas e controle do seu ambiente de testes e produção.

O anaconda é uma ambiente muito completo, sim, é, porém ele tem algumas características que me chateiam bastante.

Como funciona o anaconda
O anaconda é um ambiente muito completo, que é um ecossistema que atende a muitas necessidades de muitos casos diferentes. Ele foi construído para abstrair qualquer ambiente operacional onde ele rode, Windows, Linux, MacOS.

Ele permite que sejam criados vários ambientes virtuais para produção de notebooks e scripts, e isso facilita bastante o trabalho principalmente para analistas/programadores mais iniciantes, que precisam de um ambiente configurado mais rapidamente.

### Porém…

Eu tenho alguns anos já de desenvolvimento com Python, e isso, esta experiencia construída ao longo dos anos, fez com que eu conhecesse muito bem o ambiente de execução do Python. Conheço bem como construir e gerir ambientes virtuais, como gerir versões de Python diferentes, como instalar e remover tudo que preciso, como integrar ambientes de desenvolvimento, como VSCode por exemplo, com o ecossistema da linguagem. Este conhecimento adquirido faz com que eu tenha muita flexibilidade em trabalhar como quero com meus projetos, sejam eles de backend, de data science, o que for…

Flexibilidade esta que o anaconda me dá somente até certo ponto. O fato de ele ser um, como diz na página oficial, um "Sistema Operacional para IA", faz com que ele tenha que se integrar, se entranhar no sistema onde ele roda, pois ele precisa aproveitar o que o sistema puder dar para ele poder aumentar seu poder de entrega para seu usuário, para que você que está utilizando ele, possa fazer da mesma forma em qualquer lugar onde o anaconda esteja rodando.

Isto faz com que vc fique trabalhando apenas na caixinha que ele permite.

E isso é o que me incomoda muito!

Mas como resolver isto ? Como vc faz para ter um ambiente completo, de rápida instalação e completamente flexível ? Com as próprias ferramentas que o ecossistema do Python nos dá. A comunidade Python já tem o que precisamos, a comunidade é fantástica!

## Como eu resolvi isso ?

Eu tenho utilizado muito duas ferramentas muito poderosas e muito simples de se utilizar, para gerenciar meus ambientes Python tanto no Linux quando no Mac: o Pipenv e o Pyenv.

O Pipenv permite que facilmente gerenciemos ambientes virtuais de bibliotecas diversas para projetos diferentes com padronização e simplicidade.

Além disto, ela trabalha com um conceito muito massa, que acho que tenha vindo dos gerenciadores de dependências do js, que é: gerar um arquivo de configuração para o projeto, contendo todas as informações necessárias para o devido controle e congelamento das dependências do projeto em questão. Eu acho fantástico isso.

Já o Pyenv é uma ferramenta que permite gerenciar versões de python instaladas no ambiente. Isso mesmo, vc pode ter todas as versões instaladas em seu ambiente facilmente, bastando um comando simples de 2 ou 3 palavras.

Depois, claro, adicionalmente, se necessário, dá ainda para utilizar um Dockerzinho maroto para complementar seu ambiente.

Mas, com Pipenv e Pyenv em mãos, vc praticamente não vai precisar de outras ferramentas para ter ambientes fáceis e totalmente gerenciados para fazer seus projetos.

Tá Sérgio, mas e o data science, como fica ?

Claro, ia esquecendo, kkk, (brinqs).

Pra mim, um achado foi uma ferramenta chamada JupyterLab Desktop

![Jupyter desktop](https://github.com/jupyterlab/jupyterlab-desktop/blob/master/media/jupyterlab-desktop.png?raw=true)

Ela é uma aplicação feita com Electron, que roda em todos ambientes sem problema e permite você criar Jupyter Notebooks facilmente sem ter que rodar servidores na mão seja instalando tudo ou via docker nem megas e megas de instalação que também o o anaconda depende, "horas" instalando dependências, atualizando as coisas de uma forma que vc nem sabe o que está acontecendo, fora tudo que é instalado sem que vc vá utilizar de fato. (sim, isso foi um desabafo… )

Execute seu JupyterLab Desktop e saia usando. Adicionalmente, depois de ter seu ambiente configurado com Pipenv e Pyenv, vc simplesmente aponta ele para este binário do Python e pronto, tudo integrado.

Bom, para nao ficar muito mais extenso este post, gostaria de finalizar com um repositorio que montei, simplinho, com algumas poucas instruções para vc ter um ambiente de ciência de dados completo, com várias ferramentas instaladas e um jupyterlab rodando muito de boa. Lembre-se, menos é mais, quanto menos coisas vc tiver rodando mais recursos computacionais vc terá para utilzar em seus estudos.

Acesse o repositório e tente utilizar:

<i class="fa-solid fa-code-branch"></i> - [berlotto/data-science-environment](https://github.com/berlotto/data-science-environment) : Configuração para execução de um ambiente Python…

## Conclusão

EU gosto de ter maior controle do que estou fazendo. Não me dou muito bem com ambientes mirabolantes, com bibliotecas mágicas, com frameworks que te podam de certa forma. Eu gosto de poder programar do jeito que quero, de ir e vir, de testar coisas boas e ruins, mas quero ferramentas que me ajudem a fazer tudo isso com agilidade, que me ajudem e resolver os problemas que eu não deveria ter que resolver e poder focar na solução daquilo que realmente importa. Por este mesmo motivo eu gosto muito do VSCode.

Evocês, o que acham deste raciocínio ? Comentem aí como usam o ambiente de vocês , gostam do Anaconda ou gostam de fazer como eu, controlar tudo ?

Abraço
