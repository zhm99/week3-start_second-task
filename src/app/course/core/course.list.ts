import {Injectable} from '@angular/core';
import { ReturnStatement } from '@angular/compiler';


  const TABLES = [
    {
      name: 'Table courses 1',
      
    }
  ]

@Injectable({
providedIn:'root'
})
export class CourseList {

    getAll(){
        return TABLES;
    }
}

    
