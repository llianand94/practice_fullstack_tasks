import React, {useEffect} from 'react';
import {bindActionCreators} from 'redux';
import { useDispatch, useSelector } from 'react-redux';
import * as tasksCreator from '../../actions/tasksCreator';

const TasksList = (props) => {
  
  const {getTaskRequest} = bindActionCreators(tasksCreator,useDispatch());
  const {tasks,isFetching,error} = useSelector(({tasks})=>tasks);
  const getTasks = ({limit, offset}={})=>{getTaskRequest({limit, offset});
  }
  useEffect(() => {getTasks()}, []);
  return (
  <ul>
    {isFetching && 'Now fetching process'};
    {error && error.message};
    <button onClick={getTasks}>Get ALL</button>
    {tasks.map((elem, index)=>(
      <li key={elem.id}>elem.body</li>
      )
    )};      
  </ul>)
}

export default TasksList;
