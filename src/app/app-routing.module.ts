import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaymentComponent } from './payment/payment.component';
import { SubjectDemoComponent } from './subject-demo/subject-demo.component';

const routes: Routes = [
  { path: '', redirectTo: '/payment', pathMatch: 'full' },
  { path: 'payment', component: PaymentComponent },
  { path: 'subject-demo', component: SubjectDemoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}