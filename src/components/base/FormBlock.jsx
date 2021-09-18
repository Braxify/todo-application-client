import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

// Image
import Chameleon from '../../img/pictures/chameleon.jpg';
import { theme } from '../../styles/themes';

// Styles
const FormBlockStyles = styled('div')`
  display: flex;
  border-radius: 20px;
  overflow: hidden;
  background: #ffffff;
  box-shadow: 26px 4px 250px rgba(0, 0, 0, 0.25);
  @media ${theme.media.small} {
    flex-direction: column;
  }
`;

const FormBlockImage = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media ${theme.media.small} {
    width: 100%;
  }

  img {
    width: 100%;
    max-width: 600px;
    object-fit: cover;
    height: 100%;
  }
`;

const FormBody = styled.div`
  width: 50%;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media ${theme.media.small} {
    width: 100%;
  }
  form {
    width: 100%;
    max-width: 375px;
    @media ${theme.media.small} {
      max-width: 100%;
    }
  }
`;

const FormBlock = (props) => {
  const { image, children, className } = props;
  return (
    <FormBlockStyles className={className}>
      <FormBlockImage>
        <img src={image} alt="form" />
      </FormBlockImage>
      <FormBody>{children}</FormBody>
    </FormBlockStyles>
  );
};

FormBlock.propTypes = {
  image: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

FormBlock.defaultProps = {
  className: '',
  image: Chameleon,
};

export default FormBlock;
