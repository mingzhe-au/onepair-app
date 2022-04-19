import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { IMentor } from "../models/people.model";


export const loadMentors = createAction(
  '[Mentor/API] Load Mentors',
  props<{ mentors: IMentor[] }>()
);

export const addMentor = createAction(
  '[Mentor/API] Add Mentor',
  props<{ mentor: IMentor }>()
);

export const upsertMentor = createAction(
  '[Mentor/API] Upsert Mentor',
  props<{ mentor: IMentor }>()
);

export const addMentors = createAction(
  '[Mentor/API] Add Mentors',
  props<{ mentors: IMentor[] }>()
);

export const upsertMentors = createAction(
  '[Mentor/API] Upsert Mentors',
  props<{ mentors: IMentor[] }>()
);

export const updateMentor = createAction(
  '[Mentor/API] Update Mentor',
  props<{ mentor: Update<IMentor> }>()
);

export const updateMentors = createAction(
  '[Mentor/API] Update Mentors',
  props<{ mentors: Update<IMentor>[] }>()
);

export const deleteMentor = createAction(
  '[Mentor/API] Delete Mentor',
  props<{ id: string }>()
);

export const deleteMentors = createAction(
  '[Mentor/API] Delete Mentors',
  props<{ ids: string[] }>()
);

export const clearMentors = createAction(
  '[Mentor/API] Clear Mentors'
);
