// src/Login.js
import React, { useState } from 'react'
import styled from 'styled-components'
import logo from '../img/logo.png'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMicrosoft } from '@fortawesome/free-brands-svg-icons' // Correct import for the Windows icon
import { faUserPlus, faUnlockAlt } from '@fortawesome/free-solid-svg-icons'

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background-image: linear-gradient(
    to right top,
    #051937,
    #004d7a,
    #008793,
    #00bf72,
    #a8eb12
  );
 
  cursor: pointer; /* For clickable buttons */
  user-select: none; /* Prevents text selectio
`

const FormWrapper = styled.div`
  padding: 40px;
  background: white;
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  width: 100%;
  cursor: default;
`

const Input = styled.input`
  width: 100%;
  padding: 12px 15px;
  margin: 8px 0;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-sizing: border-box;
  font-size: 16px;
`

const Button = styled.button`
  width: 100%;
  padding: 12px 15px;
  margin-top: 20px;
  border: none;
  border-radius: 5px;
  background-color: #4caf50;
  color: white;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #45a049;
  }
`

const SSOButton = styled(Button)`
  background-color: #0073b1; /* Blue color for SSO login */
  margin-top: 10px;
  width: 49%;
  cursor: no;
  &:hover {
    background-color: #005f8d;
  }
`

const SignUpButton = styled(Button)`
  background-color: #f44336; /* Red color for Sign Up */
  margin-top: 10px;
  margin-left: 2%;
  width: 49%;
  &:hover {
    background-color: #d32f2f;
  }
`

const Error = styled.div`
  color: red;
  font-size: 14px;
  margin-top: 10px;
  text-align: center;
`

const Logo = styled.img`
  height: 40px;
  margin-right: 10px;
  cursor: default;
`

const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`

const ForgotPassword = styled.a`
  display: block;
  text-align: center;
  margin-top: 15px;
  color: #0073b1;
  text-decoration: none;
  font-size: 14px;

  &:hover {
    text-decoration: underline;
  }
`

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate() // Initialize the navigation hook
  const handleSubmit = (e) => {
    e.preventDefault()

    // Simple validation
    if (email === '' || password === '') {
      setError('All fields are required.')
      return
    }

    // Perform login (mocked)
    console.log('Email:', email)
    console.log('Password:', password)
    setError('') // Clear error after successful login

    // Further login logic goes here...
  }

  const handleSSOLogin = () => {
    console.log('Logging in with SSO...')
    // SSO login logic here...
  }

  const handleSignUpClick = () => {
    navigate('/signup') // Redirect to the Signup page
  }

  return (
    <Container>
      <FormWrapper>
        <LogoWrapper>
          <Logo
            src="https://www.tagueri.com/wp-content/uploads/2021/03/Logo-tagueriag.png.webp"
            alt="Logo"
          />
        </LogoWrapper>
        <LogoWrapper>
          <Logo src={logo} alt="Logo" />
        </LogoWrapper>
        <form onSubmit={handleSubmit}>
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit">
            <span style={{ marginRight: '5px' }}>
              <i>
                {' '}
                <FontAwesomeIcon icon={faUnlockAlt} />
              </i>
            </span>
            Login
          </Button>
        </form>

        <SSOButton onClick={handleSSOLogin}>
          <span style={{ marginRight: '5px' }}>
            <i>
              <FontAwesomeIcon icon={faMicrosoft} />
            </i>
          </span>
          Login with SSO
        </SSOButton>
        <SignUpButton onClick={handleSignUpClick}>
          {' '}
          <span style={{ marginRight: '5px' }}>
            <i>
              {' '}
              <FontAwesomeIcon icon={faUserPlus} />
            </i>
          </span>
          Sign Up
        </SignUpButton>

        <ForgotPassword href="/forgotpassword">Forgot Password?</ForgotPassword>
        {error && <Error>{error}</Error>}
      </FormWrapper>
    </Container>
  )
}

export default Login
