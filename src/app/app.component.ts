import { Component } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // Properties for the payment form from the existing HTML
  name: string;
  date: string;
  dateError: string;
  amount: number;
  height: number;
  miles: number;
  unit: string = 'km';

  // Properties for ReplaySubject visualization
  replayLogs: string[] = [];
  sub1Values: number[] = [];
  sub2Values: number[] = [];
  sub3Values: number[] = [];
  sub1Status = 'Not Subscribed';
  sub2Status = 'Not Subscribed';
  sub3Status = 'Not Subscribed';

  constructor() {}

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

  // Method for ReplaySubject visualization
  runReplaySubjectDemo() {
    // Reset state
    this.replayLogs = [];
    this.sub1Values = [];
    this.sub2Values = [];
    this.sub3Values = [];
    this.sub1Status = 'Not Subscribed';
    this.sub2Status = 'Not Subscribed';
    this.sub3Status = 'Not Subscribed';

    const subject = new ReplaySubject<number>();
    this.replayLogs.push('--- Initializing ReplaySubject ---');

    // First Subscription: Subscribes immediately
    this.sub1Status = 'Subscribed at 0ms';
    subject.subscribe((value) => {
      this.replayLogs.push(`Subscription 1 received: ${value}`);
      this.sub1Values.push(value);
    });

    this.replayLogs.push('>>> Emitting 50');
    subject.next(50);

    setTimeout(() => {
      this.replayLogs.push('>>> Emitting 10 (at 1000ms)');
      subject.next(10);
    }, 1000);

    setTimeout(() => {
      this.replayLogs.push('>>> Emitting 15 (at 1500ms)');
      subject.next(15);
    }, 1500);

    setTimeout(() => {
      this.replayLogs.push('--- Subscribing Subscription 2 (at 2000ms) ---');
      this.sub2Status = 'Subscribed at 2000ms';
      subject.subscribe((value) => {
        this.replayLogs.push(`Subscription 2 received: ${value}`);
        this.sub2Values.push(value);
      });
    }, 2000);

    setTimeout(() => {
      this.replayLogs.push('--- Subscribing Subscription 3 (at 4000ms) ---');
      this.sub3Status = 'Subscribed at 4000ms';
      subject.subscribe((value) => {
        this.replayLogs.push(`Subscription 3 received: ${value}`);
        this.sub3Values.push(value);
      });
    }, 4000);
  }
}