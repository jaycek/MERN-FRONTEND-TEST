import React, { useState } from 'react'
import axios from 'axios';
import './NewBlog.css';
import { Navigate, useNavigate } from 'react-router-dom';

const NewBlog = () => {

    const [image, setImage] = useState(null);
    const [title, setTitle] = useState('');
    const [subtitle, setSubtitle] = useState('');
    const [desc, setDesc] = useState('');
    const navigate=useNavigate();
  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
      e.preventDefault();
      const formData = new FormData();
    formData.append('image', image);
    formData.append('title', title);
    formData.append('subtitle', subtitle);
    formData.append('desc', desc);
    
      try {

        const token = sessionStorage.getItem('userToken')
        console.log(token)
      if(token){
        // const server_url= import.meta.env.VITE_SERVER_API 
        // console.log(server_url)
        const response = await axios.post(`https://mern-test-mtj3.onrender.com/posts`, formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': `Bearer ${token}`
          }
      });
        console.log('Server response:', response.data);
      }
      else{
          navigate('/login')
      }
          
        // Optionally, you can redirect the user or perform other actions after successful signup
      } catch (error) {
        console.error('Error submitting form:', error);
        // Optionally, you can display an error message to the user
      }
    };
  return (
    <div className='blog-container'>
      <form onSubmit={handleSubmit} className='form'>
      <div className="subtitle">Create a new Post</div>
        <div>
          <label htmlFor="image">Blog Image:</label>
          <input
            type="file"
            id="image"
            name="image"
            onChange={handleImageChange}
            required
          />
        </div>
        <div>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="subtitle">Subtitle:</label>
          <input
            type="text"
            id="subtitle"
            name="subtitle"
            value={subtitle}
            onChange={(e) => setSubtitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="desc">Description:</label>
          <input
            type="text"
            id="desc"
            name="desc"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            required
          />
        </div>
        <button type="submit">Create a new Post</button>
      </form>
    </div>
  );
}

export default NewBlog