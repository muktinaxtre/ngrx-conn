import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ConnectionState } from './index'
export const selectState = createFeatureSelector<ConnectionState>('appState');
export const selectConnectivity = createSelector(
    selectState,
    (state) => {
        console.log('Inside selector', state)
        return state.rtt
    }
);
