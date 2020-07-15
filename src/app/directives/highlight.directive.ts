import { Directive, Input, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})


export class HighlightDirective {

  @Input() defaultColor: string = '';
  @Input('appHighlight') highlightColor: string = '';
  @HostBinding('style.backgroundColor') backgroundColor: string;
 
  constructor() { }

  ngOnInit(){
    this.backgroundColor = this.defaultColor;
  }

  @HostListener('mouseenter') mouseover(){
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseleave(){
    this.backgroundColor = this.defaultColor;
  }
}
