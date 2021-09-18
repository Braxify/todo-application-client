import React, { useContext } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

// Icons
import LogotypeIcon from '../../img/logotype.svg';
import LogoutIcon from '../../img/logout.svg';

// Context
import { AuthContext } from '../../context';
import { logout } from '../../context/auth/actions';

// Axios (interceptors)
import { axiosDispatch } from '../../api';

import {
  StyledHeader,
  Logotype,
  HeaderRight,
  HeaderLink,
  UserInfo,
  UserName,
  UserUsername,
  HeaderLogoutButton,
} from './styles';

const Header = () => {
  const [state, dispatch] = useContext(AuthContext);

  // Pass dispatch() to interceptor (log the user out if the user is Unauthorized)
  axiosDispatch(dispatch);

  const { pathname: path } = useLocation();

  const handleLogout = async () => {
    await logout(dispatch);
  };

  if (state.loading) {
    return <div>Loading...</div>;
  }

  if (path === '/login') {
    return (
      <StyledHeader>
        <Logotype src={LogotypeIcon} alt="logotype" />
        <HeaderRight>
          <HeaderLink>
            Don&apos;t have an account? &nbsp;
            <NavLink to="/register">Register</NavLink>
          </HeaderLink>
        </HeaderRight>
      </StyledHeader>
    );
  }
  if (path === '/register') {
    return (
      <StyledHeader>
        <Logotype src={LogotypeIcon} alt="logotype" />
        <HeaderRight>
          <HeaderLink>
            Already have an account?&nbsp;
            <NavLink to="/login">Login</NavLink>
          </HeaderLink>
        </HeaderRight>
      </StyledHeader>
    );
  }

  return (
    <StyledHeader>
      <Logotype src={LogotypeIcon} alt="logotype" />
      {state.userInfo?.token ? (
        <HeaderRight>
          <UserInfo>
            <UserName>
              {state.userInfo.firstName} {state.userInfo.lastName}
            </UserName>
            <UserUsername>@{state.userInfo.username}</UserUsername>
          </UserInfo>
          <HeaderLogoutButton type="button" onClick={handleLogout}>
            <img src={LogoutIcon} alt="Log Out" />
          </HeaderLogoutButton>
        </HeaderRight>
      ) : (
        <span>
          Please <NavLink to="/login">Log in</NavLink> first.
        </span>
      )}
    </StyledHeader>
  );
};

export default Header;
