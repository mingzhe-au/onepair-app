import { Action, createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import * as MentorActions from './mentor.actions';
import { IMentor } from "../models/people.model";

export const mentorsFeatureKey = 'mentors';

export interface IMentorState extends EntityState<IMentor> {
  // additional entities state properties
}

export function sortByLastName(a: IMentor, b: IMentor): number {
  return a.last_name.localeCompare(b.last_name);
}

export const mentorAdapter: EntityAdapter<IMentor> = createEntityAdapter<IMentor>({
  sortComparer: sortByLastName,
});

export const initialState: IMentorState = mentorAdapter.getInitialState({
  // additional entity state properties
});

export const mentorReducer = createReducer(
  initialState,
  on(MentorActions.addMentor,
    (state, action) => mentorAdapter.addOne(action.mentor, state)
  ),
  on(MentorActions.upsertMentor,
    (state, action) => mentorAdapter.upsertOne(action.mentor, state)
  ),
  on(MentorActions.addMentors,
    (state, action) => mentorAdapter.addMany(action.mentors, state)
  ),
  on(MentorActions.upsertMentors,
    (state, action) => mentorAdapter.upsertMany(action.mentors, state)
  ),
  on(MentorActions.updateMentor,
    (state, action) => mentorAdapter.updateOne(action.mentor, state)
  ),
  on(MentorActions.updateMentors,
    (state, action) => mentorAdapter.updateMany(action.mentors, state)
  ),
  on(MentorActions.deleteMentor,
    (state, action) => mentorAdapter.removeOne(action.id, state)
  ),
  on(MentorActions.deleteMentors,
    (state, action) => mentorAdapter.removeMany(action.ids, state)
  ),
  on(MentorActions.loadMentors,
    (state, action) => mentorAdapter.setAll(action.mentors, state)
  ),
  on(MentorActions.clearMentors,
    state => mentorAdapter.removeAll(state)
  ),
);

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = mentorAdapter.getSelectors();

// select the dictionary of mentor entities
// export const selectMentorEntities = selectEntities;

export const selectMentorsState = createFeatureSelector<IMentorState>(mentorsFeatureKey);

export const selectMentorEntities = createSelector(
  selectMentorsState,
  (state: IMentorState) => state?.entities
);
