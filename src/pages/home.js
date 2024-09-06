import React, { useState } from 'react'
import '../App.css'
// import logo from "file:///C:/Users/Ankit/Desktop/react/homegpt/src/img/logo.png"
import logo from '../img/logo.png'

function Home() {
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState('')
  const [history, setHistory] = useState([])

  // Simulate an AI response
  const generateAIResponse = (message) => {
    return `AI: You said "${message}"`
  }

  // Handle user input submission
  const handleSendMessage = (e) => {
    e.preventDefault()

    if (input.trim()) {
      const userMessage = {
        sender: 'User',
        text: input,
      }

      setMessages([...messages, userMessage])
      setHistory([...history, input]) // Add to history

      // Simulate AI response
      setTimeout(() => {
        const aiMessage = {
          sender: 'AI',
          text: generateAIResponse(input),
        }
        setMessages((prevMessages) => [...prevMessages, aiMessage])
      }, 1000)

      setInput('') // Clear input after sending message
    }
  }

  return (
    <div className="app-container">
      {/* Header with logo and heading */}
      <header className="header">
        <img
          src="https://www.tagueri.com/wp-content/uploads/2021/03/Logo-tagueriag.png.webp"
          alt="App Logo"
          className="logo"
        />
        <img src={logo} className="heading" alt="App Logo" />

        <img
          src="https://img.freepik.com/free-vector/user-circles-set_78370-4704.jpg"
          alt="User Profile"
          className="profile-img"
          style={{ width: 30, height: 30 }}
        />
      </header>

      {/* Left sidebar with prompt history */}
      <div className="history-sidebar">
        <h2 style={{ color: 'white' }}>Prompt History</h2>
        <ul>
          {history.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      {/* Chat interface */}
      <div className="chat-container">
        <div className="chat-box">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`message ${message.sender.toLowerCase()}`}
            >
              <strong>{message.sender}:</strong> {message.text}
            </div>
          ))}
        </div>

        <form className="input-area" onSubmit={handleSendMessage}>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message..."
          />
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  )
}

export default Home
