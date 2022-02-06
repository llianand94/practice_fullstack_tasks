import React from 'react';
import TasksList from '../components/TasksList';
import TasksForm from '../components/TasksForm';

const TasksPage = (props) => {
  
  return (
    <section>
      <h2>Tasks page</h2>
      <TasksForm />
      <TasksList />
    </section>
  );
}

export default TasksPage;

