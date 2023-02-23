import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../../components/ProductCard";
import { sortBlogAction } from "../../redux/actions/blogAction";
import { toggleTag } from "../../redux/actions/filterAction";
// import loadBlogData from "../../redux/thunk/blog/loadBlogData";

const Home = () => {
  const [products, setProduct] = useState([])
  const dispatch = useDispatch()
  const tags = useSelector(state => state.tags);
  // const products = useSelector(state => state.blog.blogs)

  useEffect(() => {
    fetch("https://my-blog-acc-assignment1-server.vercel.app/blogs")
      .then(res => res.json())
      .then(data => {
        setProduct(data.data)
      })
  }, []);

  // useEffect(() => {
  //   dispatch((loadBlogData(products)))
  // }, []);
  console.log("products", products)
  console.log("tags", tags)


  const activeClass = "text-white  bg-indigo-500 border-white";


  let allBlog;
  if (products.length) {
    allBlog = products.map((product) => (
      <ProductCard key={product.model} product={product} />
    ))
  }

  if (products.length && tags.length) {
    allBlog = products
      .filter(blog => tags.includes(blog.tags))
      .map((product) => (
        <ProductCard key={product.model} product={product} />
      ))
  }

  return (
    <div className='max-w-7xl gap-14 mx-auto my-10'>
      <div className='mb-10 flex justify-between gap-5'>

        <div>
          <button onClick={() => dispatch(sortBlogAction("asc"))} className="border px-3 py-2 rounded-full font-semibold focus:bg-indigo-500 focus:text-white">first upload</button>
          <button onClick={() => dispatch(sortBlogAction("dese"))} className="border px-3 py-2 rounded-full font-semibold focus:bg-indigo-500 focus:text-white">last upload</button>
        </div>

        <div>
          <button
            onClick={() => dispatch(toggleTag("javaScript"))}
            className={`border px-3 py-2 rounded-full font-semibold ${tags.includes("javaScript") ? activeClass : null}`}
          >
            JavaScript
          </button>
          <button
            onClick={() => dispatch(toggleTag("react"))}
            className={`border px-3 py-2 rounded-full font-semibold ${tags.includes("react") ? activeClass : null}`}>
            React
          </button>
          <button
            onClick={() => dispatch(toggleTag("node.js"))}
            className={`border px-3 py-2 rounded-full font-semibold ${tags.includes("node.js") ? activeClass : null}`}>
            Node.js
          </button>
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14'>
        {allBlog}
      </div>
    </div>
  );
};

export default Home;
