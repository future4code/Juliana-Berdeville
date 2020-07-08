### Exercício 1
a) Explique como é a resposta que temos quando usamos o raw.
R.:Quando utilizamos o a versão raw do Knex para realizar requisições no Banco de dados, temos como resposta um "array de arrays", por isso na função exemplificada temos o result[0][0] indicando que queremos a primeira posição possível.


b) Faça uma função que busque um ator pelo nome.
R.:

    const getActorByName = async (name: string): Promise<any> => {
    const result = await connection.raw(`
      SELECT * FROM Actor WHERE name = '${name}'
    `)
      return result[0][0]
  }

c) Faça uma função que receba um gender retorne a quantidade de itens na tabela Actor com esse gender. Para atrizes, female e para atores male.
R.:

    const getActorByGender = async (gender: string): Promise<any> => {
    const result = await connection.raw(`
      SELECT COUNT(*) FROM Actor WHERE gender = '${gender}'
    `)
  
      return result[0][0]
  }

---------------------------------------------------------------------------------

### Exercício 2
a) Uma função que receba um salário e um id e realiza a atualização do salário do ator em questão.
R.:

    const updateSalary = async (id: string, salary: number,): Promise<void> => {
    await connection('Actor')
      .where('id, id)
      .update({salary: salary);
  };

b) Uma função que receba um id e delete um ator da tabela.
R.:

    const deleteActor = async (id: string): Promise<void> => {
     await connection('Actor')
      .where('id', id)
      .delete();
  };
  
c) Uma função que receba um gender e devolva a média dos salários de atrizes ou atores desse gender.
R.:

    const genderSalaryAverage = async (gender: string): Promise<void> => {
    const result = await connection('Actor')
      .where(gender=`${gender}`)
      .avg('salary');
    return result[0].average;
    };


---------------------------------------------------------------------------------

### Exercício 3
a) Por que o id está sendo lido assim: req.params.id?
R.: Pois, como em um endpoint, precisamos de autorização para acessar determinadas áreas de código sensível. 

b) O que as últimas linhas do try (res.status(200).send(actor)) e do cathc (res.status(400).send({...} ) fazem? Teste o código se precisar.
R.: Estas linhas dizem que, caso a resposta HTTP seja "positiva" (200 OK), enviamos as informações referentes à tabela Actor. Caso contrário, (400 ERROR), devemos enviar uma mensagem de erro informando sobre o fato.

c) Crie um endpoint agora com as seguintes especificações: Deve ser um GET (`/actor`), receber o gênero como um *query param* (`/actor?gender=`) e devolver a quantidade de atores/atrizes desse gênero:
R.:

    app.get('/actor', async function(req: Request, res: Response){
    try {
            const count = await countActors(req.query.gender as string);
            res.status(200).send({quantity: count});
        } 
            catch (err) {
                           res.status(400).send({message: err.message});
    }
    });









