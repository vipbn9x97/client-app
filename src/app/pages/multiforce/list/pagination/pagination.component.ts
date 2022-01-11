import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

import { PaginationAbstract } from 'src/app/shared/abstract/pagination.abstract.component';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent extends PaginationAbstract implements OnChanges {
  @Input() courseList;
  currentpage: number;
  currentdata;
  hideme: boolean[] = [];
  constructor() {
    super();
  }

  ngOnChanges(change: SimpleChanges) {
    if (change.docs.currentValue) {
      for (let i = 0; i <= this.docs.length; i++) {
        this.hideme.push(true);
      }
    }
  }

  changeValue(i: number, table) {
    this.hideme[i] = !this.hideme[i];
    this.currentdata = table;
  }
}
