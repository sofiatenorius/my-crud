import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
  export class ContaServiceService {
    private apiUrl = 'http://localhost:3200/contas';
     private baseUrl = 'http://localhost:3200/extrato';
    constructor(private http: HttpClient, ) {}

    obterContas(): Observable<any> {
      return this.http.get(this.apiUrl);
    }

    cadastrar(conta: any): Observable<any> {
      return this.http.post(this.apiUrl, conta);
    }

    realizarTransferencia(transferencia: any): Observable<any> {
      return this.http.post('http://localhost:3200/transferencias', transferencia);
    }

    realizarDeposito(deposito: any): Observable<any> {
      return this.http.post('http://localhost:3200/depositos', deposito);
    }

    consultarExtrato(contaId: number): Observable<any[]> {
      return this.http.get<any[]>(`http://localhost:3200/extrato/${contaId}`);
    }

}
