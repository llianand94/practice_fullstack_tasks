import {takeLatest} from 'redux-saga/effects';
import ACTION_TYPES from "../actions/actionsType";
import { createTaskSaga, deleteTaskSaga, getTaskSaga, updateTaskSaga } from './tasksSaga';

function * rootSaga(){
  yield takeLatest(ACTION_TYPES.CREATE_TASK_REQUEST, createTaskSaga);
  yield takeLatest(ACTION_TYPES.GET_TASK_REQUEST, getTaskSaga);
  yield takeLatest(ACTION_TYPES.DELETE_TASK_REQUEST, deleteTaskSaga);
  yield takeLatest(ACTION_TYPES.PATCH_TASK_REQUEST, updateTaskSaga);
}

export default rootSaga;