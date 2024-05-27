import React, { useState } from 'react'
import axios from 'axios'

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loginStatus, setLoginStatus] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
     // Kiểm tra xem username và password có được nhập hay không
  if (!username  || !password ) {
    setError('You are leaving the username and password blank');
    return; // Ngừng xử lý nếu thiếu thông tin
  }
    
  axios.post('http://localhost:8081/login', { username, password })
  .then(res => {
    if (res.status === 200) {
      setLoginStatus('Login successful!');
      console.log(res.data);
    } else {
      setLoginStatus('Login failed!');
      setError('Unexpected status code: ' + res.status);
    }
  })
  .catch(err => {
    setError('Login failed with error: ' + err.message);
  });
  
  }

  return (
    <div style={{ maxWidth: '400px', margin: 'auto', padding: '20px', border: '1px solid #ccc', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
      <h1>Login</h1>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <div style={{ marginBottom: '10px' }}>  {/* Adjusted margin-bottom here */}
          <label style={{ marginRight: '10px' }}>Username:</label>
          <input  type="text" value={username} onChange={(e) => setUsername(e.target.value)} style={{ padding: '8px', border: '1px solid #ddd', borderRadius: '4px', width: '383px' }} />
        </div>
        <div style={{ marginBottom: '10px' }}>  {/* Adjusted margin-bottom here */}
          <label style={{ marginRight: '10px' }}>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} style={{ padding: '8px', border: '1px solid #ddd', borderRadius: '4px',  width: '383px' }} />
        </div>
        <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#0056b3', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Login</button>
      </form>
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      {loginStatus && <p>{loginStatus}</p>}
    </div>
  );
}

export default Login;