import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/reducers/auth/operations';
export default function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    console.log(e.target.value);
    dispatch(
      register({
        name: username,
        email,
        password,
      })
    );
  };
  return (
    <div>
      <form>
        <label onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            placeholder="Your name"
            value={username}
            onChange={e => setUsername(e.target.value)}
            required
          />
        </label>
        <label>
          <input
            type="email"
            name="email"
            pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
            placeholder="Your email"
            required
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </label>
        <label>
          <input
            type="text"
            name="password"
            placeholder="Your pasword"
            required
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </label>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}
