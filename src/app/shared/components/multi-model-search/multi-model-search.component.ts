import { Component, DoCheck, EventEmitter, Input, IterableDiffers, OnInit, Output } from '@angular/core';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { CookieService } from 'ngx-cookie-service';
import { ModelData } from '../../models/returndata.model';

@Component({
  selector: 'app-multi-model-search',
  templateUrl: './multi-model-search.component.html'
})
export class MultiModelSearchComponent implements OnInit, DoCheck {
  @Input() listModel: ModelData[];
  @Input() dept: number;
  @Output() changeModel: EventEmitter<any> = new EventEmitter<any>();
  private iterableDiffer: any;
  modelList: any;
  dropdownList = [];
  selectedItems = [];
  dropdownSettings: IDropdownSettings = {};
  defaultDept: number;
  constructor(iterableDiffers: IterableDiffers, public cookie: CookieService) {
    this.iterableDiffer = iterableDiffers.find([]).create(null);
  }
  ngOnInit() {
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'modelId',
      textField: 'modelName',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
  }

  ngDoCheck() {
    const changes = this.iterableDiffer.diff(this.listModel);
    if (changes) {
        this.selectedItems = [];
        this.changeModel.emit(this.selectedItems);
        this.modelList = changes.collection;
    }
  }
  onItemSelect(item: any) {
    this.changeModel.emit(item);
  }
  onSelectAll(items: any) {
    this.changeModel.emit(items);
  }
  onItemDeSelect(item: any) {
    for (let i = 0; i < this.selectedItems.length; i++) {
      if (this.selectedItems[i] === item.id) {
        this.selectedItems.splice(i, 1);
      }
    }
    this.changeModel.emit(this.selectedItems);
  }
  onDeSelectAll(item: any) {
    this.changeModel.emit(item);
  }
}
