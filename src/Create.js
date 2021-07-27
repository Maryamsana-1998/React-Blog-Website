import { useState, useEffect } from "react";
import { useHistory } from "react-router";
import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const Create = (props) => {

  const { update } = props;
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('mario');
  const [isPendingd, setisPendingd] = useState(false);
  const history = useHistory();
  const { id } = useParams();

  //const [blog,setBlog] = useState(null);
  const { data, isPending, error } = useFetch('http://localhost:8000/blogs/' + id)
  
// for updating blog credentials when switching from update to new blog page
  useEffect(() => {
    if (error !== null) {
      setTitle("");
      setAuthor("");
      setBody("");
      
    }
  },[error])

  useEffect(() => {   //use effect hook to prevent too many renders , only executes everytime data variable changes
    if (update && data !== null) {
      setTitle(data.title);
      setAuthor(data.author);
      setBody(data.body);
      console.log(data)
    }
  }, [data])

  // POST ftn for adding a new block 
  const handlePost = (e) => {
    e.preventDefault();
    setisPendingd(true);
    const blog = { title, body, author };
    fetch('http://localhost:8000/blogs', {
      method: 'POST',
      headers: { 'Content-Type': "application/json" },
      body: JSON.stringify(blog)
    }).then(() => {
      console.log('new blog added');
      setisPendingd(false);
      history.push('/');
    })

  }
  //ftn to update a blog
  const handleUpdate = (e) => {
    e.preventDefault();
    setisPendingd(true);
    const data = { title, body, author };
    fetch('http://localhost:8000/blogs/' + id, {
      method: 'PATCH',  // or 'PUT'
      headers: { 'Content-Type': "application/json" },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(result => {
        console.log('Success:', result);
        console.log('Blog updated')
        history.push('/')

      })
      .catch(error => {
        console.error('Error:', error);
      });
  }

  // RENDER

  // using post and patch functions triggered by onclick event of add and update button 
  //instead of triggered by onsubmit event.
  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      <form >
        <label>Blog title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Blog author:</label>
        <select
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        >
          <option value="mario">mario</option>
          <option value="yoshi">yoshi</option>
          <option value="Maryam">Maryam</option>
        </select>
        {!isPendingd && !update && <button onClick={handlePost}>Add Blog </button>}
        {isPendingd && !update && <button disabled> Adding blog ... </button>}
        {update && <button onClick={handleUpdate}>Update Blog</button>}
       
      </form>
    </div>
  );
}

export default Create;