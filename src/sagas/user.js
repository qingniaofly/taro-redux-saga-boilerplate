import {
  take, call, apply, folk, delay, put, select, takeLatest
} from 'redux-saga/effects';


import {
  COMPONENT_WILL_MOUNT,
  COMPONENT_DID_MOUNT,
  COMPONENT_WILL_UNMOUNT,
  ADD,
  MINUS
} from '../constants/user'

import makeSelectUser from '../selectors/user'


export function* componentWillMountSaga() {
  try {
    console.log('user COMPONENT_WILL_MOUNT')
  } catch (err) {
    console.log(err)
  }
}

export function* componentDidMountSaga() {
  try {
    console.log('user COMPONENT_DID_MOUNT')
  } catch (err) {
    console.log(err)
  }
}

export function* componentWillUnMountSaga() {
  try {
    console.log('user COMPONENT_WILL_UN_MOUNT')
  } catch (err) {
    console.log(err)
  }
}

export function*  fetchUserSaga() {
  try{
    const {data} = yield select(makeSelectUser())
    console.log('num:',data.num)
  }catch (e) {

  }
}


export default function* userSaga() {
  yield takeLatest(COMPONENT_WILL_MOUNT,componentWillMountSaga)
  yield takeLatest(COMPONENT_DID_MOUNT,componentDidMountSaga)
  yield takeLatest(COMPONENT_WILL_UNMOUNT,componentWillUnMountSaga)
  yield takeLatest(ADD, fetchUserSaga);
  yield takeLatest(MINUS, fetchUserSaga);
}








