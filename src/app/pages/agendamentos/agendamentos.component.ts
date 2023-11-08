import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agendamentos',
  templateUrl: './agendamentos.component.html',
  styleUrls: ['./agendamentos.component.css'],
})
export class AgendamentosComponent {

  agendamentos = [
    {
      "data": "2023-11-08",
      "data_solicitacao": "2023-11-07",
      "proprietario": "João da Silva",
      "moto": "Honda CG 160",
      "placa": "ABC-1234",
      "servicos": ["Troca de óleo", "Revisão geral"],
      "status": "Aguardando aprovação"
    },
    {
      "data": "2023-11-09",
      "data_solicitacao": "2023-11-08",
      "proprietario": "Maria da Silva",
      "moto": "Yamaha YBR 125",
      "placa": "DEF-5678",
      "servicos": ["Pneus novos", "Bateria nova"],
      "status": "Aprovado"
    },
    {
      "data": "2023-11-10",
      "data_solicitacao": "2023-11-09",
      "proprietario": "Pedro da Silva",
      "moto": "Suzuki GSX-R 1000",
      "placa": "GHI-9012",
      "servicos": ["Manutenção de freios", "Manutenção de suspensão"],
      "status": "Em andamento"
    },
    {
      "data": "2023-11-11",
      "data_solicitacao": "2023-11-10",
      "proprietario": "Ana da Silva",
      "moto": "Kawasaki Ninja 400",
      "placa": "JKL-2345",
      "servicos": ["Troca de pastilhas de freio", "Troca de óleo da corrente"],
      "status": "Concluído"
    },
    {
      "data": "2023-11-12",
      "data_solicitacao": "2023-11-11",
      "proprietario": "José da Silva",
      "moto": "Honda CB 500",
      "placa": "MNO-6789",
      "servicos": ["Troca de filtro de ar", "Troca de filtro de óleo"],
      "status": "Aguardando revisão"
    },
    {
      "data": "2023-11-13",
      "data_solicitacao": "2023-11-12",
      "proprietario": "Lucia da Silva",
      "moto": "Yamaha XTZ 125",
      "placa": "PQR-7890",
      "servicos": ["Troca de velas", "Troca de bateria"],
      "status": "Cancelado"
    },
    {
      "data": "2023-11-14",
      "data_solicitacao": "2023-11-13",
      "proprietario": "Carlos da Silva",
      "moto": "Suzuki DR-Z 400",
      "placa": "STU-8901",
      "servicos": ["Troca de corrente", "Troca de pneu"],
      "status": "Pendente"
    }
  ];

  constructor(private router: Router) {}

  goToNovoAgendamento() {
    this.router.navigate(['novo-agendamento']);
  }

}
