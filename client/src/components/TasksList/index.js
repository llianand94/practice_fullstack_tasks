import React, {useEffect} from 'react';
import {bindActionCreators} from 'redux';
import { useDispatch, useSelector } from 'react-redux';
import * as tasksCreator from '../../actions/tasksCreator';

const TasksList = (props) => {
  
  const {getTaskRequest,deleteTaskRequest} = bindActionCreators(tasksCreator,useDispatch());
  const {tasks,isFetching,error} = useSelector(({tasks})=>tasks);
  const getTasks = ({limit, offset}={})=>{getTaskRequest({limit, offset})};
  const deleteTask = (taskId)=>{deleteTaskRequest({taskId})};
  
 
  useEffect(() => {
    getTasks();
  },[]);
  return (
    
  <ul>
    
    {isFetching && 'Now fetching process'}
    {error && error.message}
    {console.log(error)}
    <button onClick={getTasks}>Get ALL</button>
    
    {tasks.map((elem, index)=>(
      <li key={index}>
        <span>{elem.id}. Author: {elem.author} Text: {elem.body}</span>
       <button style={{"margin-left":"10px"}}onClick={()=>{deleteTask(elem.id)}}>DEL</button>
       </li>
      )
    )}      
  </ul>)
}

export default TasksList;
