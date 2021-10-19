import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';

import { UIModule } from './ui/ui.module';
import { WidgetModule } from './widget/widget.module';
import { CodeSearchComponent } from './components/code-search/code-search.component';
import { DateSearchComponent } from './components/date-search/date-search.component';
import { ModelSearchComponent } from './components/model-search/model-search.component';
import { NoDataComponent } from './components/no-data/no-data.component';
import { DeptSearchComponent } from './components/dept-search/dept-search.component';
import { CellSearchComponent } from './components/cell-search/cell-search.component';
import { MaterialModule } from './modules/material.module';
import { LoadingComponent } from './components/loading/loading.component';
import { DelayedInputDirective } from './util/delayed-input.directive';
import { AreaSearchComponent } from './components/area-search/area-search.component';
import { StationSearchComponent } from './components/station-search/station-search.component';
import { MultiModelSearchComponent } from './components/multi-model-search/multi-model-search.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

@NgModule({
  declarations: [
    CodeSearchComponent,
    DateSearchComponent,
    ModelSearchComponent,
    NoDataComponent,
    DeptSearchComponent,
    CellSearchComponent,
    LoadingComponent,
    AreaSearchComponent,
    StationSearchComponent,
    DelayedInputDirective,
    MultiModelSearchComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    UIModule,
    WidgetModule,
    ReactiveFormsModule,
    FormsModule,
    NgbDatepickerModule,
    NgMultiSelectDropDownModule.forRoot()
  ],
  exports: [
    CodeSearchComponent,
    DateSearchComponent,
    ModelSearchComponent,
    NoDataComponent,
    DeptSearchComponent,
    CellSearchComponent,
    LoadingComponent,
    AreaSearchComponent,
    DelayedInputDirective,
    StationSearchComponent,
    MultiModelSearchComponent
  ],
})

export class SharedModule { }
