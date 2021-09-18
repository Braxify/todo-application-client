import styled from 'styled-components';
import { theme } from '../../styles/themes';

export const StyledHome = styled('div')`
  margin-top: 60px;

  @media ${theme.media.large} {
    margin-top: 20px;
  }
`;

export const Title = styled('h2')`
  font-family: Montserrat, sans-serif;
  font-weight: 500;
  font-size: 36px;
  line-height: 44px;
  color: #000000;
  margin-bottom: 42px;
  @media ${theme.media.large} {
    margin-bottom: 22px;
  }
`;

export const CardsGroup = styled('div')`
  margin-bottom: 100px;
  @media ${theme.media.large} {
    margin-bottom: 40px;
  }
  @media ${theme.media.small} {
    margin: 0 -15px 40px;
    padding: 0 15px;
  }
`;

export const Cards = styled('div')`
  display: flex;
  gap: 25px 22px;
  flex-wrap: wrap;

  @media ${theme.media.small} {
    flex-wrap: nowrap;
    flex-direction: row;
    width: 100%;
    scroll-snap-type: x mandatory;
    overflow-x: auto;
  }
`;
