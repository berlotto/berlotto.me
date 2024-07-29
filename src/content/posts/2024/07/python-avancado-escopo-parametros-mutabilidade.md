---
title: "Python Avançado - Mutabilidade e escopo"
description: "Descubra as diferentes abordagens NoSQL para armazenar e gerenciar dados, suas vantagens, desvantagens e exemplos práticos em Python."
date: 2024-07-29
category: "python"
postSlug: mutabilidade-escopo-passagem-de-parametros
tags: [python, avançado, escopo, mutabilidade]
---

### 1. Introdução

Neste post, vamos explorar a passagem de parâmetros, a mutabilidade, a imutabilidade e os conceitos de escopo em Python. Esses tópicos são fundamentais para qualquer desenvolvedor que deseja entender como o Python gerencia a memória, manipula variáveis e executa funções.

Compreender esses detalhes é crucial para evitar bugs e comportamentos inesperados em seu código. Além disso, conhecer os diferentes tipos de escopo ajuda a garantir que as variáveis sejam manipuladas corretamente e que o código seja eficiente e fácil de manter.

#### Agenda

Vamos falar sobre os seguintes tópicos:

- Como funciona a passagem de parâmetros em Python.
- O que são mutabilidade e imutabilidade de variáveis.
- Como a [i]mutabilidade se relaciona com a passagem de parâmetros em Python.
- Conceitos de escopo em Python.
- Boas práticas e considerações de desempenho ao trabalhar com esses conceitos.

---

### 2. Passagem de Parâmetros em Python

#### 2.1 Definição e Conceitos

Em Python, a passagem de parâmetros é frequentemente descrita como "passagem por atribuição" ou "passagem por objeto". Isso significa que, quando passamos uma variável para uma função, estamos passando uma referência ao objeto, não o próprio objeto. Essa abordagem é diferente da "passagem por valor", onde uma cópia do valor é passada, ou da "passagem por referência", onde a referência ao objeto em si é passada.

Para entender melhor, considere a seguinte analogia:

- **Passagem por valor:** Você entrega uma cópia de um livro a alguém. Eles podem fazer anotações na cópia, mas o livro original permanece inalterado.
- **Passagem por referência:** Você entrega o próprio livro. Qualquer anotação feita afeta o livro original.
- **Passagem por objeto (Python):** Você entrega um marcador de livro (referência) que aponta para o livro. Se o livro for mutável, qualquer anotação será visível por todos que possuem o marcador. Se for imutável, qualquer tentativa de anotação resultará em um novo livro (objeto).

#### 2.2 Comportamento na Memória

Python gerencia a memória usando referências de objeto. Quando um parâmetro é passado para uma função, uma nova referência ao mesmo objeto é criada. Se o objeto for mutável, as modificações feitas dentro da função afetarão o objeto original. Se for imutável, qualquer tentativa de modificação criará um novo objeto.

Para visualizar isso, considere a seguinte função:

```python
def modify_list(lst):
    lst.append(42)
```

Aqui, `lst` é uma referência a uma lista. Se chamarmos essa função passando uma lista, a lista original será modificada, pois, o tipo `list` em python é um tipo mutável, ou seja, pode ser modificado internamente.

#### Referências e Como Python Lida com a Memória

Quando uma variável é atribuída a um objeto em Python, a variável armazena uma referência ao objeto na memória, não o objeto em si. Isso significa que várias variáveis podem referenciar o mesmo objeto. O Python usa um contador de referência para gerenciar a memória. Quando o contador de referência de um objeto chega a zero, o coletor de lixo do Python remove o objeto da memória.

#### 2.3 Exemplos Práticos

Vamos ver alguns exemplos para ilustrar a passagem de parâmetros e seu comportamento:

