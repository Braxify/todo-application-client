import { useEffect, useState } from 'react';
import { getKeys, validate } from './validate';

const useForm = (fields) => {
  const [value, setValue] = useState(getKeys(fields));
  const [disabled, setDisabled] = useState(true);

  const changeHandler = (e) => {
    setValue((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  };

  useEffect(() => {
    setDisabled(!validate(value, fields));
  }, [fields, value]);

  return {
    value,
    disabled,
    changeHandler,
  };
};

export default useForm;
