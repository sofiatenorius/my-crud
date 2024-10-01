import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CadastroComponent } from './cadastro.component';
import { ContaServiceService } from '../services/conta-service.service';
import { of, throwError } from 'rxjs';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

class MockContaService {
  cadastrar(novaConta: any) {
    return of({}); // Simula uma resposta de sucesso
  }
}

describe('CadastroComponent', () => {
  let component: CadastroComponent;
  let fixture: ComponentFixture<CadastroComponent>;
  let contaService: ContaServiceService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule, FormsModule, CommonModule],
      declarations: [CadastroComponent],
      providers: [
        { provide: ContaServiceService, useClass: MockContaService }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(CadastroComponent);
    component = fixture.componentInstance;
    contaService = TestBed.inject(ContaServiceService);
  });

  beforeEach(() => {
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should successfully register a new account and reset the form', () => {
    component.numeroConta = '12345';
    component.nomeTitular = 'John Doe';
    component.documento = '123.456.789-00';
    component.endereco = 'Rua Exemplo, 123';

    component.onSubmit();

    expect(component.successMessage).toBe('Conta cadastrada com sucesso!');
    expect(component.errorMessage).toBe('');
    expect(component.numeroConta).toBe(''); // Verifica se o número da conta foi resetado
    expect(component.nomeTitular).toBe(''); // Verifica se o nome do titular foi resetado
    expect(component.documento).toBe(''); // Verifica se o documento foi resetado
    expect(component.endereco).toBe(''); // Verifica se o endereço foi resetado
  });

  it('should handle account registration error', () => {
    const errorMessage = 'Erro ao cadastrar conta';
    spyOn(contaService, 'cadastrar').and.returnValue(throwError({ message: errorMessage }));

    component.numeroConta = '12345';
    component.nomeTitular = 'John Doe';
    component.documento = '123.456.789-00';
    component.endereco = 'Rua Exemplo, 123';

    component.onSubmit();

    expect(component.errorMessage).toBe('Erro ao cadastrar conta: ' + errorMessage);
    expect(component.successMessage).toBe('');
  });
});
