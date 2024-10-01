import { Component, OnInit } from '@angular/core';
import { ContaServiceService } from '../services/conta-service.service';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})

export class ExtratoComponent implements OnInit{
  contaId!: any;
  extrato: any[] = [];
  errorMessage: string = '';

  constructor(private contaService: ContaServiceService) {}
  ngOnInit(): void {
  }



  consultarExtrato() {
    this.errorMessage = '';
    this.contaService.consultarExtrato(this.contaId).subscribe(
      (response) => {
        this.extrato = response;
      },

    );
  }
}
