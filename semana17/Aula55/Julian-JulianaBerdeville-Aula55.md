### Exercício 1
a) Qual a sua opinião em relação a usar strings para representar os ids? 
Você concorda que seja melhor do que usar números?
R.: Definitivamente, o uso de strings é bem mais adequado do que o uso de tipos numéricos,
pois, com as strings, podemos atribuir ao ID um maior número de caracteres, o que torna
esta informação mais resistente à ataques força-bruta e afins. Complexidade é segurança
quando se trata de senhas, palavras-chave etc. 

b) A partir de hoje, vamos tentar isolar, ao máximo, as nossas lógicas em classes.
Uma das vantagens disso é, por exemplo, utilizar a hierarquia para fazer modificações 
simples. Dado isso, crie uma classe que possua um método público para gerar um id.
R.:

    import {v4} from 'uuid'
    
    export class IdGenerator {
    public generateId( ): string {
            const id = v4();
            return id;   
    }
        }

---------------------------------------------------------------------------------

### Exercício 2
a) Explique o código acima com as suas palavras.
R.: O código em questão realiza a importação das dependências necessárias para conexão com o banco de dados, a própria conexão com o banco de dados e, por fim, manipulação da tabela por meio da criação de um novo usuário (nova entrada).

b) Comece criando a tabela de usuários. Coloque a query que você utilizou no arquivo de respostas.
R.: 

    CREATE TABLE User 
    (
            id INT (100) NOT NULL,
            email VARCHAR (255) NOT NULL,
            password VARCHAR (255) NOT NULL,
            PRIMARY KEY (id)
    );
  
c) Pela mesma justificativa do exercício anterior, crie uma classe para ser responsável pela comunicação do usuário com a tabela de usuários. Ela deve possuir um método que cria o usuário no banco; além disso, as variáveis necessárias para realizar as queries devem ser atributos dessa classe
R.:

    import knex from "knex"

    export class BdConnection {
    
        private connection = knex({
            client: "mysql",
            connection: {
                host: process.env.DB_HOST,
                port: Number(process.env.DB_PORT || "3306"),
                user: process.env.DB_USER,
                password: process.env.DB_PASSWORD,
                database: process.env.DB_NAME,
            },
      });
      
    private static TABLE_NAME = "User";

    public async createNewUser(id: string,email: string,password: string): Promise<void> {
            await this.connection
            .insert({id, email, password,})
            .into(BdConnection.TABLE_NAME);
        }
    }

d) Crie um usuário utilizando somente a classe que você criou:
R.: 

    const falandoComOBD = new BdConnection() 
    const criandoUsuario = falandoComOBD.createNewUser('123456','oie@oie.com','ronaldinho')
 
---------------------------------------------------------------------------------

### Exercício 3
a) O que a linha as string faz? Por que precisamos usar ela ali?
R.: Determina que, independente do tipo de valor a ser passado, seu valor "definitivo" será como string. Usamos esta ferramenta caso desejemos trabalhar com uma determinada informação sob forma de string e, devido às circunstâncias, recebemos este valor com outro tipo ou quando não temos certeza de qual tipo será este determinado valor recebido.

b) Agora, crie a classe que será responsável pela autorização dos usuários com um método que gere o token. Além disso, crie uma interface a parte para representar o input desse método. Lembre-se de colocar todas as constantes em atributos da classe. 
R.:

    export class CheckAuthorization 
    {

        private static EXPIRES_IN = '3min'

        public generateToken(input: Auth): string 
        {
            const token = jwt.sign
            (
                {id: input.id,},
                process.env.JWT_KEY as string,
                {expiresIn: CheckAuthorization.EXPIRES_IN,}
            );
    
        return token;
        }
    }

    interface Auth
    {
        id: string
    }

---------------------------------------------------------------------------------









