import Input from '@components/Input';
import Button from '@components/Button';
import useForm from '@hooks/useForm';
import useApi from '@hooks/useApi';
import useToken from '@hooks/useToken'; 
import { useRef } from 'react';
import '@styles/CreateP.css';

const CreateP = () => {
    const fileInputRef = useRef();
    const { values, handleChange, resetForm } = useForm({ title: '', content: '', images_content: '', author_name: ''});
    const { token } = useToken(); 
    const { execute } = useApi('http://localhost:22428/posts', 'post', null, {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}` 
    });

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.onloadend = () => {
            handleChange({ target: { name: 'images_content', value: reader.result } });
        };

        if (file) {
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(values);
        await execute(values);
        resetForm();
        alert('¡Potterhead has creado un nuevo post!');
    };

    return (
        <div className='container'>
            <h1>Creación de post</h1>
            <form onSubmit={handleSubmit}>
                <Input
                    type="text"
                    name="title"
                    value={values.title}
                    onChange={handleChange}
                    placeholder="Title"
                    label="Title"
                />

                <Input
                    type="textarea"
                    name="content"
                    value={values.content}
                    onChange={handleChange}
                    placeholder="Content"
                    label="Content"
                />

                <Input
                    type="file"
                    name="images_content"
                    ref={fileInputRef}
                    onChange={handleFileChange}
                    placeholder="Images"
                    label="Images"
                />

                <Input
                    type="text"
                    name="author_name"
                    value={values.category}
                    onChange={handleChange}
                    placeholder="Author"
                    label="Author"
                />

                <Button type="submit" text="Crear Post"></Button>
            </form>
        </div>
    );
};

export default CreateP;