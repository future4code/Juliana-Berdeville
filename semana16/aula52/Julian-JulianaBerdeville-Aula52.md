### Exercício 1
a) ALTER TABLE Actor DROP COLUMN salary;
R.: Query que permite alterar a tabela Actor, removendo a coluna salary.

b) ALTER TABLE Actor CHANGE gender sex VARCHAR(6);
R.: Query que permite alterar a tabela Actor, modificando o nome da tabela de 'gender' para 'sex' e difinindo sua entrada para string com até 6 caracteres.

c) ALTER TABLE Actor CHANGE gender gender VARCHAR(255);
R.: Query que permite alterar a tabela Actor, mantendo o nome da coluna como 'gender', mas alterando suas entradas para string de até 255 caracteres de tamanho.

d) Agora,  altere a coluna `gender` da tabela `ACTOR` para que ele aceite strings com até 100 caracteres:
R.:
ALTER TABLE Actor CHANGE gender gender VARCHAR (100);

---------------------------------------------------------------------------------

### Exercício 2
a) Escreva uma query que atualize o nome e a data de nascimento do ator com o id 003:
R.:
UPDATE Actor
SET name = "Moacyr Franco", birth_date = "1936-10-05"
WHERE id = "003";

b) Escreva uma query que atualize o nome da atriz Juliana Paes para JULIANA PÃES. Então, escreva outra query para voltar ao nome anterior:
R.:
UPDATE Actor
SET name = "Juliana Pães"
WHERE name = "Juliana Paes";

UPDATE Actor
SET name = "Juliana Pães"
WHERE name = "Juliana Paes";


c)  Escreva uma query que atualize todas as informações do ator com o id 005:
R.:
UPDATE Actor
SET 
name = "Moacyr Franco", 
birth_date = "1936-10-05",
salary = 782938,
gender = "male",
WHERE id = "013";

---------------------------------------------------------------------------------

### Exercício 3
a) Escreva uma query que apague a atriz com o nome Fernanda Montenegro:
R.:
DELETE FROM Actor 
WHERE name = "Fernanda Montenegro";

b) Escreva uma query que apague todos os atores (do gênero male) com o salário maior do que R$1.000.000,00:
R.:
DELETE * FROM Actor
WHERE gender = "male" AND salary > 1000000

---------------------------------------------------------------------------------

### Exercício 4
a) Escreva uma query que pegue o maior salário de todos os atores e atrizes:
R.:
SELECT MAX salary FROM Actor;

b) Escreva uma query que pegue o menor salário das atrizes:
R.:
SELECT MIN salary FROM Actor
WHERE gender = "female";

c) Escreva uma query que pegue a quantidade de atrizes:
R.:
SELECT COUNT (*) FROM Actor
WHERE gender = "female";

d) Escreva uma query que pegue a soma de todos os salários:
R.:
SELECT SUM(salary) FROM Actor;

---------------------------------------------------------------------------------

### Exercício 5
a) Releia a última query. Teste-a. Explique o resultado com as suas palavras:
R.:  A query em questão agrupa os elementos da tabela por gênero e conta quantos elementos existem dentro desta cláusula.

b) Faça uma query que retorne somente o id e o nome dos atores em ordem decrescente alfabética:
R.: 
SELECT id, name FROM Actor 
ORDER BY id, name DESC;

c) Faça uma query que retorne todos os atores ordenados pelo salário:
R.:
SELECT * FROM Actor
ORDER BY salary DESC;

d) Faça uma query que retorne os atores com os três maiores salarios:
R.:
SELECT * FROM Actor
ORDER BY salary DESC
LIMIT 3;

e) Faça uma query que retorne a média de salário por gênero:
R.:
SELECT AVG (salary) FROM Actor
WHERE gender = "female";

---------------------------------------------------------------------------------

### Exercício 6
a) Altere a tabela de Movie e adicione um novo parâmetro: playing_limit_date que indique a data limite em que o filme será passado no cinema:
R.: 
ALTER TABLE Movie 
ADD COLUMN playing_limit_date DATE NOT NULL;

b) Altere a tabela de Movie para que o parâmetro rating possa aceitar valores não inteiros, como, por exemplo, uma avaliação 8.5:
R.:
ALTER TABLE Movie 
CHANGE rating FLOAT NOT NULL;

c) Atualize dois filmes de tal forma que tenhamos um que ainda esteja em cartaz e um que já tenha saído:
R.:
UPDATE Movie
SET playing_limit_date = "2020-01-05"
WHERE id = "001";

UPDATE Movie
SET playing_limit_date = "2020-07-07"
WHERE id = "002";

d) Delete algum dos filmes, mas guarde o id. Tente fazer uma query para atualizar a sinopse desse filme que você acabou de deletar (usando o mesmo id). Anote o resultado e explique:
R.:
DELETE FROM Movie 
WHERE id = "003";

UPDATE Movie
SET sinopsys = "BLAUSBLEUSBLISS"
WHERE id = "003";

Realizando essa sequência de comandos (deletando o filme cujo id era 003 e tentando atualizá-lo após isso), obtive como resultado a anulação dos valores referentes à entrada cujo id era 003. Acho que isso ocorreu pois tentei atualizar um valor previamente removido.

---------------------------------------------------------------------------------

### Exercício 7
a) Quantos filmes em cartaz possuem avaliações maiores do que 7.5?
R.:
SELECT COUNT (*) FROM Movie
WHERE rating > 7.5;

b) Qual a média das avaliações dos filmes?
R.:
SELECT AVG (rating) FROM Movie;

c) Qual a quantidade de filmes em cartaz?
R.:
SELECT COUNT (*) FROM Movie
WHERE playing_limit_date > "2020-06-30";

d) Qual a quantidade de filmes que ainda irão lançar?
R.:
SELECT COUNT(*) 
FROM Movie
WHERE release_date < CURDATE();

e) Qual a maior nota dos filmes?
R.: 
SELECT MAX rating FROM Movie;

f) Qual a menor nota dos filmes?
R.:
SELECT MIN rating FROM Movie;

---------------------------------------------------------------------------------

### Exercício 8
a) Retorne todos os filmes em ordem alfabética:
R.:
SELECT * FROM Movie 
ORDER BY name ASC;

b) Retorne os 5 primerios filmes em ordem descrente alfabética:
R.:
SELECT * FROM Movie
ORDER BY name ASC
LIMIT 5;

c) Retorne os 3 filmes mais recentes em cartaz:
R.:
SELECT * FROM Movie
WHERE release_date < CURDATE()
ORDER BY release_date DESC
LIMIT 3;

d) 
R.:
SELECT * FROM Movie
ORDER BY rating ASC
LIMIT 3;











