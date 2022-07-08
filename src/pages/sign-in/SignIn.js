import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useNavigate } from "react-router-dom";
import { UserService } from '../../api/UserService';
import { login } from '../../store/loginSlice';
import './SignIn.css';

export function SignIn() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [toRemember, setToRemember] = useState(false)
    const userService = UserService()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const state = useSelector(state => state.credentials)
    const [isError, setIsError] = useState(false)
    
    if (state.isLogged) {
        return <Navigate to="/profile"/>
    }

    return (
        <div className="sign-in">
            <main className="main bg-dark">
                <section className="sign-in-content">
                    <i className="fa fa-user-circle sign-in-icon"></i>
                    <h1>Sign In</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="input-wrapper">
                            <label htmlFor="email">Email</label>
                            <input
                                type="text"
                                id="email"
                                value={email}
                                onChange={handleEmailChange}
                            />
                        </div>
                        <div className="input-wrapper">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={handlePasswordChange}
                            />
                        </div>
                        <div className="input-remember">
                            <input
                                type="checkbox"
                                id="remember-me"
                                value={toRemember}
                                onChange={handleToRememberChange}
                            />
                            <label htmlFor="remember-me">Remember me</label>
                        </div>
                        <input className="sign-in-button" type='submit' value="Sign In" />
                    </form>
                    {
                        isError &&
                            <span className='error-message'>Wrong credentials, please try again</span>
                    }
                    
                </section>
            </main>
        </div>
    )

    function handleEmailChange(event) {
        setEmail(event.target.value)
    }

    function handlePasswordChange(event) {
        setPassword(event.target.value)
    }

    function handleToRememberChange(event) {
        setToRemember(event.target.value)
    }

    function handleSubmit(event) {
        event.preventDefault();
        userService.login(email, password)
            .then(result => {
                dispatch(login({token: result.data.body.token}))
                setIsError(false)
                navigate("/profile", {replace: true})
            })
            .catch(error => setIsError(true))
    }
}