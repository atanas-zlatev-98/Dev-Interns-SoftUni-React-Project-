import React, { useContext } from 'react'
import {Link, useNavigate} from 'react-router-dom';
import {useForm} from '../hooks/useForm';
import {createJob} from '../api/jobs-api';
import { AuthContext } from '../context/authContext';
import './Create.scss';

const Create = () => {

    const navigate = useNavigate()

    const {userId,logoUrl} = useContext(AuthContext);

    const initialValues = {
        userId: userId,
        logoUrl: logoUrl,
        title: "",
        position: "",
        location: "",
        remote: "",
        description: "",
        banner:'',
      }
    
    const createHandler = async (values) => {

        try{
          const {_id:jobId} = await createJob(values);
          navigate(`/job/details/${jobId}`);
        }catch(err){
          console.log(err.message);
        }
    
      }


    const { values, changeHandler, submitHandler } = useForm(initialValues, createHandler);
    return (
        <div className='create-conteiner'>
            <div className='create-form'>

                <div className='logo-create'>
                    <Link to='/' className='logo-text'>DEV<span>.</span>INTERNS</Link>
                </div>

                <p id='create-text'>Create a new position</p>
                <form onSubmit={submitHandler}>
                    <div id='form-group'>
                        <label htmlFor='title'>Title</label>
                        <input type="text" id="title" name="title" placeholder="Title..." value={values.title} onChange={changeHandler} />
                    </div>

                    <div id='form-group'>
                        <label htmlFor='position'>Position</label>
                        <input type="text" id="position" name="position" placeholder="Position..." value={values.position} onChange={changeHandler} />
                    </div>

                    <div id='form-group'>
                        <label htmlFor='location'>Location</label>
                        <input type="text" id="location" name="location" placeholder='Location...' value={values.location} onChange={changeHandler} />
                    </div>

                    <div id='form-group'>
                        <label htmlFor='remote'>Remote</label>
                        <input type="text" id="remote" name="remote" placeholder='Remote...' value={values.remote} onChange={changeHandler} />
                    </div>

                    <div id='form-group'>
                        <label htmlFor='description'>Description</label>
                        <textarea type="text" id="description" name="description" rows={5} placeholder='Description...' value={values.description} onChange={changeHandler}></textarea>
                    </div>

                    <div id='form-group'>
                        <label htmlFor='logo'>Banner</label>
                        <input type="text" id="Banner" name="banner" rows={5} placeholder='Banner URL...' value={values.banner} onChange={changeHandler} />
                    </div>

                    <div id='form-group'>
                        <input id='btn-create' type="submit" value='Create' />
                    </div>

                </form>
            </div>
        </div>
    )
}

export default Create