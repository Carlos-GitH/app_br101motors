import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './pages/components/header/header.component';
import { MatCardModule } from '@angular/material/card';
import { MenuComponent } from './pages/menu/menu.component';
import { AgendamentosComponent } from './pages/agendamentos/agendamentos.component';
import {MatButtonModule} from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { NgFor } from '@angular/common';
import { MotosComponent } from './pages/motos/motos.component';
import { DadosComponent } from './pages/dados/dados.component';
import { NovoAgendamentoComponent } from './pages/novo-agendamento/novo-agendamento.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormControl, FormGroup } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    AgendamentosComponent,
    MotosComponent,
    DadosComponent,
    NovoAgendamentoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    CommonModule,
    NgFor,
    ReactiveFormsModule,
    FormsModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
