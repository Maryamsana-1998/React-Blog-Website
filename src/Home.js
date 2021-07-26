//import { useEffect, useState } from "react";
import BlogList from "./BlogList";
//import useFetch from "./useFetch";
import useFetchdata from "./useFetchdata";

const Home = () => {
  const {data: blogs,isPending,error } = useFetchdata('http://localhost:8000/blogs')
  
  return (
    <div className="home">
      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      { blogs && <BlogList blogs={blogs} /> }
    </div>
  );
}
 
export default Home;