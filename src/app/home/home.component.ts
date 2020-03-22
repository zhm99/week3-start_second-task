import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course/core/course.service';

@Component({
  selector: 'cm-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  
  courses;

  /*courses = [
    {
      name: 'Test courses 1',
      description:'Lorem ipsum'
    },
    {
      name: 'Test courses 2',
      description: 'Lorem ipsum'
    },
    {
      name: 'Test courses 3',
      description: 'Lorem ipsum'
    },
    {
      name: 'Test courses 4',
      description: 'Lorem ipsum'
    }
  ]*/

  constructor(
    private courseService: CourseService
  ) { 
    //this.courses = this.courseService.getAll();  
  }

  ngOnInit(): void {
    this.getCourses(); 
    
}

private getCourses(){  
  this.courses = this.courseService.getAll();  
}
}
