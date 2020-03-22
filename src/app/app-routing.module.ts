import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './home/home.component';
import { Page404Component } from './page404/page404.component';
import { CourseComponent } from './course/course.component';


const routes: Routes = [
  {
    path:'',
    redirectTo:'home',
    pathMatch:'full'
  },



  {
    path:'',
    component: LayoutComponent,
    children: [  //niz objekata
      {
        path: 'home', //home-om upravlja home componenta
        component: HomeComponent

    },
    {
      path: 'courses', 
      component: CourseComponent
  
  },
  ]
  },
  /*{
    path:'**',
    component: Page404Component
  }*/

      
      

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
