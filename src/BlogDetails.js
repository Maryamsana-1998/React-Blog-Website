import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
  const { id } = useParams();
  const { data: blog, isPending, error } = useFetch(' http://localhost:8000/blogs/' + id)
  const history = useHistory();
 // const data = new FormData();

  const handleblogDelete = () => {
    fetch('http://localhost:8000/blogs/' + id, {
      method: 'DELETE'
    })
      .then(() => {
        history.push('/');
      })
  }
 
  //redirecting to edit page
  const handleblogEdit = (blog) => {
    history.push('/create/update/'+blog.id);
  }

  return (
    <div className="blog-details">
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
          <div>{blog.body}</div>
        </article>
      )}
      <button onClick={handleblogDelete}>Delete Blog</button>
      <button onClick = {() => { handleblogEdit(blog) }}>Edit Blog</button>
    </div>
  );
}

export default BlogDetails;