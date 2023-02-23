import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const BlogDetails = () => {
    const { blogId } = useParams()
    const [blog, setBlog] = useState([])


    useEffect(() => {
        fetch(`https://my-blog-acc-assignment1-server.vercel.app/blogs/${blogId}`)
            .then(res => res.json())
            .then(data => {
                setBlog(data)
                console.log(data, "data")
            })
    }, [blogId])

    return (
        <div>
            <div className='flex justify-center'>
                <img src={blog.image} alt="" className='h-2/5 w-3/5 mt-5' />
            </div>
            <div className='px-10'>
                <h1 className='text-4xl text-center font-serif'>{blog.title}</h1>
                <div className=' flex-1'>
                    <ul className='space-y-2'>
                        {blog.content?.map(b => {
                            return (
                                <div >
                                    <li className='text-2xl mt-8 font-bold'>
                                        {b?.type}
                                    </li>
                                    <li className='mt-3'>
                                        {b?.text}
                                    </li>
                                </div>
                            );
                        })}
                    </ul>
                </div>
                <div class="inline-flex items-center justify-center w-full mt-2">
                    <hr class="w-64 h-1 my-8 bg-gray-200 border-0 rounded dark:bg-gray-700" />
                    <div class="absolute px-4 -translate-x-1/2 bg-white left-1/2 dark:bg-gray-900">
                        <svg aria-hidden="true" class="w-5 h-5 text-gray-700 dark:text-gray-300" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor" /></svg>
                    </div>
                </div>
                <div className='mt-3 text-center'>
                    <p className=' mb-1 text-sm'>Author name: {blog?.author?.name}</p>
                    <p className=' mb-1 text-sm'>E-mail: {blog.author?.email}</p>
                </div>
            </div>
        </div>
    );
};

export default BlogDetails;