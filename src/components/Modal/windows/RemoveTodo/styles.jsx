import styled from 'styled-components';

import { ReactComponent as CrossInCircleSvg } from '../../../../img/cross-in-circle.svg';
import { theme } from '../../../../styles/themes';

export const Window = styled.div`
  max-width: 600px;
  display: flex;
  padding: 100px 141px 200px;
  align-items: center;
  flex-direction: column;
  height: 528px;
  background-color: #fff;
  z-index: 101;
  position: relative;
  border-radius: 5px;
  overflow: hidden;
  @media ${theme.media.small} {
    padding: 50px;
    height: 420px;
    width: 95%;
  }
`;

export const WindowTitle = styled.span``;
export const WindowForm = styled.div``;
export const WindowActions = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
`;
export const WindowDescription = styled.p`
  font-size: 28px;
  text-align: center;
  line-height: 32px;
  @media ${theme.media.small} {
    font-size: 24px;
  }
`;

export const CrossInCircleIcon = styled(CrossInCircleSvg)`
  width: 124px;
  height: 124px;
  margin-bottom: 40px;
`;

const StyledButton = styled.button`
  border: 0;
  outline: 0;
  margin: 0;
  padding: 34px 0;
  width: 50%;
  font-family: Montserrat;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: capitalize;
  color: white;
  cursor: pointer;
  @media ${theme.media.small} {
    font-size: 18px;
    padding: 24px 0;
  }
`;

export const CancelButton = styled(StyledButton)`
  background-color: #8388a4;
`;
export const RemoveButton = styled(StyledButton)`
  background-color: #e24444;
`;
