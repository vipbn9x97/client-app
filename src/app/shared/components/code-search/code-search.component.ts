import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from "@angular/core";
import "rxjs/add/operator/debounceTime";

@Component({
  selector: "app-code-search",
  templateUrl: "./code-search.component.html",
})
export class CodeSearchComponent implements OnInit, OnDestroy {
  @Output() changeCode: EventEmitter<any> = new EventEmitter<any>();
  code: number;
  constructor() {}

  ngOnInit() {
    // this.code
  }

  searchCode(event) {
    if (this.code > 100000) {
      this.changeCode.emit(event.target.value);
    }
  }

  ngOnDestroy() {}
}