```python
# Exemplo 1: Modificando um objeto mutável (lista)
def modify_list(lst):
    lst.append(42)

my_list = [1, 2, 3]
modify_list(my_list)
print(my_list)  # Output: [1, 2, 3, 42]

# Exemplo 2: Tentando modificar um objeto imutável (inteiro)
def modify_integer(x):
    x += 1
    return x

my_int = 10
new_int = modify_integer(my_int)
print(my_int)  # Output: 10
print(new_int)  # Output: 11
```

No Exemplo 1, a lista `my_list` é mutável. Quando passamos `my_list` para a função `modify_list`, a lista original é modificada. No Exemplo 2, os inteiros são imutáveis. Quando tentamos modificar `x`, uma nova instância do inteiro é criada, deixando o original inalterado.

Esses conceitos são fundamentais para entender como o Python gerencia variáveis e memória, e como isso afeta o comportamento do código.

Agora vamos ver a mutabilidade e a imutabilidade de variáveis em Python.

### 3. Mutabilidade e Imutabilidade de Variáveis

#### 3.1 Definição e Conceitos

**Mutabilidade** refere-se à capacidade de um objeto ser alterado após sua criação. Em Python, os tipos mutáveis podem ter seus valores internos modificados. Por outro lado, **imutabilidade** significa que o objeto, uma vez criado, não pode ser alterado. Qualquer tentativa de modificar um objeto imutável resultará na criação de um novo objeto.

- **Mutáveis**: Objetos cujos valores podem ser alterados após sua criação.
- **Imutáveis**: Objetos que não podem ser alterados após sua criação.

#### 3.2 Exemplos de Tipos Mutáveis e Imutáveis

**Mutáveis:**

- **Listas**: Estruturas de dados ordenadas que podem conter elementos de diferentes tipos e podem ser modificadas.
- **Dicionários**: Coleções de pares chave-valor que podem ser alterados.
- **Conjuntos (sets)**: Coleções não ordenadas de elementos únicos que podem ser modificadas.

**Imutáveis:**

- **Tuplas**: Estruturas de dados ordenadas e imutáveis.
- **Strings**: Sequências de caracteres imutáveis.
- **Inteiros**: Números inteiros imutáveis.
- **Floats**: Números de ponto flutuante imutáveis.

#### 3.3 Exemplos Práticos

Vamos ver alguns exemplos para ilustrar a mutabilidade e imutabilidade em Python:

```python
# Exemplo 1: Modificando um objeto mutável (lista)
def modify_list(lst):
    lst.append(99)
    print("Dentro da função:", lst)

my_list = [1, 2, 3]
print("Antes da função:", my_list)
modify_list(my_list)
print("Depois da função:", my_list)

# Exemplo 2: Tentando modificar um objeto imutável (string)
def modify_string(s):
    s += " world"
    print("Dentro da função:", s)
    return s

my_string = "Hello"
print("Antes da função:", my_string)
new_string = modify_string(my_string)
print("Depois da função:", my_string)
print("Nova string:", new_string)
```

**Exemplo 1: Modificando um objeto mutável (lista)**

- Antes da função: `[1, 2, 3]`
- Dentro da função: `[1, 2, 3, 99]`
- Depois da função: `[1, 2, 3, 99]`

Neste exemplo, a lista `my_list` é mutável. Quando passamos `my_list` para a função `modify_list`, a lista original é modificada, adicionando o elemento `99`.

**Exemplo 2: Tentando modificar um objeto imutável (string)**

- Antes da função: `Hello`
- Dentro da função: `Hello world`
- Depois da função: `Hello`
- Nova string: `Hello world`

Neste exemplo, as strings são imutáveis. Quando tentamos modificar `s` dentro da função `modify_string`, uma nova instância da string é criada, deixando o original `my_string` inalterado. A nova string resultante da modificação é armazenada em `new_string`.

### Imutabilidade e Funções Puras

