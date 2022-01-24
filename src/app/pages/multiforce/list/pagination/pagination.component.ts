import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

import { PaginationAbstract } from 'src/app/shared/abstract/pagination.abstract.component';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent extends PaginationAbstract implements OnChanges {
  @Input() orderList;
  currentpage: number;
  totalData: number;
  hideme: boolean[] = [];
  constructor() {
    super();
  }

  ngOnChanges(change: SimpleChanges) {
    if (change.orderList.currentValue) {
      this.totalData = change.orderList.currentValue.length;
    }
  }
}
