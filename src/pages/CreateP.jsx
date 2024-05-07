import Input from '@components/Input';
import Button from '@components/Button';
import useForm from '@hooks/useForm';
import useApi from '@hooks/useApi';
import useToken from '@hooks/useToken'; 
import '@styles/CreateP.css';

const CreateP = () => {
    const { values, handleChange, resetForm } = useForm({ title: '', content: '', images_content: '', author_name: '' });
    const { token } = useToken(); 
    const { fetchData } = useApi('http://localhost:22428/posts', 'post', null, {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}` 
    });

    const submitPost = async (event) => {
        event.preventDefault();
        console.log("valoreees",values);
        try {
            const response = await fetchData(values);
            console.log(response);
        } catch (error) {
            console.error(error);
        }
        resetForm();
        alert('¡Potterhead has creado un nuevo post!');
    };



    return (
        <div className='container'>
            <h1>Creación de post</h1>
            <form onSubmit={submitPost}>
                <div className="form-group">
                    <label className="label" htmlFor="title">Title:</label>
                    <Input
                    type="text"
                    name="title"
                    value={values.title}
                    onChange={handleChange}
                    placeholder="Title"
                />
                </div>

                <div className="form-group">
                    <label className="label" htmlFor="content">Content:</label>
                    <Input
                        className="input"
                        type="text"
                        name="content"
                        value={values.content}
                        onChange={handleChange}
                        placeholder="Content"
                    />
                </div>

                <div className="form-group">
                    <label className="label" htmlFor="images_content">Images:</label>
                    <Input
                        className="input"
                        type="text"
                        name="images_content"
                        value={values.images_content}
                        onChange={handleChange}
                        placeholder="Image URL"
                    />
                </div>

                <div className="form-group">
                    <label className="label" htmlFor="author_name">Author:</label>
                    <Input
                        className="input"
                        type="text"
                        name="author_name"
                        value={values.author_name}
                        onChange={handleChange}
                        placeholder="Author"
                    />
                </div>

                <Button className="button" type="submit" text="Crear Post"></Button>
            </form>
        </div>
    );
};

export default CreateP;
