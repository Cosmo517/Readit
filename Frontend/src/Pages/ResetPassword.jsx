import React, {useState} from 'react'
import '../CSS/Base.css'
import '../CSS/ResetPassword.css'

export const ResetPassword = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    })

    const handleInputChange = (event) => {
        const value = event.target.value;
        setFormData({
            ...formdata,
            [event.target.name]: value,
        })
    }

    const handleFormSubmit = () => {

    }

    return (
        <div className='page-wrapper'>
            <div className="reset-password-container">
                <h4> <center> Reset your password </center> </h4>
                <form onSubmit={handleFormSubmit}>
                    <input type="text" className="form-control email-text" placeholder="Email" id="email" name="email" onChange ={handleInputChange} value={FormData.username}/>
                    <button type="submit" className="btn btn-primary button-justify-right">Reset Password</button>
                </form>
            </div>
        </div>
    )
}