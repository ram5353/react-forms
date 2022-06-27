import useInput from "../hooks/use-input";

const BasicForm = (props) => {

  const {
    value: enteredName,
    isValid: nameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput
  } = useInput(value => value.trim() !== '');

  const {
    value: enteredLastName,
    isValid: lastNameIsValid,
    hasError: lastNameInputHasError,
    valueChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: resetLastNameInput
  } = useInput(value => value.trim() !== '');

  const {
    value: enteredEmail,
    isValid: emailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput
  } = useInput(value => value.includes('@'));

  let formIsValid = false

  if (nameIsValid && emailIsValid && lastNameIsValid) {
    formIsValid = true
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if(!nameIsValid) {
      return;
    }

    resetNameInput()
    resetEmailInput()
    resetLastNameInput()
  }

  const nameInputClasses = nameInputHasError
    ? 'form-control invalid'
    : 'form-control';

  const emailInputClasses = emailInputHasError
    ? 'form-control invalid'
    : 'form-control';

    const lastNameInputClasses = lastNameInputHasError
    ? 'form-control invalid'
    : 'form-control';

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className='control-group'>
        <div className={nameInputClasses}>
          <label htmlFor='name'>First Name</label>
          <input 
            onChange={nameChangeHandler} 
            onBlur={nameBlurHandler} 
            value={enteredName}
            type='text' 
            id='name' />
          {nameInputHasError && (<p className='error-text'>Name must not be empty.</p>)}
        </div>
        <div className={lastNameInputClasses}>
          <label htmlFor='name'>Last Name</label>
          <input 
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
            value={enteredLastName}
            type='text' 
            id='name' />
          {lastNameInputHasError && (<p className='error-text'>Please enter a valid last name.</p>)}
        </div>
      </div>
      <div className={emailInputClasses}>
        <label htmlFor='email'>E-Mail Address</label>
        <input 
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}
          type='text' 
          id='email' />
          {emailInputHasError && (<p className='error-text'>Please enter a valid email.</p>)}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid} type="submit">Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
