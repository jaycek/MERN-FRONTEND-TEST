import React,{useState,useEffect} from 'react'
import axios from 'axios'
import './Blogs.css'

const Blogs = () => {
    const [posts, setPosts] = useState([]);

    useEffect(()=>{
        const fetchData = async (req,res)=>{
            try {
               const posts= await axios.get('http://localhost:3000/posts')
               setPosts(posts.data)
               console.log(posts.data)
            } catch (error) {
                console.log(error)
            }
        }
        fetchData()
    },[])

  return (
    <>
        <div className='gridContainer'>
        {Array.isArray(posts) && posts.map((post, index) => (
          <div> 
          <img className='blogImage'
            key={index}
            src={`https://mern-test-mtj3.onrender.com/${post.image}`} // Construct the image URL
            alt={`Image ${index + 1}`}
           
          />
           <p>{post.title}</p> 
           <p>{post.subtitle}</p> 
           <p>{post.desc}</p> 
          </div>
         
        ))}
      </div>


    </>
  )
}

export default Blogs
