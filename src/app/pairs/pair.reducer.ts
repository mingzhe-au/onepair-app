import { Action, createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import * as PairActions from './pair.actions';
import { IPair } from "../models/people.model";
import { IMenteeState, menteesFeatureKey } from "../mentees/mentee.reducer";

export const pairsFeatureKey = 'pairs';

export interface IPairState extends EntityState<IPair> {
  // additional entities state properties
}

export const adapter: EntityAdapter<IPair> = createEntityAdapter<IPair>();

export const initialState: IPairState = adapter.getInitialState({
  // additional entity state properties
});

export const reducer = createReducer(
  initialState,
  on(PairActions.addPair,
    (state, action) => adapter.addOne(action.pair, state)
  ),
  on(PairActions.upsertPair,
    (state, action) => adapter.upsertOne(action.pair, state)
  ),
  on(PairActions.addPairs,
    (state, action) => adapter.addMany(action.pairs, state)
  ),
  on(PairActions.upsertPairs,
    (state, action) => adapter.upsertMany(action.pairs, state)
  ),
  on(PairActions.updatePair,
    (state, action) => adapter.updateOne(action.pair, state)
  ),
  on(PairActions.updatePairs,
    (state, action) => adapter.updateMany(action.pairs, state)
  ),
  on(PairActions.deletePair,
    (state, action) => adapter.removeOne(action.id, state)
  ),
  on(PairActions.deletePairs,
    (state, action) => adapter.removeMany(action.ids, state)
  ),
  on(PairActions.loadPairs,
    (state, action) => adapter.setAll(action.pairs, state)
  ),
  on(PairActions.clearPairs,
    state => adapter.removeAll(state)
  ),
);

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();

export const selectPairState = createFeatureSelector<IPairState>(pairsFeatureKey);

export const selectPairEntities = createSelector(
  selectPairState,
  (state: IPairState) => state?.entities
);
