/***
 * user  Reducer
 */


import produce from 'immer';

import {
  COMPONENT_WILL_MOUNT,
  COMPONENT_DID_MOUNT,
  COMPONENT_WILL_UNMOUNT,
  ADD,
  MINUS
} from '../constants/user'


export const INITIAL_STATE = {
  module: "user",
  type:"NONE",
  data: {
    num: 0,
    a:'123'
  }
}

const userReducer =(state = INITIAL_STATE, action)=>
  produce(state, currState => {
    switch (action.type) {
      case COMPONENT_WILL_MOUNT:
        currState = INITIAL_STATE
        break;
      case COMPONENT_DID_MOUNT:
        break;
      case COMPONENT_WILL_UNMOUNT:
        // 清空数据
        currState.data.num = 0
        break;
      case ADD:
        currState.data.num = state.data.num + 1
        break;
      case MINUS:
        currState.data.num = state.data.num - 1
        break;
      default:
        break
    }
  });

export default userReducer
