import React from 'react';
import {bindActionCreators} from 'redux';
import {useDispatch} from 'react-redux';
import {Formik, Form, Field} from 'formik';
import * as tasksCreator from '../../actions/tasksCreator';
import { createSchema } from '../../schemas/validationFormik';

const TasksFormCreate = () => {
  const dispatch = useDispatch();
  const {createTaskRequest} = bindActionCreators(tasksCreator,dispatch);
  const onSubmit = (values, formikBag)=>{
    createTaskRequest({values});
    formikBag.resetForm();
  };
 
  
  return (
    <Formik initialValues={{
        body:'',
        author:''}} 
      onSubmit={onSubmit} validationSchema={createSchema}>
      {({errors, touched})=>(
        <Form>
          <Field name="body" placeholder="Enter task text"/>
          {errors.body && touched.body? (<div>{errors.body}</div>):null}
          <Field name="author" placeholder="Author name"/>
          {errors.author && touched.author? (<div>{errors.author}</div>):null}
          <button type="submit">Send task</button>
        </Form>
        )}
        
      
    </Formik>
    
  );
}

export default TasksFormCreate;
