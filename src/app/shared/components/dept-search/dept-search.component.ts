import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-dept-search',
  templateUrl: './dept-search.component.html',
})
export class DeptSearchComponent implements OnInit {
  @Input() label: string;
  @Output() changeDept: EventEmitter<any> = new EventEmitter<any>();
  deptList = [
    { name: 'ASSY 1', id: 1 },
    { name: 'ASSY 2', id: 2 },
    { name: 'ASSY 3', id: 7 },
    { name: 'ASSY 4', id: 14 }
  ];
  constructor() { }

  ngOnInit() { }

  searchByDept(event: number) {
    this.changeDept.emit(event);
  }
}
