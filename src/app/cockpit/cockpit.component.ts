import { Component, OnInit,EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  
  @Output() serverCreated= new EventEmitter<{serverName:string, serverContent:string}>();
  @Output('BPCreated') blueprintCreated= new EventEmitter<{serverName:string, serverContent:string}>(); //BPCreated is alias
  // newServerName = ''; Since the local reference [(onAddServer(serverNameInput)] can directly be used to fetch data we no longer need it
  // newServerContent = '';
  @ViewChild('serverContentInput') serverContentInput: ElementRef ;

  constructor() { }
  
  ngOnInit() {
  }
  onAddServer(nameInput: HTMLInputElement) {
    this.serverCreated.emit({
      serverName:nameInput.value,
      serverContent: this.serverContentInput.nativeElement.value
    });
  }

  onAddBlueprint(nameInput) {
    this.blueprintCreated.emit({
      serverName:nameInput.value,
      serverContent: this.serverContentInput.nativeElement.value
    });
  }
}
