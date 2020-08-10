import React from 'react'
import useInput from '../Hooks/useInput';

function Form() {
    const [firstName, firstNameBindProps, firstNameError] = useInput('');
    const [lastName, lastNamebindProps, lastNameError] = useInput('');

    const submitForm = e => {
        e.preventDefault();
        alert(`Hello ${firstName} ${lastName}`)
    }
    return (
        <div>
            <form onSubmit={submitForm}>
                <div>
                    <label>First Name: </label>
                    <input {...firstNameBindProps}/>
                    {firstNameError && <p className="error-text">First name is required</p>}
                </div>
                <div>
                    <label>Last Name: </label>
                    <input {...lastNamebindProps}/>
                    {lastNameError && <p className="error-text">Last name is required</p>}
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Form
