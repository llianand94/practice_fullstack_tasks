import React from 'react';
import {bindActionCreators} from 'redux';
import {useDispatch} from 'react-redux';
import {Formik, Form, Field} from 'formik';
import * as tasksCreator from '../../actions/tasksCreator';


const Index = () => {
  const dispatch = useDispatch();
  const {createTaskRequest} = bindActionCreators(tasksCreator,dispatch);
  const onSubmit = (values, formikBag)=>{
    createTaskRequest({values});
    formikBag.resetFrom();
  };
 
  
  return (
    <Formik initialValues={{
        body:'',
        author:''}} 
      onSubmit={onSubmit}>
      <Form>
        <Field name="body" placeholder="Enter task text"/>
        <Field name="author" placeholder="Author name"/>
        {/* <Field type="checkbox" name="isDone" value=''> Is Task Done?</Field> */}
        <button type="submit">Send task</button>
        
      </Form>
    </Formik>
    
  );
}

export default Index;
