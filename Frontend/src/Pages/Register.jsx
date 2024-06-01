import { useState } from "react"
import '../CSS/Base.css'
import '../CSS/Register.css'

export const Register = () => {
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
        window.href='#'
    }

    return (
        <div className="page-wrapper">
            <div className="register-container">
                <h4> <center> Please enter your login information </center> </h4>
                <form onSubmit={handleFormSubmit}>
                    <input type="text" className="form-control register-username-text" placeholder="Username" id="username" name="username" onChange ={handleInputChange} value={FormData.username}/>
                    <input type="password" className="form-control register-password-text" placeholder="Password" id="password" name="" onChange ={handleInputChange} value={FormData.username}/>
                    <a href="#/ResetPassword"> <button type="button" className="btn btn-link register-forgot-password-color">Forgot Password</button> </a>
                    <button type="submit" className="btn btn-primary register-button-justify-right">Register</button>
                </form>
            </div>
        </div>
    )
}