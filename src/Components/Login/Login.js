import React from 'react';
import './Login.css';

const Login = () => {
    return (
        <div className='login'>
            <div className='right-side'>
                <h2 className='h2r'>GLOBETECH</h2>
                <h2 className='h2r'>COMPANY LIMITED</h2>
                <p id='paragraph'>Make yourself digitalized & more efficient</p>
            </div>
            <div className='left-side'>
                <form className='form'>

                    <h3>Welcome</h3>
                    <p>Sign in to your account</p>
                    <div className="mb-3">
                        <input type="email" className="form-control" placeholder='Email' id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <input type="password" className="form-control" placeholder='Password' id="exampleInputPassword1" />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Login;