Imutabilidade e funções puras são conceitos centrais na programação funcional, promovendo previsibilidade e segurança no código. **Imutabilidade** refere-se à propriedade de um objeto que, uma vez criado, não pode ser alterado. Isso simplifica o raciocínio sobre o estado do programa, especialmente em ambientes concorrentes, onde evitar efeitos colaterais é crucial para manter a consistência. **Funções puras** são aquelas que, dadas as mesmas entradas, sempre produzem as mesmas saídas e não causam efeitos colaterais, facilitando a depuração e o teste de código. A utilização desses conceitos melhora a legibilidade, a manutenção e a modularidade do software, embora possa, em alguns casos, exigir mais recursos computacionais ou uma abordagem diferente para problemas que dependem de estado mutável.

Compreender a mutabilidade e imutabilidade é crucial para prever como os objetos se comportarão ao serem passados como parâmetros para funções.

Agora você vai ver como esses conceitos afetam a passagem de parâmetros em Python.

### 4. Relação entre Mutabilidade e Passagem de Parâmetros

#### 4.1 Como a Mutabilidade Afeta a Passagem de Parâmetros

Vamos utilizar um `dataclass` para ilustrar como a mutabilidade afeta a passagem de parâmetros. Em Python, `dataclasses` são convenientes para criar classes que são principalmente usadas para armazenar dados.

**Exemplo Prático com `dataclass`:**

```python
from dataclasses import dataclass

@dataclass
class Item:
    name: str
    quantity: int

def modify_item(item):
    item.quantity += 1
    print("Dentro da função:", item)

my_item = Item(name="Apple", quantity=10)
print("Antes da função:", my_item)
modify_item(my_item)
print("Depois da função:", my_item)
```

Saída:

```bash
$ Antes da função: Item(name='Apple', quantity=10)
$ Dentro da função: Item(name='Apple', quantity=11)
$ Depois da função: Item(name='Apple', quantity=11)
```

Neste exemplo, `my_item` é uma instância de um `dataclass` mutável. Quando passamos `my_item` para a função `modify_item`, a quantidade do item é modificada diretamente.

#### 4.2 Como a Imutabilidade Afeta a Passagem de Parâmetros

Para ilustrar a imutabilidade, vamos criar uma classe simples de `Usuario` onde tentaremos modificar um atributo imutável. Em vez de modificar o atributo diretamente, criaremos uma nova instância.

**Exemplo Prático com Classe Simples:**

```python
class Usuario:
    def __init__(self, id, nome):
        self.id = id
        self.nome = nome

def modify_usuario(usuario):
    # Tentando modificar diretamente o nome do usuário
    usuario.nome += " Junior"
    print("Dentro da função:", usuario.nome)
    return usuario

meu_usuario = Usuario(id=1, nome="Sérgio")
print("Antes da função:", meu_usuario.nome)
novo_usuario = modify_usuario(meu_usuario)
print("Depois da função:", meu_usuario.nome)
print("Novo usuário:", novo_usuario.nome)
```

Saída:

```bash
$ Antes da função: Sérgio
$ Dentro da função: Sérgio Junior
$ Depois da função: Sérgio Junior
$ Novo usuário: Sérgio Junior
```

Apesar da classe `Usuario` não ser propriamente imutável, o exemplo demonstra a tentativa de modificar um atributo e como isso reflete na instância original. Se quiséssemos seguir o padrão imutável, criaríamos uma nova instância em vez de modificar diretamente os atributos.

### 5. Conceitos de Escopo em Python

#### 5.1 Definição de Escopo

O escopo refere-se ao contexto em que uma variável é definida e onde ela pode ser acessada. Em Python, existem quatro tipos principais de escopo:

- **Local:** Variáveis definidas dentro de uma função. Elas só são acessíveis dentro dessa função.
- **Global:** Variáveis definidas no nível do módulo. Elas são acessíveis em qualquer lugar do módulo.
- **Não local (nonlocal):** Variáveis definidas em uma função externa a uma função interna. Utilizado para modificar variáveis em um escopo externo ao local, mas não global.
- **Built-in:** Nomes pré-definidos pela linguagem Python que são acessíveis em qualquer lugar do código.

