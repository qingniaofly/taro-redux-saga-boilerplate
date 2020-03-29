

import {
  COMPONENT_WILL_MOUNT,
  COMPONENT_DID_MOUNT,
  COMPONENT_WILL_UNMOUNT,
  ADD,
  MINUS
} from '../constants/user'


// componentWillMount
export const componentWillMountAction = (data)=>{
  return {
    type: COMPONENT_WILL_MOUNT,
    data
  };
}

// componentDidMount
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

export const add = (data) => {
  return {
    type: ADD,
    data
  }
}

export const minus = (data) => {
  return {
    type: MINUS,
    data
  }
}


