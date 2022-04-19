import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PeopleListRoutingModule } from './people-list-routing.module';
import { PeopleListComponent } from './people-list.component';
import { MatListModule } from "@angular/material/list";
import { MatTableModule } from "@angular/material/table";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatCardModule } from "@angular/material/card";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatSortModule } from "@angular/material/sort";


@NgModule({
  declarations: [
    PeopleListComponent
  ],
  imports: [
    CommonModule,
    PeopleListRoutingModule,
    MatListModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatPaginatorModule,
    MatSortModule
  ]
})
export class PeopleListModule { }