#### 5.2 Escopo e Passagem de Parâmetros

O escopo influencia como os parâmetros são manipulados dentro das funções. Quando uma função é chamada, um novo escopo local é criado para os parâmetros e variáveis locais. Os parâmetros da função são tratados como variáveis locais dentro desse escopo.

#### 5.3 Exemplos Práticos

**Exemplo 1: Escopo Local**

```python
def my_function():
    user = Usuario(id=1, nome="Alice")  # Escopo local
    print("Dentro da função:", user.nome)

my_function()
# print(user)  # Isso resultaria em um erro, pois user não é acessível fora da função
```

Saída:

```bash
$ Dentro da função: Alice
```

**Exemplo 2: Escopo Global**

```python
user = Usuario(id=2, nome="Bob")  # Escopo global

def my_function():
    print("Dentro da função:", user.nome)

my_function()
print("Fora da função:", user.nome)
```

Saída:

```bash
$ Dentro da função: Bob
$ Fora da função: Bob
```

**Exemplo 3: Modificando Variáveis Globais**

```python
user = Usuario(id=3, nome="Charlie")  # Escopo global

def my_function():
    global user
    user = Usuario(id=3, nome="Charlie Jr.")
    print("Dentro da função:", user.nome)

my_function()
print("Fora da função:", user.nome)
```

Saída:

```bash
$ Dentro da função: Charlie Jr.
$ Fora da função: Charlie Jr.
```

**Exemplo 4: Utilizando Nonlocal**

```python
def outer_function():
    user = Usuario(id=4, nome="David")

    def inner_function():
        nonlocal user
        user = Usuario(id=4, nome="David Jr.")
        print("Dentro da função interna:", user.nome)

    inner_function()
    print("Dentro da função externa:", user.nome)

outer_function()
```

Saída:

```bash
$ Dentro da função interna: David Jr.
$ Dentro da função externa: David Jr.
```

Esses exemplos mostram como o escopo afeta a visibilidade e modificação das variáveis dentro de diferentes contextos em Python.

### 6. Boas Práticas e Considerações de Desempenho

#### 6.1 Como Escolher entre Tipos Mutáveis e Imutáveis

A escolha entre tipos mutáveis e imutáveis é crucial para a construção de um software robusto e eficiente. Em termos de arquitetura e design de software, entender a diferença entre esses tipos ajuda a prever o comportamento do código, especialmente quando se trabalha com funções e passagem de parâmetros.

**Mutabilidade e Imutabilidade:**

- **Mutáveis:** Objetos que podem ser alterados após sua criação, como listas, dicionários e conjuntos. Eles são úteis quando se espera modificar o estado do objeto frequentemente. Contudo, isso pode levar a efeitos colaterais indesejados se não forem bem gerenciados.
- **Imutáveis:** Objetos que não podem ser alterados após sua criação, como tuplas, strings e inteiros. Eles são ideais para garantir que o estado não seja modificado inadvertidamente, promovendo segurança e previsibilidade no código.

**Considerações para Escolha:**

- **Consistência:** Em um design de software, garantir que objetos não sejam modificados inadvertidamente ajuda a manter a consistência do estado.
- **Desempenho:** Objetos imutáveis são mais fáceis de otimizar, pois o compilador/interpreter pode fazer suposições sobre seu estado.
- **Paralelismo:** Imutabilidade facilita a programação concorrente e paralela, pois não há necessidade de sincronização para leitura de objetos imutáveis.

#### 6.2 Impacto no Desempenho e Otimização

Os tipos de dados que escolhemos podem impactar significativamente o desempenho do software. Por exemplo:

- **Listas mutáveis** podem ser úteis quando é necessário adicionar ou remover elementos frequentemente.
- **Tuplas imutáveis** podem ser mais eficientes em termos de memória e tempo de acesso quando os dados não precisam mudar.

