import { useEffect, useState } from "react";

const SimpleInput = (props) => {

  const [enteredName, setEnteredname] = useState('')
  const [enteredNameIsTouched, setEnterednameIsTouched] = useState(false)
  const enteredNameIsValid = enteredName.trim() !== ''
  const [formIsValid, setFormIsValid] = useState(false)

  useEffect(() => {
    if (enteredNameIsValid) {
      setFormIsValid(true)
    } else {
      setFormIsValid(false)
    }
  }, [enteredNameIsValid])


  const enteredNamehandler = (event) => {
    setEnteredname(event.target.value)
  }

  const submitNameHandler = (event) => {
    event.preventDefault();
    setEnterednameIsTouched(true);

    if(!enteredNameIsValid) {
      setFormIsValid(false)
      return;
    }

    setEnteredname('')
    setEnterednameIsTouched(false)
  }

  const nameInputBlurHandler = (event) => {
    setEnterednameIsTouched(true)
  }

  const nameInputIsInvalid = !enteredNameIsValid && enteredNameIsTouched
  const nameInputClasses = !nameInputIsInvalid ? 'form-control' : 'form-control invalid'


  return (
    <form onSubmit={submitNameHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input 
          type='text' 
          id='name' 
          onChange={enteredNamehandler}
          onBlur={nameInputBlurHandler} 
          value={enteredName}/>
        {nameInputIsInvalid && <p>Name must not be empty</p>}
      </div>
      <div className={nameInputClasses}>
        <label htmlFor='email'>Your Name</label>
        <input 
          type='text' 
          id='email' 
          onChange={enteredNamehandler}
          onBlur={nameInputBlurHandler} 
          value={enteredName}/>
        {nameInputIsInvalid && <p>Name must not be empty</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
