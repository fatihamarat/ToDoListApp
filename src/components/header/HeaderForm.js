import React from 'react';
import { Formik, Field, Form } from 'formik';
import validationSchema from "../header/HeaderFormValidation";
import { useTodo } from '../context/TodoContext';


function HeaderForm() {
  const {addTodo} = useTodo();
  return (
    <Formik
      initialValues={{
        text: '',
      }}
      onSubmit={(values,bag) => {
        console.log(values);
        // await new Promise((r) => setTimeout(r, 500));
        // alert(JSON.stringify(values, null, 2));
        
        addTodo(values.text);
        
        bag.resetForm();
      }}

      validationSchema = {validationSchema}
     >
        
        <Form>
            <Field 
                className="new-todo" 
                id="text"
                name="text"
                placeholder="What needs to be done?" 
                autoFocus 
            />
        </Form>
    </Formik>
  );
}

export default HeaderForm;