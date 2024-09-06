// src/Signup.js
import React, { useState } from 'react'
import styled from 'styled-components'
import logo from '../img/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  cursor: pointer; /* For clickable buttons */
  user-select: none;
  background-image: linear-gradient(
    to right top,
    #051937,
    #004d7a,
    #008793,
    #00bf72,
    #a8eb12
  );
`

const FormWrapper = styled.div`
  padding: 40px;
  background: white;
  border-radius: 10px;
  cursor: default;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  width: 100%;
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

const Error = styled.div`
  color: red;
  font-size: 14px;
  margin-top: 10px;
  text-align: center;
`

const Logo = styled.img`
  height: 40px;
  margin-right: 10px;
`

const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`

const Login = styled.a`
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

const Signup = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    // Simple validation
    if (!name || !email || !password || !confirmPassword) {
      setError('All fields are required.')
      return
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match.')
      return
    }

    // Perform signup logic (mocked)
    console.log('Name:', name)
    console.log('Email:', email)
    console.log('Password:', password)
    setError('') // Clear error after successful signup

    // Further signup logic goes here...
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
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
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
          <Input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <Button type="submit">
            {' '}
            <span style={{ marginRight: '5px' }}>
              <i>
                {' '}
                <FontAwesomeIcon icon={faUserPlus} />
              </i>
            </span>
            Sign Up
          </Button>
          <Login href="/login">Already have an account?Login</Login>
          {error && <Error>{error}</Error>}
        </form>
      </FormWrapper>
    </Container>
  )
}

export default Signup
