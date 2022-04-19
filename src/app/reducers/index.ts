import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { mentorsFeatureKey } from "../mentors/mentor.reducer";
import { LocalStorageConfig, localStorageSync } from "ngrx-store-localstorage";
import { menteesFeatureKey } from "../mentees/mentee.reducer";

export interface State {
}

export function logger(reducer: ActionReducer<State>): ActionReducer<State> {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return (state: State, action: any): State => {
    const newState = reducer(state, action);
    console.log('prev state', state);
    console.log('action', action);
    console.log('next state', newState);
    return newState;
  };
}

export const reducers: ActionReducerMap<State> = {};

const LOCAL_STORAGE_SYNC_CONFIG: LocalStorageConfig = {
  keys: [
    mentorsFeatureKey,
    menteesFeatureKey
  ],
  rehydrate: true,
  restoreDates: false,
  storageKeySerializer: (key: string) => `frog-census-nx-${key}`,
};

const localStorageSyncReducer = (
  reducer: ActionReducer<any>
): ActionReducer<any> => {
  return localStorageSync(LOCAL_STORAGE_SYNC_CONFIG)(reducer);
};


export const metaReducers: MetaReducer<State>[] = !environment.production
  ? [localStorageSyncReducer] : [localStorageSyncReducer];
