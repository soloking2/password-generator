import { Component } from '@angular/core';

@Component({
  selector: 'pwg-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  length = 0;
  includeLetters: boolean = false;
  includeNumbers: boolean = false;
  includeSymbols: boolean = false;
  password = '';

  get disableButton() {
    return !(this.length && (this.includeLetters || this.includeNumbers || this.includeSymbols));
  }

  selectLetters() {
    this.includeLetters = !this.includeLetters;
  }
  selectNumbers() {
    this.includeNumbers = !this.includeNumbers;
  }
  selectSymbols() {
    this.includeSymbols = !this.includeSymbols;
  }

  keyedInput(event: Event) {
    const value = parseInt(( event.target as HTMLInputElement).value);
    if(!isNaN(value)) {
      this.length = value;
    }
  }
  submit() {
    this.password = this.randomNumber(this.length, this.includeLetters, this.includeSymbols, this.includeNumbers)

  }

  randomNumber(strLen: number, letters: boolean, symbols: boolean, numbers: boolean) {
    let nums = '1234567890';
    let alphabets = 'abcdefghijklmnopqrstuvwxyz';
    let syms = '!@#$%^&*()';
    let validChars = '';

    if(letters) {
      validChars += alphabets;
    }
    if(symbols) {
      validChars += syms;
    }
    if(numbers) {
      validChars += nums;
    }

    let generatedChar = '';

    for(let i=0; i <= strLen; i++) {
      const index = Math.floor(Math.random() * validChars.length);
      generatedChar += validChars[index];
    }

    return generatedChar;
  }
}
