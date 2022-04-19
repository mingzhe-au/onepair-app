import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromMentor from './mentor.reducer';

export interface IMentorState {
  mentors: fromMentor.IMentorState;
}

export const mentorReducer = {
  mentors: fromMentor.mentorReducer
};

export const selectMentorsState = createFeatureSelector<fromMentor.IMentorState>(fromMentor.mentorsFeatureKey);
//
// export const selectMentorEntities = createSelector(
//   selectMentorsState,
//   fromMentor.selectMentorEntities
// );
