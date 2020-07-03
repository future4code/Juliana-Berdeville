/*Esta será uma interface*/

export interface user {
    id: number; //Alunos e professores têm um nome
    nome: string;  //Alunos e professores têm um id
    email: string; //Alunos e professores têm um email
    bday: string; //Alunos e professores têm uma data de aniversário
    /*As demais caracterísicas que não são comuns serão implementadas em cada classe*/
  }
