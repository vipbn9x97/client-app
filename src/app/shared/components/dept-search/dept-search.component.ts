import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { SharedService } from '../../shared.service';

@Component({
  selector: 'app-dept-search',
  templateUrl: './dept-search.component.html',
})
export class DeptSearchComponent implements OnInit {
  @Input() label: string;
  @Output() changeDept: EventEmitter<any> = new EventEmitter<any>();
  defaultDept: string;
  deptList = [
    { name: 'ASSY1', id: 1 },
    { name: 'ASSY2', id: 2 },
    { name: 'ASSY3', id: 7 },
    { name: 'ASSY4', id: 14 }
  ];
  constructor(private cookie: CookieService, private sharedService: SharedService) { }

  ngOnInit() {
    this.defaultDept = JSON.parse(this.cookie.get('user')).DeptChild;
    this.changeDept.emit(JSON.parse(this.cookie.get('user')).DeptId);
  }

  searchByDept(event: string) {
    for (const iterator of this.deptList) {
      if (iterator.name === event) {
        this.changeDept.emit(iterator.id);
      }
    }
  }
}
