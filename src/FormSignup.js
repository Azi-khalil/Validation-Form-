import React from 'react'
import useForm from './useForm'
import validateInfo from './validateInfo'

const FormSignup = ({submitForm}) => {

    const {handleChange, values, handleSubmit, errors} = useForm(validateInfo, submitForm)


    return (
        <div className="form-content-right">
            <form className="form" onSubmit={handleSubmit}>
                <h1>Create your account by filling out the information below.</h1>
                <div className="form-inputs">
                    <label htmlFor="username" className="form-label">
                        Username
                    </label>
                    <input 
                        type="text" 
                        name='username' 
                        className="form-input"
                        placeholder='Enter your username'
                        value ={values.username}
                        onChange= {handleChange}
                        />
                        {errors.username && <p>{errors.username}</p>}
                </div>
                <div className="form-inputs">
                    <label htmlFor="email" className="form-label">
                        Email
                    </label>
                    <input 
                        type="email" 
                        name='email' 
                        className="form-input"
                        placeholder='Enter your email'
                        value ={values.email}
                        onChange= {handleChange}
                        />
                        {errors.email && <p>{errors.email}</p>}
                </div>
                <div className="form-inputs">
                    <label htmlFor="password" className="form-label">
                        Password
                    </label>
                    <input 
                        type="text" 
                        name='password' 
                        className="form-input"
                        placeholder='Enter your password'
                        value ={values.password}
                        onChange= {handleChange}
                        />
                        {errors.password && <p>{errors.password}</p>}
                </div>
                <div className="form-inputs">
                    <label htmlFor="password2" className="form-label">
                        Confirm Password
                    </label>
                    <input 
                        type="password" 
                        name='password2' 
                        className="form-input"
                        placeholder='Enter your password again'
                        value ={values.password2}
                        onChange= {handleChange}
                        />
                        {errors.password2 && <p>{errors.password2}</p>}
                </div>
                <button className="form-input-btn" type='submit'>
                    Sign Up
                </button>
                <span className='form-input-login'>
                    Already have an account? Login <a href='#'>
                        here</a>
                </span>
            </form>
        </div>
    )
}

export default FormSignup
