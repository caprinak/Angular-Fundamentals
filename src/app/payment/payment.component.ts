import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {



  ngOnInit() {
  }
 // Properties for the payment form from the existing HTML
 name: string;
 date: string;
 dateError: string;
 amount: number;
 height: number;
 miles: number;
 unit: string = 'km';





 // Methods for the payment form
 onNameChange(value: string) {
   this.name = value;
 }

 onAmountChange(value: string) {
   this.amount = parseFloat(value);
 }

 onMilesChange(value: string) {
   this.miles = parseFloat(value);
 }

 validateDate() {
   if (this.date) {
     const selectedDate = new Date(this.date);
     const today = new Date();
     today.setHours(0, 0, 0, 0); // Reset time part
     if (selectedDate < today) {
       this.dateError = 'Payment date cannot be in the past.';
     } else {
       this.dateError = '';
     }
   }
 }


}
