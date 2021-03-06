
import React, { useState } from 'react';
import Cookies from 'universal-cookie';
import axios from 'axios';

function SVG() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="832.206"
      height="500.356"
      data-name="Layer 1"
      viewBox="0 0 832.206 500.356"
    >
      <path
        fill="#f1f1f1"
        d="M227.317 699.06c-.056-.245-5.44-24.798 5.556-45.19s34.468-29.385 34.704-29.474l1.073-.402.253 1.118c.056.245 5.44 24.798-5.556 45.19s-34.468 29.385-34.704 29.474l-1.073.402zm39.861-72.338c-4.701 2.023-23.257 10.874-32.544 28.097-9.289 17.224-6.486 37.594-5.593 42.63 4.7-2.017 23.249-10.855 32.545-28.096 9.288-17.224 6.486-37.59 5.592-42.63z"
        transform="translate(-183.897 -199.822)"
      ></path>
      <path
        fill="#f1f1f1"
        d="M254.944 663.15c-19.76 11.888-27.371 35.502-27.371 35.502s24.428 4.339 44.188-7.55 27.371-35.503 27.371-35.503-24.428-4.339-44.188 7.55z"
        transform="translate(-183.897 -199.822)"
      ></path>
      <path
        fill="#9f616a"
        d="M554.193 472.564a10.837 10.837 0 00-10.48-12.896l-9.15-23.013-15.342 2.15 13.38 32.317a10.896 10.896 0 0021.592 1.442z"
        transform="translate(-183.897 -199.822)"
      ></path>
      <path
        fill="#6c63ff"
        d="M525.93 464.479l-4.754-11.336-29.621-56.384 1.61-104.333.31-.04c18.954-2.505 31.778 84.828 32.315 88.547l18.715 64.008 4.455 14.109z"
        transform="translate(-183.897 -199.822)"
      ></path>
      <path
        fill="#9f616a"
        d="M296.518 484.658L310.92 484.657 317.771 429.106 296.515 429.107 296.518 484.658z"
      ></path>
      <path
        fill="#2f2e41"
        d="M476.741 679.778l28.363-.001h.001a18.076 18.076 0 0118.075 18.074v.588l-46.438.002z"
        transform="translate(-183.897 -199.822)"
      ></path>
      <path
        fill="#9f616a"
        d="M164.095 462.715L175.912 470.949 213.294 429.291 195.854 417.138 164.095 462.715z"
      ></path>
      <path
        fill="#2f2e41"
        d="M347.667 656.579l23.27 16.215.001.001a18.076 18.076 0 014.495 25.164l-.336.482-38.1-26.55zM472.5 671.422l-.623-104.21-9.062-65.526-16.895 57.624-.032.048-61.225 88.885-23.824-12.07.13-.31c1.457-3.464 35.763-84.794 44.984-84.794a4.98 4.98 0 004.243-1.865c2.706-3.614.502-11.282.48-11.36-2.64-10.945 3.997-14.673 5.319-15.295l3.555-73.397.369.025 96.39 6.761-4.045 91.766-8.698 120.231-.3.034z"
        transform="translate(-183.897 -199.822)"
      ></path>
      <path
        fill="#6c63ff"
        d="M517.781 472.202l-.417-.034-103.664-8.356.256-34.3 5.073-89.559.03-.062 20.662-44.858 14.647-6.633 21.37-1.124.053.013 19.502 4.831 20.288 145.64z"
        transform="translate(-183.897 -199.822)"
      ></path>
      <circle
        cx="465.995"
        cy="251.83"
        r="27.294"
        fill="#9f616a"
        transform="rotate(-28.663 -17.018 511.817)"
      ></circle>
      <path
        fill="#2f2e41"
        d="M438.546 258.681v-10.634s-8.576-10.1.858-12.644c0 0 2.573-25.443 24.87-13.57 0 0 30.874-5.089 27.443 12.721 0 0 7.719-4.65 5.146 7.224l-4.976 19.126s2.403-12.634-5.315-14.33l-4.288-2.545s-12.007 11.874-30.016-2.544c0 0-7.719-1.842-6.861 5.79s-6.86 11.406-6.86 11.406z"
        transform="translate(-183.897 -199.822)"
      ></path>
      <path
        fill="#9f616a"
        d="M463.154 446.587a10.837 10.837 0 00-12.624-10.806l-13.132-20.997-14.706 4.868 18.961 29.391a10.896 10.896 0 0021.5-2.455z"
        transform="translate(-183.897 -199.822)"
      ></path>
      <path
        fill="#6c63ff"
        d="M429.236 439.969l-23.757-48.235.02-.117c.096-.534 9.66-53.634 16.974-73.152 7.36-19.641 17.435-23.585 17.86-23.743l.213-.079 9.034 8.665-12.514 83.527 13.49 40.284z"
        transform="translate(-183.897 -199.822)"
      ></path>
      <path fill="#f1f1f1" d="M786.206 0H832.206V46H786.206z"></path>
      <path fill="#f1f1f1" d="M426.206 179H472.206V225H426.206z"></path>
      <path
        fill="#fff"
        d="M635.922 404.665h363.675v-184.11H635.922z"
        transform="translate(-183.897 -199.822)"
      ></path>
      <path
        fill="#e5e5e5"
        d="M1002.597 407.665H632.922v-190.11h369.675zm-363.675-6h357.675v-178.11H638.922z"
        transform="translate(-183.897 -199.822)"
      ></path>
      <path
        fill="#e5e5e5"
        d="M495.678 85.316H775.4839999999999V94.595H495.678z"
      ></path>
      <path
        fill="#e5e5e5"
        d="M495.678 107.819H775.4839999999999V117.098H495.678z"
      ></path>
      <path
        fill="#6c63ff"
        d="M723.484 141.045H775.484V149.09799999999998H723.484z"
      ></path>
      <path
        fill="#cbcbcb"
        d="M565.897 700.138h-381a1 1 0 110-2h381a1 1 0 010 2z"
        transform="translate(-183.897 -199.822)"
      ></path>
    </svg>
  );
}
const cookies = new Cookies();

