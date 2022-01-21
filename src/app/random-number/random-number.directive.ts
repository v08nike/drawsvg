import { Directive, EventEmitter, OnInit, Output } from '@angular/core';

@Directive({
  exportAs: 'appRandomNumber',
  selector: '[appRandomNumber]'
})
export class RandomNumberDirective implements OnInit {
  #generatedNumber: number;

  @Output()
  numberGenerated = new EventEmitter<number>();

  ngOnInit(): void {
    this.#generatedNumber = 0;
  }

  generateNumber(): void {

    
    this.#generatedNumber =Math.floor(Math.random() * (100 - (-100) + 1)) + (-100);

    this.numberGenerated.emit(this.#generatedNumber);
  }
}