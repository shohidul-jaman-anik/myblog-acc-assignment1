import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import addBlogData from "../../redux/thunk/blog/addBlogData";


const AddProduct = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch()


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
    dispatch(addBlogData(product))
    console.log(product);
  };



  return (
    <div className='flex justify-center items-center h-full '>
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
          <input
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
          <input
            type='text'
            name='text'
            id='text'
            {...register("text")}
          />
        </div>

        <div className="">
          <p className="mb-3">Author</p>
          <div className='mb-2'>
            <input type='text' id='name' {...register("name")} placeholder="Name" />
          </div>
          <div className=''>
            <input type='text' id='email' {...register("email")} placeholder="E-mail" />
          </div>
        </div>

        <div className='flex justify-between items-center w-full'>
          <button
            className=' px-4 py-3 bg-indigo-500 rounded-md font-semibold text-white text-lg disabled:bg-gray-500'
            type='submit'
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
