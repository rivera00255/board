import React from 'react';
// import GoogleLogin from 'react-google-login';
import { GoogleLogin } from '@react-oauth/google';
import StyledLogin from './StyledLogin';
import { useDispatch } from 'react-redux';
import { login } from 'src/store/slices/userSlice';

const Login = () => {
  const dispatch = useDispatch();

  return (
    <section css={StyledLogin}>
      <div className="container">
        <div className="button-wrapper">
          <GoogleLogin
            onSuccess={(credentialResponse) => {
              console.log(credentialResponse);
              dispatch(login({ auth: credentialResponse.credential }));
            }}
            onError={() => {
              console.log('Login Failed');
            }}
          />
        </div>
        {/* <GoogleLogin
          clientId={`${process.env.REACT_APP_CLIENT_ID}`}
          buttonText="구글로 계속하기"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={'single_host_origin'}
        /> */}
      </div>
    </section>
  );
};

export default Login;
