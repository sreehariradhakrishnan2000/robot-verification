import { Component, signal } from '@angular/core';
import { RobotVerificationComponent } from './robot-verification/robot-verification.component';

@Component({
  selector: 'app-root',
  imports: [RobotVerificationComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('robot-verification');
}
