import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserPostsComponent } from './user-posts/user-posts.component';
import { DataChartComponent } from './data-chart/data-chart.component';
import { FormsModule } from '@angular/forms';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { FilterPipe } from '../shared/filter.pipe';


@NgModule({
  declarations: [HomeComponent, UserListComponent, UserPostsComponent, DataChartComponent, FilterPipe],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    PrimeNgModule
  ]
})
export class HomeModule { }
