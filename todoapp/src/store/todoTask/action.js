import {
  ADD_TASK,
  EDIT_TASK,
  FINISHED_TASK,
  SCROLL_SCREEN,
  SEARCH_TASK,
  VIEW_TASK,
  DELETE_TASK,
  GET_STATE,
  INPUT_TASK_NAME,
  INPUT_TASK_DESCRIPTION,
  INPUT_TASK_START_DATE,
  INPUT_TASK_END_DATE,
  RESET_MESSAGE,
  AUTO_CHECK_EXPRIDED_TASK,
  INPUT_SEARCH_NAME,
  INPUT_SEARCH_START_DATE,
  INPUT_SEARCH_END_DATE,
} from "./actionType";
export const inputTaskName = (payload) => {
  return {
    type: INPUT_TASK_NAME,
    payload,
  };
};

export const inputTaskDescription = (payload) => {
  return {
    type: INPUT_TASK_DESCRIPTION,
    payload,
  };
};
export const inputTaskStartDate = (payload) => {
  return {
    type: INPUT_TASK_START_DATE,
    payload,
  };
};
export const inputTaskEndDate = (payload) => {
  return {
    type: INPUT_TASK_END_DATE,
    payload,
  };
};

export const addTask = (payload) => {
  return {
    type: ADD_TASK,
    payload,
  };
};
export const editTask = (payload) => {
  return {
    type: EDIT_TASK,
    payload,
  };
};
export const finishedTask = (payload) => {
  return {
    type: FINISHED_TASK,
    payload,
  };
};
export const scrollScreen = (payload) => {
  return {
    type: SCROLL_SCREEN,
    payload,
  };
};

export const viewTask = (payload) => {
  return {
    type: VIEW_TASK,
    payload,
  };
};
export const searchTask = (payload) => {
  return {
    type: SEARCH_TASK,
    payload,
  };
};
export const deleteTask = (payload) => {
  return {
    type: DELETE_TASK,
    payload,
  };
};
export const getState = () => {
  return {
    type: GET_STATE,
  };
};
export const resetMessage = () => {
  return {
    type: RESET_MESSAGE,
  };
};
export const autoCheckExpridedTask = () => {
  return {
    type: AUTO_CHECK_EXPRIDED_TASK,
  };
};
export const inputSearchName = (payload) => {
  return {
    type: INPUT_SEARCH_NAME,
    payload,
  };
};
export const inputSearchStartDate = (payload) => {
  return {
    type: INPUT_SEARCH_START_DATE,
    payload,
  };
};
export const inputSearchEndDate = (payload) => {
  return {
    type: INPUT_SEARCH_END_DATE,
    payload,
  };
};
