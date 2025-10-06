import { Component } from '@angular/core';
import { RobotVerificationService } from '../robot-verification.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-robot-verification',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './robot-verification.component.html',
  styleUrl: './robot-verification.component.css'
})
export class RobotVerificationComponent {
  isVerified = false;
  isLoading = false;

  constructor(private verificationService: RobotVerificationService) {}

  onCheckboxChange() {
    this.isLoading = true;
    this.verificationService.verify().subscribe({
      next: (response: any) => {
        this.isVerified = !response.isRobot;
        this.isLoading = false;
      },
      error: () => {
        this.isVerified = false;
        this.isLoading = false;
      }
    });
  }
}
