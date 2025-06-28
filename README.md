# Angular Fundamentals Practice Project

This project is a hands-on laboratory for exploring and understanding the fundamental concepts of the Angular framework. It includes practical examples of data binding, pipes, directives, and RxJS integration within an Angular application.

## Live Demo

Below is a running demonstration of the project's features, including the payment form and the RxJS visualization.
### 1. Demo Form Pipes
![Demo pics](https://private-user-images.githubusercontent.com/9015417/460197945-0fac41bf-7297-4e62-8c1f-9d5c5feaff07.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NTEwODQ3MTQsIm5iZiI6MTc1MTA4NDQxNCwicGF0aCI6Ii85MDE1NDE3LzQ2MDE5Nzk0NS0wZmFjNDFiZi03Mjk3LTRlNjItOGMxZi05ZDVjNWZlYWZmMDcucG5nP1gtQW16LUFsZ29yaXRobT1BV1M0LUhNQUMtU0hBMjU2JlgtQW16LUNyZWRlbnRpYWw9QUtJQVZDT0RZTFNBNTNQUUs0WkElMkYyMDI1MDYyOCUyRnVzLWVhc3QtMSUyRnMzJTJGYXdzNF9yZXF1ZXN0JlgtQW16LURhdGU9MjAyNTA2MjhUMDQyMDE0WiZYLUFtei1FeHBpcmVzPTMwMCZYLUFtei1TaWduYXR1cmU9YjBjNDZjMmI1MGIzODRkNjEzNTBmNTJhZTYxNjc5OTg1NWEzZjY1MzFjZWNhYWU3ZTk4ODE1MGRjNzI2MzhhNiZYLUFtei1TaWduZWRIZWFkZXJzPWhvc3QifQ.8z1YI-xvd0QxL4JGx7_O-SHSUpnBEus4GCPf28JyfFw)


### 2. Demo Replay Subject Visualization
![DemoReplaySubject](https://private-user-images.githubusercontent.com/9015417/460200227-a6eac33a-9125-4c55-b0f3-3daa595fb7c3.gif?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NTEwODU4NTcsIm5iZiI6MTc1MTA4NTU1NywicGF0aCI6Ii85MDE1NDE3LzQ2MDIwMDIyNy1hNmVhYzMzYS05MTI1LTRjNTUtYjBmMy0zZGFhNTk1ZmI3YzMuZ2lmP1gtQW16LUFsZ29yaXRobT1BV1M0LUhNQUMtU0hBMjU2JlgtQW16LUNyZWRlbnRpYWw9QUtJQVZDT0RZTFNBNTNQUUs0WkElMkYyMDI1MDYyOCUyRnVzLWVhc3QtMSUyRnMzJTJGYXdzNF9yZXF1ZXN0JlgtQW16LURhdGU9MjAyNTA2MjhUMDQzOTE3WiZYLUFtei1FeHBpcmVzPTMwMCZYLUFtei1TaWduYXR1cmU9NzM5NDUwOThhNjU4MWQ2MzQ3NTI3YmVlMWM3ZGU3ZDVjZTcxMWVkM2E2ODA2YWMyZjhjYWJiNDFkZGM5NmNhNiZYLUFtei1TaWduZWRIZWFkZXJzPWhvc3QifQ.D_Bz84QZFZgF2feMpnnU6MlSHbikGJo5ocJKj7taSHQ)
!Project Demo

## Features Demonstrated

This application is divided into two main sections: a payment form and an RxJS `ReplaySubject` visualization.

### 1. Payment Form

This section showcases several core Angular features for building forms and displaying data:

-   **Component Structure**: The entire application is managed within the `AppComponent`.
-   **Data Binding**:
    -   **One-Way Binding (Interpolation)**: Displaying component properties in the template (e.g., `{{ name | titlecase }}`).
    -   **Event Binding**: Responding to user input events (e.g., `(input)="onNameChange($event.target.value)"`).
    -   **Two-Way Binding**: Keeping component properties in sync with form inputs using `[(ngModel)]`.
-   **Directives**:
    -   `*ngIf`: Conditionally rendering an error message for the date input.
    -   `*ngFor`: Rendering lists of items, as seen in the RxJS visualization.
-   **Pipes**:
    -   **Built-in Pipes**: `titlecase`, `date`, `currency`, and `number` are used to format data for display.
    -   **Custom Pipe**: A `convert` pipe is implemented to handle unit conversions (miles to km, m, cm).

    ```typescript
    // src/app/convert.pipe.ts
    import { Pipe, PipeTransform } from '@angular/core';

    @Pipe({
      name: 'convert',
    })
    export class ConvertPipe implements PipeTransform {
      transform(value: any, targetUnit: string): any {
        if (!value) {
          return '';
        }
        // ... conversion logic
      }
    }
    ```

### 2. RxJS ReplaySubject Visualization

This interactive demo provides a clear, visual explanation of how `ReplaySubject` works.

-   **What it shows**: A `ReplaySubject` is created, and three subscribers connect at different times (0ms, 2000ms, and 4000ms). Values are emitted from the subject at various intervals.
-   **Learning Objective**: To observe how a `ReplaySubject` buffers all emitted values and "replays" the entire sequence to every new subscriber, regardless of when they subscribe.
-   **Implementation**: The `runReplaySubjectDemo()` method in `app.component.ts` orchestrates the timing of subscriptions and value emissions using `setTimeout`. The results and a running log are displayed on the screen.

    ```typescript
    // src/app/app.component.ts (simplified)
    runReplaySubjectDemo() {
      const subject = new ReplaySubject<number>();

      // Subscriber 1 (at 0ms)
      subject.subscribe(value => { /* ... */ });

      subject.next(50); // Emitted at ~0ms

      setTimeout(() => subject.next(10), 1000); // Emitted at 1000ms
      setTimeout(() => subject.next(15), 1500); // Emitted at 1500ms

      // Subscriber 2 (at 2000ms) - will receive 50, 10, 15 immediately
      setTimeout(() => {
        subject.subscribe(value => { /* ... */ });
      }, 2000);

      // Subscriber 3 (at 4000ms) - will also receive 50, 10, 15 immediately
      setTimeout(() => {
        subject.subscribe(value => { /* ... */ });
      }, 4000);
    }
    ```

## Getting Started

To run this project locally, follow these steps.

### Prerequisites

-   Node.js and npm
-   Angular CLI: `npm install -g @angular/cli`

### Installation

1.  Clone the repository:
    ```bash
    git clone <repository-url>
    ```
2.  Navigate to the project directory:
    ```bash
    cd Fundamentals
    ```
3.  Install the dependencies:
    ```bash
    npm install
    ```

### Running the Application

1.  Run the development server:
    ```bash
    ng serve
    ```
2.  Open your browser and navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.
