/*Basado de: https://react-hook-form.com/docs/useform */
import { useState } from "react";

export default function useForm(initialState) {
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
    return [values, handleChange, resetForm];
}