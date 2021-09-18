import React, { useState, useEffect, useContext } from 'react';
import { CirclePicker, GithubPicker, PhotoshopPicker } from 'react-color';
import { format } from 'date-fns';

import { AuthContext } from '../../../../context';
import {
  changeTodoColor,
  closeEditModal,
  createNewTodo,
  updateTodo,
} from '../../../../context/auth/actions';

import {
  Window,
  WindowTitle,
  WindowWrapper,
  WindowForm,
  WindowInput,
  WindowActions,
  CancelButton,
  SaveButton,
  WindowTextarea,
  ColorPickerWrapper,
  ColorPickerTitle,
} from './styles';

import { theme } from '../../../../styles/themes';

export const EditTodoWindow = () => {
  const [state, dispatch] = useContext(AuthContext);
  const { ui } = state;

  const [todo, setTodo] = useState({
    title: '',
    color: 'orange',
    todoDate: format(new Date(), "yyyy-MM-dd'T'HH:mm"),
  });

  const [isSaving, setSaving] = useState(false);

  useEffect(() => {
    if (ui.editTodoModal.type === 'UPDATE' && !isSaving) {
      setTodo({
        todoId: ui.editTodoModal.todoId,
        isCheck: ui.editTodoModal.isCheck,
        title: ui.editTodoModal.todoTitle,
        color: ui.editTodoModal.color,
        todoDate: format(
          new Date(ui.editTodoModal.todoDate),
          "yyyy-MM-dd'T'HH:mm"
        ),
      });
    } else if (ui.editTodoModal.type === 'ADD' && !isSaving) {
      setTodo({
        title: '',
        color: ui.editTodoModal.color || 'orange',
        todoDate: format(new Date(), "yyyy-MM-dd'T'HH:mm"),
      });
    }
  }, [ui.editTodoModal, isSaving]);

  const changeHandler = (e) => {
    setTodo({ ...todo, [e.target.name]: e.target.value });
  };

  const handleClose = () => {
    closeEditModal(dispatch);
  };

  const handleSave = () => {
    setSaving(true);
    if (ui.editTodoModal.type === 'ADD') {
      createNewTodo(dispatch, todo);
    } else if (ui.editTodoModal.type === 'UPDATE') {
      updateTodo(dispatch, todo);
    }
    handleClose();
    setTimeout(() => setSaving(false), theme.animation.duration);
  };

  const handleColorChange = (color) => {
    setTodo({ ...todo, color: color.hex });
  };

  return (
    <Window onClick={(e) => e.stopPropagation()}>
      <WindowTitle>{ui.editTodoModal.title}</WindowTitle>
      <WindowWrapper>
        <WindowForm>
          <WindowTextarea
            name="title"
            placeholder="Description"
            onChange={changeHandler}
            value={todo.title}
            rows="5"
          />
          <WindowInput
            type="datetime-local"
            name="todoDate"
            onChange={changeHandler}
            value={todo.todoDate}
          />
          <ColorPickerWrapper>
            <ColorPickerTitle>Color:</ColorPickerTitle>
            <CirclePicker
              color={ui.editTodoModal.color}
              onChange={handleColorChange}
            />
          </ColorPickerWrapper>
        </WindowForm>
        <WindowActions>
          <CancelButton type="button" onClick={handleClose}>
            Cancel
          </CancelButton>
          <SaveButton type="button" onClick={handleSave}>
            Save
          </SaveButton>
        </WindowActions>
      </WindowWrapper>
    </Window>
  );
};
