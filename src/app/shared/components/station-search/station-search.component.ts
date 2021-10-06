import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-station-search',
  templateUrl: './station-search.component.html',
  styleUrls: ['./station-search.component.scss']
})
export class StationSearchComponent implements OnInit {
  @Input() label: string;
  @Output() changeModel: EventEmitter<any> = new EventEmitter<any>();
  stationControl: FormControl;
  constructor() { }

  ngOnInit() {
  }
  searchByModel(event: string) {
    this.changeModel.emit(event);
  }
  clear(){
    // this.changeModel.emit(this.selectedConsumer);
  }

}
