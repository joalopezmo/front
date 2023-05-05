// export function mainViewReducer(state: boolean = false, action: Action) {
//   switch (action.type) {
//     case changeBoolean.type:
//       return !state;
//     default:
//       return state;
//   }
// }

import { Action, createReducer, on } from '@ngrx/store';
import { changeBoolean } from './main-view.actions';

export const initialState = false;

const _mainViewReducer = createReducer(
  initialState,
  on(changeBoolean, (state) => !state)
);

export function mainViewReducer(state: boolean | undefined, action: Action) {
  return _mainViewReducer(state, action);
}
