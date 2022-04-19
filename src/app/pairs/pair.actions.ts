import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { IPair } from "../models/people.model";


export const loadPairs = createAction(
  '[Pair/API] Load Pairs',
  props<{ pairs: IPair[] }>()
);

export const addPair = createAction(
  '[Pair/API] Add Pair',
  props<{ pair: IPair }>()
);

export const upsertPair = createAction(
  '[Pair/API] Upsert Pair',
  props<{ pair: IPair }>()
);

export const addPairs = createAction(
  '[Pair/API] Add Pairs',
  props<{ pairs: IPair[] }>()
);

export const upsertPairs = createAction(
  '[Pair/API] Upsert Pairs',
  props<{ pairs: IPair[] }>()
);

export const updatePair = createAction(
  '[Pair/API] Update Pair',
  props<{ pair: Update<IPair> }>()
);

export const updatePairs = createAction(
  '[Pair/API] Update Pairs',
  props<{ pairs: Update<IPair>[] }>()
);

export const deletePair = createAction(
  '[Pair/API] Delete Pair',
  props<{ id: string }>()
);

export const deletePairs = createAction(
  '[Pair/API] Delete Pairs',
  props<{ ids: string[] }>()
);

export const clearPairs = createAction(
  '[Pair/API] Clear Pairs'
);
