export const isLength = (value, { min = 6, max }) => {
  if (typeof value !== 'string') {
    return false;
  }
  const { length } = value;

  if (typeof min !== 'number' || length < min) {
    return false;
  }

  if (min > max) {
    throw Error('Max length must be greater than min');
  }

  if (max) {
    if (typeof max !== 'number' || length > max) {
      return false;
    }
  }

  return true;
};

export const isValidResult = (result) => {
  return result.every((item) => item[Object.keys(item)[0]]);
};

// Get Keys from Validator Configuration
export const getKeys = (fields) => {
  const keys = {};
  Object.keys(fields).forEach((item) => {
    keys[item] = '';
  });
  return keys;
};

export const validate = (state, fields) => {
  const result = Object.keys(fields).map((field) => {
    const current = fields[field];

    // Default valid value - true
    const valid = { [field]: true };

    // Check availability isLength validate
    if (current.isLength) {
      return {
        [field]: isLength(state[field], { ...current.isLength }),
      };
    }

    // Check isEqual
    if (current.equal) {
      const isEqual = state[field] === state[current.equal];
      if (!isEqual) {
        return {
          [field]: false,
        };
      }
    }

    // Check isEmpty
    if (!state[field].length) {
      return {
        [field]: false,
      };
    }
    return valid;
  });

  // Return array of objects { [field]: valid ? true : false }
  return isValidResult(result);
};
