import produce from "immer";
import ACTIONS_TYPE from "../actions/actionsType";


const initialState ={
  tasks:[],
  isFetching: false,
  error:null
};

const handleRequest = produce((draftState, action)=>{
  draftState.isFetching=true;
});
const handleError = produce((draftState, action)=>{
  const {payload:{error}} = action;
  draftState.error=error;
  draftState.isFetching=false;
});

const handlers = {
  // [ACTIONS_TYPE.CLEAR_USER_ERROR]:produce((draftState, action)=>{
  //   draftState.error=null;
  // }),
  [ACTIONS_TYPE.GET_TASK_REQUEST]:handleRequest,
  [ACTIONS_TYPE.CREATE_TASK_REQUEST]:handleRequest,
  [ACTIONS_TYPE.DELETE_TASK_REQUEST]:handleRequest,
  [ACTIONS_TYPE.PATCH_TASK_REQUEST]:handleRequest,

  [ACTIONS_TYPE.GET_TASK_RESOLVE]:produce((draftState, action)=>{
    const {payload:{tasks:newTasks}} = action;
    draftState.isFetching=false;
    draftState.tasks = newTasks;
  }),
  [ACTIONS_TYPE.CREATE_TASK_RESOLVE]:produce((draftState, action)=>{
    const {payload:{task}} = action;
    draftState.isFetching=false;
    draftState.tasks.push(task);
  }),
  [ACTIONS_TYPE.DELETE_TASK_RESOLVE]:produce((draftState, action)=>{
    const {payload: { taskId }} = action;
    draftState.isFetching = false;
    const newTasks =  draftState.tasks.filter((task)=>task.id===taskId);
   
    draftState.tasks = newTasks;
  }),
  [ACTIONS_TYPE.PATCH_TASK_RESOLVE]:produce((draftState, action)=>{
    const {payload: { task: updatedTask }} = action;
    draftState.isFetching = false;
    const newTasks = draftState.tasks.map((task)=>{
      if(task.id===updatedTask.id){
        return updatedTask
      }
      return task
    });
    draftState.tasks = newTasks;
  }),

  [ACTIONS_TYPE.GET_TASK_REJECT]:handleError,
  [ACTIONS_TYPE.CREATE_TASK_REJECT]:handleError,
  [ACTIONS_TYPE.DELETE_TASK_REJECT]:handleError,
  [ACTIONS_TYPE.PATCH_TASK_REJECT]:handleError
}

function taskReducer(state = initialState, action){
  const {type} = action;
  const handler = handlers[type];
  if(handler){
    return handler(state, action);
  }
  return state;
}

export default taskReducer;
