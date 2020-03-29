
export function addSagaFactory(store) {
  return function _addSagaFactory(key, saga) {
    if (
      Reflect.has(store.addSagas, key) &&
      store.addSagas[key].saga === saga
    ) {
      return;
    }

    if(Reflect.has(store.addSagas, key)){
      store.addSagas[key].task.cancel()
    }

    store.addSagas[key] = {
      saga: saga,
      task: store.runSaga(saga)
    };

  };
}

export default function addSaga(store,{key,saga}){
  addSagaFactory(store)(key,saga)
}
