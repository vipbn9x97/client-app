import { Component , isDevMode, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit  {

  ngOnInit() {
    console.log(isDevMode());
    // document.getElementsByTagName("html")[0].setAttribute("dir", "rtl");
  }
}