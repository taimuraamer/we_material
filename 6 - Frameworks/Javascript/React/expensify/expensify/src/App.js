import './App.css';
import { createStore, combineReducers } from 'redux'
import uuid from 'uuid'
// Actions
const addExpense = (
    {
      description = '',
      note = '',
      amount = 0,
      createdAt = 0
    } = {}) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id:  uuid(),
    description,
    note,
    amount,
    createdAt
  }
})
const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
})


const expensesReducer = (state = [], action) => {
  switch (action.type) {
      case 'ADD_EXPENSE':
        return [
          ...state, 
          action.expense
        ]// state.concat(action.expense)
      case 'REMOVE_EXPENSE':
        return state.filter(({id}) => id !== action.id)
      default: 
      return state
  }
}

const filterReducerDefaultState = {
  text: '',
  sortBy: 'date', // date or amount,
  startDate: undefined,
  endDate: undefined
}
const filterReducer = (state = filterReducerDefaultState, action) => {
  switch (action.type) {
      default:
        return state
  }
}

const store = createStore(
  combineReducers({
      expenses: expensesReducer,
      filters: filterReducer
  })
)

store.subscribe(() => {
  console.log(store.getState())
})

const expenseOne = store.dispatch(addExpense({description: 'Rent', amount: 100}))
const expenseTwo = store.dispatch(addExpense({description: 'Coffee', amount: 300}))


store.dispatch(removeExpense({id: expenseOne.expense.id}))

const demoState = {
  expenses: [{
      id: 12345,
      description: 'January Rent',
      note: 'Final payment of the address',
      amount: 5400,
      createdAt: 0
  }],
  filters: {
      text: 'rent',
      sortBy: 'amount', // date or amount,
      startDate: undefined,
      endDate: undefined
  }
}

console.log(store.getState())

const App = () => {
  return (
      <div>
          <p>Testing...</p>
      </div>
  );
};

export default App;