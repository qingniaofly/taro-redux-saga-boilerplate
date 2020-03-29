import { createSelector } from 'reselect';
import { INITIAL_STATE } from '../reducers/user';

/**
 * Direct selector to the homePage state domain
 */

const selectUserDomain = state => state.user || INITIAL_STATE;


const makeSelectUser = () =>
  createSelector(
    selectUserDomain,
    substate => substate,
  );

export default makeSelectUser;
export { selectUserDomain };
