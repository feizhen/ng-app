import { Directive, ElementRef, HostListener } from "@angular/core";

@Directive({
  selector: "[sup-item]"
})
export class SupItemDirective {
  @HostListener("click")
  onClick() {}
}

@Directive({
  selector: "[sub-item]"
})
export class SubItemDirecitve {
  constructor(el: ElementRef) {
    el.nativeElement.style.paddingLeft = "60px";
  }
}
