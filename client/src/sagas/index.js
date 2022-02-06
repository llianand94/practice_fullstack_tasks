import {takeLatest} from 'redux-saga/effects';
import ACTION_TYPES from "../actions/actionsType";
import { createTaskSaga, getTaskSaga } from './tasksSaga';

function * rootSaga(){
  yield takeLatest(ACTION_TYPES.CREATE_TASK_REQUEST, createTaskSaga);
  yield takeLatest(ACTION_TYPES.GET_TASK_REQUEST, getTaskSaga);
}

export default rootSaga;