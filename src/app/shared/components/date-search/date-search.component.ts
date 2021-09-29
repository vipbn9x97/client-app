import { DatePipe } from "@angular/common";
import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { NgbDate } from "@ng-bootstrap/ng-bootstrap";
import * as moment from "moment";

@Component({
  selector: "app-date-search",
  templateUrl: "./date-search.component.html",
})
export class DateSearchComponent implements OnInit {
  @Input() label: string;
  @Output() changeDate: EventEmitter<any> = new EventEmitter<any>();
  date = new Date();
  formatDate: string;
  constructor(private datepipe: DatePipe) { }

  ngOnInit() {
    if (this.label === "Từ ngày") {
      this.formatDate = this.datepipe.transform(
        new Date(this.date.getFullYear(), this.date.getMonth(), 1).toString(),
        "MM-dd-yyyy"
      );
    } else {
      this.formatDate = moment(this.date).format("MM-DD-YYYY");
    }

    this.changeDate.emit(this.formatDate);
  }

  onDateSelect(event: NgbDate) {
    this.formatDate = event.month + "-" + event.day + "-" + event.year;
    this.changeDate.emit(this.formatDate);
  }
}
