import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadPeopleComponent } from './upload-people.component';
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";



@NgModule({
  declarations: [
    UploadPeopleComponent
  ],
  exports: [
    UploadPeopleComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule
  ]
})
export class UploadPeopleModule { }
