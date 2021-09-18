import styled from 'styled-components';

import { theme } from '../../styles/themes';

// eslint-disable-next-line import/prefer-default-export
export const StyledModal = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 100;
  width: 100%;
  height: 100%;
  overflow: auto;
  background: rgba(0, 0, 0, 0.33);

  transition: opacity ${theme.animation.duration}ms linear;
  opacity: ${(props) => (props.isOpened ? 1 : 0)};
  pointer-events: ${(props) => (props.isOpened ? 'all' : 'none')};
`;
