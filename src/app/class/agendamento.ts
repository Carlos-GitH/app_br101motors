export class Agendamento {
    data: Date = new Date();
    data_solicitacao: Date = new Date();
    proprietario: string = ''; // default value assigned
    moto: string = '';
    placa: string = '';
    servicos: string[] = [];
    status: string = 'Aguardando aprovação';
}