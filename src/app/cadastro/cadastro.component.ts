import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContaServiceService } from '../services/conta-service.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
  export class CadastroComponent{
      numeroConta: string = '';
      nomeTitular: string = '';
      documento: string = '';
      endereco: string = '';
      successMessage: string = '';
      errorMessage: string = '';

      constructor(private contaService: ContaServiceService) {}

      onSubmit() {
        const novaConta = {
          numeroConta: this.numeroConta,
          nomeTitular: this.nomeTitular,
          documento: this.documento,
          endereco: this.endereco
        };

        this.contaService.cadastrar(novaConta).subscribe(
          response => {
            this.successMessage = 'Conta cadastrada com sucesso!';
            this.errorMessage = '';
            this.resetForm();
          },
          error => {
            this.errorMessage = 'Erro ao cadastrar conta: ' + error.message;
            this.successMessage = '';
          }
        );
      }

      resetForm() {
        this.numeroConta = '';
        this.nomeTitular = '';
        this.documento = '';
        this.endereco = '';
      }
    }
