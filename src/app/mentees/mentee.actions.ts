import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { IMentee } from "../models/people.model";

export const loadMentees = createAction(
  '[Mentee/API] Load Mentees',
  props<{ mentees: IMentee[] }>()
);

export const addMentee = createAction(
  '[Mentee/API] Add Mentee',
  props<{ mentee: IMentee }>()
);

export const upsertMentee = createAction(
  '[Mentee/API] Upsert Mentee',
  props<{ mentee: IMentee }>()
);

export const addMentees = createAction(
  '[Mentee/API] Add Mentees',
  props<{ mentees: IMentee[] }>()
);

export const upsertMentees = createAction(
  '[Mentee/API] Upsert Mentees',
  props<{ mentees: IMentee[] }>()
);

export const updateMentee = createAction(
  '[Mentee/API] Update Mentee',
  props<{ mentee: Update<IMentee> }>()
);

export const updateMentees = createAction(
  '[Mentee/API] Update Mentees',
  props<{ mentees: Update<IMentee>[] }>()
);

export const deleteMentee = createAction(
  '[Mentee/API] Delete Mentee',
  props<{ id: string }>()
);

export const deleteMentees = createAction(
  '[Mentee/API] Delete Mentees',
  props<{ ids: string[] }>()
);

export const clearMentees = createAction(
  '[Mentee/API] Clear Mentees'
);
