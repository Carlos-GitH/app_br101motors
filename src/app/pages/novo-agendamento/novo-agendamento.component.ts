import { Component, OnInit } from '@angular/core';
import { Agendamento } from 'src/app/class/agendamento';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-novo-agendamento',
  templateUrl: './novo-agendamento.component.html',
  styleUrls: ['./novo-agendamento.component.css'],
})
export class NovoAgendamentoComponent implements OnInit {
  formAgendamento: FormGroup = new FormGroup({});
  

  constructor(
    private router: Router, 
    
    ) { }

  ngOnInit(): void {
    this.formAgendamento = new FormGroup({})
    this.createForm(new Agendamento());
  }

  createForm(agendamento: Agendamento) {
    this.formAgendamento = new FormGroup({
      moto: new FormControl(agendamento.moto),
      data: new FormControl(agendamento.data),
      servicos: new FormControl(agendamento.servicos),
      proprietario: new FormControl(agendamento.proprietario),
      placa: new FormControl(agendamento.placa),
      status: new FormControl(agendamento.status),
      data_solicitacao: new FormControl(agendamento.data_solicitacao),
    })
  }
  goToAgendamentos() {
    this.router.navigate(['agendamentos']);
  }
  onSubmit() {
    console.log(this.formAgendamento.value)
    this.formAgendamento.reset(new Agendamento());
    this.goToAgendamentos();
  }
}
