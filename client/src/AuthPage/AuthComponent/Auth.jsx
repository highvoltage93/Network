import React, {useState} from 'react';
import './Auth.css'
import Input from '../../Ui/Input/Input';
import Button from '../../Ui/Button/Button';

const Auth = (props) => {

    const [auth, setAuth] = useState(true)

        let submitForm = (e) => {
            e.preventDefault()
            const user = {
                name: e.target.name.value,
                email: e.target.email.value,
                password: e.target.password.value,
                gender: e.target.gender.value
                // avatar: e.target.avatar.files[0]
            }
            props.registration(user)
        }

        let loginForm = (e) => {
            e.preventDefault()
            const user = {
                email: e.target.email.value,
                password: e.target.password.value
            }
            props.logIn(user)
        }

    return (
        <div className="auth-wrapper">
            <div className="block">
                <p className="auth-p" onClick={() => setAuth(true)}>Registration</p>
                <small>or</small>
                <p className="auth-p" onClick={() => setAuth(false)}>Login</p>
            </div>
            {
                auth 
                    ? <form onSubmit={submitForm}>
                        <div className="auth-block register">
                            <h3>Registration</h3>
                            <Input type="text" placeholder="Name" name="name"/>
                            <Input type="email" placeholder="Email" name="email"/>
                            <Input type="text" placeholder="Password" name="password"/>
                            <select name="gender" id="gender">
                                <option value="male">Men</option>
                                <option value="female">Women</option>
                            </select>
                            <Button type={`submit`}>Restration</Button>
                        </div>
                    </form>
                    : <form onSubmit={loginForm}>
                            <div className="auth-block login">
                                <h3>Login</h3>
                                <Input type="email" placeholder="Email" name="email"/>
                                <Input type="text" placeholder="Password" name="password"/>
                                <Button type={`submit`}>LogIn</Button>
                            </div>
                    </form>
            }
            
            
        </div>
    );
}

export default Auth;
