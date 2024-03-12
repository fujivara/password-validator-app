import { Component, ElementRef, ViewChild } from '@angular/core';
import { PasswordValidatorDirective } from '../directives/password-validator.directive';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-pass-form',
  standalone: true,
  templateUrl: './pass-form.component.html',
  imports: [
    PasswordValidatorDirective,
    NgClass,
  ],
  styleUrl: './pass-form.component.css',
})
export class PassFormComponent {
  @ViewChild('input')
    input?: ElementRef;
  isPasswordEasy = false;
  isPasswordMedium = false;
  isPasswordStrong = false;
  isError = false;

  onChange () {
    const { error,  type } = this.input?.nativeElement.attributes;
    this.isError = !!error;

    if (error) {
      this.isPasswordEasy = false;
      this.isPasswordMedium = false;
      this.isPasswordStrong = false;
      return;
    }

    if (type?.value === 'easy') {
      this.isPasswordEasy = true;
      this.isPasswordMedium = false;
      this.isPasswordStrong = false;
    } else if (type?.value === 'medium') {
      this.isPasswordMedium = true;
      this.isPasswordEasy = false;
      this.isPasswordStrong = false;
    } else if (type?.value === 'strong') {
      this.isPasswordStrong = true;
      this.isPasswordMedium = false;
      this.isPasswordEasy = false;
    }

    if (this.input?.nativeElement.value === '') {
      this.isPasswordEasy = false;
      this.isPasswordMedium = false;
      this.isPasswordStrong = false;
      this.isError = false;
    }
  }
}
