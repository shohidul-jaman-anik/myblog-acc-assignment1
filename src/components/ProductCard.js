import React from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { readHistory } from "../redux/actions/blogAction";

const ProductCard = ({ product }) => {

  const dispatch = useDispatch();
  const { pathname } = useLocation();

  const navigate = useNavigate('')

  const navigateBlog = (id) => {
    navigate(`/blog/${id}`)
  }

  return (
    <div className='shadow-lg relative rounded-3xl border p-3 flex flex-col text-indigo-900'>
      {pathname.includes("cart") && (
        <div className='rounded-full grid place-items-center absolute top-2 right-2 bg-indigo-500 text-white h-8 w-8 font-bold '>
          <p> {product.title} </p>
        </div>
      )}
      <div className=' w-52 mx-auto'>
        <img src={product.image} alt={product.title} />
      </div>
      <p className='font-bold text-center text-2xl mt-3'> {product.title} </p>
      <span>{product.content[0].text.slice(0,100)}</span>
      {/* <p className='text-center mb-3'>Categories: {product.categories}</p>
      <small className=' mb-1'>Author name: {product.author.name}</small>
      <small className=' mb-1'>email: {product.author.email}</small> */}
      <div>
        <p onClick={() => dispatch(readHistory(product))}
        >Read more...</p>
        {/* <p onClick={() => navigateBlog(product._id)}
          onClick={() => dispatch(readHistory(product))}
        >Read more...</p> */}
      </div>
    </div >
  );
};

export default ProductCard;
