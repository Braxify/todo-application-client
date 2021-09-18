import styled from 'styled-components';

import { theme } from '../../styles/themes';

export const ActionButtons = styled('div')`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  left: 0;
  right: 0;
  transition: opacity 0.3s linear;
  opacity: 0;
  @media ${theme.media.extraLarge} {
    margin-bottom: 22px;
    opacity: 0.9;
  }
`;

export const StyledCard = styled('div')`
  background-color: ${(props) => props.color || '#FF9800'};
  color: #fff;
  width: 275px;
  min-height: 330px;
  padding: 25px 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 30px;
  position: relative;
  overflow: hidden;
  transition: opacity 0.2s linear;
  &:hover,
  &:hover > ${ActionButtons} {
    opacity: 0.9;
  }
  @media ${theme.media.small} {
    scroll-snap-align: start;
    min-width: 275px;
  }
`;

export const NewCard = styled('div')`
  background: ${(props) =>
    props.color ||
    'linear-gradient(144.51deg, #373B44 3.18%, #4286F4 145.51%)'};
  color: #fff;
  width: 275px;
  min-height: 330px;
  padding: 25px 30px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  border-radius: 30px;
  position: relative;
  overflow: hidden;
  align-items: center;
  transition: opacity 0.2s linear;
  &:hover,
  &:hover > ${ActionButtons} {
    opacity: 0.9;
  }
  @media ${theme.media.small} {
    scroll-snap-align: start;
    min-width: 275px;
  }
`;

export const CardHeader = styled('div')`
  display: flex;
  align-items: center;
  font-weight: 500;
  font-size: 18px;
`;

export const Date = styled('span')`
  margin-left: 15px;
  white-space: nowrap;
`;

export const Description = styled('div')`
  font-weight: 500;
  font-size: 24px;
  word-break: break-word;
  white-space: pre-line;
`;

const DefaultActionButton = styled.button`
  width: 93px;
  height: 60px;
  background-color: #ffffff;
  cursor: pointer;
  border: 0;
  outline: 0;
  border-radius: 50px;
`;
export const DoneButton = styled(DefaultActionButton)`
  transform: translateX(-30%);
`;
export const RemoveButton = styled(DefaultActionButton)`
  transform: translateX(30%);
`;
export const NewCardButton = styled(DefaultActionButton)`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: transparent;
`;

export const ActionButton = styled(DefaultActionButton)``;

export const ActionButtonIcon = styled('span')`
  font-size: 18px;
  margin-left: 12px;
`;
