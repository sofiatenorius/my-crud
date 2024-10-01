import { Component } from '@angular/core';
import { ContaServiceService } from '../services/conta-service.service';

@Component({
  selector: 'app-transferencia',
  templateUrl: './transferencia.component.html',
  styleUrls: ['./transferencia.component.scss']
})
export class TransferenciaComponent {
  contaOrigem: number = 0;
  contaDestino: number = 0;
  valor: number = 0;
  successMessage: string = '';
  errorMessage: string = '';

  constructor(private contaService: ContaServiceService) {}

  onTransferir() {
    const transferencia = {
      contaOrigem: this.contaOrigem,
      contaDestino: this.contaDestino,
      valor: this.valor
    };

    this.contaService.realizarTransferencia(transferencia).subscribe(
      response => {
        this.successMessage = 'Transferência realizada com sucesso!';
        this.errorMessage = '';
        this.resetForm();
      },
      error => {
        this.errorMessage = 'Erro ao realizar transferência: ' + error.message;
        this.successMessage = '';
      }
    );
  }

  resetForm() {
    this.contaOrigem = 0;
    this.contaDestino = 0;
    this.valor = 0;
  }
}
