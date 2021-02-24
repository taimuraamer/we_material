import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios'
function App() {
  const [state, setState] = useState([]);
  useEffect(() => {
    // const article = { title: 'React POST Request Example' };
    axios.get('http://localhost:5000/posts')
      .then(response => {
        setState(prev => {
          return response.data
        })
        // console.log(response.data)
      });

  }, [state])
  const savePost = (e) => {
    e.preventDefault();
    const title = e.target.elements.title.value;
    const desc = e.target.elements.desc.value;
    try {
      axios.post('http://localhost:5000/posts', {title: title, description: desc})
    }
    catch (err) {
      console.log(err)
    }
    finally {
      e.target.elements.title.value = ''
      e.target.elements.desc.value = ''
    }

  }
  const deletePost = (id) => {
   axios.delete('http://localhost:5000/posts/'+id)
  }
  return (
    <div className="App">
    <ol>
     {state.map((post) => {
        return (
          <div>
          <li>{post.title} - {post.description} <button onClick={(e) => {
            deletePost(post._id)
          }}>Remove</button></li>
          </div>
          
          )
     })}
    </ol>
    
    <form onSubmit={savePost}>
     <input type="text" name="title" placeholder="Title"/>
     <input type="text" name="desc" placeholder="Description"/>
     <button>Add Post</button>
    </form>
    </div>
  );
}

export default App;
