import { createSelector } from 'reselect';
import { INITIAL_STATE } from '../reducers/app';

/**
 * Direct selector to the app state domain
 */

const selectAppDomain = state => state.app || INITIAL_STATE;


const makeSelectApp = () =>
  createSelector(
    selectAppDomain,
    substate => substate,
  );

export default makeSelectApp;
export { selectAppDomain };
