import {Component,
  OnInit,
  OnChanges,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef} from '@angular/core';

@Component({
  selector: 'app-cokpit',
  templateUrl: './cokpit.component.html',
  styleUrls: ['./cokpit.component.css']
})
export class CokpitComponent implements OnInit {
  @Output() ServerAdd = new EventEmitter<{serverName:string, serverContent: string}>();
  @Output() BlueprintAdd = new EventEmitter<{serverName:string, serverContent: string}>();
  @ViewChild('InputServerContent') InputServerContent: ElementRef;

  newServerName = '';
  newServerContent = '';

  onAddServer(InputServerName: HTMLInputElement) {
    this.ServerAdd.emit({
      serverName: InputServerName.value,
      serverContent: this.InputServerContent.nativeElement.value
    });
  }
  onAddBlueprint(InputServerName: HTMLInputElement) {
    this.BlueprintAdd.emit({
      serverName: InputServerName.value,
      serverContent: this.InputServerContent.nativeElement.value
    });
  }
  constructor() { }

  ngOnInit() {
  }


}
