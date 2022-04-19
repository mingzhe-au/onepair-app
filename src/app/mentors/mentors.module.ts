import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from "@ngrx/store";
import * as fromMentor from "./mentor.reducer";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromMentor.mentorsFeatureKey, fromMentor.mentorReducer),
  ]
})
export class MentorsModule {
}
