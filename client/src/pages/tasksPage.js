import React from 'react';
import TasksList from '../components/TasksList';
import TasksFormCreate from '../components/TasksFormCreate';
import TaskFormUpdate from '../components/TaskFormUpdate';

const TasksPage = (props) => {
  
  return (
    <section>
      <h2>Tasks page</h2>
      <TasksFormCreate />
      <TaskFormUpdate />
      <TasksList />
    </section>
  );
}

export default TasksPage;

