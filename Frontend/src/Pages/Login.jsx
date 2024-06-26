import { useState } from "react"
import api from '../api'
import '../CSS/Base.css'
import '../CSS/login.css'

export const Login = () => {
    let info = document.getElementById('info');
    
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

    const handleFormSubmit = async (event) => {
        event.preventDefault()

        //let token = await api.get
        window.href='#'
    }

    return (
        <div className="page-wrapper">
            <div className="login-container">
                <h4> <center> Please enter your login information </center> </h4>
                <form onSubmit={handleFormSubmit}>
                    <input type="text" className="form-control username-text" placeholder="Username" id="username" name="username" onChange ={handleInputChange} value={FormData.username}/>
                    <input type="password" className="form-control password-text" placeholder="Password" id="password" name="" onChange ={handleInputChange} value={FormData.username}/>
                    <label className="info-text" id="info">TEXT</label>
                    <a className="forgot-password-text" href="#/ResetPassword"> <button type="button" className="btn btn-link login-forgot-password-color">Forgot Password</button> </a>
                    <button type="submit" className="btn btn-primary button-justify-right">Login</button>
                </form>
            </div>
        </div>
    )
}
