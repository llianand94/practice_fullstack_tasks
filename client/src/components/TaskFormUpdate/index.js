import React from 'react';
import {bindActionCreators} from 'redux';
import {useDispatch} from 'react-redux';
import {Formik, Form, Field} from 'formik';
import * as tasksCreator from '../../actions/tasksCreator';
import { updateSchema } from '../../schemas/validationFormik';

const TaskFormUpdate = () => {
  const dispatch = useDispatch();
  const {updateTaskRequest} = bindActionCreators(tasksCreator,dispatch);

  const onSubmit = (values, actions)=>{ 
    updateTaskRequest({values});
    actions.resetForm();
  };
   
  return (
    <Formik initialValues={{
        taskId:'',
        body:'',
        author:'',
        isDone:false
      }} 
      onSubmit={onSubmit} validationSchema={updateSchema}>
      {({errors, touched})=>(
      <Form>
        <Field name="body" placeholder="Enter task text"/>
        {errors.body && touched.body? (<div>{errors.body}</div>):null}
        <Field name="author" placeholder="Author name"/>
        {errors.author && touched.author? (<div>{errors.author}</div>):null}
        <Field type="checkbox" name="isDone" />
        <Field name="taskId" placeholder="Task Number"/>
        {errors.taskId && touched.taskId? (<div>{errors.taskId}</div>):null}
        <button type="submit">Update task</button>
      </Form>
      )}
    </Formik>
  );
};

export default TaskFormUpdate;
