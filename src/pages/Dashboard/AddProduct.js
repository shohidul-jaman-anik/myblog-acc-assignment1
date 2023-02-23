import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { updateBlogAction } from "../../redux/actions/blogAction";
import addBlogData from "../../redux/thunk/blog/addBlogData";
import updateBlogData from "../../redux/thunk/blog/updateBlogData";


const AddProduct = ({ id }) => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch()
  const { pathname } = useLocation()

  const submit = (data) => {
    const product = {
      title: data.title,
      image: data.image,
      status: data.status === "true" ? true : false,
      tags: data.tags,
      categories: data.categories,
      date: data.date,
      author: {
        name: data.name,
        email: data.email
      },
      content: [
        {
          type: data.type,
          text: data.text
        },
        {
          type: data.type,
          text: data.text
        }
      ]
    };
    { !pathname.includes("updateBlog") && dispatch(addBlogData(product)) }
    { pathname.includes("updateBlog") && dispatch(updateBlogData(product, id)) }

  };


  return (
    <div className='flex justify-center items-center h-full '>
      <div>
        {
          pathname.includes("updateBlog") && (<p className="text-center text-2xl m-2 text-blue-600">
            Update Blog
          </p>)
        }
        {
          !pathname.includes("updateBlog") && (<p className="text-center text-2xl m-2 text-blue-600">
            Add Blog
          </p>)
        }
        <form
          className='shadow-lg p-10 rounded-md flex flex-wrap gap-3 max-w-3xl justify-between bg-white'
          onSubmit={handleSubmit(submit)}
        >

          <div className='flex flex-col w-full max-w-xs'>
            <label className='mb-2' htmlFor='title'>
              Title
            </label>
            <input type='text' id='title' {...register("title")} />
          </div>
          <div className='flex flex-col w-full max-w-xs'>
            <label className='mb-2' htmlFor='image'>
              Image
            </label>
            <input type='text' name='image' id='image' {...register("image")} />
          </div>

          <div className='flex flex-col w-full max-w-xs'>
            <label className='mb-3' htmlFor='tags'>
              Tags
            </label>
            <select name='tags' id='tags' {...register("tags")}>
              <option value='javaScript'>javaScript</option>
              <option value='react'>React</option>
              <option value='node.js'>Node.js</option>
            </select>
          </div>

          <div className='flex flex-col w-full max-w-xs'>
            <label className='mb-3' htmlFor='categories'>
              Categories
            </label>
            <select name='categories' id='categories' {...register("categories")}>
              <option value='pogramming'>Pogramming</option>
              <option value='web-development'>Web Development</option>
              <option value='others'>Others</option>
            </select>
          </div>

          <div className='flex flex-col w-full max-w-xs'>
            <label className='mb-2' htmlFor='date'>
              Date
            </label>
            <input type='date' name='date' id='date'{...register("date")} />
          </div>


          <div className='flex flex-col w-full max-w-xs'></div>
          <div className='flex flex-col w-full max-w-xs'>
            <label className='mb-2' htmlFor='type'>
              Sub-Heading
            </label>
            <input
              type='text'
              name='type'
              id='type'
              {...register("type")}
            />
          </div>
          <div className='flex flex-col w-full max-w-xs'>
            <label className='mb-2' htmlFor='text'>
              Text
            </label>
            <textarea
              type='text'
              name='text'
              id='text'
              {...register("text")}
            />
          </div>
          <div className='flex flex-col w-full max-w-xs'>
            <label className='mb-2' htmlFor='type'>
              Sub-Heading
            </label>
            <input
              type='text'
              name='type'
              id='type'
              {...register("type")}
            />
          </div>
          <div className='flex flex-col w-full max-w-xs'>
            <label className='mb-2' htmlFor='text'>
              Text
            </label>
            <textarea
              type='text'
              name='text'
              id='text'
              {...register("text")}
            />
          </div>

          <div className="flex justify-between ">
            <input type='text' className="mb-2" id='name' {...register("name")} placeholder="Name" />

            <input type='text' className="ml-32" id='email' {...register("email")} placeholder="E-mail" />
          </div>

          <div className='flex justify-between items-center w-full'>
            {!pathname.includes("updateBlog") && (
              <button
                className=' px-4 py-3 bg-indigo-500 rounded-md font-semibold text-white text-lg disabled:bg-gray-500'
                type='submit' >
                Submit
              </button>)
            }
            {pathname.includes("updateBlog") && (
              <button
                className=' px-4 py-3 bg-indigo-500 rounded-md font-semibold text-white text-lg disabled:bg-gray-500'
                type='submit'
                onClick={() => {
                  dispatch(updateBlogAction())
                }}
              >
                Update
              </button>)
            }
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
