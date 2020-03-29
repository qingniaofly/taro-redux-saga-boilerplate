

import createReducer from '../reducers/index'


export function addReducerFactory(store) {
  return function addReducer(key, reducer) {
    if (
      Reflect.has(store.addReducers, key) &&
      store.addReducers[key] === reducer
    ) {
      return;
    }

    store.addReducers[key] = reducer;
    store.replaceReducer(createReducer(store.addReducers));
  };
}

export default function addReducer(store,{key,reducer}){
  addReducerFactory(store)(key,reducer)
}
