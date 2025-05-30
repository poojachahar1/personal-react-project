export function createMyStore(reducer) {
  let state;
  const listeners = [];
  const myStore = {
    getState() {
        console.log(state)
      return state;
    },
    dispatch(action) {
        console.log(action)
      state = reducer(state, action);
      listeners.forEach((listener)=>{
        listener()
      })
    },
    subscribe(listener) {
      listeners.push(listener);
      return function () {
        const listernerIndex = listeners.findIndex((registerIndex) => {
          registerIndex === listener;
        });

        listeners.splice(listernerIndex, 1);
      };
    },
  };

  myStore.dispatch("@@INIT");
  return myStore;
}
