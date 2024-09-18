import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    CommonModule,
    FormsModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Kata String Calculator';
  inputValue: string;
  sum: number;
  showSum: boolean = false;
  constructor() {
    this.inputValue = '';
    this.sum = 0;
  }

  calculate(): number {
    if (this.inputValue === '') {
      this.sum = 0;
      this.showSum=true;
      return 0;
    }
    else {
      const delimiters = [',', '\n'];

      // check for custom delimiters
      const customDelimiterMatch = this.inputValue.match(/\/\/([^\]]+)\\n/);

      const delimiter = customDelimiterMatch && customDelimiterMatch[1];

      if (delimiter)
        delimiters.push(delimiter); // push the delimiter to the array if found.

      const delimiterRegex = new RegExp(`[${delimiters.join("|")}]`); // make a regex to split the string based on the delimiter options

      console.log(delimiter);

      // Split the input string into numbers
      const cleanedInput = this.inputValue.replace(/\/\/([^\]]+)\\n/g, '');


      // Split the this.inputValue into numbers
      const numbers = cleanedInput.split(delimiterRegex);

      const parsedNumbers = numbers.map(Number);
      // filter out numbers less that 1000
      const validNumbers = parsedNumbers.filter(num => Number(num) <= 1000);

      // filter out negative functions and throw an error.
      const negativeNumbers = validNumbers.filter(num => Number(num) < 0);
      if (negativeNumbers.length > 0) {
        const negativeNumbersString = negativeNumbers.join(', ');
        throw new Error(`Negatives not allowed: ${negativeNumbersString}`);
      }
      // Add the numbers together
      const sum = validNumbers.reduce((acc, curr) => acc + curr, 0);
      this.sum = sum;
      this.showSum = true;
      return sum;
    }
  }

  clear(): void{
    this.inputValue= '';
    this.sum=0;
    this.showSum = false;
  }
}
