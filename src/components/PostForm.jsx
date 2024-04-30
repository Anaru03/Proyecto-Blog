/*Basado de: https://react-hook-form.com/docs/useform */
import React from 'react';
import useForm from '../hooks/useForm';

function PostForm({ onSubmit }) {
    const initialValues = {
        title: '',
        content: '',
    };

    const [values, handleChange, resetForm] = useForm(initialValues);

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(values);
        resetForm();
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                name="title"
                value={values.title}
                onChange={handleChange}
                placeholder="Title"
                required
            />
            <textarea
                name="content"
                value={values.content}
                onChange={handleChange}
                placeholder="Content"
                required
            />
            <button type="submit">Entregar</button>
        </form>
    );
}

export default PostForm;