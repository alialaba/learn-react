import Input from "../../components/Input/Input";
import TextArea from "../../components/Input/TextArea";
import Button from "../../components/Button/Button";
import {createBlogSchema} from "../../validations/createBlog.validation";
import {useFormik} from "formik"
import React, { useState } from "react";



export default function CreateBlog(){

const [blogs, setBlogs] = useState(()=> JSON.parse(localStorage.getItem("blogs")) || [])
const [editId, setEditId] = useState(null);
// console.log(blogs)

    //Formik logic and validations
    const formik = useFormik({
        initialValues: {
          title: '',
          content: '',
         
        },
        validationSchema: createBlogSchema,
        onSubmit: values => {
        //   alert(JSON.stringify(values, null, 2));
        console.log(values)

        if(editId !== null){
            //Editing existing blog
            const editBlog = blogs.map((blog)=>{
                if(blog.id === editId){
                    return [...blog, ...values]
                }
                return blog
            })
            setBlogs(editBlog);
            setEditId(null)
        }else{
               //Create new blog
               const id = Math.floor(Math.random() * 1000 ) ;
             const newBlog = {id, ...values}

            setBlogs(prevBlogs=> [...prevBlogs, newBlog]);
            //Store blog localstorage
            localStorage.setItem("blogs", JSON.stringify([...blogs, newBlog]))
        }
        
              
        },
      });

    return(
        <div>
            <h2>Create a Blog</h2>
        <form onSubmit={formik.handleSubmit}>
          <Input 
          type="text"
          label="Title"
          placeholder="Enter Title here"
          id="title"
          name="title"
          value={formik.values.title}
        //   defaultValue={formik.values.title}
          onChange={formik.handleChange}
          error={formik.errors.title}
          
          />
          <TextArea
          label="Content"
          placeholder="Write content"
          id="content"
          name="content"
          value={formik.values.content}
        //   defaultValue={formik.values.content}
          onChange={formik.handleChange}
          error={formik.errors.content}
          
          />
          <Button  type="submit" text="Submit"/>
        </form>
        {/* <h1>List Blogs</h1>
            {blogs.map((blog)=>{
               <div key={blog.id} style={{backgroundColor: "red", border: "1px solid red"}}>
                 <h3>{blog.title}</h3>
                 <p>{blog.content}</p>
                 <p>Hello</p>
               </div>
               
            })} */}
       
        </div>
    );
}