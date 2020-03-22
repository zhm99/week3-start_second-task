import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'cm-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit {

  @Input() name: string;  //tip name je string
  @Input() path: string;

  constructor() { }

  ngOnInit(): void {

  }


}
