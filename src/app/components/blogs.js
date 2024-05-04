
import React, { useState, useEffect } from 'react';
import { collection, getDocs, deleteDoc } from '@firebase/firestore';
import { db } from '../../../API/firebase.config';


export const Blogs = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
      const fetchBlogs = async () => {
        const projectsRef = collection(db, 'blogs');
        const snapshot = await getDocs(projectsRef);
        const blogList = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
        setBlogs(blogList);
      };
      fetchBlogs();
    }, []);
  
    return(
        <div>
          <div className="relative flex items-center justify-center w-full dark:text-gray-50">

            <div className="flex items-center scroll-none justify-start w-full h-full gap-6 py-4 mx-auto overflow-auto lg:gap-8">
            {blogs.map((blog)=>(
              <div key={blog.id} className="relative ml-8 flex flex-shrink-0 w-full sm:w-auto">
                
                <div className="max-w-xs  rounded-md shadow-md dark:dark:bg-gray-900 dark:dark:text-gray-100">
                  <img src={blog.imageUrl} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:dark:bg-gray-500" />
                  <div className="flex flex-col justify-between p-6 space-y-8">
                    <div className="space-y-2">
                      <h2 className="text-2xl font-semibold tracki">{blog.title}</h2>
                      <p className="dark:dark:text-gray-100">{blog.description}</p>
                    </div>
                  </div>
                </div>
                
              </div>
              ))}
              
           
           
            </div>

          </div>
        </div>
    )
}