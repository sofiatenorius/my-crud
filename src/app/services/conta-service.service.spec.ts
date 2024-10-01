import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ContaServiceService } from './conta-service.service';

describe('ContaServiceService', () => {
  let service: ContaServiceService;
  let httpMock: HttpTestingController;

  const apiUrl = 'http://localhost:3200/contas';
  const extratoUrl = 'http://localhost:3200/extrato';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ContaServiceService]
    });

    service = TestBed.inject(ContaServiceService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch accounts', () => {
    const dummyContas = [{ id: 1, nomeTitular: 'John Doe' }, { id: 2, nomeTitular: 'Jane Doe' }];

    service.obterContas().subscribe(contas => {
      expect(contas.length).toBe(2);
      expect(contas).toEqual(dummyContas);
    });

    const req = httpMock.expectOne(apiUrl);
    expect(req.request.method).toBe('GET');
    req.flush(dummyContas);
  });

  it('should register a new account', () => {
    const newAccount = { numeroConta: '12345', nomeTitular: 'John Doe' };

    service.cadastrar(newAccount).subscribe(response => {
      expect(response).toEqual(newAccount);
    });

    const req = httpMock.expectOne(apiUrl);
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual(newAccount);
    req.flush(newAccount);
  });

  it('should perform a transfer', () => {
    const transferencia = { contaOrigem: 1, contaDestino: 2, valor: 100 };

    service.realizarTransferencia(transferencia).subscribe(response => {
      expect(response).toEqual(transferencia);
    });

    const req = httpMock.expectOne('http://localhost:3200/transferencias');
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual(transferencia);
    req.flush(transferencia);
  });

  it('should perform a deposit', () => {
    const deposito = { contaId: 1, valor: 100 };

    service.realizarDeposito(deposito).subscribe(response => {
      expect(response).toEqual(deposito);
    });

    const req = httpMock.expectOne('http://localhost:3200/depositos');
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual(deposito);
    req.flush(deposito);
  });

  it('should consult account statement', () => {
    const contaId = 1;
    const dummyExtrato = [{ data: '2024-01-01', valor: 100 }];

    service.consultarExtrato(contaId).subscribe(extrato => {
      expect(extrato.length).toBe(1);
      expect(extrato).toEqual(dummyExtrato);
    });

    const req = httpMock.expectOne(`${extratoUrl}/${contaId}`);
    expect(req.request.method).toBe('GET');
    req.flush(dummyExtrato);
  });
});
