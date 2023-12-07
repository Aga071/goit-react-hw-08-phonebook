import { useAuth } from 'hook/useAuth';
import { Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { logout } from 'redux/reducers/auth/operations';
import { selectEmail } from 'redux/reducers/auth/selectors';
import { IoHome } from 'react-icons/io5';
import { IoIosLogOut } from 'react-icons/io';

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Box,
  Text,
} from '@chakra-ui/react';

const AuthenticatedNav = () => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(logout());
  };
  const email = useSelector(selectEmail);
  return (
    <>
      <BreadcrumbItem>
        <BreadcrumbLink fontSize={22} href="contacts">
          Contacts
        </BreadcrumbLink>
      </BreadcrumbItem>

      <Box ml={150} display="flex" alignItems="center" gap={5}>
        <Text>{email}</Text>
        <Button colorScheme="blue" onClick={handleClick}>
          <IoIosLogOut />
        </Button>
      </Box>
    </>
  );
};

const UnauthenticatedNav = () => (
  <Breadcrumb>
    <BreadcrumbItem>
      <BreadcrumbLink fontSize={22} href="/register">
        Register
      </BreadcrumbLink>
    </BreadcrumbItem>

    <BreadcrumbItem>
      <BreadcrumbLink fontSize={22} href="/login">
        Login
      </BreadcrumbLink>
    </BreadcrumbItem>
  </Breadcrumb>
);
export default function Navigation() {
  const { isLoggedIn } = useAuth();
  return (
    <Box m={15} ms={15}>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        border="1px"
        borderColor="gray.200"
        boxShadow="dark-lg"
        p="4"
        rounded="md"
        bg="white"
      >
        <Breadcrumb>
          <BreadcrumbItem>
            <BreadcrumbLink fontSize={22} href="/">
              <IoHome />
            </BreadcrumbLink>
          </BreadcrumbItem>

          {isLoggedIn ? <AuthenticatedNav /> : <UnauthenticatedNav />}
        </Breadcrumb>
      </Box>
      <Suspense fallback={<p>Loading...</p>}>
        <Outlet />
      </Suspense>
    </Box>
  );
}
