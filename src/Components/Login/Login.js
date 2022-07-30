import React from 'react';
import './Login.css';
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import InputAdornment from "@material-ui/core/InputAdornment";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Input from "@material-ui/core/Input";

const Login = () => {

    const [values, setValues] = React.useState({
        password: "",
        showPassword: false,
      });
      
      const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
      };
      
      const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };
      
      const handlePasswordChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
      };

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
                        <Input
                            className='form-control' placeholder='Password' type={values.showPassword ? "text" : "password"}
                            onChange={handlePasswordChange("password")}
                            value={values.password}
                            endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                >
                                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                            </InputAdornment>
                            }
                            />
                    </div>
                    <button type="submit" className="btn btn-submit"> <a href="/"> Submit </a></button>
                </form>
            <footer id='footer' >
                Globetech Company Limited By Rahul
            </footer>
            </div>

            
        </div>
    );
};

export default Login;