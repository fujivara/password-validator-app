import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';
import {
  DIGITS_SYMBOLS, NON_WHITE_SPACE,
  LETTERS_DIGITS,
  LETTERS_SYMBOLS, LETTERS_SYMBOLS_NUMBERS,
  ONLY_DIGITS,
  ONLY_LETTERS,
  ONLY_SYMBOLS,
} from '../../shared/constants';

@Directive({
  selector: '[passwordValidator]',
  standalone: true,
})
export class PasswordValidatorDirective {
  constructor (private element: ElementRef, private renderer: Renderer2) {}

  @HostListener('keyup')
  onElementChange () {
    const value = this.element.nativeElement.value;
    if (value) {
      if (value.length < 8 || !NON_WHITE_SPACE.test(value)) {
        this.renderer.setAttribute(this.element.nativeElement, 'error', 'true');
        return;
      } else {
        this.renderer.removeAttribute(this.element.nativeElement, 'error');
      }

      if (ONLY_LETTERS.test(value) || ONLY_DIGITS.test(value) || ONLY_SYMBOLS.test(value)) {
        this.renderer.setAttribute(this.element.nativeElement, 'type', 'easy');
      }

      if (DIGITS_SYMBOLS.test(value) || LETTERS_SYMBOLS.test(value) || LETTERS_DIGITS.test(value)) {
        this.renderer.setAttribute(this.element.nativeElement, 'type', 'medium');
      }

      if (LETTERS_SYMBOLS_NUMBERS.test(value)) {
        this.renderer.setAttribute(this.element.nativeElement, 'type', 'strong');
      }
    } else {
      this.renderer.removeAttribute(this.element.nativeElement, 'error');
    }
  }
}
