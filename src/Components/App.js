import 'bootstrap/dist/css/bootstrap.min.css';
import AddExpenseForm from './AddExpenseForm';
import Budget from './Budget';
import ExpenseList from './ExpenseList';
import ExpenseTotal from './ExpenseTotal';
import Remaining from './Remaining';
import {AppProvider} from '../context/AppContext';

function App() {
  return (
      <AppProvider>
           <div className='container'>
        <h1 className='mt-3'>Budget Planner</h1>
        <div className='row mt-3'>
            <div className='col-sm'>
                <Budget />
            </div>
            <div className='col-sm'>
                <Remaining/>
            </div>
            <div className='col-sm'>
                <ExpenseTotal/>
            </div>
        </div>
        <h3 className='mt-3'>Expenses</h3>
        <div className='row mt-3'>
            <div className='col-sm'>
                <ExpenseList />
            </div>
        </div>
        <h3 className='mt-3'>Add Expense</h3>
        <div className='mt-3'>
            <div className='col-sm'>
                <AddExpenseForm/>
            </div>
        </div>

    </div>
      </AppProvider>
    
  )
}

export default App;