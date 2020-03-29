/***
 * App  actions
 */

import {
  COMPONENT_WILL_MOUNT,
  COMPONENT_DID_MOUNT,
  COMPONENT_WILL_UNMOUNT,
} from '../constants/app'


export const componentWillMountAction = (data)=>{
  return {
    type: COMPONENT_WILL_MOUNT,
    data
  };
}

export const componentDidMountAction = (data)=>{
  return {
    type: COMPONENT_DID_MOUNT,
    data
  };
}

export const componentWillUnMountAction = (data)=>{
  return {
    type: COMPONENT_WILL_UNMOUNT,
    data
  };
}
