### Exercício 1
a) Nesta tabela, utilizamos o FLOAT para declarar o salário, porque esta é uma forma de representar um número não inteiro em uma tabela. Explique os demais comandos que estão nessa query.
R.: CREATE TABLE é o comando responsável pela criação de uma nova tabela. 
    As declarações de elementos com a keyword VARCHAR representam conjunto de caracteres, como strings. 
    DATE é responsável por declarar datas, que devem ser representadas atentando-se ao padrão YYYY-MM-DD.
    Todos os elementos da tabela foram declarados como NOT NULL devido ao fato destes não poderem assumir valor nulo.

b) O comando SHOW é bem útil para nos prover informações sobre bancos, tabelas, e mais. Utilize os comandos: SHOW DATABASES e SHOW TABLES. Explique os resultados.
R.: O output foi:
        SHOW DATABASES; ==> information_schema e julian_juliana_berdeville_db
        SHOW TABLES; ==> Actor
        
    O objetivo do primeiro comando é exibir os Bancos de dados existentes em um Schema enquanto que o objetivo do segundo é exibir as tabelas existentes em um mesmo Banco de Dados.

c) O comando DESCRIBE pode ser usado para ver estrutura de uma tabela. Utilize o comando SHOW Actor e explique os resultados.
R.: Usando o comando "SHOW Actor;" obtive erro de sintaxe; como se o nome da tabela não estivesse sendo reconhecido. Para visualizar as informações - campos - existentes na tabela usei o comando "SELECT * FROM Actor;" e o output foi:
    id  |  name  |  salary  |  birth_date  |  gender
  null    null      null         null          null
  
 ---------------------------------------------------------------------------
 
### Exercício 2
a) Escreva uma query que crie a atriz Glória Pires, com o id 002, salário R$1.200.000 e data de nascimento 23 de Agosto de 1963.
R.: INSERT INTO Actor (id, name, salary, birth_date, gender)
    VALUES(
	        "002",
            "Glória Pires",
	        1200000,
            "1963-08-23",
            "female"
        );


b) Escreva uma query que tente adicionar um outro elemento a tabela com o mesmo id do item anterior (002). Isso gerará um erro. Anote a mensagem de erro, traduza (pode usar o Google Tradutor diretamente) e explique porque esse erro aconteceu.
R.: Error Code: 1062. Duplicate entry '002' for key 'PRIMARY.
    Fui avisada pelo Workbench de que havia uma entrada duplicada em minha query e que esta entrada era o id "002", definido como chave primária.
    
c) Avaliação e correção de query:
    Fui avisada de que o número de valores inseridos era incompatível com o de valores declarados. Ou seja, foram inseridos mais valores do que declarados.
        * Correção *
            INSERT INTO Actor (id, name, salary, birth_date, gender)
                    VALUES(
                            "004", 
                            "Fernanda Montenegro",
                            300000,
                            "1929-10-19", 
                            "female"
                        );
        nota: Tive que mudar o ID da Fernanda Montenegro porque tinha adicionado o Christopher Waltz no exercício anterior com o mesmo id sugerido (003).

d) Avaliação e correção de query:
    Essa query passou perto de estar certa e até me enganou, honestamente, porque achei que funcionaria, mas então fui avisada pelo Workbench que o campo name precisa de um valor default (valor este que não foi encontrado). Isso se deve ao fato de que, quando esta tabela foi criada, foi determinado que os nomes não poderiam ser nulos (name VARCHAR(255) NOT NULL). 
        * Correção *
            INSERT INTO Actor (id, name, salary, birth_date, gender)
                VALUES(
                        "005",
                        "Amandla Stenberg",
                        400000,
                        "1998-10-23", 
                        "female"
                    );
                    
e) Avaliação e correção de query:
    Fui avisada pelo Workbench que o valor associado ao campo birth_date estava incorreto. No caso, a data foi fornecida sem aspas. 
     * Correção *
     INSERT INTO Actor (id, name, salary, birth_date, gender)
            VALUES(
                    "006", 
                    "Juliana Paes",
                    719333.33,
                    "1979-03-26", 
                    "female"
                );
                
f) Por fim, crie mais um ator e mais uma atriz e prossiga para os próximos exercícios.
R.: Querys de inserção:
        INSERT INTO Actor (id, name, salary, birth_date, gender)
                VALUES(
	                    "007",
                        "Keira Knightley",
                        293729,
                        "1985-03-26",
                        "female"
                    );
        INSERT INTO Actor (id, name, salary, birth_date, gender)
                VALUES(
	                    "008",
                        "David Harbour",
                        324972394,
                        "1975-04-10",
                        "male"
                    );
                    
---------------------------------------------------------------------------

### Exercício 3
a) Escreva uma query que retorne todas as informações das atrizes:
R.: SELECT * FROM Actor WHERE gender = "female";

b) Escreva uma query que retorne o salário do ator com o nome Tony Ramos:
R.: SELECT * FROM Actor WHERE name = "Tony Ramos";

C) Escreva uma query que retorne todas as informações que tenham o gender com o valor "invalid". Explique o resultado.
R.: SELECT * FROM Actor WHERE gender = "invalid";
O Resultado dessa query foram todas as linhas cujo valor era nulo. 

d) Escreva uma query que retorne o id, nome e salário de todos que tenham o salário com o valor máximo de R$500.000.
R.: SELECT * FROM Actor WHERE salary <= 500000;

