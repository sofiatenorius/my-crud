import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DepositoComponent } from './deposito.component';
import { ContaServiceService } from '../services/conta-service.service';
import { of, throwError } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

class MockContaService {
  realizarDeposito(deposito: any) {
    return of({ success: true }); // Simula uma resposta bem-sucedida
  }
}

describe('DepositoComponent', () => {
  let component: DepositoComponent;
  let fixture: ComponentFixture<DepositoComponent>;
  let contaService: ContaServiceService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule, FormsModule],
      declarations: [DepositoComponent],
      providers: [
        { provide: ContaServiceService, useClass: MockContaService }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(DepositoComponent);
    component = fixture.componentInstance;
    contaService = TestBed.inject(ContaServiceService);
  });

  beforeEach(() => {
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should deposit successfully', () => {
    component.contaId = 1;
    component.valor = 100;

    component.onDepositar();

    expect(component.successMessage).toBe('Depósito realizado com sucesso!');
    expect(component.errorMessage).toBe('');
    expect(component.contaId).toBe(0);
    expect(component.valor).toBe(0);
  });

  it('should handle deposit error', () => {
    spyOn(contaService, 'realizarDeposito').and.returnValue(throwError({ message: 'Erro de teste' }));

    component.contaId = 1;
    component.valor = 100;

    component.onDepositar();

    expect(component.errorMessage).toBe('Erro ao realizar depósito: Erro de teste');
    expect(component.successMessage).toBe('');
  });
});
