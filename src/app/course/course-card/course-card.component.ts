import { Component, OnInit, Input } from '@angular/core';
import {TableItemModel} from '../core/table-item.model';

@Component({
  selector: 'cm-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit {

  @Input() tableItem: TableItemModel;

  constructor() { }

  ngOnInit(): void {
  }

}
