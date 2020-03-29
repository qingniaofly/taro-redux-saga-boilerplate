/***
 * App  sagas
 */

import {
  take, call, apply, folk, delay, put, select, takeLatest
} from 'redux-saga/effects';


import {
  COMPONENT_WILL_MOUNT,
  COMPONENT_DID_MOUNT,
  COMPONENT_WILL_UNMOUNT,
} from '../constants/app'

import makeSelectApp from '../selectors/app'


export function* componentWillMountSaga() {
  try {
    console.log('App COMPONENT_WILL_MOUNT')
  } catch (err) {
    console.log(err)
  }
}

export function* componentDidMountSaga() {
  try {
    console.log('App COMPONENT_DID_MOUNT')
    const data = yield select(makeSelectApp())
    console.log(data)
  } catch (err) {
    console.log(err)
  }
}

export function* componentWillUnMountSaga() {
  try {
    console.log('App COMPONENT_WILL_UN_MOUNT')
  } catch (err) {
    console.log(err)
  }
}



export default function* AppSaga() {
  yield takeLatest(COMPONENT_WILL_MOUNT,componentWillMountSaga)
  yield takeLatest(COMPONENT_DID_MOUNT,componentDidMountSaga)
  yield takeLatest(COMPONENT_WILL_UNMOUNT,componentWillUnMountSaga)
}








