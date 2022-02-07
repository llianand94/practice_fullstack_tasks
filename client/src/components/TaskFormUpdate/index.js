import React from 'react';
import {bindActionCreators} from 'redux';
import {useDispatch} from 'react-redux';
import {Formik, Form, Field} from 'formik';
import * as tasksCreator from '../../actions/tasksCreator';


const TaskFormUpdate = () => {
  const dispatch = useDispatch();
  const {updateTaskRequest} = bindActionCreators(tasksCreator,dispatch);
  const onSubmit = (values, formikBag)=>{ 
    updateTaskRequest({values});
    formikBag.resetFrom();
  };
 
  
  return (
    <Formik initialValues={{
        taskId:'',
        body:'',
        author:'',
        isDone:false
      }} 
      onSubmit={onSubmit}>
      <Form>
        <Field name="body" placeholder="Enter task text"/>
        <Field name="author" placeholder="Author name"/>
        <Field type="checkbox" name="isDone" />
        <Field name="taskId" placeholder="Task Number"/>
        <button type="submit">Update task</button>
      </Form>
    </Formik>
    
  );
}

export default TaskFormUpdate;
