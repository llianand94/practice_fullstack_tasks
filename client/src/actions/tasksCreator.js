import ACTIONS_TYPE from "./actionsType";

export const getTaskRequest = ({limit, offset}) =>({
  type: ACTIONS_TYPE.GET_TASK_REQUEST,
  payload: {limit,offset}
});

export const getTaskResolve = ({tasks}) =>({
  type: ACTIONS_TYPE.GET_TASK_RESOLVE,
  payload: {tasks}
});

export const getTaskReject = ({error}) =>({
  type: ACTIONS_TYPE.GET_TASK_REJECT,
  payload: {error}
});
export const createTaskRequest = ({values}) =>({
  type: ACTIONS_TYPE.CREATE_TASK_REQUEST,
  payload: {values}
});
export const createTaskResolve = ({task}) =>({
  type: ACTIONS_TYPE.CREATE_TASK_RESOLVE,
  payload: {task}
});
export const createTaskReject = ({error}) =>({
  type: ACTIONS_TYPE.CREATE_TASK_REJECT,
  payload: {error}
});