// src/ForgotPassword.js
import React, { useState } from 'react'
import styled from 'styled-components'
import logo from '../img/logo.png'

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  cursor: default; /* For clickable buttons */
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

const Success = styled.div`
  color: green;
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

const ForgotPassword = () => {
  const [email, setEmail] = useState('')
  const [oldPassword, setOldPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    // Basic validation
    if (!email || !oldPassword || !newPassword) {
      setError('All fields are required.')
      setSuccess('')
      return
    }

    if (newPassword === oldPassword) {
      setError('New password must be different from the old password.')
      setSuccess('')
      return
    }

    // Password reset logic (mocked)
    console.log('Email:', email)
    console.log('Old Password:', oldPassword)
    console.log('New Password:', newPassword)
    setError('') // Clear error after successful validation
    setSuccess('Password has been successfully changed!')
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
            placeholder="Old Password"
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
          />
          <Input
            type="password"
            placeholder="New Password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <Button type="submit">Reset Password</Button>
          <Login href="/login">Already have an account?Login</Login>
          {error && <Error>{error}</Error>}
          {success && <Success>{success}</Success>}
        </form>
      </FormWrapper>
    </Container>
  )
}

export default ForgotPassword
