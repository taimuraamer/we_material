import './App.css';
import {createStore} from 'redux'


const incrimentBy = ({incrimentBy = 1} = {}) => ({
  type: 'INCRIMENT',
  incrimentBy
})

const reset = ({value = 100} = {}) => ({
  type: 'RESET',
  value
})


const store = createStore((state = {count: 0}, action) => {
  switch(action.type)
  {
    case 'INCRIMENT':
      return {
        count: state.count + action.incrimentBy
      }
    case 'DECRIMENT':
      const decrBy = typeof action.decrBy === 'number' ? action.decrBy : 1
      return {
        count: state.count - decrBy
      }
    case 'RESET':
      return {
        count: action.value
      }
    default:
      return state
  }
})

store.subscribe(() => {
  console.log(store.getState())
})


store.dispatch(incrimentBy()) // by 1
store.dispatch(incrimentBy({incrimentBy: 10})) // by 10


// store.dispatch({
//   type: 'INCRIMENT',
//   incrBy: 5
// })


store.dispatch({
  type: 'DECRIMENT',
  decrBy: 10
})

store.dispatch(reset({value: 500}))

function App() {

  return (
    <div className="App">
      <p>This is it</p>
    </div>
  );
}

export default App;
