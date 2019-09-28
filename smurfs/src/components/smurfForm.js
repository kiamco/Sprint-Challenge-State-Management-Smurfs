import React, {useEffect} from 'react';
import { withFormik } from 'formik';
import * as Yup from 'yup';

const SmurfForm = (props) => {
    const {
        values,
        status,
        handleChange,
        handleBlur,
        handleSubmit,
        addSmurf
    } = props;

    useEffect(() => {
        if(status){
            addSmurf(status);
        }

    },[status])
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
                name="name"
                placeholder="Smurf Name"
            />
            <input
                type="text"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.age}
                name="age"
                placeholder="Smurf Age"
            />
            <input
                type="text"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.height}
                name="height"
                placeholder="Smurf height"
            />
            <button type="submit">Submit</button>
        </form>
    );
;}

const MyEnhancedForm = withFormik({
    mapPropsToValues({name,age, height}){
        return {
            name: name || '',
            age: age || '',
            height: height || ''
        }
    },
    handleSubmit(values, { setStatus, resetForm }) {
        // console.log("handleSubmit: then: res: ", values);
        setStatus(values);
        resetForm();
    }
})(SmurfForm);


export default MyEnhancedForm;