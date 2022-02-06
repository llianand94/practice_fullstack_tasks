import {put} from 'redux-saga/effects';
import * as API from '../api';
import * as tasksCreator from '../actions/tasksCreator';

export function * createTaskSaga(action){
  try {
    const {data:{data:[task]}} = yield API.createTask(action.payload.values)
    yield put(tasksCreator.createTaskResolve({task}))
  } catch (error) {
    yield put(tasksCreator.createTaskReject({error}))
  }
}
export function * getTaskSaga(action){
  try {
    const {data:{data:tasks}} = yield API.getTasks(action.payload);
    yield put(tasksCreator.getTaskResolve({tasks}));
  } catch (error) {
    yield put(tasksCreator.getTaskReject({error}))
  }
}
