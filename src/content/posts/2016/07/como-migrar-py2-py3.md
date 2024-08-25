---
title: "Como migrar seu código para Python 3"
excerpt: "Saiba o que é necessário fazer para ter seu código atualizado direitinho"
date: 2016-07-05
category: "Python"
tags: [python, migração, python2, python3, ferramentas]
---

Como bem sabemos, o python é uma linguagem de programação já com um bom tempo de estrada. Como todo software, também passou por todo um conjunto de melhorias e correções que foram aplicados durante sua vida, gerando um grande trabalho para se manter a tal compatibilidade.

Python 2
Atualmente a maioria dos códigos feitos em Python utiliza a versão 2 da linguagem, abrangendo 2.4, 2.5, 2.6 e 2.7. Isto ocorre pelo fato do tempo que foi levado adiante o desenvolvimento destas versões, sempre mantendo a compatibilidade. Isto quer dizer que, se você criar seu programa usando Python 2.4, e depois rodá-lo com a versão 2.6 ou 2.7 por exemplo, seu código não terá problemas, pelo menos não grandes problemas ou quebras de compilação, talvez alguma diferença em algum resultado ou outro.

Claro, se você tem o costume (ou a obrigação) de criar bons testes unitários, fazendo com que grande parte do seu código seja atingida, fique feliz, pois neste momento eles serão muito importantes para você.

As versões 2.x do Python está com data de fim da sua manutenção marcada para 2020, veja a contagem em: http://pythonclock.org/ (neste momento está em 3 anos, 9 meses, 7 dias e algumas horas…)

Python 3
Em Abril de 2006, Guido van Rossum startou a programação da nova versão do Python chamada Python 3 com a PEP-3000, fato que causou uma série de discussões pois, principalmente, além das melhorias propostas (e são muitas), esta versão causaria uma quebra de compatibilidade.

O Python 3, que teve seu primeiro release liberado em Dezembro de 2008, não leva em consideração a compatibilidade com as versões 2.x, ou seja, se você rodar seu código criado para Py2, provavelmente (não obrigatoriamente) ele irá quebrar e você terá que fazer a migração e algumas ou várias partes para a nova versão do Py3.

No Py3 muitas coisas mudaram, muitos métodos built-in sofreram melhorias e alterações, tanto na parametrização quando na funcionalidade. Muitas bibliotecas mudaram de lugar e sua hierarquia ficou diferente.

Uma lista das principais mudanças do Py3 podem ser apreciadas nos links abaixo:

https://pythonhelp.wordpress.com/2013/09/01/o-que-mudou-no-python-3/

http://www.mateuspaduaweb.com.br/diferencas-entre-o-python-2-e-o-python-3/

What's New In Python 3.0 - Python v3.0.1 documentation
This article explains the new features in Python 3.0, compared to 2.6. Python 3.0, also known as "Python 3000" or "Py3K…
docs.python.org

Mas e agora, o que fazer ?

Bom, primeiramente planejar nossas ações levando em consideração os projetos que teremos que nos preocupar assim como seus ambientes.

Projetos novos
O que eu faço nos dias atuais, e acho que é o primeiro passo a se fazer é: tudo que for criado a partir de hoje, que seja criado com PY3. TUDO!

Mas, e minhas libs? Bueno, muitas bibliotecas e frameworks já estão portados ou portando para o PY3, então fique de boa, provavelmente você terá sucesso nessa empreitada. Claro, também vale ajudar aquela lib que ainda não foi portada e que você usa a chegar lá.

Com isto, acredito que já matamos metade do trabalho, pois este futuro legado já estará compatível com a nova vida do Python.

Projetos antigos ou em andamento
Bueno, aqui é que mora a bruxa. Portar códigos antigos nunca foi algo legal ou fácil de se fazer. Mas porém todavia contudo, sempre se tem algumas saídas para tentar fazer da melhor forma possível esta migração.

https://docs.python.org/3/howto/pyporting.html

Testes unitários

Sim, muitos, faça-os para testar bem e cobrindo a maioria do código da sua aplicação, rode-os e deixe-os com 100% de sucesso. Vai ser muito importante e vai ajudar MUITO na sua migração. Acredite, é melhor “perder” algum tempo para criar os TUs que estejam faltando do que perder tempo tentando garantir de outra forma que seu código funcione no PY3.
OBS: para ajudar tem uma ferramenta chamada Coverage (https://pypi.python.org/pypi/coverage) que verifica o quanto do seu código está sendo atingido pelos testes unitários.

A ferramenta 2e3
(https://docs.python.org/2/library/2to3.html)

2e3 é uma ferramenta que ajudará bastante também, pois ela aplica no seu código uma série de alterações deixando-o compatível com a nova versão do Python. Boa parte do trabalho será feito para você.

Conhecimento

Esteja a par do que mudou, ler sobre o assunto, principalmente na documentação oficial do Python, de cada item, cada lib, cada módulo, é muito importante. Assim detalhes menores sobre o funcionamento de pequenas partes poderão ser corrigidos facilmente.

Um novo módulo que vem fazendo bastante sucesso no Python 3 é o “asyncio”, ele provê uma série de facilidades de acesso concorrente, usando co-rotinas, à disco, rede, sockets, e outras coisas mais. É um módulo muito bom a ser estudado se você estiver atrás de mais performance.

Outro detalhe que gosto bastante no Py3 é a questão das string unicode. Antes no py2 tínhamos bastante problemas na resolução de codificação de strings, gerando bastante dor de cabeça, mas o Python 3 vem com um novo approach, onde toda string é unicode, facilita muito este controle e resolve vários dos problemas existentes.

Distribuições

O linux, sem dúvida alguma, é o melhor lugar para se programar com Python. É um ambiente onde a linguagem já vem instalada e também dá poder a muitas das aplicações que utilizamos no dia a dia, mesmo sem que você saiba. Pois bem, muitas distribuições ainda mantém o python 2 como padrão de execução, mesmo as vezes tendo junto a versão 3 instalada paralelamente. Mas não se assuste, geralmente se você executar “python3”, ao invés de “python” no seu console, verá que é possível sim utilizar o Python 3 para programar.

Uma dica é utilizar o virtualenv e/ou o virtualenv-wrapper para lhe ajudar a criar ambientes separados com a versão do python que você quer, tipo:

$ mkvirtualenv meuprojeto -p /usr/bin/python3
Este comando cria um ambiente chamado “meuprojeto” com o python3 como default, então se você chamar o comando “python” dentro dele, a versão utilizada será a 3.

O Archlinux é uma distro que já migrou para o Python 3 como default há um bom tempo, Fedora foi outra que já fez isto também.

No mais é isto minha gente, espero poder ter dado uma luz a vocês aí de como será o futuro do Python e com qual versão trabalhar a partir de agora !
