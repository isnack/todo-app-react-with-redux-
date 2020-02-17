import {
  ListTodos,
  AddTodo,
  MarkAsDoneTodo,
  MarkAsPendingTodo,
  RemoveTodo
} from "./../services/httpTodoService";
import ACTIONS from "./actionsConstants";

export const changeDescription = event => ({
  type: ACTIONS.DESCRIPTION_CHANGED,
  payload: event.target.value
});

export const search = (description = "") => {
  return dispatch => {
    ListTodos(description).then(response => {
      dispatch({ type: ACTIONS.TODO_SEARCHED, payload: response.data });
    });
  };
};

export const add = description => {
  return dispatch => {
    AddTodo(description)
      .then(response => {
        dispatch({ type: ACTIONS.TODO_ADDED, payload: response.data });
      })
      .then(dispatch(search()));
  };
};

export const markAsDone = (todo, description) => {
  return dispatch => {
    MarkAsDoneTodo(todo)
      .then(response => {
        dispatch({ type: ACTIONS.TODO_MARKED_AS_DONE, payload: response.data });
      })
      .then(() => dispatch(search(description)));
  };
};

export const markAsPending = (todo, description) => {
  return dispatch => {
    MarkAsPendingTodo(todo)
      .then(response => {
        dispatch({
          type: ACTIONS.TODO_MARKED_AS_PENDING,
          payload: response.data
        });
      })
      .then(() => dispatch(search(description)));
  };
};

export const remove = idTodo => {
  return dispatch => {
    RemoveTodo(idTodo).then(response => dispatch(search()));
  };
};

export const clear = () => {
  return dispatch => {
    dispatch({ type: ACTIONS.TODO_CLEAR });
  };
};
