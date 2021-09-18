import React, { useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { parseISO, format } from 'date-fns';

import useToast from '../../hooks/toast.hook';

import { AuthContext } from '../../context';
import { getAllTodos } from '../../context/auth/actions';

// Components
import Card from '../../components/Card';
import {
  Modal,
  EditTodoWindow,
  RemoveTodoWindow,
} from '../../components/Modal';

// Styles
import { Cards, CardsGroup, StyledHome, Title } from './styles';

const Home = ({ title }) => {
  const [state, dispatch] = useContext(AuthContext);

  const toast = useToast();

  useEffect(() => {
    async function fetchAllTodos() {
      await getAllTodos(dispatch);
    }
    fetchAllTodos();
  }, [dispatch]);

  useEffect(() => {
    document.title = title;
  }, [title]);

  useEffect(() => {
    toast(state.errorMessage, 'error');
    dispatch({ type: 'CLEAR_ERROR' });
  }, [dispatch, toast, state.errorMessage]);

  // const cardColors = [
  //   '#D32F2F',
  //   '#00BCD4',
  //   '#00BCD4',
  //   '#CDDC39',
  //   '#CDDC39',
  //   '#FF9800',
  // ];

  // const getRandomCardColor = () => {
  //   return cardColors[Math.floor(Math.random() * cardColors.length)];
  // };

  if (state.loading) {
    return <div>Loading...</div>;
  }

  return (
    <StyledHome>
      <CardsGroup>
        <Title>Not Completed</Title>
        <Cards>
          {state?.todos?.pending?.length > 0
            ? state.todos.pending.map((todo) => {
                const deadline = format(
                  parseISO(todo.deadline),
                  'dd MMMM HH:mm yyyy'
                );
                return (
                  <Card
                    key={todo._id}
                    date={deadline}
                    text={todo.title}
                    color={todo.color}
                    id={todo._id}
                    isCheck={false}
                  />
                );
              })
            : null}
          <Card text="Add new" addNew isCheck={false} id="-1" />
        </Cards>
      </CardsGroup>
      <CardsGroup>
        <Title>Completed</Title>

        {state?.todos?.completed?.length > 0 ? (
          <Cards>
            {state.todos.completed.map((todo) => {
              const deadline = format(
                parseISO(todo.deadline),
                'dd MMMM HH:mm yyyy'
              );
              return (
                <Card
                  date={deadline}
                  text={todo.title}
                  color={todo.color}
                  key={todo._id}
                  id={todo._id}
                  isCheck
                />
              );
            })}
          </Cards>
        ) : (
          <h3>No completed todos...</h3>
        )}
      </CardsGroup>
      <Modal isOpen={state.ui.editTodoModal.isOpened}>
        <EditTodoWindow />
      </Modal>
      <Modal isOpen={state.ui.removeTodoModal.isOpened}>
        <RemoveTodoWindow />
      </Modal>
    </StyledHome>
  );
};

Home.propTypes = {
  title: PropTypes.string,
};

Home.defaultProps = {
  title: 'Home',
};

export default Home;
