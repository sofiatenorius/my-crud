import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TransferenciaComponent } from './transferencia.component';
import { ContaServiceService } from '../services/conta-service.service';
import { of, throwError } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { NO_ERRORS_SCHEMA } from '@angular/core';

class MockContaService {
  realizarTransferencia(transferencia: any) {
    return of({}); // Simula uma resposta de sucesso
  }
}

describe('TransferenciaComponent', () => {
  let component: TransferenciaComponent;
  let fixture: ComponentFixture<TransferenciaComponent>;
  let contaService: ContaServiceService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule, FormsModule, CommonModule],
      declarations: [TransferenciaComponent],
      providers: [
        { provide: ContaServiceService, useClass: MockContaService }
      ],      schemas: [NO_ERRORS_SCHEMA] // Ignora erros de template

    }).compileComponents();

    fixture = TestBed.createComponent(TransferenciaComponent);
    component = fixture.componentInstance;
    contaService = TestBed.inject(ContaServiceService);
  });

  beforeEach(() => {
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should successfully transfer and reset form', () => {
    component.contaOrigem = 1;
    component.contaDestino = 2;
    component.valor = 100;

    component.onTransferir();

    expect(component.successMessage).toBe('Transferência realizada com sucesso!');
    expect(component.errorMessage).toBe('');
    expect(component.contaOrigem).toBe(0); // Verifica se a conta de origem foi resetada
    expect(component.contaDestino).toBe(0); // Verifica se a conta de destino foi resetada
    expect(component.valor).toBe(0); // Verifica se o valor foi resetado
  });

  it('should handle transfer error', () => {
    const errorMessage = 'Erro ao realizar transferência';
    spyOn(contaService, 'realizarTransferencia').and.returnValue(throwError({ message: errorMessage }));

    component.contaOrigem = 1;
    component.contaDestino = 2;
    component.valor = 100;

    component.onTransferir();

    expect(component.errorMessage).toBe('Erro ao realizar transferência: ' + errorMessage);
    expect(component.successMessage).toBe('');
  });
});
