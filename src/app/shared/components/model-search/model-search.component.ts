import { Component, DoCheck, EventEmitter, Input, IterableDiffers, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ModelData } from '../../models/returndata.model';
import { SharedService } from '../../shared.service';

@Component({
  selector: 'app-model-search',
  templateUrl: './model-search.component.html'
})
export class ModelSearchComponent implements DoCheck {
  private iterableDiffer: any;
  modelList: any;
  @Input() label: string;
  @Input() deptId: number;
  @Input() listModel: ModelData[];
  @Output() changeModel: EventEmitter<any> = new EventEmitter<any>();
  modelControl: FormControl;
  constructor(
    iterableDiffers: IterableDiffers
  ) {
    this.modelControl = new FormControl();
    this.iterableDiffer = iterableDiffers.find([]).create(null);
  }

  ngDoCheck() {
    const changes = this.iterableDiffer.diff(this.listModel);
    if (changes) {
      this.modelList = changes.collection;
    }
  }
  searchByModel(event: string) {
    console.log(event);
    this.changeModel.emit(event);
  }

  clear() {
    // this.consumerId = null;
    // this.selectedConsumer = {_id: null, name: null};
    this.modelControl.setValue(null);
    // this.consumerSearchTerm$.next('');
    this.changeModel.emit(this.modelControl);
  }
}
