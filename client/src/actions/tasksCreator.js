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
export const deleteTaskRequest = ({taskId}) =>({
  type: ACTIONS_TYPE.DELETE_TASK_REQUEST,
  payload: {taskId}
});
export const deleteTaskResolve = ({taskId, rows}) =>({
  type: ACTIONS_TYPE.DELETE_TASK_RESOLVE,
  payload: {taskId, rows}
});
export const deleteTaskReject = ({error}) =>({
  type: ACTIONS_TYPE.DELETE_TASK_REJECT,
  payload: {error}
});
export const updateTaskRequest = ({values}) =>({
  type: ACTIONS_TYPE.PATCH_TASK_REQUEST,
  payload: {values}
});
export const updateTaskResolve = ({task}) =>({
  type: ACTIONS_TYPE.PATCH_TASK_RESOLVE,
  payload: {task}
});
export const updateTaskReject = ({error}) =>({
  type: ACTIONS_TYPE.PATCH_TASK_REJECT,
  payload: {error}
});