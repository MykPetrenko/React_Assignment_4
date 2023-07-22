import './ExpenseForm.css'
import {useState} from "react";

const ExpenseForm = (props) => {
  const [userInput, setUserInput] = useState({
    title: '',
    amount: '',
    date: ''
  });
  const [active, setActive] = useState(false);
  const inputChangeHandler = (id, value) => {
    if (id === 'title'){
      setUserInput((prevState) => {
        return {...prevState, title: value}
      })
    }
    else if (id === 'amount'){
      setUserInput((prevState) => {
        return {...prevState, amount: value}
      })
    }
    else {
      setUserInput((prevState) => {
        return {...prevState, date: value}
      })
    }
  }
  const submitHandler = (event) => {
    event.preventDefault();
    clickHandler();
    props.onSubmitUserInput(userInput);
    setUserInput({
      title: '',
      amount: '',
      date: ''
    })

  }
  const clickHandler = () => {
    setActive(prevState => !prevState);
  }
  return (
        active ?
        <form onSubmit={submitHandler} id={'addForm'}>
          <div className={'new-expense__controls'}>
            <div className={'new-expense__control'}>
              <label>Title</label>
              <input type="text" value={userInput.title} onChange={(event) => {
                inputChangeHandler('title', event.target.value)
              }}/>
            </div>
            <div className={'new-expense__control'}>
              <label>Amount</label>
              <input type="number" min={0.01} value={userInput.amount} step={0.01} onChange={(event) => {
                inputChangeHandler('amount', event.target.value)
              }}/>
            </div>
            <div className={'new-expense__control'}>
              <label>Date</label>
              <input type="date" min='2019-01-01' max='2022-12-31' value={userInput.date} onChange={(event) => {
                inputChangeHandler('date', event.target.value)
              }}/>
            </div>
          </div>

          <div className={'new-expense__actions'}>
            <button onClick={clickHandler}>Cancel</button>
            <button type={'submit'}> Add Expense</button>
          </div>
        </form>:
          <button onClick={clickHandler}> Add Expense</button>
  );
}
export default ExpenseForm;
