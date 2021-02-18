import { createStore } from "redux";
import * as action from './actions'
import {useEffect} from 'react';

// 3. Reducer
const counterReducer = (state = { count: 0 }, {id, type}) => {
  // eslint-disable-next-line default-case
  switch (type) 
  { 
    case "ADD":
      return {
        count: id ? state.count + id : state.count + 1
      }
    case "SUB":
      return {
        count: state.count - 1
      };
  }
};

const store = createStore(counterReducer);

// 1. Action



// 2. Dispatch
const add = () => {
    store.dispatch(action.ADD);
    t = store.getState();
    return <div>{t.count}</div>
}

let t = null;

store.subscribe(() => {
  // console.log(store.getState())
  t = store.getState();
})

console.log(t)

const App = () => {
  return (
    <div>
      <p><button onClick={add}>Add</button></p>
      <p>Count :</p>
    </div>
  );
};

export default App;
