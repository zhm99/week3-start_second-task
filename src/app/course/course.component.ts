import { Component, OnInit } from '@angular/core';
//import { CourseService } from '../course/core/course.service';
import { CourseList } from '../course/core/course.list';


@Component({
  selector: 'cm-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

 
  courses;
   

  constructor(
    private courseList: CourseList
  ) { 
    //this.courses = this.courseService.getAll();  
  }

  ngOnInit(): void {
    this.getCourses(); 
    
}

private getCourses(){  
  this.courses = this.courseList.getAll();  
}
}




