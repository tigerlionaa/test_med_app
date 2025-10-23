// Following code has been commented with appropriate comments for your reference.
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { API_URL } from '../../config';
import './Login.css'; // Ensure you have the corresponding CSS file

const Login = () => {
  // State variables for email and password
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState('');
  
  // Get navigation function from react-router-dom
  const navigate = useNavigate();

  // Check if user is already authenticated, then redirect to home page
  useEffect(() => {
    if (sessionStorage.getItem("auth-token")) {
      navigate("/");
    }
  }, [navigate]); // Added navigate to dependency array for best practice

  // Function to handle login form submission
  const login = async (e) => {
    e.preventDefault();

    // Send a POST request to the login API endpoint
    const res = await fetch(`${API_URL}/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });

    // Parse the response JSON
    const json = await res.json();
    if (json.authtoken) {
      // If authentication token is received, store it in session storage
      sessionStorage.setItem('auth-token', json.authtoken);
      sessionStorage.setItem('email', email);

      // Redirect to home page and reload the window to update the navbar
      navigate('/');
      window.location.reload();
    } else {
      // Handle errors if authentication fails
      let errorMessage = '';
      if (json.errors) {
        errorMessage = json.errors.map(error => error.msg).join('\n');
      } else {
        errorMessage = json.error;
      }
      alert(errorMessage); // Display errors to the user
    }
  };

  return (
    <div>
      <div className="container">
        <div className="login-grid">
          <div className="login-text">
            <h2>Login</h2>
          </div>
          <div className="login-text">
            Are you a new member? 
            <span>
              <Link to="/signup" style={{ color: '#2190FF' }}>
                Sign Up Here
              </Link>
            </span>
          </div>
          <br />
          <div className="login-form">
            <form onSubmit={login}>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                {/* Input field for email */}
                <input 
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)} 
                  type="email" 
                  name="email" 
                  id="email" 
                  className="form-control" 
                  placeholder="Enter your email" 
                  aria-describedby="helpId" 
                />
              </div>

              {/* Input field for password */}
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  name="password"
                  id="password"
                  className="form-control"
                  placeholder="Enter your password"
                  aria-describedby="helpId"
                />
              </div>
              
              <div className="btn-group">
                {/* Login button */}
                <button type="submit" className="btn btn-primary">
                  Login
                </button>
                <button type="reset" className="btn btn-danger" onClick={() => { setEmail(''); setPassword(''); }}>
                  Reset
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login;