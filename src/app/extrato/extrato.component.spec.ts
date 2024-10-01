import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExtratoComponent } from './extrato.component';
import { ContaServiceService } from '../services/conta-service.service';
import { of, throwError } from 'rxjs';

describe('ExtratoComponent', () => {
  let component: ExtratoComponent;
  let fixture: ComponentFixture<ExtratoComponent>;
  let contaService: jasmine.SpyObj<ContaServiceService>;

  beforeEach(async () => {
    const spy = jasmine.createSpyObj('ContaServiceService', ['consultarExtrato']);

    await TestBed.configureTestingModule({
      declarations: [ ExtratoComponent ],
      providers: [
        { provide: ContaServiceService, useValue: spy }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExtratoComponent);
    component = fixture.componentInstance;
    contaService = TestBed.inject(ContaServiceService) as jasmine.SpyObj<ContaServiceService>;
    component.contaId = 1; // Defina um ID de conta para os testes
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call consultarExtrato and set extrato on success', () => {
    const mockExtrato = [{ id: 1, descricao: 'Teste', valor: 100 }];
    contaService.consultarExtrato.and.returnValue(of(mockExtrato));

    component.consultarExtrato();

    expect(contaService.consultarExtrato).toHaveBeenCalledWith(component.contaId);
    expect(component.extrato).toEqual(mockExtrato);
    expect(component.errorMessage).toBe('');
  });

});
