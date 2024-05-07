/*Basado de: https://react-hook-form.com/docs/useform */
import { useState } from 'react';

const useForm = (initialValues) => {
    const [values, setValues] = useState(initialValues);
    const handleChange = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value,
        });
    };
    const resetForm = () => {
        setValues(initialValues);
    };
    const fillForm = (newValues) => {
        setValues(newValues);
    }
    return {values, handleChange, resetForm, fillForm};
};
export default useForm;