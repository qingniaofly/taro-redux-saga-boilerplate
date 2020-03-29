/***
 * App  Reducer
 */


import produce from 'immer';

import {
  COMPONENT_WILL_MOUNT,
  COMPONENT_DID_MOUNT,
  COMPONENT_WILL_UNMOUNT,
} from '../constants/app'


export const INITIAL_STATE = {
  module: "App",
  type:"NONE",
  data: {
  }
}

const appReducer =(state = INITIAL_STATE, action)=>
  produce(state, currState => {
    switch (action.type) {
      case COMPONENT_WILL_MOUNT:
        currState = INITIAL_STATE
        break;
      case COMPONENT_DID_MOUNT:
        break;
      case COMPONENT_WILL_UNMOUNT:
        break;
      default:
        break
    }
  });

export default appReducer
