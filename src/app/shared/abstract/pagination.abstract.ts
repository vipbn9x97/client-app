import {
  Directive,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChange,
} from '@angular/core';
import {
  IBulkActionOption,
  IPaginationInput,
} from '../models/pagination.model';

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

  // dataSource = new MatTableDataSource();
  dataSource;
  displayedColumns: string[];
  // selection: SelectionModel<any>;
  selectionKey = '_id';

  protected data: any;

  constructor() {
    this.data = { etaCache: {} };
    this.displayedColumns = [];
    // this.selection = new SelectionModel<any>(true, []);
  }

  ngOnChanges(changes: { [key: string]: SimpleChange }) {
    if (changes.docs) {
      console.log(changes.docs);
      this.dataSource.data = changes.docs.currentValue;
      // this.selection.clear();
    }

    if (changes.columns) {
      this.displayedColumns = changes.columns.currentValue;
    }
  }

  // sortData(sort: Sort) {
  //   this.change.emit({
  //     sort: sort.active,
  //     order: sort.direction === 'asc' ? 1 : -1
  //   });
  // }

  // changePage(page: PageEvent) {
  //   this.change.emit({
  //     page: page.pageIndex + 1,
  //     limit: page.pageSize
  //   });
  // }

  _do($event) {
    this.do.emit({
      action: $event[0],
      data: $event[1],
    });
  }

  canShowNoData() {
    return this.docs && !this.docs.length;
  }

  // selectionToggle() {
  //   if (this.isAllSelected()) {
  //     this.selection.clear();
  //   } else {
  //     this.docs.forEach(doc => {
  //       const key = doc[this.selectionKey];
  //       this.selection.select(key);
  //     });
  //   }
  // }

  // selectionToggleItem(doc) {
  //   const key = doc[this.selectionKey];
  //   this.selection.toggle(key);
  // }

  // isSelectionIndeterminate() {
  //   return this.selection.hasValue() && !this.isAllSelected();
  // }

  // /** Whether the number of selected elements matches the total number of rows. */
  // isAllSelected() {
  //   return this.docs && this.selection.selected.length >= this.docs.length;
  // }

  // getSelectedFullValues() {
  //   return this.selection.selected.map(selected => this.docs.find(doc => doc._id === selected));
  // }
}
