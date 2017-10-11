import { Component, AfterViewInit, ViewChild, ComponentFactoryResolver, Input} from '@angular/core';
import { ContentDirective } from './content.directive';

@Component({
  selector: 'ma-sidenav',
  templateUrl: './ma-sidenav.component.html',
  styleUrls: ['./ma-sidenav.component.css']
})

export class MaSidenavComponent implements AfterViewInit {
  @Input() isOpen: boolean;
  
  @ViewChild(ContentDirective) contentHost: ContentDirective;
  
  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngAfterViewInit() { }
}