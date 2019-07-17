// Actions
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const NOTHING = 'NOTHING';

// Action creators
const increment = amount => ({type: INCREMENT, amount});
const decrement = amount => ({type: DECREMENT, amount});
const nothing = () => ({type: NOTHING});

// Initial state
const INITIAL_STATE = {
  count: 0
};

// Initialize Store
const store = createStore(reducer, INITIAL_STATE);

const unsubscribe = store.subscribe(() => console.log('Subscriber 1: ', store.getState()));
store.subscribe(() => console.log('Subscriber 2: ', store.getState()));

store.dispatch(increment(8));
store.dispatch(decrement(4));

unsubscribe();

store.dispatch(decrement(6));
store.dispatch(nothing());

// Reducer
function reducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return {...state, count: state.count + action.amount};
    case 'DECREMENT':
      return {...state, count: state.count - action.amount};
  }

  return state;
}

// Realization of store.
function createStore(reducer, initialState) {
  let state = initialState;
  let callbacks = [];

  const getState = () => state;

  const dispatch = action => {
    state = reducer(state, action);
    callbacks.forEach(callback => callback());
  };

  dispatch({});

  const subscribe = callback => {
    callbacks.push(callback);
    return () => callbacks = callbacks.filter(value => value !== callback);
  };

  return {getState, dispatch, subscribe};
}