import {
  Directive,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChange,
} from "@angular/core";

import {
  IBulkActionOption,
  IPaginationInput,
} from "../models/pagination.model";

@Directive()
// tslint:disable-next-line:directive-class-suffix
export abstract class PaginationAbstract implements OnChanges {
  @Input() columns: string[];
  @Input() docs: any[];
  @Input() length: number;
  @Input() paginationInput: IPaginationInput;
  @Input() actions: IBulkActionOption[];
  // tslint:disable-next-line:no-output-native
  @Output() change: EventEmitter<any> = new EventEmitter();
  @Output() do: EventEmitter<any> = new EventEmitter();

  displayedColumns: string[];
  selectionKey = "_id";

  protected data: any;

  constructor() {
    this.data = { etaCache: {} };
    this.displayedColumns = [];
  }

  ngOnChanges(changes: { [key: string]: SimpleChange }) {
    if (changes.docs) {
      this.displayedColumns = changes.docs.currentValue;
    }
  }

  _do($event) {
    this.do.emit({
      action: $event[0],
      data: $event[1],
    });
  }

  canShowNoData() {
    if (this.docs && this.docs.length) {
      return false;
    } else {
      return true;
    }
  }
}
