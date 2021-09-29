import { Component, EventEmitter, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-area-search",
  templateUrl: "./area-search.component.html"
})
export class AreaSearchComponent implements OnInit {
  @Output() changeArea: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }

  searchByArea(event: string) {
    this.changeArea.emit(event);
  }

}
