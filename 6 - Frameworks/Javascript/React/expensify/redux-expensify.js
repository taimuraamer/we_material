import { createStore, combinedReducers } from 'redux'




const expensesReducer = (state = [], { type }) => {
    switch (type) {
        default: state
    }
}

const filterReducerDefaultState = {
    text: '',
    sortBy: 'date', // date or amount,
    startDate: undefined,
    endDate: undefined
}
const filterReducer = (state = filterReducerDefaultState, { type }) => {
    switch (type) {
        default: state
    }
}

const store = createStore(
    combinedReducers({
        expenses: expensesReducer,
        filters: filterReducer
    })
)

demoState = {
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

const App = () => {
    return (
        <div>
            <p>Testing...</p>
        </div>
    );
};

export default App;