e) Tente usar as queries abaixo. Você vai reparar que elas vão gerar um erro. Anote as mensagens de erro, traduza (pode usar o Google Tradutor diretamente) e explique porque esses erros aconteceram. Por fim, corrija individualmente cada query para que funcione, teste o comando e anote-o também como resposta.
R.:  A query originalmente estava com o valor que guarda os nomes das atrizes/atores escrito incorretamente. Corrigindo:
SELECT id, name from Actor WHERE id = "002";
                    
---------------------------------------------------------------------------

### Exercício 4
a) Explique com suas palavras a query abaixo:
SELECT * FROM Actor
WHERE (name LIKE "A%" OR name LIKE "J%") AND salary > 300000

R.: A query acima seleciona todos os valores da tabela Actor uma vez que a seguinte condição seja atendida: o valor presente no campo name deve começar com A ou J - esta condição deve ser verdadeira - e o valor no campo salary deve ser maior que 300.000.

b) Escreva uma query com os atores que não comecem com a letra "A" e tenham o salário maior do que R$350.000,00.
R.: 
SELECT * FROM Actor
WHERE NOT((name LIKE "A%" OR name LIKE "J%") AND salary > 300000);

c) Escreva uma query com os atores que possuam "G" ou "g" em qualquer parte do nome. 
R.:
SELECT * FROM Actor
WHERE name LIKE "%G%" OR name LIKE "%g%";

d)Escreva uma query com os atores que tenham a lerta "a" ou "A" ou "g" ou "G" no nome e o salário entre R$350.000,00 e R$900.000,00.
R.: 
SELECT * FROM Actor
WHERE ((name LIKE "A%" OR name LIKE "J%") OR (name LIKE "%G%" OR name LIKE "%g%")) AND  900000> salary > 350000;
                    
---------------------------------------------------------------------------

### Exercício 5
a) Escreva a query que cria essa tabela. Para sinopse, utilize o tipo TEXT, pesquise sobre ele se precisar. Explique a query resumidamente.
R.:
    CREATE TABLE Films (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    sinopsys FLOAT NOT NULL,
    release_date DATE NOT NULL,
    rate INT (2) NOT NULL
);
Fui avisada pelo Workbench que o valor INT será removido futuramente. 

b) Inserir "Se eu fosse você" na tabela:
R.:
INSERT INTO Films (id, name, sinopsys, release_date, rate)
VALUES(
	"001",
    "Se Eu Fosse Você",
    "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
    "2006-06-01",
    7
);

b) Inserir "Doce de mãe" na tabela:
R.:
INSERT INTO Films (id, name, sinopsys, release_date, rate)
VALUES(
	"002",
    "Doce de mãe",
    "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
    "2012-12-27",
    10
);

c) Inserir "Dona Flor e Seus Dois Maridos" na tabela:
R.:
INSERT INTO Films (id, name, sinopsys, release_date, rate)
VALUES(
	"003",
    "Dona Flor e seus dois maridos",
    "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
    "2017-11-02",
    8
);

d) Inserir filme brasileiro na tabela:
R.:
INSERT INTO Films (id, name, sinopsys, release_date, rate)
VALUES(
	"004",
    "Bacurau",
    "Os moradores de um pequeno povoado do sertão brasileiro, chamado Bacurau, descobrem que a comunidade não consta mais em qualquer mapa.",
    "2019-08-23",
    9
);
                    
---------------------------------------------------------------------------

### Exercício 6
a) Escreva uma query que retorne o id, título e avaliação a partir de um id específico:
R.:
SELECT * FROM Films WHERE id = "004";

b) Escreva uma query que retorne um filme a partir de um nome específico:
R.:
SELECT * FROM Films WHERE name = "Bacurau";

c) Escreva uma query que retorne o id, título e sinopse dos filmes com avaliação mínima de 7:
R.:
SELECT * FROM Films WHERE rate >= 7;
                    
---------------------------------------------------------------------------

### Exercício 7
a) Escreva uma query que retorne um filme cujo título contenha a palavra vida:
R.: 
SELECT * FROM Films WHERE name LIKE "%vida%" OR "Vida%";

b) Escreva uma query que realize a pesquisa de um filme, ou seja: pesquise se o termo de busca está contido no título ou na sinopse. Utilize qualquer TERMO DE BUSCA para exemplificar:
R.: 
SELECT * FROM Films 
WHERE (name LIKE "%vida%" OR "Vida%") OR (sinopsys LIKE "%vida%" OR "Vida%");

c) Escreva uma query que procure por todos os filmes que já tenham lançado:
R.:  Acho que se a data de lançamento não estivesse sendo registrada como string, talvez a query abaixo fosse a mais indicada, pois compararia a data atual - no momento da consulta - com o valor encontrado em release_date.
SELECT * FROM Films 
WHERE release_date > CURDATE();
Mas como as datas são strings, usei o seguinte comando:
SELECT * FROM Films 
WHERE release_date NOT LIKE "2020%";

d) Escreva uma query que procure por algum filme que já tenha lançado, com o termo de busca contido no título ou sinopse e com a avaliação maior do que 7:
R.:
SELECT * FROM Films 
WHERE ((name LIKE "%vida%" OR "Vida%") OR (sinopsys LIKE "%vida%" OR "Vida%")) OR rate >= 7;










