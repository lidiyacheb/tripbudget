import './App.css';
import React from 'react';

function App() {
    return (
        <div className="mfp-content">
            <div className="login-modal">
                <div className="booking-info">
                    <h3>
                        <a href="main.html">
                            <span>TripBudget</span>
                        </a>
                    </h3>
                </div>
                <div className="login-form">
                    <form action="#" method="post">
                        <p>User Name </p>
                        <input type="text" name="Name" required="" />
                        <p>User Password</p>
                        <input type="password" name="Password" required="" />
                        <div className="wthree-text">
                            <ul>
                                <li>
                                    <input
                                        type="checkbox"
                                        id="brand"
                                        value=""
                                    />
                                    <label for="brand">
                                        <span></span> Remember me ?
                                    </label>
                                </li>
                                <li>
                                    {' '}
                                    <a href="#">Forgot password?</a>
                                </li>
                            </ul>

                            <div className="clear"> </div>
                        </div>
                        <input type="submit" value="Sign In" />
                    </form>
                    <p>
                        Don’t have an account ?
                        <a
                            href="#small-dialog1"
                            className="sign-in popup-top-anim"
                        >
                            {' '}
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default App;
