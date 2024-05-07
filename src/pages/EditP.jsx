import { useEffect, useState } from 'react';
import Input from '@components/Input';
import Button from '@components/Button';
import useForm from '@hooks/useForm';
import useApi from '@hooks/useApi';
import useToken from '@hooks/useToken';
import '@styles/EditPost.css';

const EditP = () => {
    const { token } = useToken(); 
    const [ postId, setPostId ] = useState('');
    const [postData, setPostData] = useState(null);
    const { values, handleChange, resetForm, fillForm } = useForm({ postId: '', title: '', content: '', images_content: '', author_name: '' });
    const { response: post, execute: getPost } = useApi(`http://localhost:22428/posts/${values.postId}`, 'get');
    const { execute: updatePost } = useApi(`http://localhost:22428/posts/${values.postId}`, 'put', null, {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
    });

    useEffect(() => {
        if (post) {
            console.log("Hemos encontrado el post ;)", post);
            setPostData(post);
        }
    }, [post]);

    useEffect(() => {
        if (postData) {
            const postUnique = postData["data"][0];
            fillForm({
                postId: postUnique["id"],
                title: postUnique["title"],
                content: postUnique["content"],
                bannerImageB64: postUnique["images_content"],
                category: postUnique["author_name"]
            });
            
        }
    }, [postData]);

    
    const getPostupdate = () => {
        if (postId) {
            getPost();
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        updatePost(values);
        resetForm();
    };

    return (
        <div className='editPost-page'>
            <div className='container'>
                <h2>Edit Post</h2>
            
                <div className='search-post'>
                    <Input
                        type="text"
                        name="postId"
                        value={postId}
                        onChange={(e) => setPostId(e.target.value)}
                        placeholder="Post ID"
                        label="Post ID"
                    />
                </div>
                <div>
                    <Button text="Buscar post" onClick={getPostupdate}></Button>
                </div>

                <form onSubmit={handleSubmit} className='editPost-form'>

                    <Input
                        type="text"
                        name="title"
                        onChange={handleChange}
                        editValue={values.title}
                        placeholder="Title"
                        label="Title"
                    />

                    <Input
                        type="content"
                        name="content"
                        onChange={handleChange}
                        editValue={values.content}
                        placeholder="Content"
                        label="Content"
                    />

                    <Input
                        type="text"
                        name="images_content"
                        onChange={handleChange}
                        editValue={values.images_content}
                        placeholder="Image URL"
                        label="Images"
                    />

                    <Input
                        type="text"
                        name="author_name"
                        onChange={handleChange}
                        editValue={values.category}
                        placeholder="Author"
                        label="Author"
                    />

                    <Button type="submit" text="Actualziar el post"></Button>
                </form>
            </div>
        </div>
    );
};

export default EditP;