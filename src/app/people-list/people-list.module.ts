import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PeopleListRoutingModule } from './people-list-routing.module';
import { PeopleListComponent } from './people-list.component';


@NgModule({
  declarations: [
    PeopleListComponent
  ],
  imports: [
    CommonModule,
    PeopleListRoutingModule
  ]
})
export class PeopleListModule { }
