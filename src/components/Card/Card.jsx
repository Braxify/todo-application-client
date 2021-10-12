import React, { useContext } from 'react';
import PropTypes from 'prop-types';

// Icon
import CalendarIcon from '../../img/calendar.svg';
import CheckIcon from '../../img/check.svg';
import PencilIcon from '../../img/pencil.svg';
import TrashIcon from '../../img/trash.svg';
import PlusIcon from '../../img/plus.svg';

// Context
import { AuthContext } from '../../context';
import {
  openEditModal,
  openRemoveModal,
  toggleTodoStatus,
} from '../../context/auth/actions';

// Styles
import {
  StyledCard,
  NewCard,
  ActionButtons,
  CardHeader,
  Date,
  Description,
  ActionButton,
  ActionButtonIcon,
  DoneButton,
  RemoveButton,
  NewCardButton,
} from './styles';

function Card({ id, date, text, color, isCheck, addNew }) {
  const [state, dispatch] = useContext(AuthContext);

  const toggleStatus = () => {
    toggleTodoStatus(dispatch, { id, isCheck });
  };
  const edit = (
    todoId,
    todoTitle,
    todoDescription,
    todoDate,
    title = 'Edit the todo'
  ) => {
    openEditModal(dispatch, {
      isCheck,
      todoId,
      type: 'UPDATE',
      title,
      todoTitle,
      todoDescription,
      todoDate,
      color,
    });
  };
  const remove = (
    description = 'Are you sure you want to remove the item?'
  ) => {
    openRemoveModal(dispatch, { id, isCheck, description });
  };

  const addTodo = (title = 'Add new todo') => {
    openEditModal(dispatch, {
      type: 'ADD',
      title,
    });
  };

  if (addNew) {
    return (
      <NewCard>
        <Description>{text}</Description>
        <NewCardButton onClick={() => addTodo()}>
          <img src={PlusIcon} alt="Add New Todo" />
        </NewCardButton>
      </NewCard>
    );
  }

  return (
    <StyledCard color={color}>
      <CardHeader>
        <img src={CalendarIcon} alt="calendar" />{' '}
        <Date>{date.slice(0, date.length - 5)}</Date>
      </CardHeader>
      <Description>{text}</Description>
      <ActionButtons>
        <DoneButton onClick={toggleStatus}>
          {isCheck ? (
            <ActionButtonIcon>&#128316;</ActionButtonIcon>
          ) : (
            <img src={CheckIcon} alt="Mark as done" />
          )}
        </DoneButton>
        <ActionButton onClick={() => edit(id, text, 'DESCRIPTION', date)}>
          <img src={PencilIcon} alt="Edit" />
        </ActionButton>
        <RemoveButton onClick={() => remove()}>
          <img src={TrashIcon} alt="Remove" />
        </RemoveButton>
      </ActionButtons>
    </StyledCard>
  );
}

Card.propTypes = {
  id: PropTypes.string.isRequired,
  date: PropTypes.string,
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
  addNew: PropTypes.bool,
  isCheck: PropTypes.bool.isRequired,
};

Card.defaultProps = {
  color: '#ff9800',
  addNew: false,
  date: '',
};

export default Card;
