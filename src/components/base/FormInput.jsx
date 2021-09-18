import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { theme } from '../../styles/themes';

const InputStyles = styled('div')`
  position: relative;
  margin-bottom: ${(props) => props.mb}px;
  input {
    padding: 23px 25px;
    background: #ffffff;
    border: 2px solid #585858;
    box-sizing: border-box;
    border-radius: 5px;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 128.4%;
    letter-spacing: 0.04em;
    font-family: 'Montserrat';
    color: #585858;
    width: 100%;
    height: 69px;
    @media ${theme.media.small} {
      font-size: 20px;
      padding: 16px;
    }
    &[type='password'] {
      font-size: 30px;
      line-height: 25px;
      &::placeholder {
        font-size: 18px;
        position: relative;
        letter-spacing: 0.04em;
        top: -4px;
        @media ${theme.media.small} {
          font-size: 20px;
        }
      }
    }
  }
  button {
    border: none;
    outline: none;
    padding: 0;
    margin: 0;
    background: transparent;
    position: absolute;
    right: 25px;
    top: calc(50% - 13px);
    cursor: pointer;
    &.active path {
      fill: #000;
    }
  }
`;

const FormInput = ({
  className,
  type,
  placeholder,
  onChange,
  value,
  name,
  mb,
}) => {
  const [passwordHidden, setPasswordHidden] = useState(false);

  const Switcher = (
    <button
      onClick={() => {
        setPasswordHidden((prev) => !prev);
      }}
      type="button"
      className={passwordHidden ? 'active' : ''}
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0)">
          <path
            d="M12 8.13763C9.86905 8.13763 8.13763 9.86904 8.13763 12C8.13763 14.131 9.86905 15.8624 12 15.8624C14.131 15.8624 15.8624 14.131 15.8624 12C15.8624 9.86904 14.131 8.13763 12 8.13763ZM11.707 10.8546C11.2275 10.8546 10.828 11.2542 10.828 11.7336H9.5494C9.57604 10.535 10.535 9.57604 11.707 9.57604V10.8546Z"
            fill="#585858"
          />
          <path
            d="M23.7203 11.2009C22.4151 9.57603 17.7536 4.27525 12 4.27525C6.24639 4.27525 1.58491 9.57603 0.279689 11.2009C-0.0932297 11.6537 -0.0932297 12.3197 0.279689 12.7991C1.58491 14.424 6.24639 19.7248 12 19.7248C17.7536 19.7248 22.4151 14.424 23.7203 12.7991C24.0932 12.3463 24.0932 11.6804 23.7203 11.2009ZM12 17.5938C8.9101 17.5938 6.40622 15.0899 6.40622 12C6.40622 8.91011 8.9101 6.40622 12 6.40622C15.0899 6.40622 17.5938 8.91011 17.5938 12C17.5938 15.0899 15.0899 17.5938 12 17.5938Z"
            fill="#585858"
          />
        </g>
        <defs>
          <clipPath id="clip0">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </button>
  );

  return (
    <InputStyles mb={mb}>
      <input
        className={className}
        type={passwordHidden ? 'text' : type}
        placeholder={placeholder}
        onChange={(e) => onChange(e)}
        value={value}
        name={name}
      />
      {type === 'password' && Switcher}
    </InputStyles>
  );
};

FormInput.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
  name: PropTypes.string,
  mb: PropTypes.number,
};

FormInput.defaultProps = {
  className: 'form-input',
  type: 'text',
  placeholder: 'Some placeholder',
  onChange: () => {},
  value: '',
  name: '',
  mb: 20,
};

export default FormInput;
