import React, { useContext } from 'react';
import {TiDelete} from 'react-icons/ti';
import {AppContext} from '../context/AppContext'

function ExpenseItem({name, cost, id}) {
    
    const {dispatch} = useContext(AppContext)

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: id,
        })
    }

  return (
    <li className='list-group-item d-flex justify-content-between align-items-center'>
        {name} 
        <div>
            <span id='cost-span' className='badge mr-3'> 
                ${cost}
                <TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete>
            </span>
        </div>
    </li>
  )
}

export default ExpenseItem