const initialState = {
    fullName: '',
    username: '',
    password: '',
    confirmPassword: '',
    phoneNumber: '',
    avatarURL: '',
}

const Auth = () => {
    const [form, setForm] = useState(initialState);
    const [isSignup, setIsSignup] = useState(true);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { username, password, phoneNumber, avatarURL } = form;

        const URL = 'https://amogh-chat-messenger.herokuapp.com/auth';

        const { data: { token, userId, hashedPassword, fullName } } = await axios.post(`${URL}/${isSignup ? 'signup' : 'login'}`, {
            username, password, fullName: form.fullName, phoneNumber, avatarURL,
        });

        cookies.set('token', token);
        cookies.set('username', username);
        cookies.set('fullName', fullName);
        cookies.set('userId', userId);

        if(isSignup) {
            cookies.set('phoneNumber', phoneNumber);
            cookies.set('avatarURL', avatarURL);
            cookies.set('hashedPassword', hashedPassword);
        }

        window.location.reload();
    }

    const switchMode = () => {
        setIsSignup((prevIsSignup) => !prevIsSignup);
    }

    return (
        <div className="auth__form-container">
            <div className="auth__form-container_fields">
                <div className="auth__form-container_fields-content">
                    <p>{isSignup ? 'Sign Up' : 'Sign In'}</p>
                    <form onSubmit={handleSubmit}>
                        {isSignup && (
                            <div className="auth__form-container_fields-content_input">
                                <label htmlFor="fullName">Full Name</label>
                                <input 
                                    name="fullName" 
                                    type="text"
                                    placeholder="Full Name"
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        )}
                        <div className="auth__form-container_fields-content_input">
                            <label htmlFor="username">Username</label>
                                <input 
                                    name="username" 
                                    type="text"
                                    placeholder="Username"
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        {isSignup && (
                            <div className="auth__form-container_fields-content_input">
                                <label htmlFor="phoneNumber">Phone Number</label>
                                <input 
                                    name="phoneNumber" 
                                    type="text"
                                    placeholder="Phone Number"
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        )}
                        {isSignup && (
                            <div className="auth__form-container_fields-content_input">
                                <label htmlFor="avatarURL">Avatar URL</label>
                                <input 
                                    name="avatarURL" 
                                    type="text"
                                    placeholder="Avatar URL"
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        )}
                        <div className="auth__form-container_fields-content_input">
                                <label htmlFor="password">Password</label>
                                <input 
                                    name="password" 
                                    type="password"
                                    placeholder="Password"
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        {isSignup && (
                            <div className="auth__form-container_fields-content_input">
                                <label htmlFor="confirmPassword">Confirm Password</label>
                                <input 
                                    name="confirmPassword" 
                                    type="password"
                                    placeholder="Confirm Password"
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            )}
                        <div className="auth__form-container_fields-content_button">
                            <button>{isSignup ? "Sign Up" : "Sign In"}</button>
                        </div>
                    </form>
                    <div className="auth__form-container_fields-account">
                        <p>
                            {isSignup
                             ? "Already have an account?" 
                             : "Don't have an account?"
                             }
                             <span onClick={switchMode}>
                             {isSignup ? 'Sign In' : 'Sign Up'}
                             </span>
                        </p>
                    </div>
                </div> 
            </div>
            <div className="auth__form-container_image">
                <SVG/>
            </div>
        </div>
    )
}

export default Auth