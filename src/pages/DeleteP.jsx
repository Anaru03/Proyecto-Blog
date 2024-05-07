import React, { useState } from 'react';
import useForm from '@hooks/useForm';
import useApi from '@hooks/useApi';
import useToken from '@hooks/useToken';
import Input from '@components/Input';
import Button from '@components/Button';
import '@styles/DeletePost.css';

const DeleteP = () => {
    const { token } = useToken();
    const [postId, setPostId] = useState('');
    const { values, handleChange, resetForm, fillForm } = useForm({ postId: '' });
    const { execute } = useApi(`http://localhost:22428/posts/${values.postId}`, 'delete', null, {
        'Content-Type': 'application',
        'Authorization': `Bearer ${token}`
    });

    const handleDeletePost = async (event) => {
        event.preventDefault();
        console.log("Se estará eliminando el siguiente post:",values.postId);
        execute(values);
        resetForm();
    }

    return (
        <div className='deletePost-page'>
            <div className='container'>
                <h2>Delete Post</h2>
                <form onSubmit={handleDeletePost}>
                    <Input
                        type="text"
                        name="postId"
                        value={values.postId}
                        onChange={handleChange}
                        placeholder="Post ID"
                        label="Post ID"
                    />
                    <Button type="submit" text="Borrar Post"></Button>
                </form>
            </div>
        </div>
    );
};

export default DeleteP;