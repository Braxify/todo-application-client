import styled from 'styled-components';
import { theme } from '../../../../styles/themes';

export const Window = styled.div`
  max-width: 600px;
  background-color: #fff;
  z-index: 101;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  @media ${theme.media.small} {
    border-radius: 0;
  }
`;
export const WindowTitle = styled.div`
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  text-transform: capitalize;
  background: #e0eeff;
  width: 100%;
  text-align: center;
  padding: 24px 0;
  height: 77px;
  @media (max-width: 320px) {
    padding: 32px 0;
  }
`;
export const WindowWrapper = styled.div`
  padding: 30px;
  @media (max-width: 320px) {
    padding-bottom: 14px;
  }
`;
export const WindowForm = styled.div``;
export const WindowInput = styled.input`
  display: block;
  width: 540px;
  margin: 0;
  padding: 0;
  border: 1.5px solid #818181;
  padding: 22px;
  font-family: Montserrat;
  font-weight: 500;
  font-size: 20px;
  margin-bottom: 15px;
  &:placeholder {
    color: #818181;
  }
  @media ${theme.media.small} {
    width: 100%;
  }
`;

export const WindowTextarea = styled.textarea`
  display: block;
  width: 540px;
  margin: 0;
  padding: 20px !important;
  border: 1.5px solid #818181;
  padding: 22px;
  font-family: Montserrat;
  font-weight: 500;
  font-size: 20px;
  margin-bottom: 15px;
  white-space: pre-line;
  resize: none;
  &:placeholder {
    color: #818181;
  }
  @media ${theme.media.small} {
    width: 100%;
  }
`;

export const WindowActions = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

const WindowActionButton = styled.button`
  border: 0;
  outline: 0;
  margin: 0;
  padding: 10px 30px;
  font-family: Montserrat;
  font-weight: 500;
  font-size: 20px;
  text-transform: capitalize;
  color: #ffffff;
  border-radius: 5px;
  cursor: pointer;
  margin-left: 15px;
`;

export const CancelButton = styled(WindowActionButton)`
  background-color: #8388a4;
  margin-left: 0;
`;

export const SaveButton = styled(WindowActionButton)`
  background-color: #22bb33;
`;

export const ColorPickerWrapper = styled.div`
  margin-bottom: 20px;
`;

export const ColorPickerTitle = styled.div`
  margin-bottom: 10px;
  font-size: 18px;
`;
