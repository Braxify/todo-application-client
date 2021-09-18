import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TextBlockStyles = styled('div')`
  font-style: normal;
  letter-spacing: 0.04em;
  max-width: 580px;
  margin-bottom: ${(props) => props.mb}px;
  h1 {
    font-weight: 500;
    font-size: 36px;
    line-height: 44px;
    text-transform: uppercase;
    color: #000000;
    margin-bottom: 10px;
  }

  p {
    font-weight: normal;
    font-size: 18px;
    line-height: 128.4%;
    color: #585858;
  }
`;

const TextBlock = (props) => {
  const { title, subtitle, mb } = props;
  return (
    <TextBlockStyles mb={mb}>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </TextBlockStyles>
  );
};

TextBlock.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  mb: PropTypes.number,
};

TextBlock.defaultProps = {
  mb: 40,
};

export default TextBlock;
