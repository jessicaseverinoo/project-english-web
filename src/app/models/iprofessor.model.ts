import { ECargo } from './ecargo.enum';

export interface IProfessor {
    primeiroNome: string;
    ultimoNome: string;
    // cargo: ECargo;
    cargo: string;
    nomeEscola: string;
    dtNascimento: string;
    email: string;
    senha: string;
    confirmaSenha: string;
}
