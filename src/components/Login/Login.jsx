import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from 'redux/reducers/auth/operations';
export default function Loging() {
  const dispacht = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = e => {
    e.preventDefault();
    dispacht(login({ email, password }));
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
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
            placeholder="Your password"
            required
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </label>
        <button type="submit">Loding</button>
      </form>
    </div>
  );
}
