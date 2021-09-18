import styled from 'styled-components';

import { theme } from '../../styles/themes';

export const StyledHeader = styled('div')`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 20px 0;
  border-bottom: 1px solid #c4c4c4;

  @media ${theme.media.small} {
    padding: 14px 0;
  }
`;

export const HeaderLink = styled('span')`
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
  color: #000000;
  @media ${theme.media.small} {
    font-size: 14px;
  }
  a {
    color: #3290ff;
    font-weight: 500;
    text-decoration: none;
    @media ${theme.media.small} {
      font-size: 16px;
    }
    &:hover {
      opacity: 0.7;
    }
  }
`;

export const HeaderRight = styled('div')`
  text-align: left;
  display: flex;
  align-items: center;
  @media ${theme.media.small} {
    margin-left: 10px;
  }
`;

export const HeaderLogoutButton = styled(HeaderLink)`
  border: 0;
  outline: 0;
  background-color: transparent;
  cursor: pointer;
`;

export const Logotype = styled('img')`
  width: 208px;
  @media ${theme.media.small} {
    width: 45%;
  }
`;

export const UserInfo = styled('div')`
  margin-right: 30px;
  display: flex;
  flex-direction: column;
  font-family: Montserrat;
  @media ${theme.media.small} {
    margin-right: 12px;
    text-align: right;
  }
`;

export const UserName = styled('span')`
  font-size: 18px;
  line-height: 22px;
  color: black;
  @media ${theme.media.small} {
    font-size: 17px;
  }
`;

export const UserUsername = styled('span')`
  font-size: 14px;
  line-height: 17px;
  color: #3290ff;
  @media ${theme.media.small} {
    font-size: 13px;
  }
`;
