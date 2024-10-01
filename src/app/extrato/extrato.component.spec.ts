// import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
// import { ExtratoComponent } from './extrato.component';
// import { ContaServiceService } from '../conta-service.service';
// import { of, throwError } from 'rxjs';
// import { FormsModule } from '@angular/forms';
// import { HttpClientModule } from '@angular/common/http';
// import { CommonModule } from '@angular/common';
// import { NO_ERRORS_SCHEMA } from '@angular/core';

// class MockContaService {
//   consultarExtrato(contaId: any) {
//     return of([]); // Retorna um extrato vazio como resposta simulada
//   }
// }

// describe('ExtratoComponent', () => {
//   let component: ExtratoComponent;
//   let fixture: ComponentFixture<ExtratoComponent>;
//   let contaService: ContaServiceService;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       imports: [HttpClientModule, FormsModule, CommonModule],
//       declarations: [ExtratoComponent],
//       providers: [
//         { provide: ContaServiceService, useClass: MockContaService }
//       ],
//       schemas: [NO_ERRORS_SCHEMA] // Ignora erros de template
//     }).compileComponents();

//     fixture = TestBed.createComponent(ExtratoComponent);
//     component = fixture.componentInstance;
//     contaService = TestBed.inject(ContaServiceService);
//   });

//   beforeEach(() => {
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });


//   it('should handle error when consulting extrato', () => {
//     const errorMessage = 'Erro ao consultar extrato';
//     spyOn(contaService, 'consultarExtrato').and.returnValue(throwError({ message: errorMessage }));

//     component.contaId = 1; // Define um ID de conta fictício

//     // Simula a chamada do método
//     component.consultarExtrato();

//     expect(component.errorMessage).toBe(''); // Verifica se a mensagem de erro foi resetada
//     expect(contaService.consultarExtrato).toHaveBeenCalledWith(1); // Verifica se o serviço foi chamado com o ID correto
//   });
// });
