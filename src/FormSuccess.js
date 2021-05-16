import React from 'react'
import img4 from '../src/media/img-4.svg'

const FormSuccess = () => {
    return (
        <div className="form-content-right">
            <div className="form-success"> We have received your requiest!
            </div>
            <img src={img4}className='form-img-2' alt='success'/>
        </div>
    )
}

export default FormSuccess
