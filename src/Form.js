import {useState} from 'react'
import FormSignup from './FormSignup'
import FormSuccess from './FormSuccess'
import './Form.css'
import img3 from './media/img-3.svg'


const Form = () => {
    const [isSubmitted, setIsSubmitted] = useState(false)

      function submitForm ()  {
          setIsSubmitted(true)
      }  

     return (
        <>
        <div className="form-container">
            <span className="close-btn">X</span>
            <div className="form-content-left">
                <img src={img3} alt="form" className="form-img"/>
            </div>
            {!isSubmitted ? (<FormSignup submitForm={submitForm} />) : (<FormSuccess />)}
        </div>
           
        </>
    )
}

export default Form;
