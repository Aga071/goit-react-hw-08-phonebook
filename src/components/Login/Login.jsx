import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from 'redux/reducers/auth/operations';
import { Box, Button, Input } from '@chakra-ui/react';
import { fetchContacts } from 'redux/reducers/contacts/operations';

export default function Loging() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(login({ email, password }));
    setTimeout(() => dispatch(fetchContacts()), 1000);
  };
  return (
    <Box
      display="flex"
      alignItems="center"
      flexDirection="column"
      gap={10}
      border="1px"
      borderColor="gray.200"
      mt={10}
      py={30}
      boxShadow="dark-lg"
      p="4"
      rounded="md"
      bg="white"
    >
      <form onSubmit={handleSubmit}>
        <label>
          <Input
            type="email"
            name="email"
            pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
            placeholder="Your email"
            required
            value={email}
            onChange={e => setEmail(e.target.value)}
            width="auto"
          />
        </label>
        <label>
          <Input
            type="text"
            name="password"
            placeholder="Your password"
            required
            value={password}
            onChange={e => setPassword(e.target.value)}
            width="auto"
          />
        </label>
        <Button colorScheme="blue" type="submit">
          Login
        </Button>
      </form>
    </Box>
  );
}
