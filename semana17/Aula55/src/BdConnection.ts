import knex from "knex"

export class BdConnection {
    
/*Atributo privado que estabelece conexão com o banco de dados*/
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
/*Atributo privado que estabelece conexão com o banco de dados*/

/*Atributo que recebe o nome da tabela a qual queremos realizar operações*/
    private static TABLE_NAME = "User";
/*Atributo que recebe o nome da tabela a qual queremos realizar operações*/

/*Método que insere informações na tabela -- criação de novo usuário*/
    public async createNewUser(id: string,email: string,password: string): Promise<void> {
      await this.connection
        .insert({id, email, password,})
        .into(BdConnection.TABLE_NAME);
    }
}
/*Método que insere informações na tabela -- criação de novo usuário*/