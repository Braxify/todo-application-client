import React, { useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { Redirect, useHistory } from 'react-router-dom';

// Toastify
import useToast from '../../hooks/toast.hook';

// Components
import TextBlock from '../../components/base/TextBlock';
import FormInput from '../../components/base/FormInput';
import FormBlock from '../../components/base/FormBlock';
import FormButton from '../../components/base/FormButton';

// Hooks
import useForm from '../../hooks/form/form.hook';

// Context
import { AuthContext } from '../../context';
import { register } from '../../context/auth/actions';
import { StyledRegister } from './styles';

const Register = ({ title }) => {
  const [state, dispatch] = useContext(AuthContext);

  const history = useHistory();
  const toast = useToast();

  useEffect(() => {
    document.title = title;
  }, [title]);

  useEffect(() => {
    toast(state.errorMessage, 'error');
    dispatch({ type: 'CLEAR_ERROR' });
  }, [dispatch, toast, state.errorMessage]);

  const validatorConf = {
    password: {
      isLength: {
        min: 6,
      },
    },
    username: {
      isLength: {
        min: 4,
      },
    },
    firstName: {
      isLength: {
        min: 1,
      },
    },
    lastName: {
      isLength: {
        min: 1,
      },
    },
    confirmedPassword: {
      equal: 'password',
    },
  };

  const { value, disabled, changeHandler } = useForm(validatorConf);

  const submitHandler = async (e) => {
    e.preventDefault();
    const success = await register(dispatch, value);
    if (success) {
      history.push('/');
    }
  };

  return state?.userInfo?.token ? (
    <Redirect to="/" />
  ) : (
    <StyledRegister>
      <TextBlock
        title="Register"
        subtitle="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the"
      />
      <FormBlock>
        <form onSubmit={submitHandler}>
          <FormInput
            onChange={changeHandler}
            value={value.username}
            type="text"
            name="username"
            placeholder="Username"
          />
          <FormInput
            onChange={changeHandler}
            value={value.firstName}
            type="text"
            name="firstName"
            placeholder="First Name"
          />
          <FormInput
            onChange={changeHandler}
            value={value.lastName}
            type="text"
            name="lastName"
            placeholder="Last Name"
          />
          <FormInput
            onChange={changeHandler}
            value={value.password}
            type="password"
            name="password"
            placeholder="Password"
          />
          <FormInput
            onChange={changeHandler}
            value={value.confirmedPassword}
            type="password"
            name="confirmedPassword"
            placeholder="Confirm password"
          />
          <FormButton disabled={disabled} type="submit">
            Register
          </FormButton>
        </form>
      </FormBlock>
    </StyledRegister>
  );
};

Register.propTypes = {
  title: PropTypes.string,
};

Register.defaultProps = {
  title: 'Register',
};

export default Register;