**Exemplo de Otimização:**

```python
from collections import namedtuple

# Usando namedtuple (imutável) ao invés de uma classe mutável
Usuario = namedtuple('Usuario', ['id', 'nome'])

def process_users(users):
    # Processamento de usuários sem alterar o estado original
    for user in users:
        print(f"Processando {user.nome}")

usuarios = [Usuario(id=1, nome="Alice"), Usuario(id=2, nome="Bob")]
process_users(usuarios)
```

#### 6.3 Exemplos de Código e Dicas Práticas

**Exemplo de Função Pura com Objetos Imutáveis:**

```python
def create_user(id, nome):
    return Usuario(id=id, nome=nome)

# Função pura: o estado de 'usuario' não é modificado
def greet_user(usuario):
    return f"Olá, {usuario.nome}!"

user = create_user(1, "Alice")
print(greet_user(user))
```

**Exemplo de Função com Efeito Colateral Controlado:**

```python
def update_user_name(usuario, new_name):
    # Retorna uma nova instância com o nome atualizado
    return Usuario(id=usuario.id, nome=new_name)

user = create_user(1, "Alice")
new_user = update_user_name(user, "Alice Jr.")
print(user)      # Usuario(id=1, nome='Alice')
print(new_user)  # Usuario(id=1, nome='Alice Jr.')
```

### 7. Conclusão

#### Importância de Conhecer Esses Conceitos

Para um Tech Lead, compreender profundamente conceitos como passagem de parâmetros, mutabilidade, imutabilidade e escopo é essencial por várias razões:

1. **Código Limpo e Arquitetura Limpa:**

   - **Clean Code:** Princípios de código limpo enfatizam a importância de clareza, simplicidade e previsibilidade. Conhecer como a passagem de parâmetros e a mutabilidade afetam o código ajuda a escrever funções puras e evitar efeitos colaterais indesejados.
   - **Clean Architecture:** Princípios de arquitetura limpa se concentram na separação de interesses e na criação de sistemas modulares. Entender o comportamento das variáveis em diferentes escopos e sua mutabilidade permite projetar módulos que interagem de forma previsível e segura.

2. **Desempenho e Escalabilidade:**

   - Saber quando usar tipos mutáveis ou imutáveis pode melhorar o desempenho e a escalabilidade do software, especialmente em aplicações concorrentes ou distribuídas.

3. **Facilidade de Manutenção:**

   - Código previsível e modular é mais fácil de manter e expandir. Compreender como o escopo e a passagem de parâmetros funcionam ajuda a isolar responsabilidades e evitar dependências acidentais entre diferentes partes do sistema.

4. **Colaboração e Revisão de Código:**
   - Um Tech Lead com profundo conhecimento desses conceitos pode orientar melhor a equipe, revisando o código de maneira eficaz e educando os membros da equipe sobre as melhores práticas.

#### Importância Prática no Desenvolvimento Diário

No dia a dia de desenvolvimento, esses conceitos impactam diretamente a qualidade do código. Desde a criação de funções simples até o design de sistemas complexos, a compreensão detalhada de como o Python gerencia a memória, os parâmetros e os objetos é fundamental para construir software robusto, eficiente e sustentável.

#### Referências Adicionais e Sugestões de Leitura

- [Python Fluente](https://amzn.to/3Sob0bG) por Luciano Ramalho
- [Clean Code](https://amzn.to/3zYWsZz) por Robert C. Martin
- [Clean Architecture](https://amzn.to/3SrLIta) por Robert C. Martin
- Documentação Oficial do Python (https://docs.python.org/3/)
- Blog de Martin Fowler (https://martinfowler.com/)

Com esses conceitos bem compreendidos e aplicados, você estará melhor preparado para enfrentar os desafios do desenvolvimento de software de alta qualidade e liderar sua equipe rumo a soluções técnicas elegantes e eficazes.
