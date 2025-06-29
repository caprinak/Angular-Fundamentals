import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ConvertPipe } from './convert.pipe';
import { SubjectDemoComponent } from './subject-demo/subject-demo.component';
import { PaymentComponent } from './payment/payment.component';
import { AppRoutingModule } from './app-routing.module';
import { ScanOperatorComponent } from './scan-operator/scan-operator.component';

@NgModule({
  declarations: [AppComponent, ConvertPipe, SubjectDemoComponent, PaymentComponent, ScanOperatorComponent],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}