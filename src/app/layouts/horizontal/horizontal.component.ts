import { Component, OnInit, AfterViewInit } from '@angular/core';
import { TOPBAR } from '../layouts.model';
import { EventService } from '../../core/services/event.service';

@Component({
  selector: 'app-horizontal',
  templateUrl: './horizontal.component.html',
  styleUrls: ['./horizontal.component.scss']
})

/**
 * Horizontal-layout component
 */
export class HorizontalComponent implements OnInit {
  constructor(private eventService: EventService) { }

  ngOnInit() {
    document.body.setAttribute('data-topbar', 'dark');
    document.body.setAttribute('data-layout', 'horizontal');
    document.body.removeAttribute('data-sidebar');
    document.body.removeAttribute('data-layout-size');
    document.body.removeAttribute('data-keep-enlarged');
    document.body.removeAttribute('data-sidebar-small');
  }
}
