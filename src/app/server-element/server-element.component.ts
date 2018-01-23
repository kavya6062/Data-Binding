import { Component, OnInit,Input,ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated // View encapsulation achieved; .None to affect other components with css of this component 
})

export class ServerElementComponent implements OnInit {
  @Input('srvElement') element: {type: string, name: string, content:string }; //'srvElement' is an alias for element

  constructor() { }

  ngOnInit() {
  }

}
