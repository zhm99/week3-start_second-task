import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LayoutComponent } from './layout/layout.component';
import { MenuComponent } from './layout/menu/menu.component';
import { MenuItemComponent } from './layout/menu/menu-item/menu-item.component';
import { HomeComponent } from './home/home.component';
import { Page404Component } from './page404/page404.component';
import { CourseComponent } from './course/course.component';
import { HomeCardComponent } from './home/home-card/home-card.component';
import { CourseCardComponent } from './course/course-card/course-card.component';

@NgModule({
  declarations: [AppComponent, LayoutComponent, MenuComponent, MenuItemComponent, HomeComponent, Page404Component, CourseComponent, HomeCardComponent, CourseCardComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
