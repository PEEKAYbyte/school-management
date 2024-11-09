import React, {useState} from 'react'
import axios from 'axios'

export default function Login() {
    const [username, setUsername]=useState("");
    const [password, setPassword]=useState("");
    const [error, setError]=useState("");

    const handleSubmit = async (e)=>{
        e.preventDefault();

        try {
            const response = await axios.post("https://jsonplaceholder.typicode.com/users",{
                username,
                password,
            });
            console.log(response.data);
        } catch (err){
            setError('Invalid credentials. please try again');
        }
    };
  return (
    <div>
      <h2> login page </h2>
      <form>
        <div>
            <label>Username:</label>
            <input 
               type='text' 
               value={username}
               onChange={(e)=> setUsername(e.target.value)}
               required
            />
        </div>
        <div>
            <label>Password:</label>
            <input
               type='password'
               value={password}
               onChange={(e) => setPassword(e.target.value)}
               required
            />
        </div>
        <button type='submit'>Login</button>
        {error && <p style={{color:'red'}}>{error}</p>}
      </form>
    </div>
  )
}
