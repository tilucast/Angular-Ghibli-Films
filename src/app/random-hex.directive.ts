import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appRandomHex]'
})
export class RandomHexDirective {

  constructor(private elementRef: ElementRef) { 
    this.elementRef.nativeElement.style.backgroundImage = this.RandomHex()
  }

  RandomHex ()  {
    return `linear-gradient(to left, #${this.generateHex()}, #${this.generateHex()}`
  }

  generateHex(){
    return Math.random().toString(16).slice(2, 8)
  }
}
