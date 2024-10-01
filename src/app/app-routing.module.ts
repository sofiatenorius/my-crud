import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DepositoComponent } from './deposito/deposito.component';
import { TransferenciaComponent } from './transferencia/transferencia.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ExtratoComponent } from './extrato/extrato.component';

  const routes: Routes = [
    { path: 'cadastro', component: CadastroComponent },
    { path: 'transferencia', component: TransferenciaComponent },
    { path: 'deposito', component: DepositoComponent },
    { path: 'extrato', component: ExtratoComponent },
    { path: '', redirectTo: '/cadastro', pathMatch: 'full' }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
