import { useState } from "react"

export const Login = () => {
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
        <div>
            <form onSubmit={handleFormSubmit}>
                <input type="text" className="form-control" placeholder="Username" id="username" name="username" onChange ={handleInputChange} value={FormData.username}/>
                <input type="password" className="form-control" placeholder="Password" id="password" name="" onChange ={handleInputChange} value={FormData.username}/>
                <button type="submit" className="btn btn-primary">Login</button>
            </form>

            <button type="button" className="btn btn-link">Forgot Password</button>
        </div>
    )
}
