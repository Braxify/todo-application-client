import React, { useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { useHistory, Redirect } from 'react-router-dom';
import useToast from '../../hooks/toast.hook';

// Components
import TextBlock from '../../components/base/TextBlock';
import FormInput from '../../components/base/FormInput';
import FormButton from '../../components/base/FormButton';

// Styles
import FormBlock from '../../components/base/FormBlock';

// Hooks
import useForm from '../../hooks/form/form.hook';

// Context
import { AuthContext } from '../../context';
import { login } from '../../context/auth/actions';
import { StyledLogin } from './styles';

const Login = ({ title }) => {
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
  };

  const { value, disabled, changeHandler } = useForm(validatorConf);

  const submitHandler = async (e) => {
    e.preventDefault();
    const success = await login(dispatch, value);
    if (success) {
      history.push('/');
    }
  };

  return state?.userInfo?.token ? (
    <Redirect to="/" />
  ) : (
    <StyledLogin>
      <TextBlock
        title="Login"
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
            value={value.password}
            type="password"
            name="password"
            placeholder="Password"
          />
          <FormButton disabled={disabled} type="submit">
            Login
          </FormButton>
        </form>
      </FormBlock>
    </StyledLogin>
  );
};

Login.propTypes = {
  title: PropTypes.string,
};

Login.defaultProps = {
  title: 'Login',
};

export default Login;
