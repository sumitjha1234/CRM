import "../assets/Login.css"
import React, { useState } from "react";
import ReactDOM from "react-dom";

const signUpButton = () => {
    const container = document.getElementById('container');
    container.classList.add("right-panel-active");
}

const signInButton = () => {
    const container = document.getElementById('container');
    container.classList.remove("right-panel-active");
}

// JSX code for login form
const Login = ()=> {return(
    <div className="container" id="container">
        <div className="form-container sign-up-container">
            <form action="#">
                <h1>Create Account</h1>
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <button>Sign Up</button>
            </form>
        </div>
        <div className="form-container sign-in-container">
            <form action="#">
                <h1>Sign in</h1>
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <a href="#">Forgot your password?</a>
                <button>Sign In</button>
            </form>
        </div>
        <div className="overlay-container">
            <div className="overlay">
                <div className="overlay-panel overlay-left">
                    <h1>Have an account?</h1>
                    <button className="ghost" id="signIn" onClick={signInButton}>Sign In</button>
                </div>
                <div className="overlay-panel overlay-right">
                    <h1>First time?</h1>
                    <button className="ghost" id="signUp" onClick={signUpButton}>Sign Up</button>
                </div>
            </div>
        </div>
    </div>
 );}


 export default Login;