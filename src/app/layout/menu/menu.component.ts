import { Component, OnInit } from '@angular/core';

type MenuItem = {
  name: string,
  path: string
}

@Component({
  selector: 'cm-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  //obj={};

  menuItems: Array<MenuItem>=[
    {
      name: 'Home',
      path: '/home',
    },
    {
      name: 'Courses',
      path:'/courses',
    },
    {
      name: 'Students',
      path:'/students',
    },
    {
      name: 'Teachers',
      path:'/teachers',  //objekat u nizu odvojen zarezom
    }
    
  ];

  constructor() { }

  ngOnInit(): void {
  }

  
  

}
