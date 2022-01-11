import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cell-search',
  templateUrl: './cell-search.component.html',
})
export class CellSearchComponent implements OnInit {
  @Input() label: string;
  constructor() {}

  ngOnInit() {}

  searchByCell(event) {}
}
