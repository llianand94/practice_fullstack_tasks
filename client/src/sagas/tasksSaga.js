import {put} from 'redux-saga/effects';
import * as API from '../api';
import * as tasksCreator from '../actions/tasksCreator';

export function * createTaskSaga(action){
  try {
    const {data:{payload:task}} = yield API.createTask(action.payload.values)
    yield put(tasksCreator.createTaskResolve({task}))
  } catch (error) {
    yield put(tasksCreator.createTaskReject({error}))
  }
}
export function * getTaskSaga(action){
  try {
    const {data:{payload:tasks}} = yield API.getTasks(action.payload);
    yield put(tasksCreator.getTaskResolve({tasks}));
  } catch (error) {
    yield put(tasksCreator.getTaskReject({error}))
  }
}
export function * deleteTaskSaga(action){
  try {
    const {data:{payload:{taskId,rows}}} = yield API.deleteTask(action.payload);
    yield put(tasksCreator.deleteTaskResolve({taskId,rows}));
  } catch (error) {
    yield put(tasksCreator.deleteTaskReject({error}))
  }
}
export function * updateTaskSaga(action){
  try {
    const {data:{payload:{task}}} = yield API.patchTask(action.payload);
    yield put(tasksCreator.updateTaskResolve({task}));
  } catch (error) {
    yield put(tasksCreator.updateTaskReject({error}))
  }
}