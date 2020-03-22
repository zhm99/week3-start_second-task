import {Injectable} from '@angular/core';
import { ReturnStatement } from '@angular/compiler';

const COURSES = [
    {
      name: 'Test courses 1',
      description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi scelerisque justo sed mi ullamcorper mattis. Mauris ornare commodo ante, commodo rhoncus tellus congue id. '
    },
    {
      name: 'Test courses 2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi scelerisque justo sed mi ullamcorper mattis. Mauris ornare commodo ante, commodo rhoncus tellus congue id. '
    },
    {
      name: 'Test courses 3',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi scelerisque justo sed mi ullamcorper mattis. Mauris ornare commodo ante, commodo rhoncus tellus congue id. '
    },
    {
      name: 'Test courses 4',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi scelerisque justo sed mi ullamcorper mattis. Mauris ornare commodo ante, commodo rhoncus tellus congue id. '
    }
  ]

  

@Injectable({
providedIn:'root'
})
export class CourseService {

    getAll(){
        return COURSES;
    }
}

      

