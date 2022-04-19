import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromMentee from './mentee.reducer';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromMentee.menteesFeatureKey, fromMentee.reducer)
  ]
})
export class MenteesModule { }
