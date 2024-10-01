import { Component } from '@angular/core';
import { ContaServiceService } from '../services/conta-service.service';

@Component({
  selector: 'app-deposito',
  templateUrl: './deposito.component.html',
  styleUrls: ['./deposito.component.scss']
})

export class DepositoComponent {
  contaId: number = 0;
  valor: number = 0;
  successMessage: string = '';
  errorMessage: string = '';

  constructor(private contaService: ContaServiceService) {}

  onDepositar() {
    const deposito = {
      contaId: this.contaId,
      valor: this.valor
    };

    this.contaService.realizarDeposito(deposito).subscribe(
      response => {
        this.successMessage = 'Depósito realizado com sucesso!';
        this.errorMessage = '';
        this.resetForm();
      },
      error => {
        this.errorMessage = 'Erro ao realizar depósito: ' + error.message;
        this.successMessage = '';
      }
    );
  }

  resetForm() {
    this.contaId = 0;
    this.valor = 0;
  }
}
