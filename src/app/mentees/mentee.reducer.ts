import { Action, createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import * as MenteeActions from './mentee.actions';
import { IMentee, IMentor } from "../models/people.model";

export const menteesFeatureKey = 'mentees';

export interface IMenteeState extends EntityState<IMentee> {
  // additional entities state properties
}

export function sortByName(a: IMentee, b: IMentee): number {
  return a.last_name.localeCompare(b.last_name);
}

export const adapter: EntityAdapter<IMentee> = createEntityAdapter<IMentee>(
  {
    sortComparer: sortByName
  }
);

export const initialState: IMenteeState = adapter.getInitialState({
  // additional entity state properties
});

export const reducer = createReducer(
  initialState,
  on(MenteeActions.addMentee,
    (state, action) => adapter.addOne(action.mentee, state)
  ),
  on(MenteeActions.upsertMentee,
    (state, action) => adapter.upsertOne(action.mentee, state)
  ),
  on(MenteeActions.addMentees,
    (state, action) => adapter.addMany(action.mentees, state)
  ),
  on(MenteeActions.upsertMentees,
    (state, action) => adapter.upsertMany(action.mentees, state)
  ),
  on(MenteeActions.updateMentee,
    (state, action) => adapter.updateOne(action.mentee, state)
  ),
  on(MenteeActions.updateMentees,
    (state, action) => adapter.updateMany(action.mentees, state)
  ),
  on(MenteeActions.deleteMentee,
    (state, action) => adapter.removeOne(action.id, state)
  ),
  on(MenteeActions.deleteMentees,
    (state, action) => adapter.removeMany(action.ids, state)
  ),
  on(MenteeActions.loadMentees,
    (state, action) => adapter.setAll(action.mentees, state)
  ),
  on(MenteeActions.clearMentees,
    state => adapter.removeAll(state)
  ),
);

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();

export const selectMenteesState = createFeatureSelector<IMenteeState>(menteesFeatureKey);

export const selectMenteeEntities = createSelector(
  selectMenteesState,
  (state: IMenteeState) => state?.entities
);
