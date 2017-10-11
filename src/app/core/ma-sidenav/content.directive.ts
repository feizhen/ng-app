import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[content-host]',
})

export class ContentDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}